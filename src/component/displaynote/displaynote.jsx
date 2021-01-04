import React from "react";
import "../displaynote/displaynote.scss";
import Icons from "../icons/icons";
import pin from "../../assets/pinn.svg";
import TrashIcons from "../icons/trashicon";

export default function DisplayNote(props) {
  console.log("props", props);

  const selectIcon = (props) => {
    switch (props) {
      case !props.value.isDeleted:
        return <Icons val={props.value} />;
      case props.value.isDeleted:
        return <TrashIcons val={props.value} />;
      default:
        return <Icons val={props.value} />;
    }
  };

  return (
    <div className="note-display">
      <div>
        <div className="title-pinn">
          <div className="title-note">
            {props.value.title}
          </div>
          <img className="pinn" src={pin} alt="" />
        </div>
        <div className="description-note">
          {props.value.description}
        </div>
      </div>
      <div className="icon">
        <div className="icon">
          {selectIcon(props)}
        </div>
      </div>
    </div>
  );
}
