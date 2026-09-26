import { useState } from "react"

function SelectCountry(){
    const[country,setCountry]=useState("");
    return(
        <>
        <select onChange={(e)=>setCountry(e.target.value)} >
        <option value="Pakistan">Pakistan</option>
        <option value="India">India</option>
        <option value="Turkey">Turkey</option>
        </select>
        <p>Selected: {country}</p>
        </>
    )
}
export default SelectCountry