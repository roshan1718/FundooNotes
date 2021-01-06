import React, { Component } from "react";
import DisplayNote from "../displaynote/displaynote";
import { connect } from "react-redux";
import { getTrashNotes } from "../../redux/action/action.js";

class Trash extends Component {
  constructor() {
    super();
  }

  note = (val) => {
    return <DisplayNote value={val} />;
  };

  render() {
    return (
      <div className="note-position">
        {this.props.Notes.filter((element) => {
          return element.isDeleted === true;
        })
          .reverse()
          .map(this.note)}
      </div>
    );
  }
}

const matStateToProps = (states) => {
  return states;
};

export default connect(matStateToProps, getTrashNotes)(Trash);
