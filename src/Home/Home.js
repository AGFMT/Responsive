import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUsers,
  faHdd,
  faEnvelope,
  faCaretRight,
  faCheckDouble
} from "@fortawesome/free-solid-svg-icons";

import plansData from "./plan.json";

function Home() {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="home-parent">
      <Sidebar />
      <div className="home-contents">
        <div className="plan-heading">
          <h1>Choose a plan that's just right for you !</h1>
          <div className="plan-selector">
            <div
              className={`plan-monthly ${
                selectedPlan === "monthly" && "selected"
              }`}
              onClick={() => handlePlanChange("monthly")}
            >
              <h6>Monthly</h6>
            </div>
            <div
              className={`plan-annualy ${
                selectedPlan === "annualy" && "selected"
              }`}
              onClick={() => handlePlanChange("annualy")}
            >
              <h6>Annualy</h6>
             
            </div>
          </div>
        </div>
        <div className="hero-section">
          <div className="plan-card">
            {plansData.products.map((plan) => (
              <div key={plan.name} className="individual-plan">
                <h2>{plan.name}</h2>
                <p style={{ position: "relative", fontSize: "10px" }}>
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      width: "20%",
                      height: "1px",
                      backgroundColor: "red",
                      transform: "translateY(-50%) rotate(-170deg)",
                      zIndex: 1
                    }}
                  ></span>
                  ${plan.regularPrice}
                </p>
                <p>${plan.offerPrice}</p>
                <button
                  className="plan-button"
                  style={{
                    backgroundColor: plan.color,
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "5px"
                  }}
                >
                  Get started
                </button>
                <div
                  style={{ width: "90%", heigh: "1px", background: "black" }}
                ></div>
                <p style={{ fontSize: "10px" }}>what you'll get</p>
                <p>
                  <FontAwesomeIcon icon={faUsers} /> Upto {plan.userLimit} Users
                </p>
                <p>
                  <FontAwesomeIcon icon={faHdd} /> Upto {plan.storageLimit}{" "}
                  Storage
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  {plan.support.email ? "Email" : ""}
                  {plan.support.email && plan.support.chat ? "+" : ""}
                  {plan.support.chat ? "Chat" : ""}
                  {(plan.support.email || plan.support.chat) &&
                  plan.support.whatsapp
                    ? "+"
                    : ""}
                  {plan.support.whatsapp ? "WhatsApp" : ""}
                  {!plan.support.email &&
                  !plan.support.chat &&
                  !plan.support.whatsapp
                    ? "No support"
                    : ""}{" "}
                  Support
                </p>
                <div>
                  <a href="#/" style={{ color: "black" }}>
                    Explore Features
                  </a>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    style={{
                      background: plan.color,
                      cursor: "pointer",
                      marginLeft: "5px"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="final-section">
          <div className="free-section">
            <div className="free-section-part-1">
              <div
                style={{
                  fontSize: "10px",
                  textAlign: "center",
                  background: "#5dc65d",
                  borderRadius: "20%",
                  padding: "5px",
                  color: "white",
                  width: "80px",
                  height: "25px"
                }}
              >
                <p>free forever</p>
              </div>
              <h3>Free Starter</h3>
              <p>
                the quickest and easiest way to try protocols with basic
                functionalities
              </p>
              <button
                className="plan-button"
                style={{
                  backgroundColor: "#5dc65d",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "5px"
                }}
              >
                Get started
              </button>
            </div>
            <div className="free-section-part-2">
              <span>what you'll get</span>
              <p>
                  <FontAwesomeIcon icon={faUsers} /> Upto 8 Users
                </p>
                <p>
                  <FontAwesomeIcon icon={faHdd} /> Upto 8gb
                  Storage
                </p>
                <p><FontAwesomeIcon icon={faEnvelope} /> support</p>

                <p><FontAwesomeIcon icon={faCheckDouble} /> Basic documents task flow..</p>
            </div>
          </div>
          <div className="premium-section">
          <div className="premium-section-part-1">
          <div
                style={{
                  fontSize: "10px",
                  textAlign: "center",
                  background: "rgb(56 182 175)",
                  borderRadius: "20%",
                  padding: "5px",
                  color: "white",
                  width: "80px",
                  height: "25px"
                }}
              >
                <p>Lets connect</p>
              </div>
              <h3>Enterprice Plan</h3>
              <p>
                the quickest and easiest way to try protocols with basic
                functionalities
              </p>
              <button
                className="plan-button"
                style={{
                  backgroundColor: "rgb(56 182 175)",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "5px"
                }}
              >
                Get started
              </button>
          </div>
          <div className="premium-section-part-2">
          <span>what you'll get</span>
          <p>
                  <FontAwesomeIcon icon={faUsers} /> More than 75 Users
                </p>
                <p><FontAwesomeIcon icon={faCheckDouble} /> Basic documents task flow..</p> 
          </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
