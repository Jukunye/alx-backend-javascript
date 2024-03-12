export default function getListStudentIds(arr) {
  const myArray = [];

  if (Array.isArray(arr)) {
    arr.forEach((item) => {
      myArray.push(item.id);
    });
  }

  return myArray;
}
