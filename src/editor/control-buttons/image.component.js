import React from "react";
import ControlButton from "./control-button.component.js";
import ImageIcon from "../icons/new-file.component.js";
import { useImage } from "bandicoot";

export default function Image(props) {
  const { chooseFile } = useImage();

  return (
    <ControlButton title="Insert image" onClick={chooseFile} icon={ImageIcon} />
  );
}
