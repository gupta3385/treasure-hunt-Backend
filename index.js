import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import answerRoutes from "./routes/answer.js";
import scoreRoutes from "./routes/score.js";
import getAllUsers from "./routes/allUsers.js";
import cors from "cors";
dotenv.config();

const app = express();


//db
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>console.log("DB Connected"))
    .catch((err)=>console.log("DB Error => ", err));

// middleware
//origin:["http://localhost:3000","https://treasure-hunt-hb2u.onrender.com/"]
app.use(cors(

    {
        origin:["http://localhost:3000","https://treasure-hunt-hb2u.onrender.com"]
    }
));
app.use(morgan("dev"));
app.use(express.json());



//router middleware

app.use("/api", authRoutes);
app.use("/api", answerRoutes);
app.use("/api", scoreRoutes);
app.use("/api", getAllUsers);


const port = process.env.PORT || 8000;

app.listen(8000, (req, res)=>{
    console.log(`Server is running on port ${port}`);
})