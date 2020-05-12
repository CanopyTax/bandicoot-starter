import React from "react";
import ControlButton from "./control-button.component.js";
import OrderedListIcon from "../icons/ordered-list-icon.component.js";
import {
  useDocumentExecCommand,
  useDocumentQueryCommandState,
} from "bandicoot";

export default function OrderedList() {
  const { performCommand } = useDocumentExecCommand("insertOrderedList");
  const { isActive } = useDocumentQueryCommandState("insertOrderedList");

  return (
    <ControlButton
      title="Ordered List"
      onClick={performCommand}
      icon={OrderedListIcon}
      isActive={isActive}
    />
  );
}
