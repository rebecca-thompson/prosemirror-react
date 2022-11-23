import React, {FunctionComponent, useContext, useEffect, useRef} from "react";
import { EditorView } from "prosemirror-view";
import { EditorStateContext } from "../context/EditorState";
import { Transaction } from "prosemirror-state";
import { css } from "@emotion/react";

const editorStyle = css`
    grid-column: 2 / span 1;
    margin-bottom: 15px;
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
    const { state, setState } = useContext(EditorStateContext);
    const editorRef = useRef();

    useEffect(() => {
        const view = new EditorView(editorRef.current, {
            state,
            dispatchTransaction(tr: Transaction) {
                const newState = view.state.apply(tr);
                setState(newState);
                view.updateState(newState);
            }
        });
        return () => view.destroy();
    }, [])

    return (
        <div css={editorStyle}>
            <h2>Prosemirror Editor:</h2>
            <div ref={editorRef} className="editor"></div>
        </div>
    )
}