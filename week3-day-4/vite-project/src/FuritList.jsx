function FuritList({data}){
    return(
        <div style={{
             border: '2px solid green',
            width: '450px',
            margin: '10px'
        }}>
       <h1 style={{color: 'red'}}>Furit List</h1>
       <h2>Name: {data.name}</h2>
       <h2>Price: {data.price}</h2>
        </div>
    )
}
export default FuritList