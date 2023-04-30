import React from "react";
import welcomevd from "../Images/welcome.mp4"
import welcomeimg from "../Images/welcomeLogo.png"
import "./Page1.css"
export default function Page1()
{
    return (
        <div className="container">
            <div className="vd-container">
               <video className='video' autoPlay loop muted>
             <source src={welcomevd}  type='video/mp4' />
                </video>  
                <div className="welcome-container">
                    <img src={welcomeimg} alt="welcome" className="welcomeimg" />  
                    <div className="welcometxt">
                    <p className="text"><span className="spn">T</span>HE FINEST SELECTION OF <span className="spn">W</span>INE SHIPPED FROM  <span className="spn">H</span>EAVINELY</p><br />
                        <p className="text" id="text-btn">VINEYARDS TO YOUR HOMES</p>
                    </div>
                </div>
               
            </div>
         </div>
     )
 }