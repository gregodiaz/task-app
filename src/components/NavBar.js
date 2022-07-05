import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import users from "../database/users.json";

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const pages = ["Tasks", "Statistics", "Admin"];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [selectedUser, setSelectedUser] = useState("EveryOne");
  const [selectedPage, setSelectedPage] = useState(pages[0]);

  const handleUsers = (event) => {
    setSelectedUser(event.target.textContent);
    handleCloseUserMenu();
  };
  const handlePages = (event) => {
    setSelectedPage(event.target.textContent);
    handleCloseUserMenu();
    navigate("/" + event.target.textContent);
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
    <AppBar position="static">
      <Container
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
            backgroundColor: "#474747",
            height: "9vh",
            width: "20vw",
            minWidth: 169,
          }}
        >
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{ p: 0, color: "#f2f2f2" }}
          >
            {selectedUser}
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
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
            {users.map((user) => (
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
            backgroundColor: "#3d3d3d",
            height: "9vh",
            width: "15vw",
            minWidth: 169,
          }}
        >
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{ p: 0, color: "#f2f2f2" }}
          >
            {selectedPage}
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
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
            {pages.map((page, index) => (
              <MenuItem key={page} onClick={handlePages}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
