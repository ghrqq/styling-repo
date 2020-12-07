import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import axios from "axios";

export default function ReCaptcha(props) {
  const [rsp, setrsp] = useState(null);
  const onChange = async (value) => {
    console.log("Value: ", value);

    const isHuman = await axios.get(`/recaptcha/${value}`);
    const isCaptcha = await isHuman["data"]["msg"];

    props.handleChange(isCaptcha);
  };

  return (
    <div>
      <ReCAPTCHA
        sitekey="6Lf7VPoZAAAAAIAax8FCfXBcJzpFxa2bpozDaVgR"
        onChange={onChange}
      />
    </div>
  );
}
