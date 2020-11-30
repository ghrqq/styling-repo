import React from "react";
import useWindowDimensions from "../tools/useWindowDimensions";

export default function Contact() {
  const { height, width } = useWindowDimensions();
  return (
    <div
      style={{
        backgroundColor: "red",
        height: height,
        margin: 0,
        padding: 0,
      }}
    >
      <p>"This is Contact component!!!"</p>
    </div>
  );
}
