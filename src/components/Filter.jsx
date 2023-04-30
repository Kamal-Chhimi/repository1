import React from "react";
import { useState } from "react";
import "./Filter.css";
import data from "./data.json";
import welcomeimg from "../Images/welcomeLogo.png";
import Wine from "./Wine";
import { Link } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';


export default function Filter(props)
{
  const FilteredArray = data.filter(function (number)
  {
    if (props.filterType.color === "" && props.filterType.region === "" && props.filterType.country === "") {
      return (number.item.productType === "Red" ||
        number.item.productType === "White" ||
        number.item.productType === "Rose" ||
        number.item.productType === "Sparkling");
    }
    else if (props.filterType.color !== "" && props.filterType.region !== "" && props.filterType.country !== "") {
        return number.item.productType === props.filterType.color &&
      number.item.productRegion === props.filterType.region &&
        number.item.productCountry === props.filterType.country;
    }
    else if (props.filterType.color !== "" && props.filterType.region === "" && props.filterType.country === "") {
      return number.item.productType === props.filterType.color;
    }
    else if (props.filterType.color === "" && props.filterType.region !== "" && props.filterType.country === "") {
      return number.item.productRegion === props.filterType.region;
    }
    else if (props.filterType.color === "" && props.filterType.region === "" && props.filterType.country !== "") {
      return number.item.productCountry === props.filterType.country;
    }
  });
   
  
  
  const Component = FilteredArray.map((item, index) =>
  <Link style={{ textDecoration: "none" }} to={`/Wine/${item.id}`}>
      <Wine key={index} url={item.id} price={item.item.productPrice} name={item.item.productName} brand={item.item.productBrand} />
    </Link>)
  
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

  function handleSubmit(event)
  {
    event.preventDefault();
  setboxInfo(boxInfo); 

}
  
  return (
    <div className="Filter-container">
      <img src={welcomeimg} alt="welcome" className="welcome" />
      <span className="filter">Filter<div onClick={handleClick}>
            {isUp ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div></span>

                {isUp && (
        <form className="dropdown-content">
            <div className="column" >
                <h2>Type</h2>
                <label><input type="radio" name="color" className="checkbox" value="Red"  onChange={handleChange}/>Red</label>
                <label><input type="radio" name="color" className="checkbox"  value="White"  onChange={handleChange}/>White</label>
                <label><input type="radio" name="color" className="checkbox"  value="Rose" onChange={handleChange}/>Rosé</label>
                <label><input type="radio" name="color" className="checkbox" value="Sparkling"  onChange={handleChange}/>Sparkling</label>
            </div>
            <div className="column">
                <h2>Region</h2>
                <label><input type="radio" name="region" className="checkbox" value="Tuscany"  onChange={handleChange}/>Tuscany</label>
                <label><input type="radio" name="region" className="checkbox" value="Piedmont"  onChange={handleChange}/>Piedmont</label>
                <label><input type="radio" name="region" className="checkbox"  value="Veneto"  onChange={handleChange}/>Veneto</label>
            </div>
            <div className="column">
                <h2>Country</h2>
                <label><input type="radio" name="country" className="checkbox" value="Lebanon"  onChange={handleChange}/>Lebanon</label>
                <label><input type="radio" name="country" className="checkbox" value="France" onChange={handleChange}/>France</label>
                <label><input type="radio" name="country" className="checkbox" value="Italy"  onChange={handleChange}/>Italy</label>
            </div> 
                        <div className="column">
            <button onClick={handleSubmit} className="dropdown-content-button" >Filter</button>
            </div>
        </form>
      )}
          <Link to="/"><h2  className="h2">Back to the Wine List</h2></Link>
          <div className="wine-container">
              {Component}
      </div>
    </div>
  );
}

// const FilteredArray = data.filter(function (number)
// {
//   return props.filterType!=="All" ? number.item.productType === props.filterType : number.item.productType === "Red"||"White" ||"Rose"||"Sparkling";
//   })


// const FilteredArray = data.filter(function (number) {
//   return props.filterType.color === ""&& props.filterType.region === "" && props.filterType.country === "" ?
//   (number.item.productType === "Red" ||
//   number.item.productType === "White" ||
//   number.item.productType === "Rose" ||
//   number.item.productType === "Sparkling")
//     : number.item.productType === props.filterType.color &&
//     number.item.productRegion === props.filterType.region &&
//     number.item.productCountry === props.filterType.country;
// });
