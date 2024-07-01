import React from 'react';
import Style from "./Footer.module.css"

const Footer = () => {
    return (
        <section>
            <div className={Style.First}>
                <div className={Style.head}>
                    <h1>Subscribe to our Newsletter</h1>
                </div>
                <div className={Style.searchBar}>
                    <input type="email" name="text" placeholder='Your email'></input>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className={Style.second}>
                <div className={Style.Image}>
                    <img src="https://testyantraglobal.com/wp-content/uploads/2022/04/ty_global_1-1-160x160.png"></img>
                </div>

                <div className={Style.home}>
                    <p>Home</p>
                    <ul>
                        <li>About Us</li>
                        <li>Work With Us</li>
                        <li>Contact </li>
                        <li>Case Studies</li>
                    </ul>
                    <div className={Style.Service}>
                        <p>Services</p>
                        <ul>
                            <li>Software Development</li>
                            <li>Elevate–IT training services</li>
                            <li>IT consulting</li>
                        </ul>
                    </div>
                </div>

                <div className={Style.Industries}>
                    <p>Industries</p>
                    <ul>
                        <li>Banking & Finance</li>
                        <li>Insurance</li>
                        <li>Healthcare</li>
                        <li>Retail & e-commerce</li>
                        <li>Technology and Communications</li>
                        <li>Education</li>
                        <li>Travel</li>
                        <li>Media and Entertainment</li>
                    </ul>
                </div>

                <div className={Style.Connect}>
                    <p>Connect</p>
                    <ul>
                        
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin-in"></i></ul>
                    <li><i class="fa-solid fa-headphones-simple"></i>&nbsp;&nbsp;Ph:+1 888 980 7010</li>
                    <li><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;hello@testyantraglobal.com</li>

                </div>

            </div>
            <div className={Style.policy}>
                <div className={Style.rights}>
                    <p>©2022 Test Yantra Global. All rights reserved</p>
                </div>
                <div className={Style.cookie}>
                    <p><a href="https://testyantraglobal.com/privacy-policy/">Privacy Policy</a>
                    </p>
                    <p>
                        <a href="https://testyantraglobal.com/cookies-policy/">Cookie Policy</a>
                    </p>
                </div>
                </div>



        </ section>

    )
}

export default Footer