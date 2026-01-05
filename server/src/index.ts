import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

import AuthRoutes from "./routes/auth.routes";
import TaskRoutes from "./routes/task.routes";

const app = express();

const corsOptions = {
    origin: process.env.CLIENT_PORT,
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", AuthRoutes);
app.use("/api/task", TaskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
