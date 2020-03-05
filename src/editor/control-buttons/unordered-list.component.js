import React from "react";
import ControlButton from "./control-button.component.js";
import UnorderedListIcon from "../icons/unordered-list-icon.component.js";
import {
  useDocumentExecCommand,
  useDocumentQueryCommandState
} from "bandicoot";

export default function UnorderedList() {
  const { performCommand } = useDocumentExecCommand("insertUnorderedList");
  const { isActive } = useDocumentQueryCommandState("insertUnorderedList");

  return (
    <ControlButton
      title="Unordered List"
      onClick={performCommand}
      icon={UnorderedListIcon}
      isActive={isActive}
    />
  );
}
