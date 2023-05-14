import React from "react";
import Image from "next/image";

const portfolioLeft = (project) => {
  return (
    <div className="flex flex-wrap mb-12">
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
          style={{ backgroundPosition: "50%" }}
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <Image
            className="w-full"
            src={project.image}
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <a href={project.button}>
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
            />
          </a>
        </div>
      </div>
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
        <p className="text-5xl font-semibold text-cyan-300 ">“</p>
        <h3 className="text-2xl font-semibold lg:text-3xl lg:w-96">
          {project.title}
        </h3>
        <p className="max-w-lg mt-6 text-purple-100 line-clamp-7">
          {project.description}
        </p>
        <h4 className="mt-6 text-lg font-medium text-cyan-300 ">
          {project.name}
        </h4>
        <p className="text-purple-100">{project.about}</p>
        <div className="flex items-center justify-between mt-12 lg:justify-start">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.button}
            className="btn-primary "
          >
            See Project
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.buttonSource}
            className="btn-primary "
          >
            source code
          </a>
        </div>
      </div>
    </div>
  );
};

export default portfolioLeft;
