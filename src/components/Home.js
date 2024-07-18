import React from "react";
import { Link } from "react-router-dom";
import sliderOne from "../imgs/slider1.jpg"
import sliderTwo from "../imgs/slider2.jpg"
import doctorserOne from "../imgs/doctor.png"
import doctorserTwo from "../imgs/psychiatry.png"
import doctorserThree from "../imgs/sexology.png"
import doctorserFour from "../imgs/spots.png"


function Home() {
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

        <div className="doctor-serviceswp pt-5 pb-5">
          <div className="container mt-5 mb-5 ">
            <div className="text-center">
              <h3>Get answers for anything and everything.</h3>
            </div>
            <div className="row">
              <div className="col-md-2">
                <div className="doctorser-cmn">
                  <img src={doctorserOne}/>
                  <h6>Dermatology</h6>
                  <Link to="/">Contact now</Link>
                </div>
              </div>
              <div className="col-md-2">
                <div className="doctorser-cmn">
                  <img src={doctorserTwo}/>
                  <h6>Dermatology</h6>
                  <Link to="/">Contact now</Link>
                </div>
              </div>
              <div className="col-md-2">
                <div className="doctorser-cmn">
                  <img src={doctorserThree}/>
                  <h6>Dermatology</h6>
                  <Link to="/">Contact now</Link>
                </div>
              </div>
              <div className="col-md-2">
                <div className="doctorser-cmn">
                  <img src={doctorserFour}/>
                  <h6>Dermatology</h6>
                  <Link to="/">Contact now</Link>
                </div>
              </div>
              <div className="col-md-2">
                <div className="doctorser-cmn">
                  <img src={doctorserThree}/>
                  <h6>Dermatology</h6>
                  <Link to="/">Contact now</Link>
                </div>
              </div>
              <div className="col-md-2">
                <div className="doctorser-cmn">
                  <img src={doctorserTwo}/>
                  <h6>Dermatology</h6>
                  <Link to="/">Contact now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      <section>

        

      </section>


    </>
  );
}

export default Home;