import React from "react";
import "./Share.css";

import { Gif, Image, Face, Analytics } from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
      <div className="shareTop">
        <img src="/assets/person/1.jpeg" className="shareProfileImg" alt="" />
        <input
          type="text"
          className="shareInput"
          placeholder="what do you do now?"
        />
      </div>
      <hr className="shareHr" />

      <div className="shareButtons">
        <div className="shareOptions">
          <div className="shareOption">
            <Image className="shareIcon" htmlColor="gray" />
            <span className="shareOptionText">Photo</span>
          </div>

          <div className="shareOption">
            <Gif className="shareIcon" htmlColor="gray" />
            <span className="shareOptionText">Gif</span>
          </div>

          <div className="shareOption">
            <Face className="shareIcon" htmlColor="gray" />
            <span className="shareOptionText">Face</span>
          </div>

          <div className="shareOption">
            <Analytics className="shareIcon" htmlColor="gray" />
            <span className="shareOptionText">Analytics</span>
          </div>
        </div>

        <button className="shareButton">Submit</button>
      </div>
    </div>
  );
}
