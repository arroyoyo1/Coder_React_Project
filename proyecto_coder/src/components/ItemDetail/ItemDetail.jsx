import React from 'react';
import './ItemDetail.css'
export default function ItemDetail({ title, year, description, interpretation, price, img }) {
  return (
    <div className="item-detail">
      <h1>{title}</h1>
      <p><strong>Año:</strong> {year}</p>
      <p>{description}</p>
      <p><strong>Interpretación:</strong> {interpretation}</p>
      <p><strong>Precio de subasta:</strong> {price}</p>
      <img className='img-detail' src={img} alt={title} />
    </div>
  );
}