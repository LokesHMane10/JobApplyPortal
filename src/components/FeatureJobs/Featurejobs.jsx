import "./FeatureJobs.css";
import Slider from "react-slick";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const cards = [
  {
    id: 1,
    position: "Database Administrator",
    company: "Jobringer",
    experience: "3-6 Years",
    location: "Mumbai",
    working: "Full time",
  },
  {
    id: 1,
    position: "Database Administrator",
    company: "Jobringer",
    experience: "3-6 Years",
    location: "Mumbai",
    working: "Full time",
  },
  {
    id: 1,
    position: "Database Administrator",
    company: "Jobringer",
    experience: "3-6 Years",
    location: "Mumbai",
    working: "Full time",
  },
  {
    id: 1,
    position: "Database Administrator",
    company: "Jobringer",
    experience: "3-6 Years",
    location: "Mumbai",
    working: "Full time",
  },
  {
    id: 1,
    position: "Database Administrator",
    company: "Jobringer",
    experience: "3-6 Years",
    location: "Mumbai",
    working: "Full time",
  },
  {
    id: 1,
    position: "Database Administrator",
    company: "Jobringer",
    experience: "3-6 Years",
    location: "Mumbai",
    working: "Full time",
  },
];

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <MdNavigateNext />
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <GrFormPrevious />
  </div>
);

const Featurejobs = () => {
  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
      <h3>Feature Jobs</h3>
      <div className="slider-container">
        <Slider {...settings} className="slider">
          {cards.map((card) => (
            <div className="card" key={card.id}>
              <h5 className="position">{card.position}</h5>
              <div className="company-info">
                <h6>{card.company}</h6>
                <div>
                  <i className="fa-regular fa-clock icon"></i>
                  {card.working}
                </div>
                <div>
                  <IoBriefcaseOutline className="icon" />
                  {card.experience}
                </div>
                <div>
                  <CiLocationOn className="icon" />
                  {card.location}
                </div>
              </div>
              <div className="apply-button">
                Apply
                <span>
                  <VscGitStashApply />
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Featurejobs;
