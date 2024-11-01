import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./itemListContainer.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dbFirestore } from "../../services/firebase";

function ItemListContainer({ saludo }) {
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const { idCategory } = useParams();

  useEffect(() => {
    // Establecer estado de carga a verdadero
    setLoading(true);
    if (idCategory != undefined) {
      getProductsByCategory();
      return;
    }
    getAllProducts();
  }, [idCategory]);


  const getAllProducts = async () => {
    const querySnapshot = await getDocs(collection(dbFirestore, "productos"));
    const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    setFilteredArtworks(items);
    setLoading(false);
  };

  const getProductsByCategory = async () => {
    // Comparamos la categoría a filtrar
    const queryParam = query(collection(dbFirestore, 'productos'), where('category', '==', idCategory));

    // Ejecutamos la consulata
    const querySnapshot = await getDocs(queryParam);
    // Mapea los documentos a un array de objetos con sus datos e ID
    const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    setFilteredArtworks(items);
    setLoading(false);
  }

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
              <p>${artwork.price}</p>
              <img className="product-image" src={artwork.image} alt={artwork.title} /><br />
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