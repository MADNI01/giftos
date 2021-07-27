import classes from "./Why.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Why = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={classes.why} id="why">
      <div className={classes.container}>
        <div className={classes.title}>
          <h2 data-aos="fade-up">WHY SHOP WITH US</h2>
        </div>
        <div className={classes.cards}>
          <div className={classes.card} data-aos="fade-right">
            <img src="./truck.svg" />
            <h5>Fast Delivery</h5>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>
          <div className={classes.card} data-aos="fade-up">
            <img src="./free.svg" />
            <h5>Free Shiping</h5>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>
          <div className={classes.card} data-aos="fade-left">
            <img src="./high-quality.svg" />
            <h5>Best Quality</h5>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
