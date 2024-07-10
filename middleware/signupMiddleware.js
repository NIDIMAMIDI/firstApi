import { authValidator } from "../utils/validator/auth/authValidator.js"
export const signupMiddleware = (req, res, next)=>{
    const {error, value} = authValidator.validate(req.body)
    // console.log(error);
    if(error){
        return res.status(400).json({
            status: "failure",
            message: error.details? error.details[0].message : error.message
        })
    }

    req.createUser = {
        email: value.email.toLowerCase(),
        password: value.password,
        role: value.role
    }

    next();

}
