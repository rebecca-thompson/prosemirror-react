import React, {FunctionComponent, useContext, useEffect, useRef} from "react";
import { EditorView } from "prosemirror-view";
import { EditorStateContext } from "../context/EditorState";
import { Transaction } from "prosemirror-state";

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
        <div ref={editorRef} className="editor"></div>
    )
}