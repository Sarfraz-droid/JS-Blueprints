import React from "react";
import EditorComponent from ".";
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
    return (
      <div>Please use the desktop version of the editor to add cards.</div>
    );
  }

  return <EditorComponent />;
}

export default Renderer;
