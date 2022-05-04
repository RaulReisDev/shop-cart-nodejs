const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const { auth } = require('express-openid-connect');

dotenv.config();

// Cors
let corsOptions = {
    origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// Auth0
const configAuth = {
    authRequired: false,
    auth0Logout: true,
    secret: 'jkhdfguisyadgfuyisfuyisafukhyisgfkidsakiyfgsyo',
    baseURL: 'http://localhost:3000',
    clientID: 'njLdpm8xxsdGqXEvFisR57RHqd5zCmBa',
    issuerBaseURL: 'https://dev-hh7v4t58.us.auth0.com'
};
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.set('trust proxy', true)
app.use(auth(configAuth));

// Import Routes
const authRoute = require("./src/api/routes/authRoute");
const productRoute = require("./src/api/routes/productsRoute");

// BodyParser Middleware
app.use(express.json());

// Route
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

app.listen(3000, "127.0.0.1", () => {
    console.log("200!");
});
