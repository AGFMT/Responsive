import React from "react";
import "./Sidebar.css";
import user from "./user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHome, faGift, faPlus, faQuestionCircle, faLifeRing } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="sidebar-parent">
      <div className="user-parent">
        <img src={user} alt="" />
        <div className="name-block">
          <h5>Albin George</h5>
          <FontAwesomeIcon icon={faChevronRight} style={{ color: "#0168d5" }} />
        </div>
        <span>albingeorge2016@gmail.com</span>
      </div>

      <div className="dashboard-options">
        <button>
          <FontAwesomeIcon icon={faHome} style={{ color: "#174dab" }} /> Dashboard
        </button>
        <button>
          <FontAwesomeIcon icon={faGift} style={{ color: "#ff9900" }} /> Perks
        </button>
        <button>
          <FontAwesomeIcon icon={faPlus} style={{ color: "#4caf50" }} /> Addons
        </button>
        <button>
          <FontAwesomeIcon icon={faQuestionCircle} style={{ color: "#f44336" }} /> FAQ
        </button>
        <button>
          <FontAwesomeIcon icon={faLifeRing} style={{ color: "#00bcd4" }} /> Support
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
