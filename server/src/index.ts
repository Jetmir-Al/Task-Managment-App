import app from "./app";

if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


