import { TreeNode } from "./types";

export function createItem(title: string, children: TreeNode[] = []): TreeNode {
    return {
        title,
        id: crypto.randomUUID(),
        children
    }
}
