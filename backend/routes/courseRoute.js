const express = require('express');
const CoursesController = require('../controllers/CoursesController');



const PurchaseController = require('../controllers/PurchaseController');
const router2 = express.Router();
const multer = require('multer');
const upload = multer();


// router2.post('/AddCourses', CoursesController.addCourses);
router2.post('/AddCourses', upload.array('images'),upload.array('modulevideo'), CoursesController.addCourses);


router2.get('/getcourses', CoursesController.getcourses);
router2.post('/Purchase', PurchaseController.PurchaseCourses);
router2.get('/studentcourses', CoursesController.getcoursesstudent);
router2.get('/getcoursesdetail', CoursesController.getcoursesdetail);


module.exports = router2;
