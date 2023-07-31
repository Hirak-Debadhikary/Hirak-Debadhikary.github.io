import React from "react";
import "./projects.css";
import IMG1 from "./assets/IMG1.png";
import IMG2 from "./assets/IMG2.png";
import IMG3 from "./assets/IMG3.png";
import IMG4 from "./assets/IMG4.png";
import IMG5 from "./assets/IMG5.png";
import IMG6 from "./assets/Tracker.png";
const data = [
  {
    id: 1,
    image: IMG5,
    title: "wrike.com",
    para: "Wrike is a digital work management tool that lets users track and coordinate projects, combining a simple user experience and interface with enough depth for power users.",
    Tech_Stack:
      "Tech Stack : React.js | Chakra-Ui | Redux | Node.js | Express.js | MongoDB",
    work: "A collaborative project, built in 5 days by a team of 5 members.",
    github: "https://github.com/Hirak-Debadhikary/sloppy-impulse-7268",
    demo: "https://client-beta-pied.vercel.app/",
  },

  {
    id: 2,
    image: IMG2,
    title: "Clone of Dot&Key.com",
    para: "Dot and Key is an Indian skincare brand that sells natural beauty care products through its E-commerce website dotandkey.com.",
    Tech_Stack: "Tech Stack : HTML | CSS | Javascript",
    work: "A collaborative project, built in 5 days by a team of 5 members.",
    github: "https://github.com/Hirak-Debadhikary/DotandKey.com",
    demo: "https://649dab88a05bab0497b0d458--cheerful-cactus-780cf0.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Clone of hubspot.com",
    para: "There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound.",
    Tech_Stack: "Tech Stack : HTML | CSS | Javascript",
    work: "A collaborative project, built in 5 days by a team of 5 members.",
    github: "https://github.com/Hirak-Debadhikary/HubSpot",
    demo: "https://preeminent-bienenstitch-299fc7.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "CloudRocket.com",
    para: "CloudRocket was founded on the belief that software shouldn't dictate how you work—you should dictate how it works. People around the world use CloudRocket to do everything from cattle tracking to filmmaking.",
    Tech_Stack:
      "Tech Stack : React.js | Chakra-Ui | Redux | Node.js | Express.js | MongoDB",
    work: "A collaborative project, built in 5 days by a team of 5 members.",
    github: "https://github.com/Hirak-Debadhikary/CloudRocket",
    demo: "https://cloudrocket.netlify.app/",
  },
  {
    id: 5,
    image: IMG1,
    title: "Clone of MonsterIndia.com",
    para: "Monster is a global leader in connecting people and jobs. Every day, Monster aims to make every workplace happier and more productive by transforming the way employers and candidates find the right fit. For 25 years, Monster has worked to transform the recruiting industry.",
    Tech_Stack: "Tech Stack : React.js | Chakra-Ui",
    work: "A Single project, built in 5 days.",
    github: "https://github.com/Hirak-Debadhikary/Monster.com-Clone",
    demo: "https://monster-clone-hirak-debadhikary.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Project Tracker",
    para: "Introducing the Project Tracker: effortlessly track projects by status (running, closed, canceled). Add projects with start and end dates for streamlined management. Stay organized and in control. Perfect for teams and individuals managing multiple projects. Maximize productivity and achieve your goals with ease.",
    Tech_Stack:
      "Tech Stack : React.js | Chakra-Ui | Node.js | Express.js | MongoDB",
    work: "A Single project, built in 7 days.",
    github: "https://github.com/Hirak-Debadhikary/project-tracker-client",
    demo: "https://project-tracker-client.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div class="project-card  portfolio__container">
        {data.map(
          ({ id, image, title, Tech_Stack, work, para, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3 class="project-title">{title}</h3>
                <h5 class="project-description">{para}</h5>
                <h5 class="project-tech-stack">{Tech_Stack}</h5>
                <h5>{work}</h5>
                <div className="portfolio__item-cta">
                  <a
                    className="project-github-link"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ verticalAlign: "middle" }}
                  >
                    <span>Github</span>
                  </a>
                  <a
                    className="project-deployed-link"
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Live Demo</span>
                  </a>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Projects;
