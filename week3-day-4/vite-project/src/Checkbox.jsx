import { useState } from "react"

function Checkbox(){
    const[checkbox,setCheckbox]=useState(false);
    return(
        <>
        <input type="checkbox" id="Checked" onChange={(e)=>setCheckbox(e.target.checked)}/>
        <label htmlFor="Checked">Checked</label>
        {checkbox ?  "Checked" : "Unchecked"}
        </>
    )
}
export default Checkbox