// middleware for logging the error
const errorLog = (error, _, _1, next) => {
  console.error(error);
  next(error);
};

// middleware for handling specific error
const errorHandler = (error, _, res, next) => {
  try {
    res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
    });
  } catch (error) {
    next(error);
  }
};

// midleware for handling and response for general error
const failSafeHandler = (error, _, res, _1) => {
  res.status(500).json({
    status: 500,
    message: "Internal Server Error",
  });
};

export { errorHandler, errorLog, failSafeHandler };
