import { Node } from "./types";

export function createItem(title: string, children: Node[] = []): Node {
    return {
        title,
        id: crypto.randomUUID(),
        children
    };
}