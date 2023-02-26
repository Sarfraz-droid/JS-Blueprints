import React from "react";
import ReactFlow, { Background } from "react-flow-renderer";
import { nodeTypes } from "../../predefined_components";
import useEditor from "../../hooks/useEditor";
import EdgeContextMenu from "./EdgeContextMenu";

const EditorComponent = () => {
	const {
		edgeTypes,
		nodes,
		edges,
		onEdgeUpdate,
		onConnect,
		onEdgeClick,
		onNodesChange,
		onNodeDoubleClick,
		onEdgeContextMenu,
	} = useEditor();

	return (
		<React.Fragment>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				snapToGrid
				onEdgeUpdate={onEdgeUpdate}
				onConnect={onConnect}
				onNodeClick={(node) => console.log(node)}
				fitView
				attributionPosition="top-right"
				nodeTypes={nodeTypes as any}
				onEdgeClick={onEdgeClick}
				edgeTypes={edgeTypes}
				onEdgeContextMenu={onEdgeContextMenu}
				onNodeDoubleClick={onNodeDoubleClick}
				style={{
					height: "90vh",
				}}>
				<Background gap={12} size={1} color={"#f0f0f020"} />
			</ReactFlow>
			<EdgeContextMenu />
		</React.Fragment>
	);
};

export default EditorComponent;
