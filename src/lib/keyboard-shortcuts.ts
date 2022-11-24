import { Schema } from "prosemirror-model";
import { toggleMark } from "prosemirror-commands";
import { Command } from "prosemirror-state";
import { keydownHandler } from "prosemirror-keymap";

type Shortcut = {
    label: string;
    command: Command;
}

export const shortcuts = (schema: Schema): Readonly<Record<string, Shortcut>> => {
    return {
        "Mod-b": {
            label: "Bold",
            command: toggleMark(schema.marks.strong)
        },
        "Mod-i": {
            label: "Italic",
            command: toggleMark(schema.marks.em)
        }
    }
};

export const keyPressed = (key: string, event: KeyboardEvent): boolean => {
    return keydownHandler({[key]: () => true})({} as any, event);
}
