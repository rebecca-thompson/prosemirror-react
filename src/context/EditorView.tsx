import React, {createContext, FunctionComponent, ReactNode, useContext, useState} from "react";
import { EditorView } from "prosemirror-view";
import { Transaction } from "prosemirror-state";
import {EditorStateContext} from "./EditorState";

export const EditorViewContext = createContext<EditorView>(undefined);

export const EditorViewContextProvider: FunctionComponent<{ children: ReactNode }> = ({children}: { children: ReactNode }) => {
    const { state, setState } = useContext(EditorStateContext);
    const [ view ] = useState(() =>
        new EditorView(undefined, {
            state,
            dispatchTransaction(tr: Transaction) {
                const newState = view.state.apply(tr);
                setState(newState);
                view.updateState(newState);
            }
        })
    )

    return (
        <EditorViewContext.Provider value={view}>
            {children}
        </ EditorViewContext.Provider>
    );
}
