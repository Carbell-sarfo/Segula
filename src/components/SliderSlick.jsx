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
    prevArrow: <BsArrowLeft color="red" size={50} style={{position: "absolute", right: "50px", top: "0"}}/>,
    nextArrow: <BsArrowRight color="black" size={50} style={{position: "absolute", left: "15px", top: "0"}}/>
    // .slick-next {
    //         right: 15px;
    //         top: 100%;
    //         transform: translateY(5px);
    //     }
    //     .slick-prev {
    //         left: 15px;
    //         top: 100%;
    //         transform: translateY(5px);
    //     }
    //   '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    // nextArrow:
    //   '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></i></button>'
  };
  return (
    <div>
      <div>
        <h2> Single Item</h2>
        <div>
          <Slider {...settings}>
            <div>
              <ClientCard cardImg={Boy1} />
            </div>
            <div>
              <h3>2</h3>
              <ClientCard cardImg={Boy2} />
            </div>
            <div>
              <h3>3</h3>
              <ClientCard cardImg={Boy3} />
            </div>
            <div>
              <h3>4</h3>
              <ClientCard cardImg={Boy4} />
            </div>
            {/* <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderSlick;
