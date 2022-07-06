import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "./Button.js";
import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Menu,
  MenuIcon,
  MenuItem,
  Container,
} from "@mui/material";

import users from "../database/users.json";

const NavBar = () => {
  const navigate = useNavigate();
  const params = useParams();
  const pages = ["Tasks", "Statistics", "Admin"];
  const capFirstLetter = (pageName) => {
    pageName = pageName.slice(1);
    return pageName.charAt(0).toUpperCase() + pageName.slice(1);
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [selectedUser, setSelectedUser] = useState(users[0].firstName);
  const [selectedPage, setSelectedPage] = useState(
    capFirstLetter(window.location.pathname.slice(9))
  );

  const handleUsers = (event) => {
    setSelectedUser(event.target.textContent);
    handleCloseUserMenu();
  };
  const handlePages = (event) => {
    setSelectedPage(event.target.textContent);
    handleCloseNavMenu();
    navigate("/task-app/" + event.target.textContent);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#2f2f2f",
        width: "100vw",
      }}
      position="static"
    >
      <Container
        fixed
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
          backgroundColor: "#2f2f2f",
          height: "9vh",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(to right , #474747, #2f2f2f)",
            height: "9vh",
            width: "20vw",
            minWidth: 143,
            paddingLeft: 2,
            borderTopLeftRadius: 43,
            borderBottomLeftRadius: 43,
          }}
        >
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{ p: 0, color: "#f2f2f2" }}
          >
            {selectedUser}
          </IconButton>
          <Menu
            sx={{
              mt: "45px",
            }}
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {users
              .filter((user) => user.firstName !== selectedUser)
              .map((user) => (
                <MenuItem key={user.id} onClick={handleUsers}>
                  <Typography textAlign="center">{user.firstName}</Typography>
                </MenuItem>
              ))}
          </Menu>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(to right , #3d3d3d, #2f2f2f)",
            height: "9vh",
            width: "15vw",
            minWidth: 143,
            marginRight: 1,
            paddingLeft: 2,
            borderTopLeftRadius: 43,
            borderBottomLeftRadius: 43,
          }}
        >
          <IconButton
            onClick={handleOpenNavMenu}
            sx={{ p: 0, color: "#f2f2f2" }}
          >
            {selectedPage}
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages
              .filter((page) => page !== selectedPage)
              .map((page, index) => (
                <MenuItem key={page} onClick={handlePages}>
                  <Typography textAlign="right">{page}</Typography>
                </MenuItem>
              ))}
          </Menu>
        </Box>
      </Container>
    </AppBar>
  );
};
export default NavBar;
