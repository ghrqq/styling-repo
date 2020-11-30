import React from "react";
import useWindowDimensions from "../tools/useWindowDimensions";

export default function About() {
  const { height, width } = useWindowDimensions();
  return (
    <div
      style={{
        backgroundColor: "#453D35",
        height: height,
        margin: 0,
      }}
    >
      <p>"This is about component!"</p>
    </div>
  );
}
