import "./Featurecompanies.css";
import Slider from "react-slick";
const cards = [
  {
    id: 1,
    img: "/assets/companies/alibaba.jpg",
  },
  {
    id: 2,
    img: "/assets/companies/amazon.png",
  },
  {
    id: 3,
    img: "/assets/companies/capg.png",
  },

  {
    id: 4,
    img: "/assets/companies/google.png",
  },
  {
    id: 5,
    img: "/assets/companies/l&t.png",
  },
  {
    id: 6,
    img: "/assets/companies/nvidia.png",
  },
  {
    id: 7,
    img: "/assets/companies/persistent.png",
  },
];

const Featurecompanies = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <>
      <h3>Feature Companies</h3>
      <div className="company-slider-container">
        <Slider {...settings} className="slider">
          {cards.map((card) => (
            <div className="feature-company-card" key={card.id}>
              <img src={card.img} alt="feature-company" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Featurecompanies;
