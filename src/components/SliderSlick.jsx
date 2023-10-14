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
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    // prevArrow: <BsArrowLeft  className="slick-arrow prev-arrow"  />,
    // nextArrow: <BsArrowRight className="slick-arrow next-arrow"  />,

    prevArrow: <button type="button" class="arrow prev"><i class="fa-solid fa-chevron-left"></i></button>,
    nextArrow: <button type="button" class="arrow next"><i class="fa-solid fa-chevron-right"></i></button>
       
    
  };
  return (
        <Slider {...settings}>
          <ClientCard className="testimonials-container" cardImg={Boy1} />
          <ClientCard className="testimonials-container" cardImg={Boy2} />
          <ClientCard className="testimonials-container" cardImg={Boy3} />
          <ClientCard className="testimonials-container" cardImg={Boy4} />
        </Slider>
  );
};

export default SliderSlick;
