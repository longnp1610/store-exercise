const express = require("express");
const app = express();
require("dotenv").config();

PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log("Running on http://localhost:" + PORT));
