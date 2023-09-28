const path = require("path");
const fs = require("fs");

/****************************************************
 Takes a JSON object and writes a log file to /logs/*
****************************************************/
function writeLog(json, prefix = "") {
  const dt = new Date();
  const fileName =
    prefix +
    `${dt.getFullYear() - 2000}-${dt.getMonth()}-${dt.getDate()} ` +
    dt.toLocaleTimeString() +
    ".json";

  const filePath = path.resolve(dir, fileName);

  fs.writeFile(filePath, JSON.stringify(json, null, 2));
}

module.exports.writeLog = writeLog;
