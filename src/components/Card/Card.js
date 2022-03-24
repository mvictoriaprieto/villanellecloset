import React from 'react';
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'

export default function Card({data}) {
    const { title , price, talle, stock} = data
      
    return(
        <div className="card-item">
            <h2>{title}</h2>
            <p>Precio : $ {price}</p>
            <p>Talle : {talle}</p>
           <ItemCount stock={stock} />
        </div>
    )
}