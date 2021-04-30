const getId = ({ faculty, semester, subject }) => {
  const result = `${faculty.toLowerCase()}-${semester.toLowerCase()}-${subject.toLowerCase()}`.replace(
    " ",
    ""
  );

  console.log(result);
  return result;
};

export default getId;
