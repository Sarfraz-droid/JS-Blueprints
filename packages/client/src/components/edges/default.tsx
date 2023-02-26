import { RemoveCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { Position } from "react-flow-renderer";
import { getBezierPath } from "reactflow";
import useEditor from "../../hooks/useEditor";

const foreignObjectSize = 40;

function DefaultEdge(props: {
	id: string;
	sourceX: number;
	sourceY: number;
	targetX: number;
	targetY: number;
	sourcePosition: Position;
	targetPosition: Position;
	style?: React.CSSProperties;
	markerEnd?: string;
}) {
	const { deleteEdgeById } = useEditor();

	const [edgePath, labelX, labelY] = getBezierPath({
		sourceX: props.sourceX,
		sourceY: props.sourceY,
		sourcePosition: props.sourcePosition,
		targetX: props.targetX,
		targetY: props.targetY,
		targetPosition: props.targetPosition,
	});

	const onEdgeClick = (
		evt: React.MouseEvent<SVGSVGElement, MouseEvent>,
		id: string
	) => {
		evt.stopPropagation();
		deleteEdgeById(id);
	};

	return (
		<>
			<path
				id={props.id}
				style={props.style}
				className="react-flow__edge-path"
				d={edgePath}
				markerEnd={props.markerEnd}
			/>
			<foreignObject
				width={foreignObjectSize}
				height={foreignObjectSize}
				x={labelX - foreignObjectSize / 2}
				y={labelY - foreignObjectSize / 2}
				requiredExtensions="http://www.w3.org/1999/xhtml">
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
						height: "100%",
					}}>
					<button
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							background: "none",
							border: "none",
						}}>
						<svg
							onClick={(evt) => {
								onEdgeClick(evt, props.id);
							}}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							style={{
								width: 16,
								height: 16,
								color: grey[300],
								background: grey[500],
								borderRadius: "50%",
								cursor: "pointer",
							}}>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>
			</foreignObject>
		</>
	);
}

export default DefaultEdge;
