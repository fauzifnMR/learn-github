const fs = require("fs");
const path = require("path");
// require("dotenv").config();
const getFileList = (dirName) => {
  let files = [];
  const items = fs.readdirSync(dirName, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory()) {
      files = [...files, ...getFileList(`${dirName}/${item.name}`)];
    } else {
      files.push(`${item.name}`);
    }
  }
  const txtFiles = files.filter((el) => path.extname(el) === ".feature");
  return txtFiles;
};
const feature = getFileList('./mrtest/critical/').toString();
fs.writeFile("filefeature.txt", feature, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("File written!");
  }
});