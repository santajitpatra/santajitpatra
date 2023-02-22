import React from 'react'
import Image from "next/image";

const portfolioLeft = (project) => {
  return (
    <section className="text-white">
    <div className="container px-6 py-20 mx-auto">
      <div className="lg:-mx-6 lg:flex lg:items-center">
      <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
          <p className="text-5xl font-semibold text-cyan-300 ">“</p>
          <h3 className="text-2xl font-semibold lg:text-3xl lg:w-96">
            {project.title}
          </h3>
          <p className="max-w-lg mt-6 text-purple-100">
            {project.description}
          </p>
          <h4 className="mt-6 text-lg font-medium text-cyan-300 ">{project.name}</h4>
          <p className="text-purple-100">{project.about}</p>
          <div className="flex items-center justify-between mt-12 lg:justify-start">
       
          </div>
        </div>

        <Image
          className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
          src={project.image}
          alt="Picture of the author"
          width={500}
          height={500}      
          />


      </div>
    </div>
  </section>
  )
}

export default portfolioLeft
