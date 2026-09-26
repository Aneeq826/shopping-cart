function ObjectOperator(){
    const user={
        name: "Ali",
        age: 20
    };
    const UpdateUser={...user,city: "Karachi"};
    const OlderUser={...user, age: 21};
    console.log(OlderUser);
    
    console.log(UpdateUser);
    
    return(
        <>
        
        </>
    )
}
export default ObjectOperator