import React from "react";
import ControlButton from "./control-button.component.js";
import LeftAlignmentIcon from "../icons/left-alignment.component.js";
import {
  useDocumentExecCommand,
  useDocumentQueryCommandState,
} from "bandicoot";

export default function JustifyLeft(props) {
  const { performCommand } = useDocumentExecCommand("justifyLeft");
  const { isActive } = useDocumentQueryCommandState("justifyLeft");

  return (
    <ControlButton
      title="Justify left"
      onClick={performCommand}
      icon={LeftAlignmentIcon}
      isActive={isActive}
    />
  );
}
