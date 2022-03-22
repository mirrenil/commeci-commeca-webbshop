import zIndex from '@mui/material/styles/zIndex';
import { padding } from '@mui/system';
import React, { CSSProperties } from 'react';
import ReactDOM from "react-dom";
import { transform } from 'typescript';

const modalStyles: CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const overlayStyles: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}
export default function Modal({open, children, onClose}) {
    if (!open) return null

    return ReactDOM.createPortal(
        <>
        <div style={overlayStyles} />
        <div style={modalStyles}>
            <button onClick={onClose}>Close</button>
            {children}
        </div>
        </>,
        document.getElementById('portal')!
    )
}
