import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { artworks } from '../../mockData';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    const item = artworks.find((art) => art.id === id);
    setArtwork(item);
  }, [id]);

  return (
    <div>
      {artwork ? <ItemDetail {...artwork} /> : <p>Loading...</p>}
    </div>
  );
}
