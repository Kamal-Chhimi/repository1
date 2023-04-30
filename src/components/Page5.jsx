import React from "react";
import "./Page5.css"
import welcomeimage from "../Images/welcomeLogo.png"
import { Link } from 'react-router-dom';

export default function Page5(props)
{
  // const navigate = useNavigate(); then we can set onClick={Info}
  // function Info()
  // {
  //   navigate('/show');
  // };
  return (
    <div className="ctnr">
      <img src={welcomeimage} alt="welcome" className="imgwelcome" />
      <div className="parent">
        <div className="left">
          <h1>OUR EVENTS</h1>
          <p>Chic, cozy and full of life, our venue is set to host a variety of events that suit every taste and occasion. Our private event space is perfect for intimate gatherings, corporate events, networking events, and private dinners. We also offer wine tasting and pairing classes that make the perfect choice for a night out on the town, with delicious catering options and a wide selection of fine wines. Our team is always available to help you plan and execute a memorable gathering from start to finish.</p>
        </div>
        <div className="right">
          <Link to='/show' style={{ textDecoration: 'none' }}><div onClick={() => props.modify("ARTISTS")}><span >ARTISTS</span></div></Link>
          <Link to='/show' style={{ textDecoration: 'none' }}><div onClick={() => props.modify("GATHERINGS")}><span >GATHERINGS</span></div></Link>
          <Link to='/show' style={{ textDecoration: 'none' }}><div onClick={() => props.modify("VENUE")}><span >VENUE</span></div></Link>
          <Link to='/show' style={{ textDecoration: 'none' }}><div onClick={() => props.modify("SOMMELIER")}><span >SOMMELIER</span></div></Link>
        </div>
      </div>
    </div>
  )
}
