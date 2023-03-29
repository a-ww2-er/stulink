import User from "../models/user.model";
import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
  try {
    // const alreadyExist = new User
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send({ message: "User has been created." });
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });

    if (!user) return res.status(404).send("User not found!");

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!isCorrect) return res.status(404).send("Wrong password or username!");

    // const { password, ...info } = user._doc;
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};
