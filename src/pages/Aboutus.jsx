import React from 'react'
import { CustomButton } from "../components/button/Button";

export const Aboutus = () => {

  const handleButtonClick = () => {
    // Your button click logic here
    console.log('Button clicked!');
  };

  return (
    <div><CustomButton text="Click Me" onClick={handleButtonClick} /></div>
  )
}
