import Image from "next/image";
import Link from "next/link";
import NotFound from "../assets/images/404.png";

const Error = () => {
  return (
    <>
      <div className="relative overflow-hidden BG">
        {/* <img src="/yt.png" className="absolute object-cover w-full h-full" /> */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
          <div className="relative z-10 flex flex-col items-center w-full h-full">
            <Image
              className=" mb-4"
              src={NotFound}
              width={350}
              height={250}
              alt=""
            />
            <h3 className="text-3xl text-center text-white font-bold mb-4">
              404 Server Error
            </h3>
            <p className="text-center TEXTCOLOR font-normal mb-4 ">
              Oops! Something went wrong. Please try again later.
            </p>
            <Link href="/" className="btn-primary">
              Back To Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
