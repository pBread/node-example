/****************************************************
 Start the express server by running the "start" script, like so
 npm run start
****************************************************/

const dotenv = require("dotenv");
dotenv.config();

const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTH_TOKEN = process.env.ACCOUNT_SID;

const twilio = require("twilio");
const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// creates a route at http//:localhost:$PORT
app.use("/", async (req, res) => {
  console.log("req.body\n", req.body);
  console.log("req.query\n", req.query);
  console.log("req.headers\n", req.headers);
  res.status(200).send("done");
});

// start server
const PORT = process.env.PORT || "3000";
app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
