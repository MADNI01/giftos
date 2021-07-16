import classes from "./Nav.module.css";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import router from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

const Nav = (props) => {
  const [headerIsActive, setHeaderIsActive] = useState(false);
  const [user] = useAuthState(auth);
  const cartAmount = useSelector((state) => state.cartSlice.amount);
  const showAmount = cartAmount > 0 ? "active" : null;

  const logHandler = () => {
    if (user) {
      auth.signOut();
    } else {
      router.push("/signup");
    }
  };

  const headerDisplayHandler = () => {
    setHeaderIsActive(!headerIsActive);
  };

  const header = headerIsActive ? "active" : "";





  return (
    <div className={classes.all} id='home'>
      <div className={classes.logo}>
        <div className={classes.container}>
          <Link
            href="/"
            onClick={() => {
              router.push("/");
            }}
          >
            GIFTOS
          </Link>
          <div
            onClick={headerDisplayHandler}
            className={`${classes.hum} ${classes[header]}`}
          >
            <span></span>
          </div>
        </div>
      </div>
      <div className={`${classes.header} ${classes[header]}`}>
        <div className={classes.container}>
          <div className={classes.list}>
            <ul>
              <Link href="/#home">
                <li>HOME</li>
              </Link>
              <Link href="/products">
                <li>SHOP</li>
              </Link>
              <Link href='/#why'><li>WHY US</li></Link>
              <Link href='/#reviews'><li>REVIEWS</li></Link>
              <Link href='/#contact'><li>CONTACT US</li></Link>
            </ul>
          </div>
          <div className={classes.right}>
            <div>
              <PersonIcon />
              <label onClick={logHandler}>
                {user ? "Logout" : "Login/Register"}
              </label>
            </div>
            <div>
              <Link href="/cart">
                <ShoppingCartIcon />
              </Link>
              <span className={classes[showAmount]}>{cartAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
