import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
// import Linkedin from "../../img/linkedin.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>berylodipoh@gmail.com</span>
        <div className="f-icons">
          {/* <Linkedin color="white" size={"3rem"} /> */}
          <Facebook color="white" size={"3rem"} />
          <a href="https://github.com/Bodipoh">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
        <div>Developed by:BOdipoh</div>
      </div>
    </div>
  );
};

export default Footer