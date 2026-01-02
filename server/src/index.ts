import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import AuthRoutes from "./routes/auth.routes";


const app = express();

const corsOptions = {
    origin: process.env.CLIENT_PORT
}
console.log("DB USER:", process.env.MYSQL_USER);

app.use(cors(corsOptions));
app.use(express.json());

app.use("/", AuthRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
