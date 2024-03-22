import React from "react";
import "./style.css"; // Importing the CSS file directly
import image1 from "./IMG/1.png";
import image31 from "./IMG/asset 31.jpeg";
import image40 from "./IMG/asset 40.jpg";
import footballImage from "./IMG/football.jpg";
import rugbyImage from "./IMG/rugby.jpg";
import horseRaceImage from "./IMG/horse race.jpg";
import tennisImage from "./IMG/tennis.jpg";
import golfImage from "./IMG/golf.jpg";
import formulaOneImage from "./IMG/formula one.jpg";
import swimmingImage from "./IMG/swimming.jpg";
import weightImage from "./IMG/weight.jpeg";
import basketballImage from "./IMG/basketball.jpg";
const Home = () => {
  return (
    <div>
      <section className="sec-1">
        <div className="img-part">
          <img src={image31} alt="Background" />
          <div className="content-part">
            <h1>FIGHT TILL THE END</h1>
            <h1>PAIN IS TEMPORARY, GLORY IS FOREVER</h1>
          </div>
          <div className="square"></div>
        </div>
      </section>
      <section className="sec-2">
        <div className="container">
          <h1 className="sec-2-text">
            <b>VIP SPORT EVENTS AND HOSPITALITY</b>
          </h1>
          <a>
            With a passion for sports and the finer things in life,
            Sportevents.me takes your VIP experiences for sports and
            entertainment to another level.
          </a>
        </div>
        <div className="card-container">
          <div className="card-part">
            <div className="card">
              <img src={footballImage} alt="Football" />
              <div className="text">
                <p>This is the text that will appear on hover.</p>
              </div>
            </div>

            <div className="card">
              <img src={rugbyImage} alt="Rugby" />
              <div className="text">
                <p>This is the text that will appear on hover.</p>
              </div>
            </div>

            <div className="card">
              <img src={horseRaceImage} alt="Horse Race" />
              <div className="text">
                <p>This is the text that will appear on hover.</p>
              </div>
            </div>
          </div>
          <div className="card-part">
            <div className="card">
              <img src={tennisImage} alt="Tennis" />
              <div className="text">
                <p>This is the text that will appear on hover.</p>
              </div>
            </div>

            <div className="card">
              <img src={golfImage} alt="Golf" />
              <div className="text">
                <p>This is the text that will appear on hover.</p>
              </div>
            </div>

            <div className="card">
              <img src={formulaOneImage} alt="Formula One" />
              <div className="text">
                <p>This is the text that will appear on hover.</p>
              </div>
            </div>
          </div>

          <div className="card-part">
            <div className="card">
              <img src={swimmingImage} alt="Swimming" />
              <div className="text">
                <p>This is the text that will appear on hover.</p>
              </div>
            </div>

            <div className="card">
              <img src={weightImage} alt="Weightlifting" />
              <div className="text">
                <p>This is the text that will appear on hover.</p>
              </div>
            </div>

            <div className="card">
              <img src={basketballImage} alt="Basketball" />
              <div className="text">
                <p>This is the text that will appear on hover.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-3">
        <section className="upcoming-section">
          <div className="upcoming-item">
            <div className="background-image">
              <img src={image40} alt="Background" />
              <div className="text-overlay">
                <h2>UPCOMING EVENTS</h2>
                <a href="#">Click Here to see more events!</a>
              </div>
            </div>
          </div>
          {/* Add more upcoming items as needed */}
        </section>
      </section>
      <section className="sec-7" id="int">
        <center>
          <p style={{ color: "#777", fontSize: "15px" }}>
            &copy; 2024 SPORTS | DESIGNED BY SPORTS TEAM
          </p>
        </center>
      </section>
    </div>
  );
};
export default Home;