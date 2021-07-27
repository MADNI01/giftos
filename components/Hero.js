import classes from "./Hero.module.css";
import Nav from "./Nav";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={classes.hero}>
        <Nav scroll={true} link='#' />
      
      <div className={classes.slider}>
        <div className={classes.container}>
          <div className={classes.text}>
            <h1>Welcome To Our Gift Shop</h1>
            <p>
              Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet
              non necessitatibus error distinctio mollitia suscipit. Nostrum
              fugit doloribus consequatur distinctio esse, possimus maiores
              aliquid repellat beatae cum, perspiciatis enim, accusantium
            </p>
            <Link href='#contact'><button>CONTACT US</button></Link>
          </div>
          <div className={classes.img}>
            <img src="./slider-img.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
