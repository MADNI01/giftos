import { useEffect, useState } from "react";
import Review from "./Review";
import classes from "./Reviwes.module.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Reviews = () => {
  const [isActive, setIsActive] = useState(1);

  const reviewsArray = [
    {
      name: "Rochak",
      des: `Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
    },
    {
      name: "Brad Johns",
      des: `Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various`,
    },
    {
      name: "Morijorch",
      des: `editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various`,
    },
  ];

  const nextActiveHandler = () => {
    if (isActive == reviewsArray.length - 1) {
      setIsActive(0);
    } else {
      setIsActive(isActive + 1);
    }
  };
  const prevActiveHandler = () => {
    if (isActive == 0) {
      setIsActive(reviewsArray.length - 1);
    } else {
      setIsActive(isActive - 1);
    }
  };
  useEffect(()=>{
    setTimeout(() => {
      nextActiveHandler()
    }, 10000);
    Aos.init({duration:1000})
  },[isActive])
  return (
    <div className={classes.reviews} id='reviews'>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2 data-aos='fade-up'>REVIEWS</h2>
        </div>
        <div className={classes.review} data-aos='fade-up'>
          <div className={classes.btns}>
            <span className={classes.next} onClick={nextActiveHandler} ></span>
            <span className={classes.prev} onClick={prevActiveHandler} ></span>
          </div>
          {reviewsArray.map((item, n) => (
            <Review
              key={n}
              name={item.name}
              des={item.des}
              active={isActive == n && "active"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
