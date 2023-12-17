import React from 'react';
import './Footer.css';

export const Footer = () => {

    return (
        <footer class="footer">
            <div class="row">
                <div class="col-1">
                    <div class="logo">
                        <img src="/img/logo.png" alt="Logo"/>
                    </div>
                    <div class="description">
                        <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                    </div>
                </div>

                <div class="col-2">
                    <div class="col-3">
                    <h3 className='footer-heading'>Our Technologies</h3>
                    <ul>
                        <li>ReactJS</li>
                        <li>Gatsby</li>
                        <li>NextJS</li>
                        <li>NodeJS</li>
                        <li>GraphQL</li>
                        <li>Laravel</li>
                    </ul>
                    </div>

                    <div class="col-3">
                    <h3 className='footer-heading'>Our Services</h3>
                    <ul>
                        <li><a href="">Social media Marketing</a></li>
                        <li><a href="">Web & Mobile App Development</a></li>
                        <li><a href="">Data & Analytics</a></li>
                        <li><a href="">Google Marketing solutions</a></li>
                        <li><a href="">Search Engine Optimization</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <hr />
                <div className="row-bottom">
                    <p><a href="">Privacy Policy</a></p><p>|</p><p><a href="">Terms & Conditions</a></p>
                </div>
            </div>
            
        </footer>
    );
}