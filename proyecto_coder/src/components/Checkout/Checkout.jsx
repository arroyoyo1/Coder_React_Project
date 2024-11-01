import { useCart } from '../../hooks/useCart'
import Buyer from './Buyer';
import CartItem from './CartItem';
// Se usa bootstrap para los estilos

export function Checkout() {
    const { cart, clearCart, addToCart } = useCart();
    const totalProducts = cart.length;
    let totalCompra = 0;

    cart.map(product => {
        totalCompra = totalCompra + (product.price * product.quantity);
    });


    return (
        <div className="container cart">
            <h1 className="text-warning fs-1">Checkout</h1>
            <div className="row text-center">
                <aside className="col-12 col-md-6">
                    <h3 className='fs-3 text-black'>Lista de productos a comprar</h3>
                    <div className="d-flex gap-3 mb-3">
                        <p className="text-black">Total productos:
                            <span className="font-weight-bold"> {totalProducts}</span>
                        </p>
                        <p className="title-check">Total compra:
                            <span className="title-total"> ${totalCompra}</span>
                        </p>
                        <button className="btn btn-danger" onClick={clearCart}>
                            Vaciar carrito
                        </button>
                    </div>
                    <ul
                        className="list-group">
                        {cart.map(product => {
                            return (
                                <CartItem key={product.id}
                                    addToCart={() => addToCart(product)}
                                    {...product} />
                            )
                        })}
                    </ul>
                </aside>
                <Buyer/>
            </div>

        </div>
    )
}