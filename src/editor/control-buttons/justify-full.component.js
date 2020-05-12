import React from "react";
import ControlButton from "./control-button.component.js";
import JustifyAlignIcon from "../icons/justify-align.component.js";
import {
  useDocumentExecCommand,
  useDocumentQueryCommandState,
} from "bandicoot";

export default function JustifyFull(props) {
  const { performCommand } = useDocumentExecCommand("justifyFull");
  const { isActive } = useDocumentQueryCommandState("justifyFull");

  return (
    <ControlButton
      title="Justify full"
      onClick={performCommand}
      icon={JustifyAlignIcon}
      isActive={isActive}
    />
  );
}
