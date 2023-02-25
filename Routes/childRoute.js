const express = require("express");
const router = express.Router();
const controller=require("./../Controller/childController");
const validateMW=require("./../Core/validations/validateMW");
const childArray=require("../Core/validations/childValidate");
const {checkAdmin}=require("./../Core/auth/authenticationMW");


router.route("/child")
    .get(checkAdmin,controller.getAllChild)
    .post(checkAdmin,childArray.postChildArray,validateMW,controller.addChild)
    .put(checkAdmin,childArray.putChildArray,validateMW ,controller.updateChild)
    .delete(checkAdmin,childArray.deleteChildArray,validateMW,controller.deleteChild)




router.get("/child/:_id",childArray.getChild,validateMW,controller.getChild)

module.exports=router;