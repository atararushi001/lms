const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Coursesmodel = require("../models/coursesModel");
const addmodule = require("../models/modulemodel");
const path = require("path");
const fs = require("fs");

const { Courses, Purchase,Module } = require('../models'); 

exports.getcoursesdetail = async (req, res) => {

  try {
    const courses = await Coursesmodel.findAll(
      { where: { id: req.query.courseId },
      include: [
        {
          model: Module
        },
      ], },
    );
    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getcoursesstudent = async (req, res) => {
  const userId = req.query.userId;
  console.log(userId);

  const courses = await Courses.findAll({
    include: [
      {
        model: Purchase,
        where: { User_id: userId },
      },
    ],
  });
  res.status(200).json({ courses });
};
exports.getcourses = async (req, res) => {
  try {
    const courses = await Coursesmodel.findAll();
    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.addCourses = async (req, res) => {

  const { images } = req.body;
  const base64Data = images[0].replace(/^data:image\/\w+;base64,/, "");
  const type = images[0].split(";")[0].split("/")[1];

  const fileName = `image_${Date.now()}.${type}`;
  const pathName = path.join(__dirname, "../uploads/", fileName);

  fs.writeFile(pathName, base64Data, { encoding: "base64" }, function (err) {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Error occurred while saving image." });
    } else {
    }
  });

  // try {
  const newCourse = await Coursesmodel.create({
    title: req.body.title,
    Description: req.body.CourseDescription,
    Images: fileName,
    Price: req.body.price,
  });
  await newCourse.save();

  const courseId = newCourse.id;



  const modules = req.body.modulename;
  const modulePromises = modules.map(async (module) => {
    const videoFileName = req.body.modulevideo[0].replace(/^data:video\/\w+;base64,/, "");
    const videoType = req.body.modulevideo[0].split(";")[0].split("/")[1];
    const videoname  =  `video_${Date.now()}.${videoType}`;
    const videoPath = path.join(__dirname, "../uploads/", `video_${Date.now()}.${videoType}`);
    
    fs.writeFile(videoPath, videoFileName, { encoding: "base64" }, function (err) {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Error occurred while saving video." });
      }
    });

    const newModule = await addmodule.create({
      module_name: req.body.modulename[0],
      module_video: videoname,
      Course_id: courseId,
    });

    return newModule;
  });

  await Promise.all(modulePromises);


  res.status(201).json({ message: "Course added successfully" });

};

