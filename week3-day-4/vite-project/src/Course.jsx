function Course({ Courses }) {
  return (
    <>
      {Courses.map((course, index) => (
        <div key={index}>
          <h2>Sub1: {course.sub1}</h2>
          <h2>Sub2: {course.sub2}</h2>
          <h2>Sub3: {course.sub3}</h2>
        </div>
      ))}
    </>
  );
}
export default Course;