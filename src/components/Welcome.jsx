import fullStackImage from "../assets/Full-Stack Web Developer.png";

function Welcome() {
  return (
    <section className="panel">
      <h2>Welcome, Asha Mishra!</h2>

      <p>Course: Full Stack Web Development</p>
      <p>Institute: RED & WHITE</p>
      <p>Current Date: {new Date().toLocaleDateString("en-IN")}</p>

      <img
        className="welcome-image"
        src={fullStackImage}
        alt="Become Full Stack Web Developer"
      />
    </section>
  );
}

export default Welcome;