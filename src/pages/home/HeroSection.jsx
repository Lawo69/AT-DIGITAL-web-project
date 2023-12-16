import React from 'react';
import "./Home.css";
import { CustomButton } from "../../components/button/Button";

const clickLogic = () => {
  
};

export const HeroSection = () => {
  return (
    // Hero Section Start
    <section className='hero-container'>
      <div className="hero-section">
        <div class="hero-content">
          <h1 class="header-title">
            We crush your competitors, goals, and sales records - without the B.S.
          </h1>
          <div className="button">
            <CustomButton text="Get free consultation" onClick={clickLogic} />
          </div>
        </div>
      </div>
    </section>
    // Hero Section End
      
  );
}
