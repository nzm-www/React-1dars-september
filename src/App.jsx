import React from "react";
import "./App.css";
import masseg from "./assets/masseg.svg";
import logo from "./assets/logoo.svg";
import chap from "./assets/chapfon.svg";
import ong from "./assets/ongfon.svg";
import chapimg from "./assets/chapimg.png";
function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <img src={logo} alt="" />
            <ul className="nav-itms">
              <li className="nav-list">
                <a className="nav-link">Home</a>
              </li>
              <li className="nav-list">
                <a className="nav-link">About Us</a>
              </li>
              <li className="nav-list">
                <a className="nav-link">Services</a>
              </li>
              <li className="nav-list">
                <a className="nav-link">Projects</a>
              </li>
              <li className="nav-list">
                <a className="nav-link">Blog</a>
              </li>
            </ul>
            <div className="masseg">
              <img src={masseg} alt="" />
              <span>
                <p>Need help?</p>
                <h3>(307) 555-0133</h3>
              </span>
            </div>
          </nav>
        </div>
      </header>
      <main className="main">
        <img className="chapimg" src={chap} alt="" />
        <div className="container">
          <div className="wrap">
            <h1>
              Journey With Confidence <b className="b"> Migrate</b> With Us
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet <br /> rcus nunc. Duis egestas ac ante sed tincidunt.
            </p>
            <button className="btn">
              {" "}
              Learn More
              <i class="fa-solid fa-right-long"></i>
            </button>
          </div>
        </div>
        <img className="imgg" src={ong} alt="" />
      </main>
      <section className="section">
        <div className="container">
          <div className="box">
            <div className="left">
              <img src={chapimg} alt="" />
            </div>
            <div className="right">
              <p className="about">
                ABOUT US <i class="fa-solid fa-paper-plane"></i>
              </p>

              <h2>
                Unknown Wanderlust <br />
                <b className="b2">Your Journey into</b>
              </h2>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit{" "}
                <br />
                amet rcus nunc. Duis egestas ac ante sed tincidunt.
              </p>
              <div style={{ display: "flex", gap: "60px" }}>
                <div>
                  <span className="span">
                    <input type="checkbox" name="" id="" />
                    <h3>Safety Guides</h3>
                  </span>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, cons <br /> ectetur adipiscing
                    elit
                  </p>
                </div>
                <div>
                  <span className="span">
                    <input type="checkbox" name="" id="" />
                    <h3>Passport Assistance</h3>
                  </span>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, conse <br /> ctetur adipiscing
                    elit
                  </p>
                </div>
              </div>
              <button className="btn2">
                {" "}
                Read More
                <i class="fa-solid fa-right-long"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
