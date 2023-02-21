const express = require("express");
const router = express.Router();
const controller=require("./../Controller/teacherController");
const validateMW=require("./../Core/validations/validateMW");
const teacherArray=require("../Core/validations/teacherValidate");



router.route("/teachers")
    .get(controller.getAllTeacher)
    .post(teacherArray.postTeacherArray,validateMW,controller.addTeacher)
    .put(teacherArray.putTeacherArray,validateMW,controller.updateTeacher)
    .delete(teacherArray.deleteTeacherArray,validateMW,controller.deleteTeacher)


router.route("/child")
    .get(controller.getAllTeacher)
    .post(teacherArray.postTeacherArray,validateMW,controller.addTeacher)
    .put(teacherArray.putTeacherArray,validateMW,controller.updateTeacher)
    .delete(teacherArray.deleteTeacherArray,validateMW,controller.deleteTeacher)






module.exports=router;