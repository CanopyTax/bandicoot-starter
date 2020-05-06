import React from "react";
import { useContentEditableFalse } from "bandicoot";
import { useCss } from "kremling";

export default function AtomicBlock(props) {
  const { insertContentEditableFalseElement } = useContentEditableFalse();

  return (
    <button
      className="atomicBlockButton"
      {...useCss(css)}
      onClick={() => insertContentEditableFalseElement(props.content)}
    >
      {props.children}
    </button>
  );
}

const css = `
.atomicBlockButton {
  border: 0;
  font-size: 90%;
  padding: 0;
  font-family: inherit;
  color: var(--green);
  cursor: pointer;
  outline: none;
  margin : 8px 10px;
}
.atomicBlockButton:hover, .atomicBlockButton:focus {
  font-weight: 550;
}
`;
