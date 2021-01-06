import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import user_service from "../../services/userService";
import "../createnote/createnote.scss";
import {
  HighlightOutlined,
  FileImageOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Icons from "../icons/icons";
import pin from "../../assets/pinn.svg";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/action/action.js";

class CreateNote extends Component {
  constructor() {
    super();
    this.state = {
      open: true,
      title: "",
      note: "",
      responce: false,
    };
  }

  handleNoteOpen = () => {
    this.setState(
      {
        open: false,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleNoteclose = () => {
    let userData = {
      title: this.state.title,
      description: this.state.note,
    };
    user_service
      .addNote(userData)
      .then((data) => {
        console.log("data after added note", data);
        this.setState(
          {
            open: true,
            title: "",
            note: "",
            reponce: true,
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch((error) => {
        console.log("error", error);
        this.setState(
          {
            open: true,
          },
          () => {
            console.log(this.state);
          }
        );
        console.log("error", error);
      });
  };

  handleInput = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div className="note">
        {this.state.open ? (
          <div className="take-note" onClick={this.handleNoteOpen}>
            <span>Take a note...</span>
            <div className="take-note-icon">
              <div className="icon">
                <CheckCircleOutlined />{" "}
              </div>
              <div className="icon">
                <HighlightOutlined />{" "}
              </div>
              <div className="icon">
                <FileImageOutlined />
              </div>
            </div>
          </div>
        ) : (
          <div className="take-note take-note-expand">
            <div className="take-note-input">
              <div className="title-pin">
                <TextField
                  className="title-input"
                  name="title"
                  onChange={this.handleInput}
                  placeholder="Title"
                  multiline
                />
                <img className="pin" src={pin} alt="" />
              </div>
              <TextField
                className="title-input"
                name="note"
                onChange={this.handleInput}
                placeholder="Take a note.."
                multiline
                inputProps={{ "aria-label": "naked" }}
              />
              <div className="position">
                <Icons val={{ color: "#ffffff" }} archive={false} />
              </div>
            </div>
            <div className="close">
              <div
                onClick={() => {
                  this.handleNoteclose();
                  this.props.getAllNotes();
                }}
              >
                close
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const matStateToProps = (states) => {
  return states;
};

export default connect(matStateToProps, actionCreators)(CreateNote);
