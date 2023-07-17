import React from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img src="assets/star.png" alt="" className="startImg" />
          <span className="eventText">
            <b>test</b>test test test test test
          </span>
        </div>
        <img className="eventImg" src="assets/ad.jpeg" alt="" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className="promotionTitle">Avatise</p>
        <img
          className="rightbarPromotionImg"
          src="assets/promotion/promotion1.jpg"
          alt=""
        />
        <p className="promotionName">car tile</p>
        <img src="assets/promotion/1.jpg" alt="" />
      </div>
    </div>
  );
}
