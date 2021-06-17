const getId = ({ faculty, semester, subject }) => {
  const result = `${faculty.toLowerCase()}-${semester.toLowerCase()}-${subject.toLowerCase()}`.replace(
    " ",
    ""
  );

  return result.replace(/\s/g, '');
};

export default getId;
