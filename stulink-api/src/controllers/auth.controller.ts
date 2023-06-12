import User from "../models/user.model";
import bcrypt from "bcrypt";
import { ErrorResponse } from "../utilities/errorResponse";

export const register = async (req, res, next) => {
  const { email, username } = req.body;
  try {
    //error middleware catches duplicate user scenarios / user already exist scenarios
    //there is no need to assign a functionality for that.
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send({ message: "User has been created." });
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  const { email, username } = req.body;
  try {
    const user = await User.findOne({
      $or: [{ email: email }, { userName: username }],
    });

    if (!user) return next(new ErrorResponse("User not found", 404));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!isCorrect)
      return next(new ErrorResponse("Wrong Username or Password", 401));

    sendToken(user, 201, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out");
};

export const forgotPassword = async (req, res, next) => {
  const {email}=req.body;
  try{
    const user = await User.findOne({email});
    if(!user){
      return next(new ErrorResponse("Email could not be sent",404))
    }
    // const resetToken = user.getResetPasswordToken() ;
       //we set validate before save to falsse cause we are resaving our user model
    //...if you get erros again when resetting token check here and try to use other methods to prevent revalidation on save
     await user.save({ validateBeforeSave: false });
 
    // const resetUrl = `${process.env.CLIENT_URL}/resetpassword/${resetToken}`
   //call mongodb schema method in controller with typescript?

//    const message = `<h1>You have requested a password reset</h1>
//                   <p>Please go to this link to reset your password</p>
//                       <a href=${resetUrl} clicktracking=off> ${resetUrl}</a>`
                    
//  try{

//  }catch(error){}
                    }catch(error){
console.log(error)
  }
};
export const resetPassword = async (req, res, next) => {
  res.send("forgot password route");
};

//handles authentication with jwt and sends response
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res
    .cookie("accessToken", token, {
      httpOnly: true,
    })
    .status(statusCode)
    .json({ sucess: true, token, user });
};
