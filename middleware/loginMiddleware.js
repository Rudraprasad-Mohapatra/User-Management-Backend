const emailValidator = require("email-validator");
const loginMiddleware = async(req,res,next)=>{
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({
            msg:"all input fields are required"
        })
    }
    if(!emailValidator.validate(email)){
        return res.status(400).json({
            msg:"Not a valid email format"
        });
    }
    next();
}

module.exports = loginMiddleware;