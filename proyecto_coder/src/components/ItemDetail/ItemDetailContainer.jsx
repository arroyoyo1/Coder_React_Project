import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { artworks } from '../../mockData';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const { idProduct } = useParams();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    console.log(idProduct);
    const item = artworks.find(art => art.id === idProduct);
    console.log(item);
    setArtwork(item);
  }, [idProduct]);

  return (
    <div>
      {artwork ? <ItemDetail
        title={artwork.title}
        year={artwork.year}
        description={artwork.description}
        interpretation={artwork.interpretation}
        price={artwork.price}
        img={artwork.image}
      /> : <p>Loading...</p>}
    </div>
  );
}
