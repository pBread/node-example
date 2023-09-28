/****************************************************
 Load Environment Variables
 dotenv loads variables from .env and appends them to process.env
****************************************************/
const dotenv = require("dotenv");
dotenv.config();

const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTH_TOKEN = process.env.ACCOUNT_SID;

const twilio = require("twilio");
const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

async function main() {}

try {
  main();
} catch (error) {
  console.error(error);
}
