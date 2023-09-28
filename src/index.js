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

async function main() {
  const data = await client.messages.create({
    to: "",
    from: "",
    body: "Your OTP is 8675",
  });

  console.log(data);
}

try {
  main();
} catch (error) {
  console.error(error);
}
