import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h4>
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    Hawthorn, Melbourne
                    </h4>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    0415 330 620
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    hosuthaophuoc@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>Connect with me</h4>
                <div className="social">
                <FaFacebook size={20} style={{color:"#fff", marginRight: "2rem"}} />
                hosuthaophuoc@gmail.com
                <FaLinkedin size={20} style={{color:"#fff", marginRight: "2rem"}} />
                hosuthaophuoc@gmail.com
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer


