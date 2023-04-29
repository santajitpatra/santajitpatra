import React from 'react'
import Image from "next/image";
import {work} from "@/constants/images";


const aboutDescription = () => {
  return (
    <div>
              <div className="flex min-h-screen w-screen mt-10">
          <div className="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
            {/* Left Column */}
            <div className="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
              <div className="mb-16 lg:my-auto lg:max-w-lg">
                <div className="mb-6 max-w-xl">
                  <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-snug tracking-tight text-white sm:text-5xl sm:leading-snug">
                    Let me tell you
                    <span className="my-1 inline-block rounded bg-white px-2 text-violet-600">
                      About
                    </span>
                    <span className="text-cyan-300">Me</span>
                  </h2>
                  <p className="text-base text-gray-200 line-clamp-8">
                    Welcome to our web development and digital marketing team!
                    We are a team of experts who are passionate about helping
                    businesses succeed online. Our mission is to create visually
                    stunning and user-friendly websites while utilizing
                    effective digital marketing strategies that drive results.
                    We specialize in web design and development, search engine
                    optimization, social media marketing, and more. Our team
                    stays up to date on the latest industry trends to ensure
                    that our clients are always ahead of the curve. Let us help
                    you achieve your online goals, contact us today.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
              <Image
              className="rounded-tl-3xl rounded-br-3xl"
                src={work}
                alt="Picture of the author"
                width={600}
                height={500}
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default aboutDescription
