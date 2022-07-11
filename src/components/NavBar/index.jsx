import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import Style from "./style.js";

// database
import users from "../../database/users.json";

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
    navigate("/task-app/" + event.target.textContent.slice(1));
    console.log(event.target.textContent)
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
  }, [window.location.pathname]);

  return (
    <AppBar sx={Style().appBar}>
      <Container fixed sx={Style().container}>
        <Box sx={Style().box}>
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{ p: 0, color: "#f2f2f2" }}
          >
            {selectedUser}
          </IconButton>
          <Menu
            anchorOrigin={Style().topAndRight}
            transformOrigin={Style().topAndRight}
            keepMounted
            sx={{ mt: "45px" }}
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {users
              .filter((user) => user.firstName !== selectedUser)
              .map((user) => (
                <MenuItem sx={Style().menuItems} key={user.id} onClick={handleUsers}>
                  <Typography textAlign="center">{user.firstName}</Typography>
                </MenuItem>
              ))}
          </Menu>
        </Box>
        <Box sx={Style().box}>
          <IconButton
            onClick={handleOpenNavMenu}
            sx={{ p: 0, color: "#f2f2f2" }}
          >
            {selectedPage}
          </IconButton>
          <Menu
            anchorOrigin={Style().topAndRight}
            transformOrigin={Style().topAndRight}
            anchorEl={anchorElNav}
            keepMounted
            sx={{ mt: "45px" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages
              .filter((page) => page !== selectedPage)
              .map((page, index) => (
		<MenuItem sx={Style().menuItems} key={page} onClick={handlePages}>
                  <Typography textAlign="right"> {page}</Typography>
                </MenuItem>
              ))}
          </Menu>
        </Box>
      </Container>
    </AppBar>
  );
};
export default NavBar;
