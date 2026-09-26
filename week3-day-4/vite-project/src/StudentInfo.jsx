import Course from "./Course";

function StudentInfo() {
  const StudentData = [
    {
      name: "Ali",
      age: 18,
      class: 12,
      Courses: [{ sub1: "BIO", sub2: "PHY", sub3: "Chem" }],
    },
    {
      name: "Sara",
      age: 17,
      class: 12,
      Courses: [{ sub1: "Math", sub2: "PHY", sub3: "Chem" }],
    },
    {
      name: "Ahmed",
      age: 17,
      class: 12,
      Courses: [{ sub1: "BIO", sub2: "PHY", sub3: "Chem" }],
    },
  ];

  return (
    <>
      <h1>Student data using nested loop</h1>
      {StudentData.map((data, index) => (
        <div
          key={index}
          style={{
            background: "#ccc",
            padding: "20px",
            margin: "20px",
            borderBottom: "4px solid black",
            borderRadius: "10px",
            width: "600px",
          }}
        >
          <h1>Name: {data.name}</h1>
          <h1>Age: {data.age}</h1>
          <h1>Class: {data.class}</h1>
          <h1>Courses list</h1>
          <Course Courses={data.Courses} />
        </div>
      ))}
    </>
  );
}
export default StudentInfo;