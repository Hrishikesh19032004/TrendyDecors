import "./otherCardProjects.css";
import photo from "../images/team/member5.png";

export function OtherCardProjects(props) {
  return (
      <div className="other-projects-photo" onClick={props.props}>
        <img src={"https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg"} alt="member"></img>
      </div>
  );
}
