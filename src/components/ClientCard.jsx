import "./ClientCard.css"
import BoyImg from "../assets/boy.png"

const ClientCard = ({cardImg}) => {
  return (
    <div className="clientCard-top">
        <div className="card-container">
            <div className="img-container">
                <img src={cardImg} alt="boy" />
            </div>
            <h3>Full Name</h3>
            <p>Position and Title</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    </div>
  )
}

export default ClientCard