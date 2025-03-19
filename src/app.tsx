import React from "react";
import { createItem } from "./utils";
import { TreeNode } from "./types";
import { TreeView } from "./tree-view";

export const App = () => {
    const tree: TreeNode = createItem("CEO", [
        createItem("VP of Engineering", [
            createItem("Software Development Manager", [
                createItem("Senior Software Engineer"),
                createItem("Software Engineer"),
                createItem("Junior Software Engineer")
            ]),
            createItem("QA Manager", [
                createItem("Senior QA Engineer"),
                createItem("QA Engineer"),
            ])
        ]),
        createItem("VP of Marketing", [
            createItem("Marketing Manager", [
                createItem("Content Strategist"),
                createItem("SEO Specialist")
            ]),
            createItem("Social Media Manager")
        ]),
        createItem("VP of Sales", [
            createItem("Sales Manager", [
                createItem("Account Executive"),
                createItem("Sales Representative"),
            ]),
            createItem("Customer Success Manager", [
                createItem("Customer Support Specialist"),
                createItem("Onboarding Specialist")
            ])
        ]),
    ]);
    return (
        <>
            <h1 className="mt-2">Tree node view example</h1>
            <TreeView root={tree} />
        </>
    );
}