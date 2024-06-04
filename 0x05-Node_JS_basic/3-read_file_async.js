// Import 'fs' module for handling the file system
const fs = require('fs');

// Define function taking path argument that specify path to database file
async function countStudents(databasePath) {
  if (fs.existsSync(databasePath)) {
    return new Promise((resolve) => {
      // Read the database file asynchronously
      fs.readFile(databasePath, 'utf8', (readError, fileData) => {
        if (readError) {
          throw Error('Cannot load the database');
        }

        // Parse the data and split it using '\n' and ',' as delimeters Store the result in an array
        const parsedDataArray = [];
        fileData.split('\n').forEach((dataRow) => {
          parsedDataArray.push(dataRow.split(','));
        });

        // Extract and filter needed info and add 1st and 4th fields to array newFields
        parsedDataArray.shift();
        const fieldsOfInterest = [];
        parsedDataArray.forEach((dataRow) => {
          fieldsOfInterest.push([dataRow[0], dataRow[3]]);
        });

        // Count, aggregate the data and create a new set
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

        // Display the results on the standard output
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

        // Handle the error if the database is not present.
        resolve(parsedDataArray, fieldCounts, fieldsOfInterest);
      });
    });
  }
  throw Error('Cannot load the database');
}

module.exports = countStudents;
