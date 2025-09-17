import cors from 'cors';

const allowedOrigins = [
  "http://localhost:3000",
  "https://my-frontend.netlify.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    // autorise les requêtes sans origine (ex: Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200
};

export default cors(corsOptions);
