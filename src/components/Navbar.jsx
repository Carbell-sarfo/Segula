import {Link} from "react-router-dom"
import Logo from "../assets/logo.png"
// importing css code
import '../App.scss'


const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="container wrapper">

        <div className="nav-container">
          {/* logo */}
          <Link to="/" className="logo">
              <img src={Logo} alt="logo"/>
          </Link>


          {/* nav-Menu put in a list */}
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" >About</Link>
            </li>
            <li className="nav-item">
              <Link to="/careers" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/our-packages" className="nav-link" >Our Packages</Link>
            </li>
            <li className="nav-item">

              <Link to="/services" className="nav-link" >Careers</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar