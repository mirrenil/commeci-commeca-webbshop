import { Button } from '@mui/material';
import React, { CSSProperties } from 'react';
import ReactDOM from "react-dom";
import AddProductForm from './AddProductForm';
import CloseIcon from "@mui/icons-material/Close";


const modalStyles: CSSProperties = {
  position: 'fixed',
  top: '56.5%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
  width: '75vw',
  height: '65vh',
}

const overlayStyles: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .55)",
  zIndex: 1000,
};

export default function Modal({open, children, onClose}) {
    if (!open) return null;

    // if modal is opened, following code disallowes you to scroll
    // (not fully functional yet)
    const body : HTMLBodyElement | any = document.querySelector("body");
    if (open) {
      body.style.overflow = "hidden";
    } else if (!open) {
      body.style.overflow = "scroll";
    }

    return ReactDOM.createPortal(
      <>
        <AddProductForm />
        <div style={overlayStyles} />
        <div style={modalStyles}>
          <Button onClick={onClose} style={{ position: "fixed", padding: '0', top: '15px', left:'5px' }}>
            <CloseIcon style={{ color: "#333" }} />
          </Button>
          <div>
            <h3
              style={{
                left: "50%",
                right: "50%",
                textAlign: "center",
                fontFamily: "Prata",
                paddingBottom: "1rem",
              }}
            >
              ADD A NEW PRODUCT
            </h3>
          </div>
          {children}
        </div>
      </>,
      document.getElementById("portal")!
    );
}
