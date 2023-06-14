import { ErrorResponse } from "../utilities/errorResponse";

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  //a duplicate key error
  if (err.code === 11000) {
    if (err.keyValue.userName) {
      const message = `Username "${err.keyValue.userName}" is already in use`;
      error = new ErrorResponse(message, 400);
    }
    if (err.keyValue.email) {
      const message = `Duplicate accounts not allowed, Log in instead?`;
      error = new ErrorResponse(message, 400);
    }
  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map(
      (val: { message: String }) => val.message
    );
    console.log(err.errors, message);
    error = new ErrorResponse(message, 400);
  }
  res.status(error.status || 500).json({
    sucess: false,
    error: error.message || "500 Server Error",
  });
};

export default errorHandler;
