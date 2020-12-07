import React, { useState } from "react";

export default function Message(props) {
  //   const [isVisible, setisVisible] = useState(true);

  //   const deleteMessage = () => {
  //     setTimeout(() => {
  //       setisVisible(false);
  //     }, 1000);
  //   };

  return <div>{props.displayMessage}</div>;
}
