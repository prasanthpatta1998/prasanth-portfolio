import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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

  const form = useRef();

  const { fullname, email, subject, message } = userData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fullname && email && subject && message) {
      emailjs
        .sendForm("service_g5b9115", "template_qkx7av9", form.current, {
          publicKey: "79qpISZQbSQpHraqG",
        })
        .then(
          () => {
            setUserData({
              fullname: "",
              email: "",
              subject: "",
              message: "",
            });
            alert("Sent data successfully");
          },
          (error) => {
            alert("Please try again later");
          }
        );
    } else {
      alert("Please fill the all feilds");
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
            <form className="form-container" ref={form} onSubmit={handleSubmit}>
              <strong className="text" style={{ marginBottom: "15px" }}>
                Message me
              </strong>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                value={userData.fullname}
                onChange={(e) =>
                  setUserData({ ...userData, fullname: e.target.value })
                }
                className="fullname"
              />
              <input
                type="email"
                name="user_email"
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
                name="user_subject"
                placeholder="Subject"
                value={userData.subject}
                onChange={(e) =>
                  setUserData({ ...userData, subject: e.target.value })
                }
              />
              <textarea
                name="message"
                id="message"
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
