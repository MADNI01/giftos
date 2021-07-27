import classes from "./Footer.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import RoomIcon from "@material-ui/icons/Room";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={classes.footer} style={{overflow:'hidden'}}>
      <div className={classes.social}>
        <div>
          <a href="https://www.facebook.com" target="_blank">
            <FacebookIcon />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com" target="_blank">
            <InstagramIcon />
          </a>
        </div>
        <div>
          <a href="https://www.twitter.com" target="_blank">
            <TwitterIcon />
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com" target="_blank">
            <YouTubeIcon />
          </a>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.info}>
          <div className={classes.card} data-aos='fade-right'>
            <h5>ABOUT US</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doLorem ipsum dolor sit amet,
            </p>
          </div>
          <form className={classes.card} data-aos='fade-up'>
            <h5>Newsletter</h5>
            <input type="email" required placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </form>
          <div className={classes.card} data-aos='fade-up'>
            <h5>NEED HELP</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doLorem ipsum dolor sit amet,
            </p>
          </div>
          <div className={classes.card} data-aos='fade-left'>
            <h5>CONTACT US</h5>
            <ul>
              <li>
                <RoomIcon /> Hatay Turkey 31000
              </li>
              <li>
                <CallIcon /> 000 000 0000
              </li>
              <li>
                <EmailIcon /> majdkot0@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
