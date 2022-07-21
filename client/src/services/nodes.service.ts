import { Edge } from "react-flow-renderer";
import { CardInterface, CardType } from "../types/Card";
import { runCodeService } from "./functions.service";


export class FlowService {
    FlowMap = new Map<string, any>;
    node:Array<CardInterface>;
    edges : Array<Edge>;

    constructor(node: Array<CardInterface>, edges: Array<Edge>) { 
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
            const connectedinput = this.edges.find((edge) => edge.target === node.id && edge.targetHandle === input.id);

            if (connectedinput) {
                const connectedNode = this.GetNodeById(connectedinput.source);

                if (connectedNode) {
                    const connectedNodeValue = this.FlowMap.get(connectedinput.sourceHandle!);
                    if (connectedNodeValue != undefined) {
                        this.FlowMap.set(input.id, connectedNodeValue);
                        input.value = connectedNodeValue;
                    } else {
                        this.pathFinding(connectedNode);
                        this.FlowMap.set(input.id, this.FlowMap.get(connectedinput.sourceHandle!));
                        input.value = this.FlowMap.get(connectedinput.sourceHandle!);
                    }
                }
            }

            return input
        })

        nodeData.parameters = nodeData.parameters.map((_parameter) => {
            return { ..._parameter };
        });

        const Codeoutput = runCodeService(nodeData.input, nodeData.parameters, nodeData.function.content);
        console.log("Output for Node ", node.id, " is  : ", Codeoutput);

        nodeData.output = nodeData.output.map((_output) => {
            const output = { ..._output };
            this.FlowMap.set(output.id, Codeoutput[`${output.name}`]);
            output.value = Codeoutput[`${output.name}`];
            return output;
        })


        this.edges.filter((edge) => edge.source === node.id && edge.sourceHandle === node.data.start).forEach((edge) => { 
            const connectedNode = this.GetNodeById(edge.target);
            if (connectedNode) { 
                this.pathFinding(connectedNode);
            }
        })

        console.log("NewNode : ", node);

        this.replaceNode(node);
    }

    public runFlowService = async() => {

        const eventStart = this.findEventStart(this.node);

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
