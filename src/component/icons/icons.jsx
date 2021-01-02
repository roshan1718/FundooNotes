import React from "react";
import "../icons/icon.scss";
import { StylesProvider } from "@material-ui/core/styles";
import {
  AlertOutlined,
  DropboxOutlined,
  FileImageOutlined,
  SlackSquareOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
export default function icons() {
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
          <DropboxOutlined className="icon-size" />
        </div>
      </div>
    </StylesProvider>
  );
}
