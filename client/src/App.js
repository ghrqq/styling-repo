import logo from "./img/logo.jpg";
import "./App.css";
import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Follow from "./components/Follow";
import MainSlider from "./components/MainSlider";
import Footer from "./components/Footer";

import useWindowDimensions from "./tools/useWindowDimensions";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";

function App() {
  const [page, setpage] = useState("");
  const { height, width } = useWindowDimensions();
  const imgArr = [img1, img2, img3];

  const pageSelector = (pageName) => {
    pageName === page ? setpage("") : setpage(pageName);
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li onClick={() => pageSelector("")}>Home</li>
          <li onClick={() => pageSelector("About")}>About</li>
          <li onClick={() => pageSelector("Services")}>Services</li>
          <li onClick={() => pageSelector("Contact")}>Contact</li>
          <li onClick={() => pageSelector("Follow")}>Follow</li>
        </ul>
      </nav>

      <div
        className="component"
        style={page === "About" ? null : { display: "none" }}
      >
        {page === "About" ? <About /> : null}
      </div>
      <div
        className="component"
        style={page === "Contact" ? null : { display: "none" }}
      >
        {page === "Contact" ? <Contact /> : null}
      </div>
      <div
        className="component"
        style={page === "Services" ? null : { display: "none" }}
      >
        {" "}
        {page === "Services" ? <Services /> : null}
      </div>
      <div
        className="component"
        style={page === "Follow" ? null : { display: "none" }}
      >
        {page === "Follow" ? <Follow /> : null}
      </div>

      <MainSlider imgArr={imgArr} logo={logo} />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar,
        felis fringilla condimentum ultrices, elit sem fermentum turpis, nec
        blandit ligula odio eu magna. Suspendisse vitae feugiat est, sed viverra
        quam. Duis ultricies orci metus, ac maximus sapien placerat id. Donec
        vel nisl eget sapien laoreet rutrum ut a sem. Vestibulum sed sapien vel
        nibh sollicitudin facilisis sed eleifend mauris. Nam fringilla lobortis
        nulla, eu aliquet erat rhoncus et. Aenean pulvinar massa at maximus
        ultricies. Integer auctor nisi vel sapien vverra congue. Quisque eget
        ligula fringilla, consequat purus iaculis, tincidunt ligula. Integer
        pharetra in nibh nec placerat. Aliquam lacinia tempor odio nec rutrum.
        Maecenas posuere neque non auctor iaculis. Cras accumsan justo lacinia
        auctor condimentum. Fusce maximus elementum malesuada. Maecenas egestas
        auctor congue. Curabitur consectetur dapibus euismod.
      </p>

      <Footer />
    </div>
  );
}

export default App;
