import { useState } from "react";

function StudentTable() {
    const [students, setStudents] = useState([
        { name: "Ali", age: 20, city: "Lahore" },
        { name: "Sara", age: 22, city: "Karachi" },
        { name: "Usman", age: 21, city: "Islamabad" },
        { name: "Arooj", age: 23, city: "Faisalabad" },
    ]);

    function handleRemove(index) {
        setStudents(students.filter((s, i) => i !== index));
    }

    return (
        <>
            <h2>Student Table</h2>
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.city}</td>
                            <td>
                                <button onClick={() => handleRemove(index)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default StudentTable;