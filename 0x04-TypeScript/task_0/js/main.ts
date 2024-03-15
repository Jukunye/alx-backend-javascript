// Define interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "Chibu",
    lastName: "Dangote",
    age: 56,
    location: "Mikaragua"
};

const student2: Student = {
    firstName: "Jake",
    lastName: "Kadere",
    age: 22,
    location: "Los Angeles"
};

// Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

// Render a table using vanilla JavaScript
const renderTable = (students: Student[]) => {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headerFirstName = headerRow.insertCell();
    const headerLocation = headerRow.insertCell();
    headerFirstName.textContent = "First Name";
    headerLocation.textContent = "Location";

    students.forEach(student => {
        const studentRow = table.insertRow();
        const FirstName = studentRow.insertCell();
        const Location = studentRow.insertCell();
        FirstName.textContent = student.firstName;
        Location.textContent = student.location;
    });

    document.body.appendChild(table);
};

// Call the renderTable function with the studentsList array
renderTable(studentsList);
