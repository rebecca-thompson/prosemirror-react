import React, {createContext, Dispatch, FunctionComponent, ReactNode, SetStateAction, useState} from "react";
import { EditorState } from "prosemirror-state";
import { schema } from "prosemirror-schema-basic";

export const EditorStateContext = createContext<{
    state: EditorState | undefined,
    setState: Dispatch<SetStateAction<EditorState>>
}>(undefined);

export const EditorStateContextProvider: FunctionComponent<{ children: ReactNode }> = ({children}: { children: ReactNode }) => {
    const [state, setState] = useState(() => {
        return EditorState.create({schema});
    });

    return (
        <EditorStateContext.Provider value={{ state: state, setState: setState }}>
            {children}
        </ EditorStateContext.Provider>
    );
}