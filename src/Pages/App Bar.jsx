import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Swal from "sweetalert2";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import About from "../Pages/About";

export default function PrimarySearchAppBar(props) {
  const navigate = useNavigate();
  const [msg, setMsg] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  React.useEffect(() => {
    if (localStorage.getItem("valueAlertArr")) {
      setMsg(JSON.parse(localStorage.getItem("valueAlertArr")));
      console.log(msg);
    }
  }, []);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    handleMobileMenuClose();
  };
  const LogOut = () => {
    props.reducer({ type: "showNav", showNav: false });
    localStorage.clear();
    navigate("/Sign-In");
  };
  const Account_Settings = () => {
    handleMenuClose();
    navigate("/Account_Settings");
  };
  const about = () => {
    console.log("dsji");
  };
  const SendMeEmail = () => {
    handleMenuClose();
    navigate("/SendMeEmail");
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const showNotifications = () => {
    console.log(props.stateGlobal.AddNotificationsIconAlertNav);
    props.reducer({
      type: "ClearNotificationsIconAlertNav",
      ClearNotificationsIconAlertNav: 0,
    });

    if (props.stateGlobal.AddNotificationsIconAlertNav.length !== 0) {
      let html =
        "<ol><br/>" +
        props.stateGlobal.AddNotificationsIconAlertNav.map(function (task) {
          return "<li>" + task + "</li>";
        }).join(" ") +
        "</ol>";

      Swal.fire({
        title: "<h1>Your Tasks ! <h1/>",
        icon: "info",
        html: html,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close !',
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
    } else {
      let title = "<h1>No Tasks ! <h1/>";
      Swal.fire({
        title: title,
        icon: "info",
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close !',
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={Account_Settings}>Change Account Settings</MenuItem>
      <MenuItem onClick={SendMeEmail}>Send Me An Email</MenuItem>
      <MenuItem onClick={LogOut}>Log Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge
            badgeContent={props.stateGlobal.NotificationsIconAlertNav}
            color="error"
          >
            <NotificationsIcon onClick={showNotifications} />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={about}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <About />
            </IconButton>
            <Typography
              onClick={() => {
                navigate("/HomePage");
              }}
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Avri's App !
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge
                  badgeContent={props.stateGlobal.NotificationsIconAlertNav}
                  color="error"
                >
                  <NotificationsIcon onClick={showNotifications} />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
}
