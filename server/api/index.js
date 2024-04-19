import express from "express";
import cors from "cors";
import router from '../routes/record.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();


app.use(cors({
  origin: ['*'],
  mode: 'no-cors',
  methods: ["POST", "GET", "PATCH", "PUT", "DELETE"],
  credentials: true,
  preflightContinue: true,
  optionsSuccessStatus: 200,
}));
app.options('*', cors())
app.use(express.json());
app.use("/record", router);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
