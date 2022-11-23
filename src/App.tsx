import React from 'react';
import { createRoot } from 'react-dom/client';
import { EditorStateContextProvider } from "./context/EditorState";
import { Editor } from "./component/Editor";
import { DebugPanel } from "./component/DebugPanel";

const App = () => {
    return (
        <EditorStateContextProvider>
            <Editor />
            <DebugPanel />
        </EditorStateContextProvider>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
