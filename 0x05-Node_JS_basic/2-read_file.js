const fs = require("fs");

function handleLogic(err, data) {
  if (err) {
    throw new Error("Cannot load the database");
  }

  const linesWithFirst = data.toString().split("\n");
  const lines = linesWithFirst.slice(1);

  let dictionary = new Object();
  let count = 0;

  for (const line of lines) {
    fields = line.split(",");
    if (fields[3] in dictionary) {
      dictionary[fields[3]].push(fields[0]);
    } else {
      dictionary[fields[3]] = new Array();
      dictionary[fields[3]].push(fields[0]);
    }
    count++;
  }
  console.log(`Number of students: ${count}`);
  for (const key in dictionary) {
    const Number = dictionary[key].length;
    const Field = key;
    const List = dictionary[key].join(", ");
    console.log(`Number of students in ${Field}: ${Number}. List: ${List}`);
  }
}

function countStudents(filePath) {
  fs.readFile(filePath, (err, data) => {
    handleLogic(err, data);
  });
}

module.exports = countStudents;
