import React, { useRef } from "react";
import { RichTextContainer, RichTextEditor } from "bandicoot";
import { Scoped } from "kremling";
import Bold from "./control-buttons/bold.component.js";
import Italic from "./control-buttons/italic.component.js";
import Underline from "./control-buttons/underline.component.js";
import OrderedList from "./control-buttons/ordered-list.component";
import UnorderedList from "./control-buttons/unordered-list.component";
import FontSize from "./control-buttons/font-size.component.js";
import JustifyLeft from "./control-buttons/justify-left.component.js";
import JustifyCenter from "./control-buttons/justify-center.component.js";
import JustifyRight from "./control-buttons/justify-right.component.js";
import JustifyFull from "./control-buttons/justify-full.component.js";
import Indent from "./control-buttons/indent.component.js";
import Outdent from "./control-buttons/outdent.component.js";
import Link from "./control-buttons/link.component.js";
import Image from "./control-buttons/image.component.js";
import AtomicBlock from "./control-buttons/atomic-block.component.js";
import { initialHTML } from "./initial-html.js";

export default function MyEditor() {
  const editorRef = useRef();
  return (
    <Scoped css={css}>
      <div className="content-container">
        <div className="title">Bandicoot</div>
        <div>A lightweight rich-text editor for React</div>
        <RichTextContainer>
          <div className="editor-container">
            <div className="left">
              <AtomicBlock content="Alan Turing">Name</AtomicBlock>
              <AtomicBlock content="Computer Scientist">Occupation</AtomicBlock>
              <AtomicBlock content="801-584-2335">Phone Number</AtomicBlock>
            </div>
            <div className="center">
              <div className="control-buttons">
                <Bold />
                <Italic />
                <Underline />
                <OrderedList />
                <UnorderedList />
                <FontSize />
                <JustifyLeft />
                <JustifyCenter />
                <JustifyRight />
                <JustifyFull />
                <Indent />
                <Outdent />
                <Link />
                <Image />
              </div>
              <RichTextEditor
                className="my-editor"
                pasteFn={pasteFn}
                placeholder="Bandicoot is a rich text editor for react"
                sanitizeHTML={(html) => html}
                initialHTML={initialHTML}
                ref={editorRef}
              />
            </div>
            <div className="right">
              <div>
                <button className="restyledButton" onClick={reset}>
                  reset editor
                </button>
              </div>
              <a href="https://github.com/CanopyTax/bandicoot-starter">
                &lt;demo source&gt;
              </a>
            </div>
          </div>
        </RichTextContainer>
      </div>
    </Scoped>
  );

  function pasteFn(string) {
    return string;
  }

  function reset() {
    editorRef.current.setHTML(initialHTML);
  }
}

const css = `
& .content-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100rem;
}
& .title {
  font-size: 36rem;
  margin-bottom: 15rem;
}
& .editor-container {
  margin-top: 100rem;
  display: flex;
  justify-content: center;
  width: 100%;
}

& .my-editor {
  min-width: 500rem;
  max-width: 600rem;
  height: 300rem;
  border: 1px solid var(--dark-gray);
  padding: 16rem;
  border-radius: 10rem;
  transition: 0.4s;
}

& .my-editor:focus {
  box-shadow: 0px 0.2em 1em #c4c4c4;
  outline: none;
  transition: 0.4s;
}

& .my-editor a {
  color: var(--green);
  cursor: pointer;
}

& button {
  cursor: pointer;
}

& .control-buttons {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8rem;
}

& .left, .right {
  flex: 1;
}

& .right {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

& .restyledButton {
  font-size: 100%;
  font-family: inherit;
  border: 0;
  padding: 0;
}

& .right > * {
  margin-left: 20rem;
}

& .left {
  display: flex;
  padding-top: 50px;
  flex-flow: column nowrap;
  align-items: flex-end;
}
`;
