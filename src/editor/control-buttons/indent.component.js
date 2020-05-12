import React from "react";
import ControlButton from "./control-button.component.js";
import IndentIcon from "../icons/indent.component.js";
import { useDocumentExecCommand } from "bandicoot";

export default function Indent(props) {
  const { performCommand } = useDocumentExecCommand("indent");

  return (
    <ControlButton title="Indent" onClick={performCommand} icon={IndentIcon} />
  );
}
