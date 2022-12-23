import { Edge } from "react-flow-renderer";
import { CardInterface, CardType, Parameters } from "@workspace/lib/types/Card";
import { runCodeService } from "./functions.service";
import { Variable } from "@workspace/lib/types/variables.types";

const notBacktrackTypes = [
    Parameters.event
];

export class FlowService {
    FlowMap = new Map<string, any>;
    node:Array<CardInterface>;
    edges: Array<Edge>;
    variables: Array<Variable>;

    constructor(node: Array<CardInterface>, edges: Array<Edge>, variables: Array<Variable>) {
        this.variables = variables;
        this.node = node;
        this.edges = edges;
    }
    
    private findEventStart = (card: Array<CardInterface>) => {
        const eventStart = card.find((card) => card.type === CardType.basic_EventStart);
        if (eventStart) { 
            this.FlowMap.set(eventStart.id, '');
        }
        return eventStart;
    };

    private mapVariables = () => {
        this.variables.forEach((variable) => {
            this.FlowMap.set(`${variable.type}__${variable.id}`, variable.value);
        })
    }

    private GetNodeById = (id: string) => { 
        return this.node.find((card) => card.id === id);
    }
    
    private replaceNode = (node: CardInterface) => { 
        this.node = this.node.map((card) => { 
            if (card.id === node.id) { 
                return node;
            }
            return card;
        })
    }
    
    private pathFinding = (node: CardInterface) => {
        const nodeData = node.data;
        console.log('Entering pathFinding - ', node.type);

        nodeData.input = nodeData.input.map((_input) => {
            const input = { ..._input };

            if (notBacktrackTypes.includes(input.type)) {
                return input;
            }

            const connectedInput = this.edges.find((edge) => edge.target === node.id && edge.targetHandle === input.id);

            if (connectedInput) {
                const connectedNode = this.GetNodeById(connectedInput.source);

                if (connectedNode) {
                    const connectedNodeValue = this.FlowMap.get(connectedInput.sourceHandle!);
                    if (connectedNodeValue != undefined) {
                        this.FlowMap.set(input.id, connectedNodeValue);
                        input.value = connectedNodeValue;
                    } else {
                        this.pathFinding(connectedNode);
                        this.FlowMap.set(input.id, this.FlowMap.get(connectedInput.sourceHandle!));
                        input.value = this.FlowMap.get(connectedInput.sourceHandle!);
                    }
                }
            }

            return input
        })

        nodeData.parameters = nodeData.parameters.map((_parameter) => {
            return { ..._parameter };
        });

        // ? Run Code
        const outputList = runCodeService(nodeData.input, nodeData.parameters, nodeData.output, nodeData.function.content);
        console.log("Output for Node ", node.id, " is  : ", outputList);

        for (let i = 0; i < outputList.length; i++) {
            const codeOutput = outputList[i];

            if (!codeOutput.id) {
                continue;
            }

            // ? Set Output of the node
            nodeData.output = nodeData.output.map((_output) => {
                const output = { ..._output };
                this.FlowMap.set(output.id, codeOutput.output[`${output.name}`]);
                output.value = codeOutput.output[`${output.name}`];
                return output;
            })
            console.log("All Edges", this.edges);

            console.log("Connected edge to : ", codeOutput.id, this.edges.filter((edge) => edge.source === node.id && edge.sourceHandle === codeOutput.id))
            // ? Path Finding for next node
            // ? Finding connected edges with its node and find the edge connected to its event
            this.edges.filter((edge) => edge.source === node.id && edge.sourceHandle === codeOutput.id).forEach((edge) => {
                const connectedNode = this.GetNodeById(edge.target);
                if (connectedNode) {
                    this.pathFinding(connectedNode);
                }
            })

            console.log("NewNode : ", node);

            this.replaceNode(node);
        }
    }

    public runFlowService = async() => {

        const eventStart = this.findEventStart(this.node);
        this.mapVariables();

        if (eventStart) {
            this.pathFinding(eventStart);
            return {
                status: "success",
                node: this.node,
                edges: this.edges,
            };

        } else {
            return {
                status: "error",
                message: "Error Execution Flow",
            };
        }
  }
};
