import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/signup", {
        name,
        email,
        password,
      });

      if (res.data === "exist") {
        alert("User already exists");
      } else if (res.data === "notexist") {
        window.alert("Successfully created account!");
        navigate("/Login", { state: { id: name } });
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  }

  return (
    <>
      <section className="sec-4">
        <section className="login">
          <div className="title">
            <center>
              <h1>My Account</h1>
            </center>
            <center>
              <h4>Home / My Account</h4>
            </center>
          </div>
          <center>
            <br />
            <br />
            <h3>Sign Up</h3>
          </center>
          <div style={{ padding: "50px 30px" }}>
            <center>
              <form onSubmit={submit} className="form">
                <FontAwesomeIcon icon={faUser} className="icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <br />
                <br />
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br />
                <br />
                <FontAwesomeIcon icon={faKey} className="icon" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <br />
                <br />
                <input type="submit" value="Register" id="Register" />
              </form>
            </center>
          </div>
        </section>
      </section>
      <section className="sec-7" id="int">
        <center>
          <p style={{ color: "#777", fontSize: "15px" }}>
            &copy; 2024 SPORTS | DESIGNED BY SPORTS TEAM
          </p>
        </center>
      </section>
    </>
  );
}

export default Signup;
