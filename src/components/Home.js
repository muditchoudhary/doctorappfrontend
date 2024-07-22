import React, { useState, useEffect } from "react";
import sliderOne from "../imgs/slider1.jpg";
import sliderTwo from "../imgs/slider2.jpg";
import doctorserOne from "../imgs/doctor.png";
import doctorserTwo from "../imgs/psychiatry.png";
import doctorserThree from "../imgs/sexology.png";
import doctorserFour from "../imgs/spots.png";
import aboutimg from "../imgs/aboutimg.png";
import aavtar1 from "../imgs/aavtar-1.png"
import aavtar2 from "../imgs/aavtar-2.png"
import doctord1 from "../imgs/doctors1.png"
import doctord2 from "../imgs/doctors2.png"

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimTimer, setTestimTimer] = useState(null);
  const testimSpeed = 4500;
  const ignoreTouch = 30;

  const testimContent = [
    {
      name: "Lorem P. Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: aavtar1
    },
    {
      name: "Mr. Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: aavtar2
    },
    {
      name: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: aavtar1
    },
    {
      name: "Lorem De Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: aavtar2
    },
    {
      name: "Ms. Lorem R. Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: aavtar1
    }
  ];

  useEffect(() => {
    const playSlide = () => {
      const timer = setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % testimContent.length);
      }, testimSpeed);
      setTestimTimer(timer);
    };

    playSlide();

    return () => {
      clearTimeout(testimTimer);
    };
  }, [testimContent.length, testimSpeed]); // useEffect dependencies

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    clearTimeout(testimTimer); // Clear timer on manual slide change
  };

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + testimContent.length) % testimContent.length);
    } else if (direction === "right") {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimContent.length);
    }
    clearTimeout(testimTimer); // Clear timer on manual slide change
  };
  return (
    <>

      <section>
        <div className="banner-homewp">
          <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={sliderOne} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={sliderTwo} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src={sliderOne} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section>

        <div className="homethree-wp">
          <div className="container">
            <div className="homethree-sec">
              <div className="row">
                <div className="col-md-7">
                  <div className="homethree-left">
                    <span className="gradientcolor-text">About Us</span>
                    <h3 className="mt-2">Get to Know Our Medical Experts</h3>
                    <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="homethree-right">
                    <img src={aboutimg} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>



      <section>

        <div className="doctor-serviceswp pt-5 pb-5">
          <div className="container mt-5 mb-5 ">
            <div className="text-center">
              <span className="gradientcolor-text">Treatment Categories</span>
              <h3 className="mt-2">Get answers for anything and everything.</h3>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-4">
                <div className="doctorser-cmn">
                  <img src={doctorserOne} />
                  <h6>Dermatology</h6>
                  {/* <Link to="/">Contact now</Link> */}
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="doctorser-cmn">
                  <img src={doctorserTwo} />
                  <h6>Dermatology</h6>
                  {/* <Link to="/">Contact now</Link> */}
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="doctorser-cmn">
                  <img src={doctorserThree} />
                  <h6>Dermatology</h6>
                  {/* <Link to="/">Contact now</Link> */}
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="doctorser-cmn">
                  <img src={doctorserFour} />
                  <h6>Dermatology</h6>
                  {/* <Link to="/">Contact now</Link> */}
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="doctorser-cmn">
                  <img src={doctorserThree} />
                  <h6>Dermatology</h6>
                  {/* <Link to="/">Contact now</Link> */}
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="doctorser-cmn">
                  <img src={doctorserTwo} />
                  <h6>Dermatology</h6>
                  {/* <Link to="/">Contact now</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section>

        <div className="homethree-wp">
          <div className="container">
            <div className="homethree-sec homefour-sec">
              <div className="row">
                <div className="col-md-5">
                  <div className="homethree-right">
                    <img src={doctord2} />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="homethree-left">
                    <span className="gradientcolor-text">Our Team</span>
                    <h3 className="mt-2">Medical Experts Joining Hands Together</h3>
                    <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section>

        <div className="homethree-wp homefive-wp">
          <div className="container">
            <div className="homethree-sec">
              <div className="row">
                <div className="col-md-7">
                  <div className="homethree-left">
                    <span className="gradientcolor-text">Best Specialist</span>
                    <h3 className="mt-2">Top Kidney Specialist Doctor Recommended</h3>
                    <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="homethree-right">
                    <img src={doctord1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section>
        
        <div id="testim" className="testim">
          <div className="wrap">
            <span id="right-arrow" className="arrow right fa fa-chevron-right" onClick={() => handleArrowClick('right')}></span>
            <span id="left-arrow" className="arrow left fa fa-chevron-left" onClick={() => handleArrowClick('left')}></span>
            <ul id="testim-dots" className="dots">
              {testimContent.map((_, index) => (
                <li key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => handleDotClick(index)}></li>
              ))}
            </ul>
            <div id="testim-content" className="cont">
              {testimContent.map((testimonial, index) => (
                <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                  <div className="img"><img src={testimonial.image} alt="" /></div>
                  <h2>{testimonial.name}</h2>
                  <p>{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>





    </>
  );
}

export default Home;