const {body,param,query}=require("express-validator");
exports.postClassArray =
    [
        
        body("_id").isInt().withMessage("class Id should be integer"),
        body("fullname").isString().withMessage("className should be string")
                    .isLength({max:10}).withMessage("class name <10"),
        body('supervisor').optional().isMongoId().withMessage('Wrong supervisor ID'),
        body("children").isArray().withMessage("children must be array of number"),
        body('children.*').isInt().withMessage('Wrong children _id format'),
    ]


exports.putClassArray =
    [
        body("_id").isInt().withMessage("class Id should be integer"),
        body("fullname").optional().isString().withMessage("className should be string")
                    .isLength({max:10}).withMessage("class name <10"),
        body('supervisor').optional().optional().isMongoId().withMessage('Wrong supervisor ID'),
        body("children").optional().isArray().isNumeric().withMessage("children must be array of number"),
        body('children.*').optional().isInt().withMessage('Wrong children _id format'),
    ]

exports.deleteClassArray =
    [
        body("_id").isInt().withMessage("class id should be number")
    ]

exports.getClass = [param('_id').isInt().withMessage('Invalid ID')];
exports.getChildrenClass = [param('_id').isInt().withMessage('Invalid ID')];
exports.getTeacherClass = [param('_id').isInt().withMessage('Invalid ID')];
