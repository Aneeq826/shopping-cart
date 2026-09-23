import { useState } from "react"

function Hobbies(){
    const[hobby,setHobby]=useState([]);

    const hobbies =(event)=>{
        console.log(event.target.value, event.target.checked);

        if(event.target.checked){
            setHobby([...hobby,event.target.value ])
        }else{
            setHobby([...hobby.filter((item)=> item != event.target.value)])
        }
        
    }
    return(
        <>
        <h2>Select your hobbies</h2>
        <input type="checkbox" onChange={hobbies} id='Cooking' value='Cooking' />
        <label htmlFor="Cooking">Cooking</label>
        <br />

        <input type="checkbox" onChange={hobbies} id='Music' value='Music' />
        <label htmlFor="Music">Music</label>
        <br />

        <input type="checkbox" onChange={hobbies} id='Dancing' value='Dancing' />
        <label htmlFor="Dancing">Dancing</label>
        <br />

        <input type="checkbox" onChange={hobbies} id='Singing' value='Singing' />
        <label htmlFor="Singing">Singing</label>
        <br />


        <input type="checkbox" onChange={hobbies} id='Reading' value='Reading' />
        <label htmlFor="Reading">Reading</label>
        <br />

        <h1>{hobby.toString()}</h1>
        </>
    )
}
export default Hobbies