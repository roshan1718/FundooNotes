import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import { Menu } from "antd";
import {
  TrademarkOutlined,
  MenuOutlined,
  MoreOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "../toolbar/toolbar.scss";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: "white",
    color: "black",
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    marginRight: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
      display: "block",
      marginRight: theme.spacing(8),
    },
  },
  keep: {
    width: theme.spacing(4.2),
    marginRight: theme.spacing(1),
  },
  search: {
    position: "relative",
    borderRadius: "8px",
    backgroundColor: "#F1F3F4",
    "&:hover": {
      backgroundColor: "#F1F3F4",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1.8, 1.8, 1.8, 1.8),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      width: "57ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Notes</MenuItem>
      <MenuItem onClick={handleMenuClose}>Reminder</MenuItem>
      <MenuItem onClick={handleMenuClose}>Edit table</MenuItem>
      <MenuItem onClick={handleMenuClose}>Archive</MenuItem>
      <MenuItem onClick={handleMenuClose}>Trash</MenuItem>
    </Menu>
  );
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuOutlined />
          </IconButton>
          <img
            className={classes.keep}
            src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"
            alt=""
          />
          <Typography className={classes.title} variant="h6" noWrap>
            Fundoo
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchOutlined />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <TrademarkOutlined />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreOutlined />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
