/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  intro: "Hello, I'm",
  name: "Nafiu Mubashir",
  title: "Full-Satck Web Developer",
  desc: "I am a dynamic MERN stack developer with a passion for transforming innovative ideas into reality. Proficient in MongoDB, Express, React, and Node.js, I thrive on crafting responsive and interactive web applications that seamlessly blend functionality with aesthetics. With a keen eye for detail and a dedication to delivering top-notch user experiences, I am committed to turning complex challenges into elegant solutions. Let's collaborate to bring your digital vision to life!",
  email: "mubashirnafiu@gmail.com",
  gitHub: "https://github.com/Nafiu-Mubashir",
  instagram: "microsoft",
  linkedIn: "www.linkedin.com/in/nafiu-mubashir-adedayo",
  medium: "",
  twitter: "microsoft",
  // youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home
        name={siteProps.name}
        title={siteProps.title}
        intro={siteProps.intro}
        desc={siteProps.desc}
      />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
