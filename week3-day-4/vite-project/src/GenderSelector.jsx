import { useState } from "react"

function GenderSelector(){
    const[gender,setGender]=useState("Male");
    return(
        <>
        <h1>Gender selector using radio</h1>
        <input type="Radio" onChange={(e)=>setGender(e.target.value)} name="gender" id="Male" value={'Male'} /> 
        <label htmlFor="Male">Male</label>
        <input type="Radio" onChange={(e)=>setGender(e.target.value)} name="gender"  id= 'Female' value={'Female'} /> 
        <label htmlFor="Female">Female</label>
        <input type="Radio" onChange={(e)=>setGender(e.target.value)} name="gender" id="Other" value={'Other'}/> 
        <label htmlFor="Other">Other</label>
        <h3>Gender : {gender}</h3>
        </>
    )
}
export default GenderSelector