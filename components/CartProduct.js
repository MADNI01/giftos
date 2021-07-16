import classes from "./CartProduct.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { cartActions } from "./store/cartSlice";
import router from "next/router";
const CartProduct = (props) => {
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(
      cartActions.deleteItem({
        id: props.id,
        price: props.price,
      })
    );
  };
  const addItemHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        price: props.price,
      })
    );
  };
  const deleteAllHandler = () => {
    dispatch(
      cartActions.deleteAll({
        id: props.id,
        quantity: props.quantity,
        price: props.price,
      })
    );
  };
  const productPageHandler = () => {
    router.push(`/product/${props.id}`);
  };
  return (
    <div className={classes.product}>
      <div className={classes.left}>
        <div>
          <img src={props.photo} />
        </div>
        <div className={classes["left-info"]}>
          <span onClick={productPageHandler}>{props.title}</span>
          <span>
            Age: <strong>{props.age}</strong>
          </span>
        </div>
      </div>
      <div className={classes.middle}>
        <div>
          <span onClick={deleteItemHandler}>-</span>
          <span>{props.quantity}</span>
          <span onClick={addItemHandler}>+</span>
        </div>
      </div>
      <div className={classes.right}>
        <span>$ {props.price}</span>
        <span onClick={deleteAllHandler}></span>
      </div>
    </div>
  );
};

export default CartProduct;
