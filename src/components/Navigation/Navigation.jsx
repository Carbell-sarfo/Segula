import {useRef} from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.png"
import "./Navigation.css"

const Navigation = () => {
  const NavRef = useRef()

  const showNavbar = () => {
    NavRef.current.classList.toggle()
  }

  return (
    <div className='navbar-main'>
      <div>
        <img src={Logo} style={{width: "100px", height: "50px"}} alt="image" />
      </div>
      <nav ref={NavRef} className='nav'>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/our-packages">Our Packages</Link>
        <Link to="/careers">Careers</Link>
      </nav>
    </div>
  )
}

export default Navigation