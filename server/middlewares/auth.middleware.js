import jwt from "jsonwebtoken";


export const requireAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      const error = new Error("Pas de token fourni");
      error.statusCode = 401;
      return next(error);
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      const error = new Error("Pas de token fourni");
      error.statusCode = 401;
      return next(error);
    }

    const tokenDecodage = jwt.verify(token, process.env.JWT_SECRET || "SECRETKEY");
    req.user = tokenDecodage;
    next();
  } catch (error) {
    error.statusCode = 401;
    next(error);
  }

  if (response.status === 401) {
  localStorage.removeItem("token");
  navigate("/login");
}

};
