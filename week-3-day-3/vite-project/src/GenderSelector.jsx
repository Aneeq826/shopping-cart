import { useState } from "react";

function GenderSelector() {
    const [gender, setGender] = useState("");

    return (
        <>
            <h2>Select your gender</h2>

            <input
                type="radio"
                name="gender"
                id="Male"
                value="Male"
                checked={gender === "Male"}
                onChange={(event) => setGender(event.target.value)}
            />
            <label htmlFor="Male">Male</label>
            <br />

            <input
                type="radio"
                name="gender"
                id="Female"
                value="Female"
                checked={gender === "Female"}
                onChange={(event) => setGender(event.target.value)}
            />
            <label htmlFor="Female">Female</label>
            <br />

            <input
                type="radio"
                name="gender"
                id="Other"
                value="Other"
                checked={gender === "Other"}
                onChange={(event) => setGender(event.target.value)}
            />
            <label htmlFor="Other">Other</label>
            <br />

            <h3>Selected gender: {gender}</h3>
        </>
    )
}

export default GenderSelector;