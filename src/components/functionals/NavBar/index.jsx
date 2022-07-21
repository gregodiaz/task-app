import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, IconButton, Typography, Menu, MenuItem, Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { changeUser } from "../../../store/userStore/usersSlice.js";
import { style } from "./style.js";
import users from "../../../dbInit/users.json";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.users);

  const pages = ["Tasks", "Statistics", "Admin"];
  const capFirstLetter = (pageName) => {
    pageName = pageName.slice(1);
    return pageName.charAt(0).toUpperCase() + pageName.slice(1);
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [selectedPage, setSelectedPage] = useState(
    capFirstLetter(window.location.pathname.slice(9))
  );

  const handleUsers = (newUser) => {
    dispatch(changeUser(newUser));
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

  useEffect(() => {
    setSelectedPage(capFirstLetter(window.location.pathname.slice(9)));
  }, [usersState, window.location.pathname]);

  return (
    <AppBar sx={style.appBar}>
      <Container sx={style.container}>
        <Box sx={style.box}>
          <IconButton onClick={handleOpenUserMenu} sx={style.iconButton}>
            {usersState[0].firstName}
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
              .filter((user) => user.firstName !== usersState[0].firstName)
              .map((user) => (
                <MenuItem
                  sx={style.menuItems}
                  key={user.id}
                  onClick={() => handleUsers(user)}
                >
                  <Typography>{user.firstName}</Typography>
                </MenuItem>
              ))}
          </Menu>
        </Box>
        <Box sx={style.box}>
          <IconButton onClick={handleOpenNavMenu} sx={style.iconButton}>
            {selectedPage}
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
              .filter((page) => page !== selectedPage)
              .map((page) => (
                <MenuItem sx={style.menuItems} key={page} onClick={handlePages}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
          </Menu>
        </Box>
      </Container>
    </AppBar>
  );
};
export default NavBar;
