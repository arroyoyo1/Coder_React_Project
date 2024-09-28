import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import './App.css'; // Archivo principal para los estilos globales

import About from './pages/About';
import Gallery from './pages/Gallery';
import Donations from './pages/Donations';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Welcome to the Basquiat Foundation"} />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Exhibición al público"} />} />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}


