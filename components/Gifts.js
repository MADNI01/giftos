import classes from "./Gifts.module.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Gifts = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className={classes.saving}>
      <div className={classes.container}>
        <div className={classes.box} data-aos='fade-right'>
          <img src="./gifts.png" />
        </div>
        <div className={classes.text} data-aos='fade-left'>
          <h2>
            GIFTS FOR YOUR <br /> LOVED ONES
          </h2>
          <p>
            Omnis ex nam laudantium odit illum harum, excepturi accusamus at
            corrupti, velit blanditiis unde perspiciatis, vitae minus culpa?
            Beatae at aut consequuntur porro adipisci aliquam eaque iste ducimus
            expedita accusantium?
          </p>
          <div className={classes.btns}>
            <button>Buy now</button>
            <button>See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
