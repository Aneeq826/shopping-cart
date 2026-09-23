import { useState } from "react"

function SizeSelector(){
    const [size, setSize] = useState("");

    return(
        <>
        <h2>Select your size</h2>
        <select value={size} onChange={(event) => setSize(event.target.value)}>
            <option value="">-- Select Size --</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
        </select>
        <br />
        <h3 style={{ color: "green" }}>Selected size: {size}</h3>
        </>
    )
}
export default SizeSelector