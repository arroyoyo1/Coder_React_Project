import React, { useState } from 'react';
import './ItemDetail.css'
import { useCart } from '../../hooks/useCart';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ItemDetail({ id, title, year, description,
  interpretation, price, img, stock }) {
  const { addToCart, cart, removeFromCart } = useCart();
  const [totalProducts, setTotalProducts] = useState(1);
  const [block, setBlock] = useState(false);

  const product = {
    id,
    title,
    year,
    description,
    interpretation,
    price,
    img,
    stock,
    quantity: totalProducts
  }

  const warning = () => toast.warn('No puedes agregar más de lo que hay en stock', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  const success = () => toast.success('Se agrego el producto correctamente', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  const error = () => toast.error('No se pueden agregar más productos!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  const increment = () => {
    if (totalProducts < stock) {
      setTotalProducts((prev) => prev + 1);
      return;
    }

    warning();
  }

  const decrement = () => {
    if (totalProducts > 1) {
      setTotalProducts((prev) => prev - 1);
    }
  }

  return (
    <div className="item-detail">
      <img className='img-detail' src={img} alt={title} />
      <h1>{title}</h1>
      <p><strong>Año:</strong> {year}</p>
      <p>{description}</p>
      <p><strong>Interpretación:</strong> {interpretation}</p>
      <p><strong>Precio de subasta:</strong> {price}</p>
      <p><strong>Stock: </strong> {stock}</p>
      <div className='item-detail-buttons'>
        <button className='btn-decrement'
          onClick={decrement}>-</button>
        <span className='quantity'>{totalProducts}</span>
        <button className='btn-increment'
          onClick={increment}
        >+</button><br />
        <button className='btn-add-cart' onClick={() => {
          if (block) {
            error();
            return;
          }
          addToCart(product);
          if (totalProducts == stock) {
            setBlock(true);
          }
          success();
        }} disabled={block} >Agregar al carrito</button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce />
      </div>
    </div>
  );
}