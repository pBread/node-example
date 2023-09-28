const path = require("path");
const fs = require("fs");

/****************************************************
 Takes a JSON object and writes a log file to /logs/*
****************************************************/
function writeLog(json, prefix = "") {
  const dt = new Date();

  console.log(dt.toDateString());

  const fileName =
    prefix +
    `${dt.getFullYear() - 2000}-${dt.getMonth() + 1}-${dt.getDate()} ` +
    dt.toLocaleTimeString() +
    ".json";

  const filePath = path.resolve("logs", fileName);

  if (!fs.existsSync("logs")) {
    fs.mkdir("logs", (err) => {
      if (err) console.error(err);
    });
  }

  fs.writeFile(filePath, JSON.stringify(json, null, 2), (err) => {
    if (err) console.error(err);
  });
}

module.exports.writeLog = writeLog;
