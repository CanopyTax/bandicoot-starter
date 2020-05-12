import React from "react";
import ControlButton from "./control-button.component.js";
import ItalicIcon from "../icons/italic-icon.component.js";
import {
  useDocumentExecCommand,
  useDocumentQueryCommandState,
} from "bandicoot";

export default function Italic() {
  const { performCommand } = useDocumentExecCommand("italic");
  const { isActive } = useDocumentQueryCommandState("italic");

  return (
    <ControlButton
      title="Italic"
      onClick={performCommand}
      icon={ItalicIcon}
      isActive={isActive}
    />
  );
}
