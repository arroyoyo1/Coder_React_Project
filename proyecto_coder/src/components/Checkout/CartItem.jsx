import { useCart } from "../../hooks/useCart";
// Se usa bootstrap para los estilos
export default function CartItem({ id, img, price, title, quantity }) {
    const { removeFromCart } = useCart();
    return (
        <li className="list-group-item text-align-center">
            <img src={img} className="img-fluid"
                alt={title} />
            <div className=''>
                <strong>{title}</strong>
            </div>
            <footer className="footer">
                <p className='text-black'>
                    Cantidad: {quantity}
                </p>
                <p>
                    Precio unitario: ${price}
                </p>
                <p>
                    Total: ${price * quantity}
                </p>
            </footer>
            <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(id)}>Eliminar</button>
        </li>
    )
}