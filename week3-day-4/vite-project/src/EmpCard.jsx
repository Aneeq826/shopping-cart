function EmpCard({data}){
    return(
        <div style={{
            border: '2px solid green',
            width: '450px',
            margin: '10px'
        }}>
        <h1 style={{color : "red"}}>Emplooye Cards</h1>
        <h2>id: {data.id}</h2>
        <h2>name:{data.name}</h2>
        <h2>age: {data.age}</h2>
        </div>
    )
}
export default EmpCard