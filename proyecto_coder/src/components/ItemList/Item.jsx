import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ id, title, year, description, price }) {
  return (
    <div className="item-card">
      <h2>{title} ({year})</h2>
      <p>{description}</p>
      <p><strong>Price:</strong> {price}</p>
      <Link to={`/item/${id}`}>View Details</Link>
    </div>
  );
}