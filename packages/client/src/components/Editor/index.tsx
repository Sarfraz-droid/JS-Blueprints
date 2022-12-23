import { nanoid } from "nanoid";
import React, { MouseEvent, MouseEventHandler, useEffect } from "react";
import ReactFlow, {
	useNodesState,
	useEdgesState,
	Controls,
	updateEdge,
	addEdge,
	Connection,
	Edge,
	NodeChange,
	EdgeChange,
	ReactFlowProvider,
	useUpdateNodeInternals,
	Background,
} from "react-flow-renderer";
import { useDispatch, useSelector } from "react-redux";
import { NodeTemplate } from "../cards/NodeTypes/TextNode";
import { nodeTypes } from "../../predefined_components";
import { setNode } from "../../redux/features/active.slice";
import {
	addEdgeReducer,
	setEdgeReducer,
} from "../../redux/features/edge.slice";
import { UpdateNode } from "../../redux/features/node.slice";
import { addEdgeThunk } from "../../redux/functions/add_edge.action";
import { AppDispatch, RootState } from "../../redux/store";
import { CardInterface, CardType, Parameters } from "@workspace/lib/types/Card";
import { EventHandlerNode } from "../cards/NodeTypes/EventStart";
import { OutputNode } from "../cards/NodeTypes/OutputNode";
import useEditor from "../../hooks/useEditor";
import EdgeContextMenu from "./EdgeContextMenu";


const EditorComponent = () => {
	const {
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
