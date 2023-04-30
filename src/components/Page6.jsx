import React from "react";
import "./Page6.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faInstagram, faWhatsapp, faWindows } from '@fortawesome/free-brands-svg-icons';
import welcomeimg from "../Images/welcomeLogo.png";
import { faMessage, faPhone, faVoicemail } from "@fortawesome/free-solid-svg-icons";

export default function Page6() {
  return (
    <div className="CTNR">
          <img src={welcomeimg} alt="welcome" className="imgwelcome" />
          <div className="prnt">
            <div className="lft">
              <div className="lft-text">
                <h1>CONTACT US</h1>
                <span><FontAwesomeIcon icon={faPhone} color="white" /><p>+96170002909</p></span>
                <span><FontAwesomeIcon icon={faMessage} color="white" /><p>info@thewinehaven.shop</p></span>
                <span><FontAwesomeIcon icon={faInstagram} color="white" /><p>thewinehaven.shop</p></span>
                <span><FontAwesomeIcon icon={faFacebook} color="white" /><p>Thewinehaven.shop</p></span>
                <h1>REACH OUT</h1>
              </div>
              <form className="frm" action="GET">
                <div className="row">
                  <input type="text" className="inp" placeholder="First Name" required />
                  <input type="text" className="inp" placeholder="Last Name" required />
                </div>
                <div className="row">
                  <input type="email" className="inp" placeholder="Email" required />
                  <input type="text" className="inp" placeholder="Phone Number" required />
                </div>
                <div className="row">
                <textarea className="form_text_area" rows="2" name="message" placeholder="Type your message here"></textarea>
                </div>
                  <button type="submit" id="submi">Send</button>
              </form>

            </div>
            <div className="rgth">
              <h1>OUR LOCATION</h1>
              <a className="map" target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/33%C2%B053'41.2%22N+35%C2%B030'34.1%22E/@33.8964354,35.5092457,19z/data=!3m1!4b1!4m4!3m3!8m2!3d33.894779!4d35.509471">
              </a>
            </div>
          </div>
    </div>
  );
}
