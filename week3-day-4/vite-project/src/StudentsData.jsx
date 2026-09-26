import EmpCards from "./EmpCard";

function StudentsData() {
  const empInfo = [
    {
        id: 1,
      name: "Ali",
      age: 20,
    },
    {
        id: 2,
      name: "Sara",
      age: 21,
    },
    {
        id: 3,
      name: "Aneeqa",
      age: 22,
    },
  ];
  return (
    <>
      <h1>Passing array object  data as props</h1>
      {empInfo.map((user,index) => (
        <div key={index}>
          <EmpCards data={user} />
        </div>
      ))}
    </>
  );
}
export default StudentsData;
