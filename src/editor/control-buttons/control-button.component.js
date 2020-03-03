import React from "react";
import { Scoped } from "kremling";

export default function ControlButton(props) {
  const Icon = props.icon;
  return (
    <Scoped css={css}>
      <button
        onClick={props.onClick}
        className="control-button"
        title={props.title}
      >
        <Icon color={props.isActive ? "var(--green)" : "var(--dark-gray)"} />
      </button>
    </Scoped>
  );
}

const css = `
& .control-button {
  transition: background-color .25s ease-in-out;
  border-radius: 4rem;
  width: 32rem;
  height: 32rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 2rem;
}

& .control-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

& .control-button svg {
  height: 16rem;
  width: 16rem;
}
`;
