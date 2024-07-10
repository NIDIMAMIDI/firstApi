// import { User } from "../../model/user/userModel.js";
import { User } from "../../model/user/userModel.js";
import dotenv from "dotenv";
import { createToken } from "../../helpers/jwt/indexJwt.js";

dotenv.config({ path: './.env' });

export const signup = async (req, res, next) => {
    try {
        const user = await User.create(req.createUser);
        const { token, cookieOptions } =  createToken(user);

        res.cookie('jwt', token, cookieOptions);
        
        res.status(200).json({
            status: "success",
            data: {
                user,
                token
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "failure",
            message: err.message
        });
    }
};
