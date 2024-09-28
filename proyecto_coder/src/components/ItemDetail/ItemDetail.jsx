import React from 'react';

export default function ItemDetail({ title, year, description, interpretation, price }) {
  return (
    <div className="item-detail">
      <h1>{title}</h1>
      <p><strong>Año:</strong> {year}</p>
      <p>{description}</p>
      <p><strong>Interpretación:</strong> {interpretation}</p>
      <p><strong>Precio de subasta:</strong> {price}</p>
    </div>
  );
}