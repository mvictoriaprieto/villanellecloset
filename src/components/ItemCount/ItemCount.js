import React,{ useState } from "react";
import Button from '@mui/material/Button';
import './Itemcount.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count , setcount] = useState (initial);
   
   
    const countProducts = (num) =>{
        setcount (count + num);
        
    };
  
    return(
        <div>
        <div className="countItemCart">
         <button onClick={() => countProducts (-1)} disable={count === initial ? true : null}> - </button>
           <p className="pCount">{count}</p>
           <button onClick={() => countProducts (+1)} disable={count === stock ? true : null}> + </button>
        </div>
        <Button className="bConut" onClick={() => onAdd(count)} disable={stock === 0 ? true : null}>Add to cart</Button> 
        </div>
    );
};
export default ItemCount