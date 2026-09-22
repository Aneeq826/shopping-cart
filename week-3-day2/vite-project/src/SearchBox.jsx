import { useRef } from "react";
function SearchBox(){
    const searchBox=useRef();

    const handelSubmit = () => {
        alert(searchBox.current.value);
    };


    return(
        <>
        <input type="text"  ref={searchBox}/>
        <button onClick={handelSubmit}>Submit</button>
        </>
    );
}
export default SearchBox;