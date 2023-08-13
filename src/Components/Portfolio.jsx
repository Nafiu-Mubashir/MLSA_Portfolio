/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/design-desk.jpeg";

// const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    image: "Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    image: "Web Development",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    image: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    image: "GitHub Codespaces",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding h-screen" id="portfolio">
      <h2 className="text-center font-bold text-[20px]">Portfolio</h2>
      <div className="w-[90%] lg:w-[80%] m-auto p-3">
        <div className="flex flex-col lg:flex-row justify-between gap-3 ">
          {projectList.map(({ image, url, description }) => (
            <div className="w-full lg:w-[25%] h-[50vh] bg-white shadow-lg p-1" key={image}>
              <img
                src="https://w0.peakpx.com/wallpaper/936/853/HD-wallpaper-anonymous-human-hood-dark-black.jpg"
                className="h-[50%] w-[100%]"
                alt=""
              />
              <div className="p-2">
                <h4 className="font-bold">{image}</h4>
                <p className="text-[13px] mb-3">{description}</p>
                <a
                  href={url}
                  className="h-[20px] border p-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
