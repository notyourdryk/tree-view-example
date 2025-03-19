const root = createItem("CEO", [
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

function createItem(title, children = []) {
    return {
        title,
        id: crypto.randomUUID(),
        children
    }
}

function createTree(root) {
    const list = document.createElement("ul");
    for (const child of root.children) {
        const item = document.createElement("li");
        item.innerHTML = `<div class="list-item">${child.title}</div>`;

        list.appendChild(item);
        if (child.children.length > 0) {
            const wrapper = document.createElement("div");
            wrapper.classList.add("list-container");
            const innerTree = createTree(child);
            wrapper.append(innerTree);

            item.appendChild(wrapper);
        }
    }

    return list;
}

const mountPoint = document.getElementById("app");
const tree = createTree({ children: [root] });
mountPoint.append(tree);
