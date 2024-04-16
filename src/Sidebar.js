import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import IslandImage from "../src/assets/Island.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={IslandImage} alt="Island" />
        <Avatar className="sidebar_avatar" />
        <h2>Daniel Omole</h2>
        <h4>danielomole18@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on your post</p>
          <p className="sidebar_statNumber">2,443</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
