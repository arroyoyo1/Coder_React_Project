import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";

export default function CartWidget() {
  return (
    <div className="shopping-cart">
      <FaShoppingCart size={"20px"} />
      <span className="badge">2</span>
    </div>
  );
}
