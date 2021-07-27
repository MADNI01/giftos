import classes from "./cart.module.css";
import Nav from "../components/Nav";
import CartProduct from "../components/CartProduct";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartData = useSelector((state) => state.cartSlice.items);
  const price = useSelector((state) => state.cartSlice.totalPrice);
  const totalPrice = price > 0 ? price.toFixed(2) : 0;

  return (
    <div>
      <Nav width='full' />
      <div className={classes.cart}>
        <div className={classes.container}>
          <div className={classes.products}>
            {cartData.map((item) => (
              <CartProduct
                title={item.title}
                photo={item.photo}
                price={item.price}
                quantity={item.quantity}
                age={item.age}
                id={item.id}
                key={item.id}
              />
            ))}
          </div>
          <div className={classes["price-info"]}>
            <h5>ORDER SUMMARY</h5>
            <div className={classes.info}>
              <div>
                <span>Price</span>
                <span>{totalPrice}</span>
              </div>
              <div>
                <span>DELIVERY</span>
                <span>
                  {totalPrice > 100 || totalPrice == 0 ? "Free" : "$4.99"}
                </span>
              </div>
              <div>
                <strong>TOTAL</strong>
                <strong>$ {totalPrice}</strong>
              </div>
            </div>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
