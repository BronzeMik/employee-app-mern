import express from "express";
import cors from "cors";
import records from "../routes/record.js";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://employee-app-mern.vercel.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE"
  );
  res.header("Access-Control-Allow-Credentials",true);
  next();
});
// app.use(cors({
//   origin: ['*'],
//   methods: ["POST", "GET", "PATCH", "PUT", "DELETE", "OPTIONS"],
//   credentials: true,
//   optionsSuccessStatus: 200
// }));
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
