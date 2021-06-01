require("dotenv").config();

// DB connection
require("./config/db.config");

// Debug
require("./config/debug.config");

// HBS
require("./config/hbs.config");

// App
const express = require("express");
const app = express();

// App settings
require("./config/sass.config")(app);
require("./config/middleware.config")(app);
require("./config/views.config")(app);
require("./config/locals.config")(app);

// parse request data content type application/x-www-form-rulencoded
app.use(express.urlencoded({ extended: false }));

// parse request data content type application/json
app.use(express.json());

// Routes index
require("./routes")(app);

// Error handling
require("./config/error-handlers.config")(app);

app.use((req, res) => res.sendFile(__dirname + "/public/index.html"));

module.exports = app;
