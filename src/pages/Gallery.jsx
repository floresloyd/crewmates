/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line react/prop-types */
import supabase from "../Client";
import { useEffect, useState } from "react";
import Card from "../components/Card";

function Gallery() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await supabase
          .from("Crewmates")
          .select()
          .order("created_at", { ascending: true });

        // Set our data our state
        setCrewmates(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this useEffect runs once when the component mounts.

  return (
    <div>
      {crewmates && crewmates.length > 0 ? (
        crewmates.map((post, index) => (
          <Card
            key={index}
            id={crewmates[index].id}
            name={crewmates[index].name}
            speed={crewmates[index].speed}
            color={crewmates[index].color}
          />
        ))
      ) : (
        <h2>{"No crewmates yet, Create a crewmate"}</h2>
      )}
    </div>
  );
}

export default Gallery;
