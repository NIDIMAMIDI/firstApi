import jwt from "jsonwebtoken";

const signToken = (id) => {
    const payload = { id };
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const expiresIn = process.env.JWT_EXPIRES_IN;
    
    return jwt.sign(payload, jwtSecretKey, {
        expiresIn: expiresIn
    });
};

export const createToken = (user) => {
    const token = signToken(user._id);
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 60 * 60 * 1000),
        httpOnly: true
    };

    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    
    return { token, cookieOptions };
};
