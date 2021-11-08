import React from "react";

function Score({
  counters,
}: {
  counters: number;
  children: number;
}): JSX.Element {
  return <span>{`  ${counters}`}</span>;
}

export default Score;
