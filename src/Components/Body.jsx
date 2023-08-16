import React from "react";
import QR from "../assets/image-qr-code.png";

function Body() {
  return (
    <div className="Container">
      <div className="Container2">
        <div className="Img">
          <img src={QR} alt="" />
        </div>
        <div className="Text1">
          <h1>Improve your front-end skills by building projects</h1>
        </div>
        <div className="Text2">
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
