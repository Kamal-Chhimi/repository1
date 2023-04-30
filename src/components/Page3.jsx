import React from "react";
import { Link } from "react-router-dom";
import { useEffect , useState } from "react";
import "./Page3.css";
import welcomeim from "../Images/welcomeLogo.png"
import Image1 from "../Images/pic1-min.webp"
import Image2 from "../Images/pic2-min.webp"
import Image3 from "../Images/pic3-min.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IoIosArrowUp , IoIosArrowDown } from 'react-icons/io';
export default function Page3( props)
{
    useEffect(() => {
        const input = document.querySelector('input[type="text"]');
        input.addEventListener('focus', function() {
          this.setAttribute('data-placeholder', this.getAttribute('placeholder'));
          this.setAttribute('placeholder', 'Type');
        });
    
        input.addEventListener('blur', function() {
          this.setAttribute('placeholder', 'SEARCH PRODUCT..');
        });
      }, []);
    
      const images = [Image1, Image2, Image3];
      const [currentIndex, setCurrentIndex] = useState(0);
      
        useEffect(() =>
        {
            const intervalId = setInterval(() =>
            {
                setCurrentIndex((currentIndex + 1) % images.length);
            }, 2500);
            return () => clearInterval(intervalId);
        }, [currentIndex]);
    
        const [isUp, setIsUp] = useState(false);

        const handleClick = () =>
        {
            setIsUp(prev => !prev );
    };
    
    const [boxInfo, setboxInfo] = useState({
        color: "",
        region: "",
        country: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setboxInfo(prevFormData => {
            return {
                ...prevFormData,
                [name]: value 
            }
        })
    }

    function handleSubmit(event) {
            props.filter(boxInfo); 
    
    }
    
    return (
        <div className="containr">
            <div className="menu">
                <img src={welcomeim} alt="welcome" className="img" />
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kamal-chhimi-77684b228/">
                <FontAwesomeIcon icon={faInstagram} color="black" className="svg1"/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kamal-chhimi-77684b228/">
                <FontAwesomeIcon icon={faFacebook} color="black"  className="svg2"/>
                </a>
                <div className="input-wrapper">
                 <input type="text" className="search" placeholder="SEARCH PRODUCT.." data-placeholder="SEARCH PRODUCT.." />
                 <FontAwesomeIcon icon={faSearch} className="svg3" />
                </div>
            </div>
            <ul className="list">
              <li>HOME</li>
              <li onClick={() => props.function(props.re[2])}>ABOUT US</li>
              <li onClick={() => props.function(props.re[3])}>WINELIST</li>
              <li onClick={handleClick}>
            {isUp ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </li>
                {isUp && (
        <form className="dropdown-content">
            <div className="column" >
                <h2>Type</h2>
                <label><input type="radio" name="color" className="checkbox" value="Red"  onChange={handleChange}/>Red</label>
                <label><input type="radio" name="color" className="checkbox"  value="White" onChange={handleChange}/>White</label>
                <label><input type="radio" name="color" className="checkbox"  value="Rose"  onChange={handleChange}/>Rosé</label>
                <label><input type="radio" name="color" className="checkbox" value="Sparkling" onChange={handleChange}/>Sparkling</label>
            </div>
            <div className="column">
                <h2>Region</h2>
                <label><input type="radio" name="region" className="checkbox" value="Tuscany"  onChange={handleChange}/>Tuscany</label>
                <label><input type="radio" name="region" className="checkbox" value="Piedmont"  onChange={handleChange}/>Piedmont</label>
                <label><input type="radio" name="region" className="checkbox"  value="Veneto"  onChange={handleChange}/>Veneto</label>
            </div>
            <div className="column">
                <h2>Country</h2>
                <label><input type="radio" name="country" className="checkbox" value="Lebanon" onChange={handleChange}/>Lebanon</label>
                <label><input type="radio" name="country" className="checkbox" value="France" onChange={handleChange}/>France</label>
                <label><input type="radio" name="country" className="checkbox" value="Italy" onChange={handleChange}/>Italy</label>
            </div> 
                        <div className="column">
            <Link to="/Wine"  style={{ textDecoration: 'none' , height: "98%" }}><button onClick={handleSubmit} className="dropdown-content-button" >Filter</button></Link>     
            </div>
        </form>
      )}
  <li onClick={() => props.function(props.re[4])}>EVENTS</li>
  <li onClick={() => props.function(props.re[5])}>CONTACT US</li>
</ul>
            <div className="slideshow">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                <p className="slideshow-text"><span>From vine to glass, shop your perfect sip </span><br /> at The Wine Haven</p>
            </div>
        </div>
    )
}


{/* <form className="dropdown-content">
            <div className="column" >
                <h2>Type</h2>
                <label><input type="checkbox" name="Red" className="checkbox" checked={boxInfo.Red} onChange={handleChange} />Red</label>
                <label><input type="checkbox" name="White" className="checkbox" checked={boxInfo.White} onChange={handleChange}/>White</label>
                <label><input type="checkbox" name="Rose" className="checkbox" checked={boxInfo.Rose} onChange={handleChange}/>Rosé</label>
                <label><input type="checkbox" name="Sparkling" className="checkbox" checked={boxInfo.Sparkling} onChange={handleChange}/>Sparkling</label>
            </div>
            <div className="column">
                <h2>Region</h2>
                <label><input type="checkbox" name="Tuscany" className="checkbox" checked={boxInfo.Tuscany} onChange={handleChange}/>Tuscany</label>
                <label><input type="checkbox" name="Piedmont" className="checkbox" checked={boxInfo.Piedmont} onChange={handleChange}/>Piedmont</label>
                <label><input type="checkbox" name="Veneto" className="checkbox" checked={boxInfo.Veneto} onChange={handleChange}/>Veneto</label>
            </div>
            <div className="column">
                <h2>Country</h2>
                <label><input type="checkbox" name="Lebanon" className="checkbox" checked={boxInfo.Lebanon} onChange={handleChange}/>Lebanon</label>
                <label><input type="checkbox" name="France" className="checkbox" checked={boxInfo.France} onChange={handleChange}/>France</label>
                <label><input type="checkbox" name="Italy" className="checkbox" checked={boxInfo.Italy} onChange={handleChange}/>Italy</label>
            </div> 
                        <div className="column">
            <Link to="/Wine"  style={{ textDecoration: 'none' , height: "98%" }}><button onClick={handleSubmit} className="dropdown-content-button" >Filter</button></Link>     
            </div>
        </form> */}

        // const [boxInfo, setboxInfo] = useState({
        //     White: false,
        //     Sparkling: false,
        //     Rose: false,
        //     Red: false,
        //     Veneto: false,
        //     Piedmont: false,
        //     Tuscany: false,
        //     Italy: false,
        //     France: false,
        //     Lebanon: false
        // })
    
        // function handleChange(event) {
        //     const { name, checked } = event.target;
        //     setboxInfo(prevFormData => {
        //         return {
        //             ...prevFormData,
        //             [name]: checked 
        //         }
        //     })
        // }
    
        // function handleSubmit(event) {
        //     const trueItems = [];
        //  for (const key in boxInfo) {
        //      if (boxInfo.hasOwnProperty(key) && boxInfo[key] === true) {
        //          trueItems.push(key);
        //         }
        //     }
        //     if(trueItems.length>0)
        //         props.filter(trueItems); 
        //     else
        //         props.filter([""])
        // }