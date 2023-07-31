import React from "react";
import Calender from "./Calender";
import "./github.css"

const data = [
  {
    id: 1,
    image:
      "https://github-readme-stats.vercel.app/api?username=Hirak-Debadhikary&theme=dark&hide_border=false&include_all_commits=false&count_private=false",
  },
  {
    id: 2,
    image:
      "https://github-readme-stats.vercel.app/api/top-langs/?username=Hirak-Debadhikary&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact",
  },
  {
    id: 3,
    image:
      "https://github-readme-streak-stats.herokuapp.com/?user=Hirak-Debadhikary&theme=dark&hide_border=false",
  },
];

const Github = () => {
  return (
    <div>
      <section id="contact-github">
        <h5>My GitHub</h5>
        <h2>Statistics</h2>
        <Calender />
        <div className="container statistics__container">
          {data.map(({ id, image }) => {
            return (
              <article key={id} className="statistics__item">
                <div className="statistics__item-image">
                  <img src={image} alt="" />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Github;
