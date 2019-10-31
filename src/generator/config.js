export const description = "Generate a new React component";

export const prompts = [
  {
    type: "list",
    name: "action",
    message: "Select action",
    choices: () => [
      {
        name: "Create component folder",
        value: "create"
      },
      {
        name: "Add separate component",
        value: "add"
      }
    ]
  },
  {
    type: "list",
    name: "component",
    message: "Select component",
    when: answer => answer.action === "add",
    choices: listComponents
  },
  {
    type: "input",
    name: "name",
    message: "Component name:",
    validate: value => {
      if (!value) {
        return "Component name is required";
      }
      return true;
    }
  },
  {
    type: "list",
    name: "type",
    message: "Select component type",
    default: "functional",
    choices: () => [
      { name: "Functional component", value: "functional" },
      { name: "Class Based Component", value: "class" }
    ]
  }
];
