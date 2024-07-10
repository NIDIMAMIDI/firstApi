import Joi from "joi";

const strongPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
const stringPassswordError = new Error("Password is a required field and it must be String. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum eight in length . Maximum 15 in length")

export const authValidator = Joi.object({
    email: Joi.string().email().required().messages({
        "string.base": "Email should be a string",
        "string.empty": "Email cannot be empty",
        "string.email": "Please provide a valid email",
        "any.required": "Email is required"
    }),
    password: Joi.string().regex(strongPasswordRegex).error(stringPassswordError).required().messages({
        "string.base": "Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum eight in length . Maximum 15 in length",
        "string.empty": "Password cannot be empty",
        "string.min": "Password should have at least 8 characters",
        "any.required": "Password is required"
    }),
    role: Joi.string().valid('user', 'admin').default('user').messages({
        "string.base": "Role should be a string",
        "any.only": "Role can only be 'user' or 'admin'"
    })
})