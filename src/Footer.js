import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <>
         <footer>
            <div className="container-fluid ">
              <hr/>
              <div className="footerText">
                <p style={{color:'white'}}>&copy; Designed by Rushikesh Ingale</p>
              </div>
              <hr/>
              <div className="row">
                <div className="col-xs-4">
                  <div className="about1">
                    <p>About Us</p>
                    <p>Contact Us</p>
                  </div>  
                </div>

                <div className="col-xs-4">
                  <div className="about2">
                    <p>About Us</p>
                    <p>Contact Us</p>
                  </div>  
                </div>

                <div className="col-xs-4">
                  <div className="about3">
                    <p>About Us</p>
                    <p>Contact Us</p>
                  </div>  
                </div>
              </div>
              <hr/>
              <div className="social">
                <a href="https:www.youtube.com" rel="noreferrer" target="_blank"><img src="https://i.ibb.co/fS4RD7k/insta.png" alt="youtube" height="50px" width="50px"/></a>
                <a href="https:www.instagram.com" rel="noreferrer" target="_blank"><img src="https://i.ibb.co/CVdKF2c/youtube1.png" alt="youtube" height="50px" width="50px"/></a>
                <a href="https:www.facebook.com" rel="noreferrer" target="_blank"><img src="https://i.ibb.co/jHMR4pD/facebook.png" alt="youtube" height="50px" width="50px"/></a>
              </div>
            </div>
          </footer>
        </>
    )
}

export default Footer;
