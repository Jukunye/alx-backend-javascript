const fs = require('fs');

function countStudents(databaseFilePath) {
  try {
    const databaseContent = fs.readFileSync(databaseFilePath, 'utf8');
    const databaseRows = databaseContent
      .split('\n')
      .map((row) => row.split(','));

    databaseRows.shift(); // Remove header row

    const studentData = databaseRows.map((row) => [row[0], row[3]]);

    const fieldsOfStudy = new Set();
    studentData.forEach((student) => {
      fieldsOfStudy.add(student[1]);
    });

    const studentCountByField = {};
    fieldsOfStudy.forEach((field) => {
      studentCountByField[field] = 0;
    });

    studentData.forEach((student) => {
      studentCountByField[student[1]] += 1;
    });

    console.log(
      `Number of students: ${
        databaseRows.filter((row) => row.length > 3).length
      }`,
    );
    Object.keys(studentCountByField).forEach((field) => {
      console.log(
        `Number of students in ${field}: ${
          studentCountByField[field]
        }. List: ${studentData
          .filter((student) => student[1] === field)
          .map((student) => student[0])
          .join(', ')}`,
      );
    });
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
