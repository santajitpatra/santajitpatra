import Link from "next/link";
import Image from 'next/image'

const CTA = () => {
  return (
    <>
      <div className="mx-auto my-10 w-screen max-w-screen-xl px-4">
        <div className="to flex items-center rounded-xl bg-gradient-to-l from-blue-500 to-fuchsia-500 px-8 text-white shadow-lg">
          <div className="my-10 lg:my-8 lg:w-1/2">
            <h2 className="text-2xl font-bold">
            Let's take your business to the moon
            </h2>
            <p className="mt-4 text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio velit, expedita ullam saepe reiciendis nostrum.
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
              src="/santajit-patra-11.jpeg"
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
