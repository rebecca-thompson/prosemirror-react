import React, {FunctionComponent, useContext} from "react";
import { EditorStateContext } from "../context/EditorState";

export const DebugPanel: FunctionComponent = () => {
    const { state } = useContext(EditorStateContext);

    return (
        <div>
            <h2>Debug panel</h2>
            <p>Current editor state: {JSON.stringify(state)}</p>
        </div>
    );
}