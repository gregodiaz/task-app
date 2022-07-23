import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppBar, Box, IconButton, Typography, Menu, MenuIcon, MenuItem, Container } from "@mui/material";
import { style } from "./style.js";
import { pages } from "../../../constants";
import users from "../../../db/users.json";

const NavBar = () => {
  const params = useParams();
  const navigate = useNavigate();
  const url = window.location.pathname.split("/").pop();

  const [selectedUser, setSelectedUser] = useState(users[0].firstName);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const capital = (page) => page[0].toUpperCase() + page.slice(1);

  const handleUsers = (event) => {
    setSelectedUser(event.target.textContent);
    handleCloseUserMenu();
  };
  const handlePages = (page) => {
    handleCloseNavMenu();
    navigate("/task-app/" + page);
  };

  const handleOpenNavMenu = (event) => {setAnchorElNav(event.currentTarget)};
  const handleOpenUserMenu = (event) => {setAnchorElUser(event.currentTarget)};

  const handleCloseNavMenu = () => {setAnchorElNav(null)};
  const handleCloseUserMenu = () => {setAnchorElUser(null)};

  return (
    <AppBar sx={style.appBar}>
      <Container sx={style.container}>
        <Box sx={style.box}>
          <IconButton onClick={handleOpenUserMenu} sx={style.iconButton}>
            {selectedUser}
          </IconButton>
          <Menu
            anchorOrigin={style.topAndRight}
            transformOrigin={style.topAndRight}
            sx={style.menu}
            elevation={0}
            keepMounted
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {users
              .filter((user) => user.firstName !== selectedUser)
              .map((user) => (
                <MenuItem
                  sx={style.menuItems}
                  key={user.id}
                  onClick={handleUsers}
                >
                  <Typography>{user.firstName}</Typography>
                </MenuItem>
              ))}
          </Menu>
        </Box>
        <Box sx={style.box}>
          <IconButton onClick={handleOpenNavMenu} sx={style.iconButton}>
            {capital(url)}
          </IconButton>
          <Menu
            anchorOrigin={style.topAndRight}
            transformOrigin={style.topAndRight}
            sx={style.menu}
            elevation={0}
            keepMounted
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages
              .filter((page) => page !== url)
              .map((page) => (
                <MenuItem
                  sx={style.menuItems}
                  key={page}
                  onClick={() => handlePages(page)}
                >
                  <Typography>{capital(page)}</Typography>
                </MenuItem>
              ))}
          </Menu>
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavBar;
