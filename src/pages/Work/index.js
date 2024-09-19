import React from "react";

function Work() {
  return (
    <div className="container m-auto">
      <h2 className="text-3xl text-yellow drop-shadow-lg underline decoration-orange font-extrabold text-center m-2 p-2 ">
        Projects
      </h2>
      <section
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 projects-container"
        id="work"
      >
        <article className="bg-orange opacity-80 rounded overflow-hidden shadow-lg">
          <a
            href="https://al-pierre-personal-site.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Added 'w-full' to make the image take up full width, fixed height and 'object-cover' to maintain aspect ratio */}
            <div className="w-full h-60 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={require("../../assets/images/work/writers-blog.png")}
                alt="Blog Page"
              />
            </div>
            <div className="project-info px-6 py-4">
              <h3 className="underline font-bold text-green text-xl mb-2">
                Music Blog
              </h3>
              <span className=" text-green italic">
                Full Stack Web App - Next.js, Typescript
              </span>
              <p className="text-green">
                This is a web app for a music writer at pitchfork magazine. It
                is built with Next.js and Typescript. It also utilizes Notion
                API for storing the images and blocks of text. The user can
                update the notion page and see the changes reflected live on the
                site.
              </p>
            </div>
          </a>
        </article>

        <article className="bg-orange opacity-80 rounded overflow-hidden shadow-lg">
          <a
            href="https://farmers-dao.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-60 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={require("../../assets/images/work/FarmersDAO.jpg")}
                alt="Logo"
              />
            </div>
            <div className="project-info px-6 py-4">
              <h3 className="underline font-bold text-green text-xl mb-2">
                Farmers DAO
              </h3>
              <span className=" text-green italic">Single Page App - Next.js</span>
              <p className="text-green">
                This is a white paper for a DAO idea. It is built with Next.js
                and javascript. It utilizes Metaplex tools for the NFT minting
                and Realms for the DAO governance.
              </p>
            </div>
          </a>
        </article>

        <article className="bg-orange opacity-80 rounded overflow-hidden shadow-lg">
          <a
            href="https://genehackerman.github.io/MillionDollarDream/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-60 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={require("../../assets/images/work/cream-logo.png")}
                alt="C.R.E.A.M"
              />
            </div>
            <div className="project-info px-6 py-4">
              <h3 className="underline font-bold text-green text-xl mb-2">
                C.R.E.A.M
              </h3>
              <span className=" text-green italic">
                Third Party API's - Javascript
              </span>
              <p className="text-green">
                I used fetch requests to gather data and manipulate the DOM with
                Javascript. You can search all major stocks and crypto on the
                same site.
              </p>
            </div>
          </a>
        </article>

        <article className="bg-orange opacity-80 rounded overflow-hidden shadow-lg">
          <a
            href="https://github.com/hthomp15/inventory-tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-60 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={require("../../assets/images/work/istockphoto-led.jpeg")}
                alt="Inventory Tracker"
              />
            </div>
            <div className="project-info px-6 py-4">
              <h3 className="underline font-bold text-green text-xl mb-2">
                Inventory Tracker
              </h3>
              <span className=" text-green italic">
                Node, SQL, Express - CRUD Operations
              </span>
              <p className="text-green">
                A back end e-commerce tracker. Find, update, add, and delete
                inventory all from the command line and Insomnia.
              </p>
            </div>
          </a>
        </article>

        <article className="bg-orange opacity-80 rounded overflow-hidden shadow-lg">
          <a
            href="https://hthomp15.github.io/weather-request"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-60 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={require("../../assets/images/work/Screen-shot-weather.png")}
                alt="Weather Dashboard"
              />
            </div>
            <div className="project-info px-6 py-4">
              <h3 className="underline font-bold text-green text-xl mb-2">
                Weather Dashboard
              </h3>
              <span className="text-green italic">Javascript - API Fetch Requests</span>

              <p className="text-green">
                Users can search the weather in any city and get an extended
                5-day forecast.
              </p>
            </div>
          </a>
        </article>
      </section>
    </div>
  );
}

export default Work;
