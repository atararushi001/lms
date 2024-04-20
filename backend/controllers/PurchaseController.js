const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Purchase = require("../models/Purchasemodel");
const path = require("path");
const fs = require("fs");


exports.PurchaseCourses = async (req, res) => {
    try {
        const { Course_id, User_id } = req.body;
        const Purchasecourse = await Purchase.create({
            Course_id,
            User_id
        });
        res.status(200).json({ message: "Course Purchased Successfully" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
   
}