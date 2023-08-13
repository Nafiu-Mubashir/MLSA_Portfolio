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
const description =
  "I am a computer science student and full stack web developer, driven by an unyielding passion for tech and a desire to learn, share, and impact humanity positively. I look forward to the endless possibilities that lie ahead on this remarkable journey.";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
// const skillsList = [
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU",
//   "https://img.freepik.com/free-icon/css_318-698167.jpg",
//   "https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1&w=640",
//   "https://t3.ftcdn.net/jpg/03/04/97/12/360_F_304971233_mQ4xlfnBGSszgzJPYzQnZtWI04ZNmuuP.jpg",
//   "https://blog.amt.in/wp-content/uploads/2017/12/e16da876-c2fd-4eb8-ae72-4b193c534938-Edited.png",
//   "https://media.licdn.com/dms/image/C5612AQG77DO3h9v3Dg/article-cover_image-shrink_720_1280/0/1627563122351?e=2147483647&v=beta&t=iSkYGJJMDBn-bu0lswDnumKyuUn9B8TTmDuOOih6hZc",
//   "https://www.svgrepo.com/download/376337/node-js.svg",
//   "https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2023/01/MaterialUi-2.png",
//   "https://miro.medium.com/v2/resize:fit:1400/1*_6ooq0R60ba3UT5c-QVemA.png",
//   "https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png",
//   "https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png "
// ];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my sofware development experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="aboutSection h-screen" id="about">
      <div className="bg-white p-2 shadow w-[90%] lg:w-[80%] m-auto">
        <h2 style={{ textAlign: "center" }}>About Myself</h2>
        <p className="des">{description}</p>
        <hr />
        <h3 style={{ textAlign: "center", }}>Skills Set</h3>
        
        <hr />
        <p className="des">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
