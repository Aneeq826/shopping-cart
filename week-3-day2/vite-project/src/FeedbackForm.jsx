import { useState } from "react"

function FeedbackForm(){
    const[feedback,setFeedback]=useState("");
    return(
        <>
        <h2>FeedbackForm</h2>
        <form >
        <input type="text" value={feedback} placeholder="Enter feedback " onChange={(event)=>setFeedback(event.target.value)}></input>
       
        </form>

        <p>Characters: {feedback.length}</p>
        {feedback.length > 200 &&(
            <p style={{color: "red"}}>Character limit exceeded!</p>
        )}

        <button onClick={()=> setFeedback("")}>Clear</button>
        </>
    )
}
export default FeedbackForm