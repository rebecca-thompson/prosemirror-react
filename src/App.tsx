import React from 'react';
import { createRoot } from 'react-dom/client';
import { EditorStateContextProvider } from "./context/EditorState";
import { Editor } from "./component/Editor";
import { DebugPanel } from "./component/DebugPanel";
import { css } from "@emotion/react";
import { EditorViewContextProvider } from "./context/EditorView";
import { Toolbar } from "./component/Toolbar";

const appStyle = css`
    display: grid;
    grid-template-columns: [first] 100px [line2] auto [col4-start] 100px [end];
`;

const App = () => {
    return (
        <div css={appStyle}>
            <EditorStateContextProvider>
                <EditorViewContextProvider>
                    <Editor />
                    <Toolbar />
                    <DebugPanel />
                </EditorViewContextProvider>
            </EditorStateContextProvider>
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
