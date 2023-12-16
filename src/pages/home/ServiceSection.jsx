import React from 'react'
import './Home.css'
import { CustomButton } from "../../components/button/Button";

const clickLogic = () => {
  
};

export const ServiceSection = () => {
  return (
    <section className='service-container'>
        <div className="services">
            <div className="service-row">
                <div className="service-image">
                    <img src="/img/image-1.png" alt="computer" />
                </div>
                <div className="service-content">
                    <h1 className="service-title">Web & Mobile App Development</h1>
                    <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                    <div className="button">
                        <CustomButton text="Learn more" onClick={clickLogic} />
                    </div>
                </div>
            </div>
            <div className="service-row orderchange">
                <div className="service-content">
                    <h1 className="service-title">Digital Strategy Consulting</h1>
                    <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                    <div className="button">
                        <CustomButton text="Learn more" onClick={clickLogic} />
                    </div>
                </div>
                <div className="service-image">
                    <img src="/img/image-2.png" alt="sarching-tool" />
                </div>
            </div>
        </div>
    </section>
  )
}
