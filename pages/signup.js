import classes from "./SignUp.module.css";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { useState } from "react";
import { auth, db } from "../firebase/firebase";
import router from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
const SignUp = () => {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user] = useAuthState(auth);

  const redirectUser = () => {
    router.push("/");

    return [];
  };
  if (user) {
    return redirectUser();
  }

  const loginHandler = () => {
    setLogin(!login);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passHandler = (e) => {
    setPass(e.target.value);
  };

  const authHandler = (e) => {
    e.preventDefault();

    if (login) {
      auth
        .signInWithEmailAndPassword(email, pass)
        .then(() => {
          router.push("/");
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      auth
        .createUserWithEmailAndPassword(email, pass)
        .then(() => {
          router.push("/");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  return (
    <div className={classes.auth}>
      <div className={classes.title}>
        <h2>GIFTOS</h2>
      </div>
      <div className={classes.info}>
        <form onSubmit={authHandler}>
          <h5 className={`${!login && classes.signshow}`}>Hello There!</h5>
          <h5 className={`${login && classes.loginshow}`}>Welcome Back!</h5>

          <div>
            <input
              id="email"
              type="email"
              placeholder=" "
              required
              onChange={emailHandler}
              value={email}
            />
            <div>
              <PersonIcon />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div>
            <input
              id="pass"
              type="password"
              placeholder=" "
              required
              onChange={passHandler}
              value={pass}
            />
            <div>
              <LockIcon />
              <label htmlFor="pass">Password</label>
            </div>
          </div>

          <span onClick={loginHandler}>{login ? "Sign Up" : "Login"}</span>
          <button className={`${!login && classes.signshow}`} type="submit">
            Sign Up
          </button>
          <button className={`${login && classes.signshow}`} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
