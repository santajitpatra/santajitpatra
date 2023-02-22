import Link from "next/link";
import Image from "next/image";

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
              src="/about.jpg"
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
                  className="mb-3 inline-flex h-12 w-full items-center justify-center px-6 font-medium tracking-wide shadow-md transition duration-200 focus:outline-none md:mr-4 md:mb-0 md:w-auto text-white hover:text-yellow-50 bg-gradient-to-r  from-pink-500 to-purple-500 hover:from-cyan-600 hover:to-blue-600 rounded-full"
                >
                  About Us{" "}
                </Link>
              </div>
            </div>
          </article>
          <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-2xl pb-2 shadow-lg transition-transform duration-200 TA">
            <Image
              className="max-h-40 w-full object-cover"
              alt="featured image"
              src="/website.jpg"
              width={500}
              height={500}
            />
            <div className="w-full bg-white p-4">
              <p className="text-md font-medium text-cyan-500">Beta</p>
              <p className="mb-2 text-xl font-medium text-gray-800">
                You Can Check Our Services
              </p>
              <p className="text-md font-light text-gray-400">
                "Web design, development, SEO, social media marketing, and more.
                Let us help you grow your online presence."
              </p>
              <div className="justify-center mt-4 flex flex-wrap items-center">
                <Link
                  href="/services"
                  className="mb-3 inline-flex h-12 w-full items-center justify-center px-6 font-medium tracking-wide shadow-md transition duration-200 focus:outline-none md:mr-4 md:mb-0 md:w-auto text-white hover:text-yellow-50 bg-gradient-to-r  from-pink-500 to-purple-500 hover:from-cyan-600 hover:to-blue-600 rounded-full"
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
              src="/contact.jpg"
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
                  className="mb-3 inline-flex h-12 w-full items-center justify-center px-6 font-medium tracking-wide shadow-md transition duration-200 focus:outline-none md:mr-4 md:mb-0 md:w-auto text-white hover:text-yellow-50 bg-gradient-to-r  from-pink-500 to-purple-500 hover:from-cyan-600 hover:to-blue-600 rounded-full"
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
