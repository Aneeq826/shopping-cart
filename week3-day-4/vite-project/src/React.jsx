import { useState } from "react"

function React(){
    const[react,setReact]=useState("");
    return(
        <>
        <h1>Dropdown menu</h1>
        <select  onChange={(e)=> setReact(e.target.value)}>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="HTML">HTML</option>
           </select>
           <p>Selected: {react}</p>
            <input type="button" id="ClickMe" value="Click Me" onClick={()=>alert("Button clicked")}/>
        </>
    )
}
export default React