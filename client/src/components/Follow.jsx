import React from "react";
import useWindowDimensions from "../tools/useWindowDimensions";

export default function Follow() {
  const { height, width } = useWindowDimensions();
  return (
    <div style={{ backgroundColor: "green", height: height }}>
      <p>"This is Follow component!"</p>
    </div>
  );
}
