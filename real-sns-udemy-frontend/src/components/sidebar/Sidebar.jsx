import {
  Bookmark,
  Home,
  MessageRounded,
  Notifications,
  Person,
  Search,
  Settings,
} from "@mui/icons-material";
import React from "react";

import "./Sidebar.css";
import CloseFriend from "../closeFriend/CloseFriend";
import { Users } from "../../dummyData";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" htmlColor="gray" />
            <span className="sidebarListitemText">Home</span>
          </li>

          <li className="sidebarListItem">
            <Search className="sidebarIcon" htmlColor="gray" />
            <span className="sidebarListitemText">Search</span>
          </li>

          <li className="sidebarListItem">
            <Notifications className="sidebarIcon" htmlColor="gray" />
            <span className="sidebarListitemText">Notifications</span>
          </li>

          <li className="sidebarListItem">
            <MessageRounded className="sidebarIcon" htmlColor="gray" />
            <span className="sidebarListitemText">Message</span>
          </li>

          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" htmlColor="gray" />
            <span className="sidebarListitemText">BookMark</span>
          </li>

          <li className="sidebarListItem">
            <Person className="sidebarIcon" htmlColor="gray" />
            <span className="sidebarListitemText">Profile</span>
          </li>
          <li className="sidebarListItem">
            <Settings className="sidebarIcon" htmlColor="gray" />
            <span className="sidebarListitemText">Setting</span>
          </li>
        </ul>

        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <CloseFriend user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
