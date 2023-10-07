import Slider from "react-slick";
import ClientCard from "./ClientCard";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs"
import Boy1 from "../assets/boy.png";
import Boy2 from "../assets/boyb.jpg";
import Boy3 from "../assets/boyc.jpg";
import Boy4 from "../assets/boyd.jpg";

const SliderSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <BsArrowLeft  className="slick-arrow prev-arrow" color="green" size={50} 
    // style={{position: "absolute", right: "50px", top: "0"}}
    />,
    nextArrow: <BsArrowRight className="slick-arrow next-arrow" color="red"  size={50} 
    // style={{position: "absolute", left: "15px", top: "0"}}
    />
    
  };
  return (
    <div className="testimonial-container">
          <Slider {...settings}>
            <ClientCard cardImg={Boy1} />
            <ClientCard cardImg={Boy2} />
            <ClientCard cardImg={Boy3} />
            <ClientCard cardImg={Boy4} />
          </Slider>
    </div>
  );
};

export default SliderSlick;
