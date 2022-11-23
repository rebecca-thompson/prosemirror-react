import { undo, redo, history } from "prosemirror-history";
import { keymap } from "prosemirror-keymap";

export const plugins = [
    history(),
    keymap({"Mod-z": undo, "Mod-y": redo})
]