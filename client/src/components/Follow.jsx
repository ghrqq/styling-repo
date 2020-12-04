import React from "react";
import useWindowDimensions from "../tools/useWindowDimensions";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

export default function Follow() {
  const { height, width } = useWindowDimensions();
  return (
    <div style={{ backgroundColor: "rgba(212, 164, 0, 0.7)" }}>
      <div className="iconset">
        <a href="https://facebook.com">
          <Facebook className="icon-social" fontSize="large" />
        </a>
        <a href="https://instagram.com">
          <Instagram className="icon-social" fontSize="large" />
        </a>
        <a href="htps://twitter.com">
          <Twitter className="icon-social" fontSize="large" />
        </a>
      </div>
    </div>
  );
}
