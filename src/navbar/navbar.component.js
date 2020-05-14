import React from "react";
import { useCss } from "kremling";

export default function Navbar() {
  const scope = useCss(css);

  return (
    <div className="links" {...scope}>
      <a className="iconWithText" href="https://github.com/CanopyTax/bandicoot">
        <img
          src="https://image.flaticon.com/icons/svg/25/25231.svg"
          height={40}
          alt="github"
        />
        github
      </a>
      <a className="iconWithText" href="https://bandicoot.js.org">
        <img
          src="http://cliparts101.com/files/965/20F77B453902250C822F8602E402B866/Bandicoot_2.png"
          height={40}
          alt="bandicoot"
        />
        docs
      </a>
    </div>
  );
}

const css = `
& .iconWithText {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20rem;
}
& .links {
  position: fixed;
  top: 20rem;
  right: 30rem;
  height: 60rem;
  display: flex;
}
`;
