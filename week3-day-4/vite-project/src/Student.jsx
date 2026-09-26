function Student(){
    const student={
        name: "Aneeqa",
        age: 22
        
} ;
   const updateStudent={...student, city: "FSD"};
   const olderStudent={...student,age: 21};
   console.log(updateStudent);
   console.log(olderStudent);
   
   

    return(
        <>
        
        </>
    )
}
export default Student