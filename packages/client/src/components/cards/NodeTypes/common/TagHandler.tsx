import { SxProps, Typography } from "@mui/material";
import { ICardIO, Parameters, parameterColor } from "@workspace/lib/types/Card";
import React from "react";
import { Handle, Position } from "react-flow-renderer";

const TagStyles: {
	[key: string]: React.CSSProperties;
} = {
	[Parameters.boolean]: {
		backgroundColor: parameterColor.boolean,
	},
	[Parameters.number]: {
		backgroundColor: parameterColor.number,
	},
	[Parameters.string]: {
		backgroundColor: parameterColor.string,
	},
	[Parameters.event]: {
		borderRadius: 0,
		backgroundColor: parameterColor.event,
		width: 4,
		height: 4,
	},
};

const TagTextStyles: {
	[key: string]: SxProps;
} = {
	[Position.Left]: {
		marginLeft: 0.6,
	},
	[Position.Right]: {
		right: 0,
		marginRight: 0.6,
	},
};

function TagHandler({
	index,
	_,
	position,
}: {
	index: number;
	_: ICardIO;
	position: Position;
}) {
	return (
		<React.Fragment>
			<Handle
				type={position === Position.Right ? "source" : "target"}
				position={position}
				style={{
					top: (index + 1) * 10 + 10,
					padding: 1,
					marginLeft: 1,
					width: 3,
					height: 3,
					...TagStyles[_.type],
				}}
				id={`${_.id}`}
			/>
			<Typography
				className="absolute left-0 ml-1 font-extralight"
				sx={{
					position: "absolute",
					top: (index + 1) * 10 + 10,
					fontSize: "0.3rem",
					marginTop: "-0.2rem",
					color: "text.secondary",
					...TagTextStyles[position],
				}}>
				{_.name}
			</Typography>
		</React.Fragment>
	);
}

export default TagHandler;
