import "../css/Home.css"; // Assuming you have a Home.css file for styles

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Crewmate Creator!</h1>
      <p>
        Here is where you can create your very own set of crewmates before
        sending them off into space!
      </p>
      <img src="/src/assets/spaceship.png" alt="spaceship" />
      <img
        src="/src/assets/home-header.png"
        alt="header"
        style={{ width: "50%" }}
      />
    </div>
  );
}

export default Home;
