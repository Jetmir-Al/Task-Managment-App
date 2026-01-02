import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const corsOptions = {
    origin: process.env.CLIENT_PORT
}

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
