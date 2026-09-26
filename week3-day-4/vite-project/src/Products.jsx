function Products(){
    const ProductTable=[
        {
            name: "Laptop",
            price: 80000
        },
        {
            name: "Mouse",
            price: 2000
        },
        {
            name: "Keyboard",
            price: 3500
        },
    ];
    return(
        <>
        <h1>Product table</h1>
        <table border='1'>
            <thead >
                <tr style={{color: 'blue'}}>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                {ProductTable.map((Product,index)=>(
                     <tr key={index}>
                    <td>{Product.name}</td>
                    <td>{Product.price}</td>
                </tr>
                ))}
                 </tbody>
        </table>
        </>
    )
}
export default Products