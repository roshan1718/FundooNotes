import React from "react";
import "../icons/icon.scss";
import { StylesProvider } from "@material-ui/core/styles";
import {
  AlertOutlined,
  DropboxOutlined,
  FileImageOutlined,
  SlackSquareOutlined,
  UserAddOutlined,
  MoreOutlined
} from "@ant-design/icons";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import user_service from "../../services/userService";

export default class Icons extends React.Component {
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

  onDelete = () => {
    let Data = {
      noteIdList: [this.props.val.id],
      isDeleted: true,
    };
    user_service
      .deleteNote(Data)
      .then((data) => {
        console.log("Delete Note", data);
      })
      .catch((error) => {
        console.log("Delete error", error);
      });
    console.log("delete", Data);
  };

  onArchive = () => {
    let Data = {
      noteIdList: [this.props.val.id],
      isArchived: true,
    };
    user_service
      .archiveNote(Data)
      .then((data) => {
        console.log("Archive Note", data);
      })
      .catch((error) => {
        console.log("Archive error", error);
      });
    console.log("Archive", Data);
  };

  render = () => {
    return (
      <StylesProvider injectFirst>
        <div className="note-icons">
          <div className="note-icons-hover">
            <AlertOutlined className="icon-size" />
          </div>
          <div className="note-icons-hover">
            <UserAddOutlined className="icon-size" />
          </div>
          <div className="note-icons-hover">
            <SlackSquareOutlined className="icon-size" />
          </div>
          <div className="note-icons-hover">
            <FileImageOutlined className="icon-size" />
          </div>
          <div className="note-icons-hover">
            <DropboxOutlined className="icon-size" onClick={this.onArchive} />
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
              <MenuItem onClick={this.onDelete}>Delete</MenuItem>
            </Menu>
          </div>
        </div>
      </StylesProvider>
    );
  }
}
