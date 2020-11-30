import React from "react";
import useWindowDimensions from "../tools/useWindowDimensions";

export default function Services() {
  const { height, width } = useWindowDimensions();
  return (
    <div style={{ backgroundColor: "orange", height: height }}>
      <p>"This is Services component!"</p>
    </div>
  );
}
