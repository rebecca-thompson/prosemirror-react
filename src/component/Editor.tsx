import React, { FunctionComponent, useCallback, useContext } from "react";
import { css } from "@emotion/react";
import { EditorViewContext } from "../context/EditorView";

const editorStyle = css`
    grid-column: 2 / span 1;
    h2 {
        margin-bottom: 10px;
    }
    .editor {
        border: solid 1px black;
        padding: 0 15px 0 15px;
    }
    [contenteditable] {
        outline: 0px solid transparent;
    }
`;

export const Editor: FunctionComponent = () => {
    const view = useContext(EditorViewContext);

    const editorRef = useCallback(
        (element: HTMLDivElement | null) => {
            if (element) {
                element.appendChild(view.dom);
            }
        },
        [view]
    )

    return (
        <div css={editorStyle}>
            <h2>Prosemirror Editor:</h2>
            <div ref={editorRef} className="editor"></div>
        </div>
    )
}
