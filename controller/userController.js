const userModel = require("../model/userSchema.js");
const register = async(req, res, next)=>{
    try{
        const userInfo = userModel(req.body);

        const result = await userInfo.save(); //save the request data to database

        return res.status(200).json({
            msg:"User registered successfully"
        });
    } catch(e){
        if(e.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Account already exists with provided email id"
            });
        }
        return res.status(400).json({
            success:false,
            message:e.message
        });
    }

}

const login = (req, res)=>{

}

module.exports = {
    register,
    login
}