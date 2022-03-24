import React,{useState} from "react";


const ItemCount = ({stock}) => {
    const [count , setCount] = useState (1)
    const onAdd = () =>{
        if(count < stock){
            setCount (count + 1)
        }
       
    } 

    return(
        <>
         <button onClick={onAdd}> + </button>
           <p>{count}</p>
          <button> - </button>
    </>
    
)}

export default ItemCount;