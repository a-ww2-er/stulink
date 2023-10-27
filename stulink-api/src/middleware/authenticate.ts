import jwt from "jsonwebtoken"
import { userInfo } from "os";
import User from "../models/user.model";
import { ErrorResponse } from "../utilities/errorResponse";

export const protectRegularEndpoint = async (req,res,next) =>{
   const token = req.cookies.accessToken

    if(!token){
        return next(new ErrorResponse("You are not authenticated",401))
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decoded.id)
        if(!user){
            return next(new ErrorResponse("User not found",404))
        }
      //req.user = JSON.parse(user)
        next();
    } catch (error) {
        return next(new ErrorResponse("You are not authorized to access this page",401))
    }
}

// export const protectAdminEndpoint =(req,res,next)=>{
//     const token = req.cookies.accessToken;
//     if(!user.acc.staff){
//         return next(new ErrorResponse("You are not an Admin",401))
//     }
// }