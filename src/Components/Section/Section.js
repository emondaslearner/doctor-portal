import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Section.css';

const Section = () => {
    return (
        <div className="contents">
            <div style={{background: 'linear-gradient(-90deg, #3A4256 30%, rgba(0, 0, 0, 0)30%), url("./image/Mask-Group-2.png")',backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}} > 
                <Header></Header>
                <section>
                    <div className="left">
                        <h1>Your New Smile Starts Here</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos soluta sequi magnam, eos iusto, quis odio</p>
                        <Link to="/appointment">GET APPOINTMENT</Link>
                    </div>
                    <div className="right">
                        <img src="./image/Mask Group 1.png" alt=""/>
                    </div>
                </section>
            </div>
            <div className="section1">
                <h2>OUR SERVICES</h2>
                <h1>Services We Provide</h1>
                <div className="service">
                    <div className="left">
                        <img src="./image/001-dental.png" alt=""/>
                        <h3>Fluoride Treatment</h3>
                        <p>Lorem ipsum simply dummy printing and typesetting indust ipsum has been the.</p>
                    </div>
                    <div className="middle">
                        <img src="./image/tooth (1).png" alt=""/>
                        <h3>Cavity Filling</h3>
                        <p>Lorem ipsum simply dummy printing and typesetting indust ipsum has been the.</p>
                    </div>
                    <div className="right">
                        <img src="./image/tooth.png" alt=""/>
                        <h3>Teath Whitening</h3>
                        <p>Lorem ipsum simply dummy printing and typesetting indust ipsum has been the.</p>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="left">
                    <img src="./image/Mask Group 3.png" alt=""/>
                </div>
                <div className="right">
                    <h1>Exceptional Dental Care,on Your Terms</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam omnis dolorum itaque, minus assumenda error eos voluptatibus iste magni illum est ut optio, amet impedit aspernatur incidunt ab debitis voluptate quibusdam. Magnam totam dignissimos minus est beatae quisquam odit adipisci cumque, commodi exercitationem similique quia quo ut quae iste possimus?</p>
                    <Link to="/appointment">Learn More</Link>
                </div>
            </div>
            <div style={{backgroundImage:'url("./image/Mask Group 4.png")',backgroundSize:'115% 100%'}} className="section3">
                <div className="layer">
                    <div className="blog">
                        <div className="left">
                            <img src="./image/5790-removebg.png" alt=""/>
                        </div>
                    </div>
                    <div className="right">
                        <h3>APPOINTMENT</h3>
                        <h1>Make an appointment Today</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dignissimos quae quas fugit aliquid sit, optio quisquam odit beatae possimus?</p>
                        <Link to="/appointment">Learn More</Link>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage:'url("./image/Mask Group 4.png")',backgroundSize:'115% 100%'}} className="section4">
                <h3>CONTACT US</h3>
                <h1>Always Connect with us</h1>
                <form action="">
                    <input placeholder="Email Address*" type="text"/>
                    <input placeholder="Subject*" type="text"/>
                    <textarea name="" id="" cols="30" rows="10">Your Message*</textarea>
                    <input value="Submit" type="submit"/>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Section;