/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
// import image from "../images/motion-background.jpg";

// const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description = "I am a computer science student and full stack web developer, driven by an unyielding passion for tech and a desire to learn, share, and impact humanity positively. I look forward to the endless possibilities that lie ahead on this remarkable journey."
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "Web Development",
  "Responsive Design",
  // "Focus group testing",
  // "Mobile user interfaces",
  // "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="aboutSection">
      {/* <img className="background" src={image} alt={imageAltText} /> */}
      <div className="about">
        <h2>About Myself</h2>
        <p className="des">{description}</p>
        <hr />
        <ul
        // style={{
        //   textAlign: "left",
        //   columns: 2,
        //   fontSize: "1.25rem",
        //   margin: "2rem 3rem",
        //   gap: "3rem",
        // }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
