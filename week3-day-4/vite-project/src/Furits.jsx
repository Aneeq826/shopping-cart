import FuritList from "./FuritList";

function Furits(){
    const Furit=[
        { 
            name:'Apple',
            price: 130
        },
        {
            name: 'Mango',
            price: 400
        },
        {
            name:'Banana',
            price: 100
        },
        ];
    return(
        <div >
            <h1>Passing array as props</h1>
            {Furit.map((list,index)=>
            <div key={index}>
                <FuritList data={list} />
            </div>
            
            )}
        </div>
    )
}
export default Furits