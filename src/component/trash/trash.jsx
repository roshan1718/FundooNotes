import React from "react";
import DisplayNote from "../displaynote/displaynote";
import user_service from "../../services/userService";

export default class Trash extends React.Component {
  constructor() {
    super();
    this.getAllTrashNotes();
    this.state = {
      notes: [],
    };
  }

  getAllTrashNotes = () => {
    user_service
      .getTrashNotes()
      .then((data) => {
        console.log("All trash Notes", data.data.data);

        this.setState(
          {
            notes: data.data.data.data,
          },
          () => console.log("All trash call", this.state.notes)
        );
      })
      .catch((error) => {});
  };

  note = (val) => {
    return <DisplayNote value={val} />;
  };

  render() {
    return (
      <div className="note-position">
        {this.state.notes
          .filter((element) => {
            return element.isDeleted === true;
          })
          .reverse()
          .map(this.note)}
      </div>
    );
  }
}
