import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../itemListContainer.css"; // Ajusta según la ruta real del CSS
import getArtworks from "../mockData"; // Importa desde mockData.js

function ItemListContainer({ saludo }) {
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    // Utiliza getArtworks para obtener la lista de obras
    getArtworks.then((data) => {
      if (idCategory) {
        const newArtworks = data.filter((artwork) => artwork.category === idCategory);
        setFilteredArtworks(newArtworks);
      } else {
        setFilteredArtworks(data);
      }
    });
  }, [idCategory]);

  return (
    <div className="item-list-container">
      <h2>{saludo}</h2>
      <div className="product-grid">
        {filteredArtworks.length > 0 ? (
          filteredArtworks.map((artwork) => (
            <div key={artwork.id} className="product-item">
              <h3>{artwork.title}</h3>
              <p>{artwork.description}</p>
              <p>{artwork.price}</p>
              <img src={artwork.image} alt={artwork.title} />
            </div>
          ))
        ) : (
          <p>No hay obras disponibles para esta categoría.</p>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;






