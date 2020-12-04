import React from "react";
import useWindowDimensions from "../tools/useWindowDimensions";
import imgS1 from "../img/beard1.jpg";

export default function Services() {
  const { height, width } = useWindowDimensions();
  return (
    <div
      className="flex-container"
      style={{ backgroundColor: "rgba(47, 34, 34, 0.7)", width: "100%" }}
    >
      <div className="service-images" id="image1">
        <h2>Beard Grooming</h2>
      </div>
      <div className="service-images" id="image2">
        <h2>Coloring Applications</h2>
      </div>
      <div className="service-images" id="image3">
        <h2>Hair Care</h2>
      </div>
      <div className="service-images" id="image4">
        <h2>Hair Style</h2>
      </div>
    </div>
  );
}
