import { useRef, useEffect,useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Filter from "./components/Filter";
import WineDetails from "./components/WineDetails";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { IoIosArrowUp} from 'react-icons/io';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Imageshow from "./components/Imageshow"

function App()
{
  
  const [array, setArraypart] = useState(0)
  function modify(type) {
    if (type === "ARTISTS") {
        setArraypart(0);
      } else if (type === "GATHERINGS") {
          setArraypart(1);
      } else if (type === "VENUE") {
          setArraypart(2);
      } else if (type === "SOMMELIER") {
          setArraypart(3);
      }
  }

  const [filterType, setFilterType] = useState({
    color: "",
    region: "",
    country: ""
  })
  
  function filter(type)
  {
      setFilterType(type);
  }
console.log(filterType)
  return (
    <div className="Main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main edit={modify} filter={filter} />} />
          <Route path="/Wine" element={<Filter filterType={filterType} />} />
          <Route path="/Wine/:wineId" element={<WineDetails />} />
          <Route path="/show" element={<Imageshow array={array} />} />
          <Route path="*" element={<Main edit={modify} filter={filter} />} />
        </Routes>
      </BrowserRouter>
      <div className="svg-container">
        <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=%2B96170002909&text&type=phone_number&app_absent=0">
        <FontAwesomeIcon icon={faWhatsapp} color="black"  className="svga"/>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kamal-chhimi-77684b228/">
        <FontAwesomeIcon icon={faApple} color="black"  className="svgb"/>
        </a>
        <IoIosArrowUp onClick={() => handleButtonClick(pagesRef[1])} color="black" className="svgb" />
      </div> 
    </div>
  );
}
export default App;

      //       {/* <div className="Page7" style={{display: display ? "none" : "block"}} ref={pagesRef[7]}>
      //   <Filter Display={editDisplay} />
      // </div> */}
