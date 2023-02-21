const express = require("express");
const router = express.Router();
const controller=require("./../Controller/childController");
const validateMW=require("./../Core/validations/validateMW");
const childArray=require("../Core/validations/childValidate");



router.route("/child")
    .get(controller.getAllChild)
    .post(childArray.postChildArray,validateMW,controller.addChild)
    .put(childArray.putChildArray,validateMW ,controller.updateChild)
    .delete(childArray.deleteChildArray,validateMW,controller.deleteChild)




router.get("/child/:_id",childArray.getChild,validateMW,controller.getChild)

module.exports=router;