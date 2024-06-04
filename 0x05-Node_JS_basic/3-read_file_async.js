const fs = require('fs');

async function countStudents(databasePath) {
  if (fs.existsSync(databasePath)) {
    return new Promise((resolve) => {
      fs.readFile(databasePath, 'utf8', (readError, fileData) => {
        if (readError) {
          throw Error('Cannot load the database');
        }

        const parsedDataArray = [];
        fileData.split('\n').forEach((dataRow) => {
          parsedDataArray.push(dataRow.split(','));
        });

        parsedDataArray.shift();
        const fieldsOfInterest = [];
        parsedDataArray.forEach((dataRow) => {
          fieldsOfInterest.push([dataRow[0], dataRow[3]]);
        });

        const uniqueFields = new Set();
        fieldsOfInterest.forEach((fieldItem) => {
          uniqueFields.add(fieldItem[1]);
        });
        const fieldCounts = {};
        uniqueFields.forEach((fieldData) => {
          fieldCounts[fieldData] = 0;
        });
        fieldsOfInterest.forEach((fieldItem) => {
          fieldCounts[fieldItem[1]] += 1;
        });

        console.log(
          `Number of students: ${
            parsedDataArray.filter((checkRow) => checkRow.length > 3).length
          }`,
        );
        Object.keys(fieldCounts).forEach((fieldName) => console.log(
          `Number of students in ${fieldName}: ${
            fieldCounts[fieldName]
          }. List: ${fieldsOfInterest
            .filter((fieldItem) => fieldItem[1] === fieldName)
            .map((fieldItem) => fieldItem[0])
            .join(', ')}`,
        ));

        resolve(parsedDataArray, fieldCounts, fieldsOfInterest);
      });
    });
  }
  throw Error('Cannot load the database');
}

module.exports = countStudents;
