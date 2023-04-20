import Link from "next/link";
import Image from "next/image";
import { about, website, contact } from "@/constants/images";

const card = () => {
  return (
    <div>
      <section className="py-20">
        <h2 className="mb-12 text-center font-sans text-5xl font-bold text-white">
          Let's Discover Categories
        </h2>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 overflow-y-hidden">
          {/* <!-- ==================== Cards started  ====================  -->  */}

          <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-2xl pb-2 shadow-lg transition-transform duration-200 TA">
            <Image
              className="max-h-40 w-full object-cover"
              alt="featured image"
              src={about}
              width={500}
              height={500}
            />
            <div className="w-full bg-white p-4">
              <p className="text-md font-medium text-pink-500">Alpha</p>
              <p className="mb-2 text-xl font-medium text-gray-800">
                Discover Our Story: All About Us
              </p>
              <p className="text-md font-light text-gray-400">
                "Maximize Your Business Potential with Our Professional Web
                Development and Digital Marketing Expertise"
              </p>
              <div className="justify-center mt-4 flex flex-wrap items-center">
                <Link
                  href="/about"
                  className="btn-primary "
                >
                  About Us
                </Link>
              </div>
            </div>
          </article>
          <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-2xl pb-2 shadow-lg transition-transform duration-200 TA">
            <Image
              className="max-h-40 w-full object-cover"
              alt="featured image"
              src={website}
              width={500}
              height={500}
            />
            <div className="w-full bg-white p-4">
              <p className="text-md font-medium text-cyan-500">Beta</p>
              <p className="mb-2 text-xl font-medium text-gray-800">
                You Can Check Our Services Here
              </p>
              <p className="text-md font-light text-gray-400">
                "Web design, development, SEO, social media marketing, and more.
                Let us help you grow your online presence."
              </p>
              <div className="justify-center mt-4 flex flex-wrap items-center">
                <Link
                  href="/services"
                  className="btn-primary "
                >
                  Our Services{" "}
                </Link>
              </div>
            </div>
          </article>
          <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-2xl pb-2 shadow-lg transition-transform duration-200 TA">
            <Image
              className="max-h-40 w-full object-cover"
              alt="featured image"
              src={contact}
              width={500}
              height={500}
            />
            <div className="w-full bg-white p-4">
              <p className="text-md font-medium text-green-500">Gamma</p>
              <p className="mb-2 text-xl font-medium text-gray-800">
                Please Feel Free To Contact Us
              </p>
              <p className="text-md font-light text-gray-400">
                "Need help with your online presence? Contact us for web
                development and digital marketing consultation."
              </p>
              <div className="justify-center mt-4 flex flex-wrap items-center">
                <Link
                  href="/contact"
                  className="btn-primary "
                >
                  Contact Us{" "}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default card;
