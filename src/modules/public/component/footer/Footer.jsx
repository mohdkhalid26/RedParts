import React from "react";
import "./Footer.scss";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

function Footer() {
  return (
    <div className="footer">
      <div className="first">
        <div className="about">
          <h3>ABOUT</h3>
          <p>
              At <b>AVESH CAR AC</b>, we understand the importance of a
              comfortable and refreshing driving experience. With a passion for
              automotive climate control, we have dedicated ourselves to
              providing top-notch car air conditioning solutions that ensure you
              stay cool and comfortable on the road. Founded in 2014, <b>AVESH CAR AC</b>, has been a pioneer in the
              automotive air conditioning industry. Our journey began with a
              simple goal to enhance the driving experience by offering reliable
              and efficient AC solutions for all types of vehicles. Over the
              years, we have evolved and grown, but our commitment to quality
              and customer satisfaction remains unwavering.
            </p>
          
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.2807341497914!2d81.93296889999999!3d25.4288763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39854b0a036e8203%3A0xc6fa0f44c7c5d689!2sAvesh%20Car%20AC!5e0!3m2!1sen!2sin!4v1707399251703!5m2!1sen!2sin"
          title="AVESH CAR AC"
        ></iframe>
      </div>
      </div>
      <div className="sec">

<div className="contact">
  <div className="con">
    <span className="num">Phone: +918303388143</span>
    <span className="add">Address: Prayagraj,UttarPradesh,India</span>
  </div>
  <div className="copy-right"><div className="icons">
<a target="_blank" href="tel:+918303388143">

<IoIosCall />
</a>
<a target="_blank" href="https://maps.app.goo.gl/uAhx2sL7LbuoMKJe6">

<IoLocationSharp />
</a>

  </div>
  <span>&copy; 2023 All Rights Reserved.</span> 
  </div>
 
</div>

      </div>
    </div>
  );
}

export default Footer;
