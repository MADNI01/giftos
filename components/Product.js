import classes from "./Product.module.css";

import router from "next/router";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Product = (props) => {
  const productPageHandler = () => {
    router.push(`/product/${props.id}`);
  };
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className={classes.product} onClick={productPageHandler} data-aos='fade-up' >
      <div className={classes.hover}>
        <button>Add to cart</button>
      </div>
      <span>New</span>
      <div className={classes.box}>
        <img src={props.photo} />
      </div>
      <div className={classes.info}>
        <h5>{props.title}</h5>
        <h6>${props.price}</h6>
      </div>
    </div>
  );
};

export default Product;
