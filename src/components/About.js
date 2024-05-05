import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column right">
            <div className="text" style={{ color: "#111" }}>
              I'm Prasanth
            </div>
            <p>
              I'm a highly motivated and results-oriented Full Stack Developer
              with a passion for crafting user-friendly and impactful web
              applications. Leveraging my expertise in front-end technologies
              (HTML, CSS, JavaScript, React.js, React Redux, Redux Toolkit) and
              back-end frameworks (Node.js, Express.js, MongoDB, SQLite), I've
              consistently delivered high-quality solutions that exceed
              expectations. I specialize in building seamless user interfaces
              using React.js and managing state efficiently with React Redux and
              the powerful Redux Toolkit.
            </p>
            <a
              href="https://drive.google.com/file/d/1-ZeVgxhIMsj4fsXkaqOUg2y8BZ9FCdCA/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
