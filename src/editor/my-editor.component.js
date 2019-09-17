import React from "react";
import { RichTextContainer, RichTextEditor } from "bandicoot";
import { Scoped } from "kremling";
import Bold from "./control-buttons/bold.component.js";
import Italic from "./control-buttons/italic.component.js";
import Underline from "./control-buttons/underline.component.js";
import FontSize from "./control-buttons/font-size.component.js";
import JustifyLeft from "./control-buttons/justify-left.component.js";
import JustifyCenter from "./control-buttons/justify-center.component.js";
import JustifyRight from "./control-buttons/justify-right.component.js";
import JustifyFull from "./control-buttons/justify-full.component.js";
import Indent from "./control-buttons/indent.component.js";
import Outdent from "./control-buttons/outdent.component.js";
import Link from "./control-buttons/link.component.js";
import Image from "./control-buttons/image.component.js";

export default function MyEditor() {
  return (
    <Scoped css={css}>
      <div className="editor-container">
        <RichTextContainer>
          <div>
            <div className="control-buttons">
              <Bold />
              <Italic />
              <Underline />
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
`;
