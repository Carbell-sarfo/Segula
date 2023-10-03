import {Link} from "react-router-dom"
import Logo from "../assets/logo.png"


const Navbar = () => {
  return (
    <div>
        <Link to="/" className="logo">
            <img src={Logo} alt="logo"  />
        </Link>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/careers" className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/our-packages" className="nav-link">Our Packages</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Careers</Link>
          </li>
        </ul>
    </div>
  )
}

export default Navbar