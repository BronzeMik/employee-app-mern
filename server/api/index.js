import express from "express";
import cors from "cors";
import records from "../routes/record.js";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
  next(); 
});
// app.use(cors({
//   origin: ['*'],
//   methods: ["POST", "GET", "PATCH", "PUT", "DELETE", "OPTIONS"],
//   credentials: true,
// }));
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
