import React, { FC } from "react";
import { TreeNode } from "./types";

type TreeViewProps = {
    root: TreeNode;
}
export const TreeView: FC<TreeViewProps> = ({ root }) => {
    return (<li>
        {root.title}
        {root.children.length > 0 && (<div className={"list-container"}>
            <ul>
                {root.children.map((child: TreeNode) => <TreeView root={child}/>)}
            </ul>
        </div>)}
    </li>);
};