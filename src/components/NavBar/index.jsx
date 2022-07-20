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
import users from "../../dbInit/users.json";
import { useSelector, useDispatch } from "react-redux";
import { changeUser } from '../../store/userStore/usersSlice.js'

const NavBar = () => {
  const style = Style();
  const params = useParams();
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

  useEffect(() => {
    setSelectedPage(capFirstLetter(window.location.pathname.slice(9)));
  }, [window.location.pathname]);

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
