const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack); 

  const statusCode = err.statusCode || 500;
  const message = err.message || "Une erreur interne est survenue";

  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

export default errorMiddleware;
