import React from 'react'
import './Button.css';

export const CustomButton = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>
      {text}
    </button>
    );
}