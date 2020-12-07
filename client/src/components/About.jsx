import React from "react";
import useWindowDimensions from "../tools/useWindowDimensions";

export default function About() {
  const { height, width } = useWindowDimensions();
  return (
    <div
      style={{
        backgroundColor: "#453D35",
        height: height / 2,
        margin: 0,
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti
      aut sapiente, a, similique aspernatur voluptate voluptas repellat
      cupiditate vero officiis iste reiciendis expedita animi voluptatem
      eveniet. Natus, veniam totam?
    </div>
  );
}
