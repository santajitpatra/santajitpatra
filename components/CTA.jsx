import Link from "next/link";
import Image from 'next/image'
import { santajit } from "@/constants/images";


const CTA = () => {
  return (
    <>
      <div className="mx-auto my-10 w-screen max-w-screen-xl px-10">
        <div className="to flex items-center rounded-xl bg-gradient-to-tr  from-violet-600 to-purple-500 px-8 text-white shadow-lg">
          <div className="my-10 lg:my-8 lg:w-1/2">
            <h2 className="text-2xl font-bold">Let's talk about business</h2>
            <p className="mt-4 text-lg">
              "Let's talk about business and the opportunities for growth it
              presents. We believe in empowering businesses with expert web
              development and digital marketing solutions. We want to help you
              take your business to the next level, let's start the conversation
              today."{" "}
            </p>
            <Link href="/contact">
              <button
                type="submit"
                className="group mt-4 mr-2 mb-4 flex cursor-pointer text-left text-xl font-semibold leading-tight text-white"
              >
                Get in touch
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:ml-8 ml-4 h-7 w-7 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <div className="hidden h-72 w-1/2 flex-shrink-0 justify-center lg:flex">
            <Image
              className="w-48 h-48 m-12 rounded-full"
              src={santajit}
              alt="#"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
