/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line react/prop-types */

import "../css/Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="crewmate-card">
      <div className="crewmate-image"></div>
      <div>
        <strong>Name of Crewmate:</strong> {props.name}
      </div>
      <div>
        <strong>Speed of Crewmate:</strong> {props.speed} mph
      </div>
      <div>
        <strong>Color of Crewmate:</strong> {props.color}
      </div>
      <Link to={`/${props.id}/edit`}>
        <button className="edit-button">Edit Crewmate</button>{" "}
      </Link>
    </div>
  );
}

export default Card;

// Sample usage
// <CrewmateCard name="cronAdd" speed={99.0} color="Purple" />
// <CrewmateCard name="Her" speed={75} color="Purple" />
