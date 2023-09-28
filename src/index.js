/****************************************************
 Execute this file by with the "dev" script, like so
 npm run dev
****************************************************/

const dotenv = require("dotenv");
dotenv.config(); // loads env variables

const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTH_TOKEN = process.env.ACCOUNT_SID;

const twilio = require("twilio");
const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

const util = require("./utilities");

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
