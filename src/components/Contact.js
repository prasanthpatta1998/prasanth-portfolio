import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Contact = () => {
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const { fullname, email, subject, message} = userData

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (fullname && email && subject && message) {
        const response = await fetch("http://localhost:3001/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        if (response.ok) {
          setUserData({
            fullname: "",
            email: "",
            subject: "",
            message: "",
          });
          alert("Data sent successfully");
        } else {
          alert("Please try again later");
        }
      } else {
        alert("Please fill the all feilds");
      }
    } catch (error) {
      alert("Please try again later");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="max-width" style={{ color: "#fff" }}>
        <h2 className="title" style={{ color: "#fff" }}>
          Contact me
        </h2>
        <div className="contact-container">
          <div className="details-container1">
            <strong className="text">Get in touch</strong>
            <div className="user-container">
              <FaUser className="user-icon" />
              <div className="name-container">
                <h4>Name</h4>
                <p>Prasanth Patta</p>
              </div>
            </div>
            <div className="user-container">
              <FaEnvelope className="user-icon" />
              <div className="name-container">
                <h4>Email</h4>
                <a style={{ color: "#fff" }} href="mailto:example@example.com">
                  prasanthpatta1998@gmail.com
                </a>
              </div>
            </div>
            <div className="user-container">
              <FaLinkedin className="user-icon" />
              <div className="name-container">
                <a
                  style={{ color: "#fff" }}
                  href="https://www.linkedin.com/in/prasanth-patta/"
                >
                  Linkedin Profile
                </a>
              </div>
            </div>
            <div className="user-container">
              <FaGithubSquare className="user-icon" />
              <div className="name-container">
                <a
                  style={{ color: "#fff" }}
                  href="https://github.com/prasanthpatta1998"
                >
                  Github Profile
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "20px" }} className="details-container2">
            <form className="form-container" onSubmit={handleSubmit}>
              <strong className="text" style={{ marginBottom: "15px" }}>
                Message me
              </strong>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={userData.fullname}
                onChange={(e) =>
                  setUserData({ ...userData, fullname: e.target.value })
                }
                className="fullname"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                className="email"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={userData.subject}
                onChange={(e) =>
                  setUserData({ ...userData, subject: e.target.value })
                }
              />
              <textarea
                name="message"
                id=""
                placeholder="Message..."
                className="message-area"
                value={userData.message}
                onChange={(e) =>
                  setUserData({ ...userData, message: e.target.value })
                }
              ></textarea>
              <button>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
