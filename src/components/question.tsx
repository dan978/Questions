import React from "react";

function Question({ text, weight }: { text: string; weight: number }) {
  return <blockquote className="blockquote">{"  " + text + "  "}</blockquote>;
}
export default Question;
