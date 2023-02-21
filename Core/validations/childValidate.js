const {body,param,query}=require("express-validator");
exports.postChildArray =
    [
        
        body("_id").isInt().withMessage(" Id should be number"),
        body("fullname").isString().withMessage("fullname should be string")
                    .isLength({max:10}).withMessage("fullname name <10"),
        body('age').isInt().withMessage('Wrong Age'),
        body("level").isIn(["PreKG","KG1","KG2"]).withMessage("must be one of (PreKG,KG1,KG2)"),
        body("address").isObject().withMessage("address must be object (city , street , building)"),
        body("address.city").isString().withMessage("city must be string"),
        body("address.street").isString().withMessage("street must be string"),
        body("address.building").isNumeric().withMessage("build must be number")
    ]


exports.putChildArray =
    [
        body("_id").isInt().withMessage(" Id should be number"),
        body("fullname").optional().isString().withMessage("fullname should be string")
                    .isLength({max:10}).withMessage("fullname <10"),
        body('age').optional().isInt().withMessage('Wrong Age'),
        body("level").optional().isIn(["PreKG","KG1","KG2"]).withMessage("must be one of (PreKG,KG1,KG2)"),
        body("address").optional().isObject().withMessage("address must be object (city , street , building)"),
        body("address.city").optional().isString().withMessage("city must be string"),
        body("address.street").optional().isString().withMessage("street must be string"),
        body("address.building").optional().isNumeric().withMessage("build must be number")
    ]

exports.deleteChildArray =
    [
        body("_id").isInt().withMessage("teacher Id should be object ID")
    ]

exports.getChild = [param('_id').isInt().withMessage('Invalid ID')];
