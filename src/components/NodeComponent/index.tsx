import { nanoid } from "nanoid";
import React, { MouseEventHandler } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Controls,
  updateEdge,
  addEdge,
  Connection,
  Edge,
  NodeChange,
} from "react-flow-renderer";
import { useDispatch, useSelector } from "react-redux";
import { TextUpdaterNode } from "../../components/cards/TextNode";
import { setNode } from "../../redux/features/activeNodeSlice";
import { UpdateNode } from "../../redux/features/NodeSlice";
import { RootState } from "../../redux/store";
import { CardInterface, CardType, Parameters } from "../../types/Card";

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", label: "updatable edge" },
];

const nodeTypes = {
  [CardType.input]: TextUpdaterNode,
};

const NodeComponent = () => {
  const nodes = useSelector((state: RootState) => state.nodes);
  const dispatch = useDispatch();
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  // gets called after end of edge gets dragged to another source or target
  const onEdgeUpdate = (oldEdge: Edge<any>, newConnection: Connection) =>
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  const onConnect = (params: Edge<any> | Connection) =>
    setEdges((els) => addEdge(params, els));

  console.log(nodes, edges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={(nodes: NodeChange[]) => {
        console.log("onNodesChange", nodes);
        dispatch(UpdateNode(nodes));
      }}
      onEdgesChange={onEdgesChange}
      snapToGrid
      onEdgeUpdate={onEdgeUpdate}
      onConnect={onConnect}
      onNodeClick={(node) => console.log(node)}
      fitView
      attributionPosition="top-right"
      nodeTypes={nodeTypes as any}
      onNodeDoubleClick={(event, node) => {
        console.log(node);
        dispatch(setNode(node));
      }}
      style={{
        height: "90vh",
      }}
    >
      <Controls />
    </ReactFlow>
  );
};

export default NodeComponent;
