import React, { Component } from "react";
import "../icons/icon.scss";
import { StylesProvider } from "@material-ui/core/styles";
import {
  AlertOutlined,
  VerticalAlignBottomOutlined,
  FileImageOutlined,
  UserAddOutlined,
  MoreOutlined,
  ToTopOutlined,
} from "@ant-design/icons";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "../icons/popper";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/action/action.js";
import user_service from "../../services/userService";

class Icons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  onSetColor = (color) => {
    let Data = {
      noteIdList: [this.props.val.id],
      color: color.code,
    };
    user_service
      .changeColor(Data)
      .then((data) => {
        console.log("Color Note", data);
      })
      .catch((error) => {
        console.log("Color error", error);
      });
    console.log("Color", Data);
  };

  render = () => {
    return (
      <StylesProvider injectFirst>
        <div
          className="note-icons"
          style={{
            backgroundColor: this.props.val.color,
          }}
        >
          <div className="note-icons-hover">
            <AlertOutlined className="icon-size" />
          </div>
          <div className="note-icons-hover">
            <UserAddOutlined className="icon-size" />
          </div>
          <div className="note-icons-hover">
            <Popper
              putColor={(Data) => {
                this.onSetColor(Data);
                this.props.getAllNotes();
              }}
            />
          </div>
          <div className="note-icons-hover">
            <FileImageOutlined className="icon-size" />
          </div>
          <div className="note-icons-hover">
            {this.state.archive === false ||
            this.props.val.isArchived === false ? (
              <VerticalAlignBottomOutlined
                className="icon-size"
                onClick={() => {
                  this.props.archive();
                }}
              />
            ) : (
              <ToTopOutlined
                className="icon-size"
                onClick={() => {
                  this.props.unarchive();
                }}
              />
            )}
          </div>
          <div>
            <div className="note-icons-hover">
              <MoreOutlined onClick={this.handleClick} />
            </div>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem
                onClick={() => {
                  this.props.delete();
                  this.handleClose();
                }}
              >
                Delete
              </MenuItem>{" "}
            </Menu>
          </div>
        </div>
      </StylesProvider>
    );
  };
}
const matStateToProps = (states) => {
  return states;
};

export default connect(matStateToProps, actionCreators)(Icons);
