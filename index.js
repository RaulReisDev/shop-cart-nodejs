const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// Cors
let corsOptions = {
    origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// Import Routes
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productsRoute");

// BodyParser Middleware
app.use(express.json());

// Route
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

app.listen(3000, "127.0.0.1", () => {
    console.log("200!");
});
