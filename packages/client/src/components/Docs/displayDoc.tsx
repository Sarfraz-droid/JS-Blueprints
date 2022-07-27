import React, { useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Introduction from "@workspace/lib/docs/Introduction.md";

function DisplayDocument({
  ActiveRoute,
}: {
  ActiveRoute: {
    name: string;
    text: (text: string) => string;
    path: string;
  };
}) {
  const [Doc, setDoc] = useState("");

  return (
    <div>
      <ReactMarkdown className="markdown-body">
        {ActiveRoute.text(window.location.origin)}
      </ReactMarkdown>
    </div>
  );
}

export default DisplayDocument;
