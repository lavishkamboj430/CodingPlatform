import * as Yup from "yup"
export const EmailValidate = ()=>
{
    return Yup.string().email().required()
}
export const PasswordValidate = ()=>
{
    return Yup.string().min(6, "Password must be at least 6 characters").max(20).required("Password is required")
}
export const NameValidate = ()=>
{
    return Yup.string().min(6, "Name must be at least 6 characters").max(20).required()
}