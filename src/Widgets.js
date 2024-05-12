import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import { FiberManualRecord } from "@mui/icons-material";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets_article">
        <div className="widgets_articleLeft">
          <FiberManualRecord />
        </div>

        <div className="widgets_articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle(" Reece James is  back", "Top News in Town - 9090 readers")}
      {newsArticle("Ebola: Africa Updates", "Top News  - 19090 readers")}
      {newsArticle(" Tesla reach new heights", "Cars and Auto - 29022 readers")}
      {newsArticle(" Ethereum breaks $10k", "Crypto - 4000 readers")}
      {newsArticle("Is react outdated?", "Code - 7090 readers")}
      {newsArticle("Bulky launches new tutorials", "Top News - 9090 readers")}
      {newsArticle("Israel victory ", "War - 9090 readers")}
    </div>
  );
}

export default Widgets;
