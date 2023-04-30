import React from "react";
import "./Page4.css"
import { Link } from "react-router-dom";
import welcomeimage from "../Images/welcomeLogo.png"
export default function Page4(props)
{
    return (
        <div className="contnr">
            <img src={welcomeimage} alt="welcome" className="imgwelcome" />
            <div className="type">
                <div className="row">
                    <Link to="/Wine" style={{ width: "95%" }}><button className="buton" onClick={() => props.filter({ color: "Red",region: "",country: "" })}>RED</button></Link>
                <Link to="/Wine" style={{width : "95%"}} ><button className="buton" onClick={() => props.filter({ color:"White",region: "",country: "" })}>WHITE</button></Link>
                </div>
                <div className="row">
                    <Link to="/Wine" style={{ width: "100%" }}><button className="buton" onClick={() => props.filter({ color: "Rose",region: "",country: "" })}>ROSE</button></Link>
                    <Link to="/Wine" style={{ width: "100%" }} ><button className="buton" onClick={() => props.filter({ color: "Sparkling",region: "",country: "" })}>SPARKLING</button></Link>
                </div>
                <div className="row">
                <Link to="/Wine" style={{width : "100%"}}><button className="buton" onClick={() => props.filter({color: "",region: "",country: ""})}>VIEW ALL</button></Link>
                </div>
                
            </div>
            <div className="about-4">
                <h1>Wine List</h1>
                <p>Our shop's wine collection is a treasure trove,<br/>
             A veritable feast for the senses to enjoy. From bold reds to crisp whites, sparkling and more,<br/>
             From bold reds to crisp whites, sparkling and more,<br/>
             There's a bottle for every taste and every occasion in store.<br/><br/>
             Boutique wineries sit alongside the classics,<br/>
             An eclectic mix of flavors and styles to savor.<br/>
             Our knowledgeable staff is always at hand,<br/>
             To guide you on your wine journey, and help you understand<br/><br/>
             The nuances of each bottle, the stories they hold,<br/>
             The perfect pairing for your meal, the tales they've been told.<br/>
             Come and explore, let your senses roam,<br/>
             Our wine collection is a place you'll surely callhome.</p>
            </div>
        </div>
    )
}