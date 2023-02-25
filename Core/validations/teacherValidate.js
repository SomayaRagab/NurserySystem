const { request } = require("express");
const {body,param,query}=require("express-validator");

exports.postTeacherArray =
    [
        
        body("_id").isMongoId().withMessage("teacher Id should be object ID"),
        body("fullname").isString().withMessage("teacherName should be string")
                    .isLength({max:10}).withMessage("teacher name <10"),
        body("email").isEmail().withMessage("invalid email"),
        body("password").isStrongPassword().withMessage("password must be strong"),
    ]


exports.putTeacherArray =
    [
        body("_id").isMongoId().withMessage("teacher Id should be object ID"),
        body("fullname").optional().isString().withMessage("teacherName should be string")
                    .isLength({max:10}).withMessage("teacher name <10"),
        body("email").optional().isEmail().withMessage("invalid email"),
        body("password").optional().isStrongPassword().withMessage("password must be strong"),
    ]

exports.deleteTeacherArray =
    [
        body("_id").isMongoId().withMessage("teacher Id should be object ID")
    ]
