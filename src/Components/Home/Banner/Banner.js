import { Button, Carousel } from 'bootstrap';
import React from 'react';
import Bannerimg1 from '../../../images/Banner/banner4.jpg';
import Bannerimg2 from '../../../images/Banner/Banner3.jpg';
import Bannerimg3 from '../../../images/Banner/Banner5.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active banner-img">
      <img src={Bannerimg1} className="d-block w-100" alt="..."/>
    <div className="carousel-caption d-none d-md-block">
      <h2>Welcome to Lee Cooper</h2>
      <p>SUMMER SALE</p>
<h5>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</h5>
<Link to={``}>
                <button className="btn btn-light text-success fw-bold">More Info</button>
              </Link>
    </div>
    </div>
  
    <div className="carousel-item banner-img">
      <img src={Bannerimg2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h2 className="text-primary">Welcome to Lee Cooper</h2>
      <p className="text-primary">AUTUMN COLLECTION</p>
<h5 className="text-primary">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</h5>
<Link to={``}>
                <button className="btn btn-light text-success fw-bold">More Info</button>
              </Link>
    </div>
    </div>
    <div className="carousel-item banner-img">
      <img src={Bannerimg3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h2>Welcome to Lee Cooper</h2>
      <p>LOUNGEWEAR LOVE</p>
<h5>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</h5>
<Link to={``}>
                <button className="btn btn-light text-success fw-bold">More Info</button>
              </Link>
{/* <p> <a href="#">More Info</a> </p> */}
    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
};

export default Banner;