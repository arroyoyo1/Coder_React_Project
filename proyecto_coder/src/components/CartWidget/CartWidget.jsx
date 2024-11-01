import { Link } from "react-router-dom";
import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";

export default function CartWidget() {
  const { cart } = useCart();
  const totalProducts = cart.length;
  return (
    <Link to='/chekout'>
      <div className="shopping-cart" >
        <FaShoppingCart size={"20px"} />
        <span className="badge">{totalProducts}</span>
      </div>
    </Link>

  );
}
