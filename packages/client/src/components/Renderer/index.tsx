import React from "react";
import EditorComponent from "../Editor";
import Loading from "../Loading";

function Renderer({
	matches,
	isLoading,
}: {
	matches: boolean;
	isLoading: boolean;
}) {
	if (isLoading) {
		return <Loading />;
	}

	if (matches) {
		// TODO: Add a mobile editor
		return (
			<div>Please use the desktop version of the editor to add cards.</div>
		);
	}

	return <EditorComponent />;
}

export default Renderer;
