const BasicNodes = () => `

# Basic Nodes

## Event Start Node
First, we will start with an **Event Start Node**. This will tell the compiler to get the starting position for the Blueprint. Event Start Node looks like this : 

![Event Start Node](/src/assets/docs/event_start.png)


Here, the Event Node Starts off the App.. all the Cards connected to the Event Start Will run first, and so on.

## Output Node
This node displays the input injected.

![Output Node](/src/assets/docs/output_node.png)

## Number and String Functions
Number Function Nodes allow you to perform Number operations and String function allows to perform String Operations

## Input Operators
They allow you to add input to the builder

## Conditionals
This adds conditional operators to your app.

## Loop Node
The **Loop Node** repeats a set of actions until a certain condition is met. This is useful for processing lists or running tasks multiple times.

## Custom Operation Node
The **Custom Operation Node** allows you to define your own functions or operations. You can create reusable logic that can be called from other nodes, making your app more organized.

---

# Editor Configs

## Variables
variables serve as placeholders for data values, allowing you to store information that can be accessed and manipulated as needed. 

## JS IDE Node
The **JS IDE Node** provides an integrated environment for writing JavaScript code. You can use this node to implement complex logic and algorithms directly in your app.
`;

export default BasicNodes;
