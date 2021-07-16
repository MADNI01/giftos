import classes from "./Saving.module.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Saving = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className={classes.saving}>
      <div className={classes.container}>
        <div className={classes.box}>
          <img data-aos='fade-right' src="./saving-img.png" />
        </div>
        <div className={classes.text} data-aos='fade-left'>
          <h2>BEST SAVINGS ON<br/> NEW ARRIVALS</h2>
          <p>
            Qui ex dolore at repellat, quia neque doloribus omnis adipisci,
            ipsum eos odio fugit ut eveniet blanditiis praesentium totam non
            nostrum dignissimos nihil eius facere et eaque. Qui, animi
            obcaecati.
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

export default Saving;
