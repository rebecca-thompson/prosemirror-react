import React, { FunctionComponent, useContext } from "react";
import { EditorStateContext } from "../context/EditorState";
import { css } from "@emotion/react";

const debugPanelStyle = css`
    border: solid 1px grey;
    grid-column: 2 / span 1;
    padding: 10px;
    h2 {
        margin: 0;
        color: grey
    }
    p {
        margin-bottom: 0;
        color: grey;
    }
`;

export const DebugPanel: FunctionComponent = () => {
    const { state } = useContext(EditorStateContext);

    return (
        <div css={debugPanelStyle}>
            <h2>Debug panel</h2>
            <p>Current state: {JSON.stringify(state)}</p>
        </div>
    );
}
