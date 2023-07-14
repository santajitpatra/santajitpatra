import React from "react";
import Image from "next/image";
import { webSvg } from "@/constants/images";

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

          <div>
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

          <div>
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
          <div>
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
          <div>
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
          <div>
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
