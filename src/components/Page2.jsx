import React from "react";
import "./Page2.css"
import welcomeimg from "../Images/welcomeLogo.png"
export default function Page2()
{
    return (
        <div className="container">
            <img src={welcomeimg} alt="welcome" className="imgwelcome" />
            <div className="about">
                <h1 className="info"> <span>ABOUT US</span></h1>
                <p className="info">Our Wine Haven offers a wide selection of international and local high-quality wines, as well as the perfect place to relax and enjoy a glass of your favorite bottle, with a comfortable and welcoming atmosphere. Our E-Store allows our customers to purchase their preferred pour and have it delivered straight to their front door. Whether you're looking to stock up on your favorite wines, unwind with a glass, or have your purchases delivered, we've got you covered.</p>
            </div>
        </div>
    )
}