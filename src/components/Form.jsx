/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line react/prop-types */
import supabase from "../Client";
import "../css/Create.css";
import React, { useState } from "react";

function Form({ id }) {
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");
  console.log("test", id);

  const createCrewMate = async (event) => {
    console.log({
      name: name,
      speed: speed,
      color: color,
    });
    if (id) {
      console.log("EDIT");
      await supabase
        .from("Crewmates")
        .update({ name, speed, color })
        .eq("id", id);
      alert("EDIT SUCCESS");
      window.location = "/";
    } else {
      await supabase.from("Crewmates").insert({ name, speed, color }).select();
      alert("CREATE SUCCESS");
      window.location = "/";
    }
  };

  const deleteCrewMate = async (event) => {
    event.preventDefault();

    await supabase.from("Crewmates").delete().eq("id", id);
    alert("DELETE SUCCESS");
    window.location = "/";
  };

  return (
    <div className="background">
      <div className="crewmate-container">
        <h1>Create a New Crewmate</h1>

        <div className="input-container">
          <div className="input-box">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter crewmate's name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label>Speed (mph):</label>
            <input
              type="text"
              placeholder="Enter speed in mph"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
            />
          </div>
          <div className="color-options">
            <label>Color:</label>
            <ul>
              {[
                "Red",
                "Green",
                "Blue",
                "Purple",
                "Yellow",
                "Orange",
                "Pink",
                "Rainbow",
              ].map((currentColor) => (
                <li key={currentColor}>
                  <label>
                    <input
                      type="radio"
                      name="crewmateColor"
                      value={currentColor}
                      checked={color === currentColor}
                      onChange={() => setColor(currentColor)}
                    />
                    {currentColor}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button className="btn btn-light btn-space" onClick={createCrewMate}>
          Create Crewmate
        </button>
        {id && (
          <button className="btn btn-danger btn-space" onClick={deleteCrewMate}>
            Delete Crewmate
          </button>
        )}
      </div>
    </div>
  );
}

export default Form;
