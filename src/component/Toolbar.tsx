import React, {FunctionComponent, useCallback, useContext, useEffect, useState} from "react";
import { css } from "@emotion/react";
import { EditorViewContext } from "../context/EditorView";
import { keyPressed, shortcuts } from "../lib/keyboard-shortcuts";

const toolbarStyle = css`
    grid-column: 2 / span 1;
    margin-bottom: 15px;
    button.active {
        background-color: #ccc;
    }
`;

export const Toolbar: FunctionComponent = () => {
    const view = useContext(EditorViewContext);
    const keybindings = shortcuts(view.state.schema);
    const keys = Object.keys(keybindings);

    const [ activeButtons, setActiveButtons ] = useState<Set<string>>(new Set<string>());

    const handleClick = (key: string) => {
        keybindings[key].command(view.state, view.dispatch, view);
        activeButtons.has(key) ?
            setActiveButtons(prev => {
                const next = new Set(prev);
                next.delete(key);
                return next;
            }) : setActiveButtons(prev => new Set(prev).add(key));
        view.focus();
    }

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        const key = keys.filter(key => keyPressed(key, event))[0];
        if (key) {
            handleClick(key);
        }
    }, [activeButtons]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <div css={toolbarStyle}>
            {
                keys.map((key, index) =>
                    <button key={index} onClick={() => handleClick(key)} className={activeButtons.has(key) ? "active" : ""}>{keybindings[key].label}</button>
                )
            }

        </div>
    )
}
