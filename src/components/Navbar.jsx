import {Link} from "react-router-dom"
import Logo from "../assets/logo.png"


const Navbar = () => {
  return (
    <div>
        <Link to="/">
            <img src={Logo} alt="logo"/>
        </Link>
        <nav>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/careers" >Services</Link>
            <Link to="/our-packages" >Our Packages</Link>
            <Link to="/services" >Careers</Link>
        </nav>
    </div>
  )
}

export default Navbar