import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4"
import Page5 from "./Page5";
import Page6 from "./Page6";
import { useRef, useEffect, useState } from "react";

export default function Main(props) {
  const pagesRef = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const currentPageRef = useRef(null);

  const handleButtonClick = (re) => {
    re.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "ArrowDown") {
        e.preventDefault();
        const index = pagesRef.findIndex((ref) => ref.current === currentPageRef.current);
        if (index < pagesRef.length - 1) {
          const nextPageRef = pagesRef[index + 1];
          window.scrollTo(0, nextPageRef.current.offsetTop);
          currentPageRef.current = nextPageRef.current;
        }
      } else if (e.code === "ArrowUp") {
        e.preventDefault();
        const index = pagesRef.findIndex((ref) => ref.current === currentPageRef.current);
        if (index > 0) {
          const prevPageRef = pagesRef[index - 1];
          window.scrollTo(0, prevPageRef.current.offsetTop);
          currentPageRef.current = prevPageRef.current;
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pagesRef, currentPageRef]);
    
    const arrayimg = props.edit;
  const filterWine = props.filter;

  return (
    <div className="App">
      <div className="Page1" ref={pagesRef[0]}>
        <Page1 />
      </div>
      <div className="Page3" ref={pagesRef[1]}>
        <Page3 function={handleButtonClick} filter={filterWine} re={pagesRef} />
      </div>
      <div className="Page2" ref={pagesRef[2]}>
        <Page2 />
      </div>
      <div className="Page4" ref={pagesRef[3]}>
        <Page4 filter={filterWine} />
      </div>
      <div className="Page5" ref={pagesRef[5]}>
        <Page5 modify={arrayimg} />
      </div>
      <div className="Page6" ref={pagesRef[6]}>
        <Page6 />
      </div>
    </div>
  )
}
