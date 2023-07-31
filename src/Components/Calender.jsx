import GitHubCalendar from "react-github-calendar";
import "./calender.css";

const data = [
  {
    id: 1,
    image:
      "https://github-readme-stats.vercel.app/api?username=Hirak-Debadhikary&theme=dark&hide_border=false&include_all_commits=false&count_private=false",
  },
];

const Calender = () => {
  return (
    <div class="react-activity-calendar">
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
};

export default Calender;
