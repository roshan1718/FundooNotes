import React, { Component } from "react";
import "../displaynote/displaynote.scss";
import DisplayNote from "./displaynote";
import { connect } from "react-redux";
import { getAllNotes } from "../../redux/action/action.js";

class Note extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
    console.log("notes :", this.state.notes);
  }

  // getAllNotes = () => {
  //   user_service
  //     .getAllNotes()
  //     .then((data) => {
  //       console.log("All Notes", data.data.data);

  //       this.setState(
  //         {
  //           notes: data.data.data.data,
  //         },
  //         () => console.log("All Notes call", this.state.notes)
  //       );
  //     })
  //     .catch((error) => {});
  // };

  note = (val) => {
    return <DisplayNote value={val} />;
  };

  render() {
    return (
      <>
        <div className="note-position">
          {this.props.Notes.filter((element) => {
            return (
              element.isArchived === false &&
              element.isDeleted === false &&
              element.isPined === true
            );
          })
            .reverse()
            .map(this.note)}
        </div>
        <div className="pin-unpin">
          <div className="note-position">
            {this.props.Notes.filter((element) => {
              return (
                element.isArchived === false &&
                element.isDeleted === false &&
                element.isPined === false
              );
            })
              .reverse()
              .map(this.note)}
          </div>
        </div>
      </>
    );
  }
}
const matStateToProps = (states) => {
  return states;
};

export default connect(matStateToProps, getAllNotes)(Note);
