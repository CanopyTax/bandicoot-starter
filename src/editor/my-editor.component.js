import React from "react";
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

export default function MyEditor() {
  return (
    <Scoped css={css}>
      <div>
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
                sanitizeHTML={html => html}
              />
            </div>
            <div className="right"></div>
          </div>
        </RichTextContainer>
      </div>
    </Scoped>
  );

  function pasteFn(string) {
    return string;
  }
}

const css = `
& .editor-container {
  margin-top: 100rem;
  display: flex;
  justify-content: center;
}

& .my-editor {
  min-width: 500rem;
  max-width: 800rem;
  height: 300rem;
  border: 1px solid var(--dark-gray);
  padding: 16rem;
  border-radius: 2rem;
}

& .control-buttons {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4rem;
}

& .left, .right {
  flex: 1;
}

& .left {
  display: flex;
  padding-top: 50px;
  flex-flow: column nowrap;
  align-items: flex-end;
}
`;
