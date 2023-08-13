/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "https://w0.peakpx.com/wallpaper/936/853/HD-wallpaper-anonymous-human-hood-dark-black.jpg";

const imageAltText = "desktop with books and laptop";

const Home = ({ name, title, intro, desc }) => {
  return (
    <section id="home" className="background h-screen">
      <div className="mt-[9rem] text-white m-auto w-[80%] flex justify-between">
        <div className="lg:w-[70%] text-justify m-auto">
          <h1 className="lg:text-[20px] font-bold w-[17rem] leading-[2]">{intro}</h1>
          <h1 className="lg:text-[50px] font-bold w-[rem] leading-[0.9]">{name}</h1>
          <h2 className="lg:text-[25px] leading-[0.9]">{title}</h2>
          <p className="lg:text-[16px] mt-2 text-[14px] leading-[1.5]">{desc}</p>
        </div>
        
      </div>
      <a href="#about" className="">
        <img
          src={arrowSvg}
          className="w-[3rem] h-[3rem] relative top-[45rem] lg:top-[15rem] left-[45%] lg:left-[50%]"
          alt={imageAltText}
        />
      </a>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
