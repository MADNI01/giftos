import classes from "./ContactUs.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ContactUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={classes.contact} id="contact">
      <div className={classes.container}>
        <div className={classes.title}>
          <h2 data-aos="fade-up">CONTACT US</h2>
        </div>
        <div className={classes.info}>
          <div className={classes.address} data-aos="fade-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d804.3949543818902!2d36.57048797077028!3d36.249699798754115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152582d4c6a31667%3A0x7d071fa020a5ac58!2zxLBrcmFhIFVu!5e0!3m2!1sar!2str!4v1626053337634!5m2!1sar!2str"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className={classes.form} data-aos="fade-left">
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" required />
              <input type="text" placeholder="Message" required />
              <button>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
