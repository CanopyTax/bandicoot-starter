import React from "react";
import ControlButton from "./control-button.component.js";
import UnderlineIcon from "../icons/underline-icon.component.js";
import {
  useDocumentExecCommand,
  useDocumentQueryCommandState,
} from "bandicoot";

export default function Underline() {
  const { performCommand } = useDocumentExecCommand("underline");
  const { isActive } = useDocumentQueryCommandState("underline");

  return (
    <ControlButton
      title="Underline"
      onClick={performCommand}
      icon={UnderlineIcon}
      isActive={isActive}
    />
  );
}
