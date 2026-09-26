import { useState } from "react"

function AcceptTermsandConditions(){
    const [conditions,setConditions]=useState(false);
    return(
        <>
        <h1>Accept Terms and Conditions</h1>
        <input type="checkbox"  checked={conditions} onChange={(e)=>setConditions(e.target.checked)} />
        <label htmlFor="conditions">conditions</label>
        {conditions && <p>Thank you for accepting!</p>}
        </>
    )
}
export default AcceptTermsandConditions