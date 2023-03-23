import React from "react";
import {
  CDBIcon,
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Menu
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/search" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="search">Search</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/myLibrary" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="th-large">
                My Library
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/aboutUs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sticky-note">About Us</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            <a
              className="text-decoration-none"
              style={{ color: "inherit" }}
              target="_blank"
              href="https://github.com/clairegreenwood83/reading-room-virtual-bookclub"
            >
              <CDBIcon fab icon="github" />
              GitHub
            </a>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
