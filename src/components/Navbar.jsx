import {Link} from "react-router-dom"
import Logo from "../assets/logo.png"
// importing css code
import '../App.scss'
import { useRef, useState } from "react"
import {FaBars, FaTimes} from "react-icons/fa"



const Navbar = () => {
  const [mobile, setMobile] = useState(false)

  return (
    // navigation overlay
    <div className="nav-bar">
      <div className="container wrapper">
        <div className="nav-container">
          {/* nav-button */}
        {/* <div className="nav-btn">
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
        </div> */}

          {/* logo */}
          <Link to="/" className="logo">
              <img src={Logo} alt="logo"/>
          </Link>

          {/* nav-Menu put in a list */}
          <ul className={mobile? "show nav-list" : "close nav-list"} onClick={() => setMobile(true)}>
            <li className="nav-item">
              <Link to="/" className="nav-link" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" >About</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/our-packages" className="nav-link" >Our Packages</Link>
            </li>
            <li className="nav-item">

              <Link to="/careers" className="nav-link btn btn-neutral" >Schedule a meeting</Link>
            </li>
          </ul>
          <div onClick={() => setMobile(!mobile)} className="nav-btn-div">
            {mobile ?  <FaTimes color="white" size={35}/> : <FaBars color="white" size={35} /> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar