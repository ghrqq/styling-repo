import React, { useState } from "react";
import axios from "axios";
import Message from "./Message";

import useForm from "../tools/useForm";
import { InputMask } from "primereact/inputmask";

import GoogleMaps from "simple-react-google-maps";
import ReCaptcha from "./ReCaptcha";

export default function Contact() {
  // const { values, handleChange, handleSubmit } = useForm();
  const [captcha, setcaptcha] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [tel, settel] = useState("");
  const [message, setmessage] = useState("");
  const [resMsg, setresMsg] = useState("");
  const [isMsgVisible, setisMsgVisible] = useState(false);
  const [isAllFields, setisAllFields] = useState(false);

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    if (!name || !email || !tel || !message || !captcha) {
      setresMsg("All fields are required!");
      setisAllFields(true);
      setisMsgVisible(true);
      deleteMessage();
    } else {
      axios
        .post("/contactformhandler", { name, email, tel, message })
        .then((response) => setresMsg(response.data.msg))
        .then(setisMsgVisible(true));
      clearForm();
    }

    // Callback will come here.
  };

  const captchaChanger = (val) => {
    setcaptcha(val);
  };
  const deleteMessage = () => {
    setTimeout(() => {
      setisMsgVisible(false);
    }, 3000);
  };

  const clearForm = () => {
    setname("");
    settel("");
    setemail("");
    setmessage("");
  };

  const formAttention = isAllFields ? "attention" : null;

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
        {!isMsgVisible ? null : (
          <div>
            <Message displayMessage={resMsg} />
            {deleteMessage()}
          </div>
        )}
        <label for="Name Field"></label>
        <input
          className={`input ${formAttention}`}
          onChange={(e) => setname(e.target.value)}
          id="Name Field"
          name="name"
          type="text"
          value={name}
          placeholder="Please type your name."
        />
        <label for="E-Mail Field"> </label>
        <input
          className={`input ${formAttention}`}
          onChange={(e) => setemail(e.target.value)}
          id="E-Mail Field"
          name="email"
          type="email"
          value={email}
          placeholder="Please type your E-Mail."
        />
        <label for="Telephone field"></label>
        <InputMask
          className={`input ${formAttention}`}
          id="Telephone Field"
          name="tel"
          mask="(999) 999-9999"
          value={tel}
          placeholder="Contact Number"
          onChange={(e) => settel(e.target.value)}
        ></InputMask>
        <label for="Text Area Field"></label>
        <textarea
          className={`input-textarea ${formAttention}`}
          onChange={(e) => setmessage(e.target.value)}
          id="Text Area Field"
          name="message"
          type="text"
          value={message}
          placeholder="Please write your message here."
        />
        <div id="captcha">
          <ReCaptcha handleChange={captchaChanger} />
        </div>

        {captcha ? (
          <button className="input-button" type="submit">
            Submit
          </button>
        ) : (
          <button className="input-button" style={{ backgroundColor: "red" }}>
            {" "}
            Please verify you are human!{" "}
          </button>
        )}

        {/* <button className="input-button" type="submit">
          Submit
        </button> */}
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
