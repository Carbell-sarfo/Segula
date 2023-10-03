import {Link} from "react-router-dom"
import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div style={{backgroundColor: "black", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px"}}>
        <Link to="/">
            <img src={Logo} alt="logo" style={{width: "120px", height: "70px"}} />
        </Link>
        <nav style={{display: "flex", gap: "1rem"}}>
            <Link to="/" style={{textDecoration: "none", color: "white"}}>Home</Link>
            <Link to="/about" style={{textDecoration: "none", color: "white"}}>About</Link>
            <Link to="/careers" style={{textDecoration: "none", color: "white"}}>Services</Link>
            <Link to="/our-packages" style={{textDecoration: "none", color: "white"}}>Our Packages</Link>
            <Link to="/services" style={{textDecoration: "none", color: "white"}}>Careers</Link>
        </nav>
    </div>
  )
}

export default Navbar