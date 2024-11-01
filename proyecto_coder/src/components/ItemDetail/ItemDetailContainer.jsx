import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getDoc, doc } from "firebase/firestore";
import { dbFirestore } from "../../services/firebase";
export default function ItemDetailContainer() {
  const { idProduct } = useParams();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    getProductById();
  }, [idProduct]);


  const getProductById = async () => {
    try {
      // Crea una referencia al documento utilizando el ID
      const docRef = doc(dbFirestore, "productos", idProduct);
      const docSnap = await getDoc(docRef);

      // Verifica si el documento existe
      if (docSnap.exists()) {
        setArtwork({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No se encontró el documento.");
      }
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    }
  };

  return (
    <div>
      {artwork ? <ItemDetail
        id= {artwork.id}
        title={artwork.title}
        year={artwork.year}
        description={artwork.description}
        interpretation={artwork.interpretation}
        price={artwork.price}
        img={artwork.image}
        stock={artwork.stock}
      /> : <p>Loading...</p>}
    </div>
  );
}
