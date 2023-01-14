import { Component } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
// import { RiWhatsappLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="contact__options">
          <div className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>
              {" "}
              <a
                href="mailto:debadhikaryhirak@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
            </h4>
          </div>

          <div className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>
              {" "}
              <a
                href="https://www.linkedin.com/in/hirak-debadhikary-374b9522b/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </h4>
            {/* <h4><a href=""></a>Linkedin</h4> */}
            {/* <h5>Dummy Hungry</h5> */}
          </div>

          <div className="contact__option">
            <BsGithub className="contact__option-icon" />
            <h4>
              {" "}
              <a
                href="https://github.com/Hirak-Debadhikary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </h4>
            {/* <h5>Dummy Hungry</h5> */}
          </div>

          <div className="contact__option">
            <BsFillTelephoneOutboundFill className="contact__option-icon" />
            <h4>Phone</h4>

            <h5>+91 8918217327</h5>
          </div>
        </div>
        {/*        
          <h4 id="portfolio">Contact Me</h4>
          <div id="con-main-card">
            <a
              href="mailto:debadhikaryhirak@gmail.com"
              target="_blank"
              class="hvr-forward"
              rel="noreferrer"
            >
              <div class="con-card transition">
                <i class="fa fa-envelope" target="_blank"></i>
                <h6> debadhikaryhirak@gmail.com</h6>
              </div>
            </a>

            <a
              href="https://github.com/Hirak-Debadhikary"
              target="_blank"
              class="hvr-forward"
              rel="noreferrer"
            >
              <div class="con-card transition">
                <i class="fa fa-github" target="_blank"></i>
                <h6> Github</h6>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/hirak-debadhikary-374b9522b/"
              target="_blank"
              class="hvr-forward"
              rel="noreferrer"
            >
              <div class="con-card transition">
                <i class="fa fa-linkedin-square" target="_blank"></i>
                <h6> LinkedIn</h6>
              </div>
            </a>

            <a
              href="tel:+8918217327"
              target="_blank"
              class="hvr-forward"
              rel="noreferrer"
            >
              <div class="con-card transition">
                <i class="fa fa-phone" target="_blank"></i>
                <h6> +91 8918217327</h6>
              </div>
            </a>
          </div> */}
      </section>
    );
  }
}

export default Contact;
