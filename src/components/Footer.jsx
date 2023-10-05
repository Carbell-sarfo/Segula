import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../assets/logo.png"

const Footer = () => {
  return (
    <>
      <section class="section-footer" id="section-footer">
    <div class="container wrapper">

        <div class="footer-container">
            <div class="text-center">
                <img src={Logo} alt="logo" className='footer-logo'/>
            </div>

        {/* Social media icons */}
        <ul class="footer-social">
            {/* linkedin */}
            <li class="social-item">
                <a href="https://www.linkedin.com/company/segula-global/?viewAsMember=true" class="social-link" target="blank">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
            </li>
             {/* YouTube  */}
             {/* <li class="social-item">
                <a href="https://www.instagram.com/segulaglobal/" class="social-link" target="blank">
                    <i class="fa-brands fa-youtube"></i>
                </a>
            </li> */}
             {/* Instagram  */}
            <li class="social-item">
                <a href="https://www.instagram.com/segulaglobal/" class="social-link" target="blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </li>
            {/* Twitter  */}
            <li class="social-item">
                <a href="https://twitter.com/segulaglobal" class="social-link" target="blank">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>
            </li>
        </ul>

         {/* Privacy Policy and Terms of use  */}
        <ul class="policy">
            <li class="privacy-item">
                <a href="#" class="privacy-link">Privacy Policy</a>
            </li>
            <li class="privacy-item">
                <a href="#" class="privacy-link">Terms of Use</a>
            </li>
        </ul>
           
        </div>
        
    </div>
</section> 
<footer>
    <p>&copy; 2023 Segula Global. All Rights Reserved.</p>
</footer>
    </>
  )
}

export default Footer