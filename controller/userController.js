const userModel = require("../model/userSchema.js");
const bcrypt = require("bcrypt");
const register = async (req, res, next) => {
    try {
        const userInfo = userModel(req.body);

        const result = await userInfo.save(); //save the request data to database

        return res.status(200).json({
            msg: "User registered successfully"
        });
    } catch (e) {
        if (e.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Account already exists with provided email id"
            });
        }
        return res.status(400).json({
            success: false,
            message: e.message
        });
    }

}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email }).select("+password");
        // Check if user account exists with email if not send resp
        if (!user) {
            return res.status(400).json({
                msg: "No account associate with this email"
            })
        }

        // check if user has provided correct password or not 
        if (!(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({
                msg: "Password is wrong"
            });
        }
        else {
            user.password = undefined;
            return res.status(200).json({
                msg: "User login successfully"
            })
        }
    } catch (e) {
        return res.status(200).json({
            msg: e.message
        })
    }
}
module.exports = {
    register,
    login
}