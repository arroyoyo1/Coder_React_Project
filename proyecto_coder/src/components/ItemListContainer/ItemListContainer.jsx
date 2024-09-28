import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./itemListContainer.css"; 
import getArtworks from "../../mockData";

function ItemListContainer({ saludo }) {
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const { idCategory } = useParams();

  // Definir categorías válidas
  const validCategories = ["1981", "1982", "1984"];

  useEffect(() => {
    // Establecer estado de carga a verdadero
    setLoading(true);

    getArtworks.then((data) => {
      if (idCategory && validCategories.includes(idCategory)) {
        const newArtworks = data.filter((artwork) => artwork.category === idCategory);
        setFilteredArtworks(newArtworks);
      } else {
        setFilteredArtworks(data);
      }
      // Una vez obtenidos los datos, desactivar la carga
      setLoading(false);
    });
  }, [idCategory]);

  return (
    <div className="item-list-container">
      <h2>{saludo}</h2>
      <div className="product-grid">
        {loading ? (
          <p>Cargando obras...</p> // Mostrar un mensaje de carga mientras se obtienen los datos
        ) : filteredArtworks.length > 0 ? (
          filteredArtworks.map((artwork) => (
            <div key={artwork.id} className="product-item">
              <h3>{artwork.title}</h3>
              <p>{artwork.description}</p>
              <p>{artwork.price}</p>
              <img className="product-image" src={artwork.image} alt={artwork.title} /><br/>
              <Link to={"/detail/" + artwork.id}>Ver detalle</Link>
            </div>
          ))
        ) : (
          <p>No hay obras disponibles para esta categoría.</p> // Mostrar solo si no hay obras en la categoría
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;







