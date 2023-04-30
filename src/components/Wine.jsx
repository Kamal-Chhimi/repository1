import React, { useState, useEffect } from "react";
import './Wine.css';
import img1 from "../final-imgs/img1.png"
export default function Wine(props)
{

    const [images, setImages] = useState([]);

    useEffect(() => {
      const importImages = async () => {
        const imageNames = [
          "img1",
          "img2",
          "img3",
          "img4",
          "img5",
          "img6",
          "img7",
          "img8",
          "img9",
          "img10",
          "img11",
          "img12",
          "img13",
          "img14",
          "img15",
          "img16",
          "img17",
          "img18",
          "img19",
          "img20",
          "img21",
          "img22",
          "img23",
          "img24",
          "img25",
          "img26",
          "img27",
          "img28",
          "img29",
          "img30",
          "img31",
          "img32",
          "img33",
          "img34",
          "img35",
          "img36",
          "img37",
          "img38",
          "img39",
          "img40",
          "img41",
          "img42",
          "img43",
          "img44",
          "img45",
          "img46",
          "img47",
          "img48",
          "img49",
          "img50",
          "img51",
          "img52",
          "img54",
          "img55",
          "img56",
          "img57",
          "img58",
          "img59"
        ];
  
        const importedImages = [];
        for (const imageName of imageNames) {
          const importedImage = await import(`../final-imgs/${imageName}.png`);
          importedImages.push(importedImage.default);
        }
  
        setImages(importedImages);
      };
  
      importImages();
    }, []);
    const nb = props.url;
    return (
        <div className="Wine-container">
            <div className="img-container">
            <img src={images[nb -1]} alt="Wine" />
            </div>
            <div className="wine-info">{props.name }</div>
            <div className="wine-info">{props.brand }</div>
            <div className="wine-info">{props.price }</div>
        </div>
    )
}