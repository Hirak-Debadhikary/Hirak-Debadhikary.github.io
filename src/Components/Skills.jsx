import { SiAmazonaws, SiExpress, SiHtml5, SiJsonwebtokens, SiMongodb, SiNextdotjs } from "react-icons/si";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { FaNode, FaReact } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import "./skills.css";
function Skills() {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article class="skills-card">
              <SiHtml5 class="skills-card-img" />
              <div class="skills-card-name">
                <h4>HTML</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article class="skills-card">
              <DiCss3Full class="skills-card-img" />
              <div class="skills-card-name">
                <h4>CSS</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article class="skills-card">
              <SiJavascript class="skills-card-img" />
              <div class="skills-card-name">
                <h4>JavaScript</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article class="skills-card">
              <TbBrandTailwind class="skills-card-img" />
              <div class="skills-card-name">
                <h4>Tailwind</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article class="skills-card">
              <TbBrandRedux class="skills-card-img" />
              <div class="skills-card-name">
                <h4>Redux</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article class="skills-card">
              <FaReact class="skills-card-img" />
              <div class="skills-card-name">
                <h4>React.js</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article class="skills-card">
              <SiChakraui class="skills-card-img" />
              <div class="skills-card-name">
                <h4>Chakra-Ui</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article class="skills-card">
              <TbBrandVscode class="skills-card-img" />
              <div class="skills-card-name">
                <h4>VS Code</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article class="skills-card">
              <FaNode class="skills-card-img" />
              <div class="skills-card-name">
                <h4>Node.Js</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article class="skills-card">
              <SiExpress class="skills-card-img" />
              <div class="skills-card-name">
                <h4>Express.js</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article class="skills-card">
              <SiMongodb class="skills-card-img" />
              <div class="skills-card-name">
                <h4>MongoDB</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article class="skills-card">
              <SiNextdotjs class="skills-card-img" />
              <div class="skills-card-name">
                <h4>Next.js</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article class="skills-card">
              <SiJsonwebtokens class="skills-card-img" />
              <div class="skills-card-name">
                <h4>JWT</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article class="skills-card">
              <SiAmazonaws class="skills-card-img" />
              <div class="skills-card-name">
                <h4>AWS</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
