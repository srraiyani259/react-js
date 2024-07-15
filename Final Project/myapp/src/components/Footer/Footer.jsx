import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <div className="footer">
        <div className="FooterSection">
            <div className="sub-footer">
                <p>Company</p><br />
                <a href="">About us</a><br />
                <a href="">Our offerings</a><br />
                <a href="">Newsroom</a><br />
                <a href="">Investors</a><br />
                <a href="">Blog</a><br />
                <a href="">Careers</a><br />
                <a href="">AI</a><br />
                <a href="">Gift cards</a><br />
            </div>
            <div className="sub-footer">
                <p>Products</p><br />
                <a href="">Ride</a><br />
                <a href="">Drive</a><br />
                <a href="">Deliver</a><br />
                <a href="">Eat</a><br />
                <a href="">Uber for Business</a><br />
                <a href="">Uber Freight</a><br />
            </div>
            <div className="sub-footer">
                <p>Global citizenship</p><br />
                <a href="">Safety</a><br />
                <a href="">Diversity and Inclusion</a><br />
                <a href="">Sustainability</a><br />
            </div>
            <div className="sub-footer">
                <p>Travel</p><br />
                <a href="">Reserve</a><br />
                <a href="">Airports</a><br />
                <a href="">Cities</a><br />
            </div>
        </div>
        <div className="icons">
            <div className="sub-icons">
                <div className="icon-1">
                    <i class="fa-brands fa-square-facebook"></i>
                </div>
                <div className="icon-1">
                <i class="fa-brands fa-x-twitter"></i>
                </div>
                <div className="icon-1">
                <i class="fa-brands fa-youtube"></i>
                </div>
                <div className="icon-1">
                <i class="fa-brands fa-linkedin"></i>
                </div>
                <div className="icon-1">
                <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
            <div className="info">
            <span><i class="fa-solid fa-globe"></i> English</span>
            <span><i class="fa-solid fa-location-dot"></i> Rajkot</span>
            </div>
        </div>
        <div className="last">
                <div className="sub-last">
                    <p>© 2024 Uber Technologies Inc Createed by Sarthi Kasundra.</p>
                </div>
                <div className="sub-last">
                    <a href="">Privacy</a>
                    <a href="">Accessibility</a>
                    <a href="">Terms</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer