import React from "react";
import Image from "next/image";
// import webSvg from "assets/images/Web_devices.svg";
import {webSvg }from "../constants/images"

const servicesOffer = () => {
  return (
    <div>
      <section className="">
        <div className="mx-auto grid max-w-lg gap-x-8 gap-y-12 px-4 py-32 md:max-w-screen-xl md:grid-cols-2 md:px-8 lg:grid-cols-3 overflow-y-hidden">
          <div className="p-12">
            <h2 className="text-3xl font-medium text-white">
              WE HELP YOU TO
              <br />
              ACHIEVE YOUR GOALS
            </h2>
          </div>
      
          <div className="relative w-[21rem] lg:w-72 xl:w-96 h-56 p-4 overflow-hidden bg-white shadow-lg rounded-2xl px-4 pt-14 pb-8 TA">
            <Image
              alt="moto"
              src={webSvg}
              className="absolute w-40 h-40 mb-4 rounded-full -right-20 -bottom-8"
              width={500}
              height={500}
            />
            <div className="w-4/6">
              <p className="mb-2 text-xl font-medium text-gray-800">
                Web Designing & Development
              </p>
              <p className="text-sm text-gray-400">
                Professional website creation with personalized design and
                coding.{" "}
              </p>
            </div>
          </div>

          <div className="relative w-[21rem] lg:w-72 xl:w-96 h-56 p-4 overflow-hidden bg-white shadow-lg rounded-2xl px-4 pt-14 pb-8 TA">
            <Image
              alt="moto"
              src={webSvg}
              className="absolute w-40 h-40 mb-4 rounded-full -right-20 -bottom-8"
              width={500}
              height={500}
            />
            <div className="w-4/6">
              <p className="mb-2 text-xl font-medium text-gray-800">
                Digital Marketing Services
              </p>
              <p className="text-sm text-gray-400">
                Boost your online presence and drive sales through digital
                advertising.{" "}
              </p>
            </div>
          </div>
          <div className="relative w-[21rem] lg:w-72 xl:w-96 h-56 p-4 overflow-hidden bg-white shadow-lg rounded-2xl px-4 pt-14 pb-8 TA">
            <Image
              alt="moto"
              src={webSvg}
              className="absolute w-40 h-40 mb-4 rounded-full -right-20 -bottom-8"
              width={500}
              height={500}
            />
            <div className="w-4/6">
              <p className="mb-2 text-xl font-medium text-gray-800">
                Graphic Design
              </p>
              <p className="text-sm text-gray-400">
                Eye-catching and effective graphic design solutions for your
                brand.{" "}
              </p>
            </div>
          </div>
          <div className="relative w-[21rem] lg:w-72 xl:w-96 h-56 p-4 overflow-hidden bg-white shadow-lg rounded-2xl px-4 pt-14 pb-8 TA">
            <Image
              alt="moto"
              src={webSvg}
              className="absolute w-40 h-40 mb-4 rounded-full -right-20 -bottom-8"
              width={500}
              height={500}
            />
            <div className="w-4/6">
              <p className="mb-2 text-xl font-medium text-gray-800">
                Virtual Assistant
              </p>
              <p className="text-sm text-gray-400">
                Streamline your workload with professional and efficient virtual
                assistance.{" "}
              </p>
            </div>
          </div>
          <div className="relative w-[21rem] lg:w-72 xl:w-96 h-56 p-4 overflow-hidden bg-white shadow-lg rounded-2xl px-4 pt-14 pb-8 TA">
            <Image
              alt="moto"
              src={webSvg}
              className="absolute w-40 h-40 mb-4 rounded-full -right-20 -bottom-8"
              width={500}
              height={500}
            />
            <div className="w-4/6">
              <p className="mb-2 text-xl font-medium text-gray-800">
                Social Media Management
              </p>
              <p className="text-sm text-gray-400">
                Manage your social media profiles to reach your target audience
                and increase engagement.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default servicesOffer;
