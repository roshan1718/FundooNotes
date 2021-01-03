import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import { Menu } from "antd";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  TrademarkOutlined,
  MenuOutlined,
  MoreOutlined,
  SearchOutlined,
  DropboxOutlined,
  DeleteOutlined,
  SnippetsOutlined,
  EditOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "../toolbar/toolbar.scss";
import { ProtectedRoute } from "../../services/auth/protected";
import { Link, Switch } from "react-router-dom";
import Note from '../notebox/notebox';
import Trash from '../trash/trash';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
  listIcon: {
    display: "flex",
    flexDirection: "column",
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
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "white",
    color: "#646868",
    padding: theme.spacing(0, 1),
    paddingLeft: "16px",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <TrademarkOutlined />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
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
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}></div>
        <List onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
          <ListItem button key={"Notes"} className="notes">
            <Link to="/dashboard">
              <ListItemIcon>
                <SnippetsOutlined />
              </ListItemIcon>
            </Link>
            <ListItemText primary={"Notes"} />
          </ListItem>
          <ListItem button key={"Remainders"} className="remainder">
            <ListItemIcon>
              <NotificationOutlined />
            </ListItemIcon>
            <ListItemText primary={"Remainders"} />
          </ListItem>
          <ListItem button key={"Editlabels"} className="editlabels">
            <ListItemIcon>
              <EditOutlined />
            </ListItemIcon>
            <ListItemText primary={"Edit labels"} />
          </ListItem>
          <ListItem button key={"Archive"} className="archive">
            <ListItemIcon>
              <DropboxOutlined />
            </ListItemIcon>
            <ListItemText primary={"Archive"} />
          </ListItem>
          <ListItem button key={"Trash"} className="trash">
            <Link to="/dashboard/trash">
              <ListItemIcon>
                <DeleteOutlined />
              </ListItemIcon>
            </Link>
            <ListItemText primary={"Trash"} />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
          <Switch>
            <ProtectedRoute exact path={"/dashboard"} component={Note} />
            <ProtectedRoute exact path={"/dashboard/trash"} component={Trash} />
          </Switch>
        </div>
      </main>
    </div>
  );
}
