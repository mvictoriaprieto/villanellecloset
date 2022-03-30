import React from 'react';
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Alert } from '@mui/material';

const Item = ({title, image, price, id, size, stock}) => {
    const onAdd = (count) =>{
        alert(`You have added ${count} of this item to your cart`);
    };

    return(
        <div className="card-item">
        <img className="image_card" src={image} alt= 'clothing'/>
            <h2 className="title_card">{title}</h2>
            <p>Size: {size}</p>
            <p>Price: $ {price}</p>
           <ItemCount stock={stock} onAdd={onAdd} initial={1} />
        </div>
    )
}

export default Item; 