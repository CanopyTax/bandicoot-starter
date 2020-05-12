import React from "react";
import ControlButton from "./control-button.component.js";
import RightAlignmentIcon from "../icons/right-alignment.component.js";
import {
  useDocumentExecCommand,
  useDocumentQueryCommandState,
} from "bandicoot";

export default function JustifyRight(props) {
  const { performCommand } = useDocumentExecCommand("justifyRight");
  const { isActive } = useDocumentQueryCommandState("justifyRight");

  return (
    <ControlButton
      title="Justify right"
      onClick={performCommand}
      icon={RightAlignmentIcon}
      isActive={isActive}
    />
  );
}
