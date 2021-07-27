import classes from "./Product.module.css";

import router from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "./store/cartSlice";
const Product = (props) => {
  const dispatch = useDispatch();

  const productPageHandler = () => {
    router.push(`/product/${props.id}`);
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const addToCartHandler = (e) => {
    e.stopPropagation();
    dispatch(
      cartActions.addItem({
        title: props.title,
        photo: props.photo,
        age: props.age,
        quantity: 1,
        price: props.price,
        id: props.id,
      })
    );
  };
  return (
    <div className={classes.product} data-aos="fade-up">
      <div className={classes.hover} onClick={productPageHandler}>
        <button onClick={addToCartHandler}>Add to cart</button>
      </div>
      <div onClick={productPageHandler} className={classes.body}>
        <span>New</span>
        <div className={classes.box}>
          <img src={props.photo} />
        </div>
        <div className={classes.info}>
          <h5>{props.title}</h5>
          <h6>${props.price}</h6>
        </div>
      </div>
    </div>
  );
};

export default Product;
