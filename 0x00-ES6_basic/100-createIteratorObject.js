export default function createIteratorObject(report) {
  const { allEmployees } = report;
  let employees = [];
  for (const key in allEmployees) {
    employees = [...employees, ...allEmployees[key]];
  }
  return employees;
}
