import React from "react";
import ReactPortal from "../ReactPortal";
import "./styles.scss";

type popupModal = {
  children: JSX.IntrinsicElements | any;
  isOpen: boolean;
  handleClose: any;
};

const PopupModal = ({ children, isOpen, handleClose }: popupModal) => {
  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="ProfileCompletion">
      <div className="popup_modal modal_bg">
     
          {children}
    
      </div>
    </ReactPortal>
  );
};

export default PopupModal;
