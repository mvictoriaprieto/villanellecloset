import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  const onAdd = (count) => {
    alert(`You have added ${count} of this item to your cart`);
  };


  return (
    <article className="product-detail">
    <div className="img">
      <img src={item.image} alt="" className="product-detail__img" />
      </div>
      <div className="product-detail__info">
        <h2 className="title">{item.title}</h2>
        <div className="info-grid">
          <p>Price: ${item.price} </p>
          <p>Size: {item.size}</p>
        </div>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} className="item-count"/>
      </div>
    </article>
  );
};

export default ItemDetail;
