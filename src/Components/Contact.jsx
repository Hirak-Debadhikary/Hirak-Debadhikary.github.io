// import { Box } from "@chakra-ui/react";
// import React from "react";

// const Contact = () => {
//   return (
//     <Box border="1px solid red" width="100%" height="100vh">
//       <h1>Contact</h1>
//     </Box>
//   );
// };

// export default Contact;

import { Component } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
// import { RiWhatsappLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
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
                id="contact-email"
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
                id="contact-linkedin"
                href="https://www.linkedin.com/in/hirak-debadhikary-374b9522b/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </h4>
          </div>

          <div className="contact__option">
            <FiGithub className="contact__option-icon" />
            <h4>
              
              <a
                id="contact-github"
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
            {/* <h4>Phone</h4> */}

            <h4 id="contact-phone">+91 8918217327</h4>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
