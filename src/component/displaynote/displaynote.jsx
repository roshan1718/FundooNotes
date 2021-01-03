import React from "react";
import "../displaynote/displaynote.scss";
import Note from "./note";
import user_service from "../../services/userService";

export default class DisplayNote extends React.Component {
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
    return <Note value={val} />;
  };

  componentDidMount = () => {
    this.getAllNotes();
  };

  render() {
    return (
      <div className="note-position">
        {this.state.notes
          .filter((element) => {
            return element.isArchived === false && element.isDeleted === false;
          })
          .reverse()
          .map(this.note)}
      </div>
    );
  }
}
