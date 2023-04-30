import React, { useState } from "react";
import "./Imageshow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Imageshow(props) {
    const images =[
      [{ name: ' January 23 Artist - Mohammad El Dreini ', url: 'https://www.thewinehaven.shop/static/media/a1.28c8689557b8afa0909d.jpg' },
        { name: ' January 23 Artist - Mohammad El Dreini ', url:'https://www.thewinehaven.shop/static/media/a2.0f2e064dbbedc7d7d002.jpg' },
        {name:' January 23 Artist - Mohammad El Dreini ' ,url: 'https://www.thewinehaven.shop/static/media/a3.9192482616f707881ff6.jpg'},
        {name:' January 23 Artist - Mohammad El Dreini ' ,url: 'https://www.thewinehaven.shop/static/media/a4.8c584acdb2e142d3813d.jpg'}],
      [{ name:'Unwind with live music and a glass of wine at The Wine Haven.' , url: 'https://www.thewinehaven.shop/static/media/g1.4d26375b5d7925cb3350.jpg'},
        {name: 'Raise a glass and make new friends at The Wine Haven.', url: 'https://www.thewinehaven.shop/static/media/g2.3132a0bb3d8a8bb1e6c1.jpg'},
        {name:  'Get a taste of local and international wineries at The Wine Havens tasting events.', url: 'https://www.thewinehaven.shop/static/media/g3.c5ddd216d2334b1b999c.jpg'}],
      [{ name: 'Elevate your wine experience in a chic and elegant setting.', url: 'https://www.thewinehaven.shop/static/media/v1.3514a123ad416fe60d0e.jpg'},
      {name: 'Experience the best of wine culture at the perfect spot for a night out.', url: 'https://www.thewinehaven.shop/static/media/v2.e5142f5fa07d4f788df3.jpg'} ],
      [{ name: 'Sip and savor at our shops exclusive wine tasting events.' , url: 'https://www.thewinehaven.shop/static/media/s1.52dc6ff3f352c22daa84.jpg'},
        { name: 'Raise a glass to good times at our shop', url: 'https://www.thewinehaven.shop/static/media/s2.a304aa2ff1777bf6b13c.jpg'},
        { name: 'Explore different wine regions and varietals at our wine tasting events', url: 'https://www.thewinehaven.shop/static/media/s3.a6a32f111fdf677e94d3.jpg'},
        {name: 'Get a taste of passion at The Wine Haven.', url: 'https://www.thewinehaven.shop/static/media/s4.a3e032a3c3c86c7785f1.jpg'}]
    ]
  const imgforslide = images[props.array];
     const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () =>
    {
        setCurrentImageIndex(prevIndex =>
            prevIndex === imgforslide.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () =>
    {
        setCurrentImageIndex(prevIndex =>
            prevIndex === 0 ? imgforslide.length - 1 : prevIndex - 1
        );
    };
    const navigate = useNavigate();
    const handleClose = () =>
    {
        navigate('/');
  };

  return (
    <div className="boss" style={{overflow: "hidden"}}>
          <button onClick={handlePrevious}>&lt;</button>
          <div>
        <img
          src={imgforslide[currentImageIndex].url}
                  alt={`imgforslide ${currentImageIndex + 1}`}
                  className="photo"
        />
        <h1 style={{ textAlign: 'center' }}>{imgforslide[currentImageIndex].name}</h1>   
          </div>
        <button onClick={handleNext}>&gt;</button>
          <div className="close-icon" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
    </div>
  );
}
