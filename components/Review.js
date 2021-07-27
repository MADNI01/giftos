import classes from "./Review.module.css";
const Review = (props) => {

    const active = props.active ? classes.active : ''

    
  return (
    <div className={`${classes.review} ${active}`}>
      
      <div className={classes.text}>
        <h5>{props.name}</h5>
        <p>Default model text</p>
        <p>{props.des}</p>
      </div>
    </div>
  );
};

export default Review;
