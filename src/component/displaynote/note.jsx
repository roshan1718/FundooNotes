import React, { Component } from "react";
import "../displaynote/displaynote.scss";
import DisplayNote from "./displaynote";
import user_service from "../../services/userService";

export default class Note extends Component {
  constructor() {
    super();
    this.getAllNotes();
    this.state = {
      notes: [],
    };
    console.log("notes :", this.state.notes);
  }

  getAllNotes = () => {
    user_service
      .getAllNotes()
      .then((data) => {
        console.log("All Notes", data.data.data);

        this.setState(
          {
            notes: data.data.data.data,
          },
          () => console.log("All Notes call", this.state.notes)
        );
      })
      .catch((error) => {});
  };

  note = (val) => {
    console.log("note", val);
    return <DisplayNote value={val} />;
  };

  render() {
    return (
      <div className="note-position">
        {this.state.notes
          .filter((element) => {
            return (
              element.isArchived === false &&
              element.isDeleted === false &&
              element.isPined === false
            );
          })
          .reverse()
          .map(this.note)}
      </div>
    );
  }
}
