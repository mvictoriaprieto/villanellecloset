import React, { useEffect, useState } from 'react';
import { getProductById } from '../../helpers/getData';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';


const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
   
    getProductById(Number(id), setProduct);
   
  }, [id]);
  
  return (
    <section className="item-detail-container">
      {product ? <ItemDetail item={product} /> : <p>Loading products...</p>}
    </section>
  );
};

export default ItemDetailContainer;
