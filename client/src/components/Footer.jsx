import React from "react";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

export default function Footer() {
  return (
    <div id="footer">
      <footer className="flex-container">
        <div
          className="iconset"
          style={{ display: "inline-grid", maxWidth: "30%" }}
        >
          <a href="https://facebook.com">
            <Facebook className="icon-social" fontSize="large" />
            /hairstylist
          </a>
          <a href="https://instagram.com">
            <Instagram className="icon-social" fontSize="large" />
            @hairstylist
          </a>
          <a href="htps://twitter.com">
            <Twitter className="icon-social" fontSize="large" />
            @hairstylist
          </a>
        </div>
        <div
          style={{
            display: "inline-block",
            width: "60%",
            margin: "20px 50px 20px 20px",
            padding: "20px",
          }}
        >
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, rem
            corporis praesentium unde impedit voluptas. Beatae exercitationem
            aperiam labore suscipit quo minima, qui maiores repellendus sed vel
            soluta vero reprehenderit!
          </div>
        </div>
      </footer>
    </div>
  );
}
