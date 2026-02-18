import dotenv from "dotenv";
dotenv.config();
import rateLimit from "express-rate-limit";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

import AuthRoutes from "./routes/auth.routes";
import TaskRoutes from "./routes/task.routes";
import TaskCardRoutes from "./routes/taskCard.routes";

const app = express();
app.set('trust proxy', 1);


const corsOptions = {
    origin: process.env.CLIENT_PORT,
    credentials: true,
}
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(limiter);
app.use("/api/auth", AuthRoutes);
app.use("/api/task", TaskRoutes);
app.use("/api/taskCard", TaskCardRoutes);

export default app;