const emailValidator = require("email-validator");
const validateRegistrationFields = (req, res, next)=>{
    {const{ name, email, password} = req.body;
    console.log(name, email, password);

    // Checking if all are containing valid value or not 
    if(!name || !email || !password){
        return res.status(400).json({
            success:false,
            message:"All input fields are required"
        });
    }

    // Validating email
    const validEmail = emailValidator.validate(email);
    if(!validEmail){
        return res.status(400).json({
            success:false,
            message:"Please provide a valid email id."
        });
    }}
    next();
}

module.exports = validateRegistrationFields;