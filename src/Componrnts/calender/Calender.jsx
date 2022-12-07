import { Component } from "react";
import GitHubCalendar from "react-github-calendar";
import "./calender.css";

const data = [
  {
    id: 1,
    image:
      "https://github-readme-stats.vercel.app/api?username=Hirak-Debadhikary&theme=dark&hide_border=false&include_all_commits=false&count_private=false",
  },
];
class Calender extends Component {
  render() {
    return (
      <div className="container calender__container">
        {data.map(({ id, image }) => {
          return (
            <article key={id} className="calender__item">
              <div className="calender__item-image">
                <GitHubCalendar username="Hirak-Debadhikary" />
              </div>
            </article>
          );
        })}
      </div>
    );
  }
}

export default Calender;
