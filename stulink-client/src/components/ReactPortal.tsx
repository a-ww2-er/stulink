import { useState, useLayoutEffect, useContext } from "react";
import { createPortal } from "react-dom";
import { AppContext } from "../utilities/context";

// basically react portal just find our mainbody and appends a div to it and
//then we setup some if and else statements in case of errors
const createWrapperAndAppendToBody = (wrapperId: string | any) => {
  if (!document) return null;
  const root: HTMLElement | null = document.getElementById("root");
  // console.log(root)
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  wrapperElement.setAttribute("class", "modal");
  root?.appendChild(wrapperElement);  
  //  console.log(wrapperElement)
  return wrapperElement;
};

// children prop is our modal or content.. wrapperId is the Id we want our div we're appending to have
const ReactPortal = ({ children, wrapperId }: any) => {
  const { wrapperElement, setWrapperElement } = useContext(AppContext);

  // we use uselayout cause we're dealing with our DOM here
  useLayoutEffect(() => {
    let element: HTMLElement | null = document.getElementById(wrapperId);
    let systemCreated = false;
    // if theres no element with that id already then create one , else if there is then make it our element
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);
 
    //more error handling
    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
};

export default ReactPortal;
