import React, { Component } from "react";
import { DeleteOutlined, RestOutlined } from "@ant-design/icons";
import "./icon.scss";

export default class TrashIcons extends Component {
  render = () => {
    return (
      <div className="note-icons trash">
        <div className="note-icons-hover">
          <DeleteOutlined
            onClick={() => {
              this.props.deletePermanent();
            }}
            className="icon-size"
          />
        </div>
        <div className="note-icons-hover">
          <RestOutlined
            onClick={() => {
              this.props.deleteRestore();
            }}
            className="icon-size"
          />
        </div>
      </div>
    );
  };
}
