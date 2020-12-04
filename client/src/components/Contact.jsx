import React from "react";
import useWindowDimensions from "../tools/useWindowDimensions";
import useForm from "../tools/useForm";
import { InputMask } from "primereact/inputmask";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GoogleMaps from "simple-react-google-maps";

export default function Contact() {
  const { height, width } = useWindowDimensions();
  const { values, handleChange, handleSubmit } = useForm();
  return (
    <div
      className="flex-container"
      style={{
        backgroundColor: "rgba(47, 34, 68, 0.7)",
        // height: height,
        margin: 0,
        padding: 0,
        paddingBottom: "5em",
        opacity: "0.8",
      }}
    >
      <form onSubmit={handleSubmit}>
        <label for="Name Field"></label>
        <input
          className="input"
          onChange={handleChange}
          id="Name Field"
          name="name"
          type="text"
          value={values.name}
          placeholder="Please type your name."
        />
        <label for="E-Mail Field"> </label>
        <input
          className="input"
          onChange={handleChange}
          id="E-Mail Field"
          name="email"
          type="email"
          value={values.email}
          placeholder="Please type your E-Mail."
        />
        <label for="Telephone field"></label>
        <InputMask
          className="input"
          id="Telephone Field"
          name="tel"
          mask="(999) 999-9999"
          value={values.tel}
          placeholder="Contact Number"
          onChange={handleChange}
        ></InputMask>
        <label for="Text Area Field"></label>
        <textarea
          className="input-textarea"
          onChange={handleChange}
          id="Text Area Field"
          name="message"
          type="text"
          value={values.message}
          placeholder="Please write your message here."
        />
        <button className="input-button" type="submit">
          Submit
        </button>
      </form>

      <div className="FAQ">
        <GoogleMaps
          apiKey={"AIzaSyAMNr-RXcvyYo0k5S79GA1HbCogx0V9dg0"}
          style={{ height: "400px", width: "100%" }}
          zoom={15}
          center={{ lat: 37.4224764, lng: -122.0842499 }}
          markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
        />
      </div>
    </div>
  );
}
