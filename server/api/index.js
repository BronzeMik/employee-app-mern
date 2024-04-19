import express from "express";
import cors from "cors";
import router from '../routes/record.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();
const corsOptions = {
  origin: 'https://employee-management-mern.web.app/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions));
app.use(express.json());
app.use("/record", router);
app.get('/', (req, res) => {
  res.send('connected').status(200)
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
