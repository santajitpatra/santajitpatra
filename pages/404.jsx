import Link from "next/link";

const Error = () => {
  return (
    <>
      <div className="relative xl:h-screen overflow-hidden bg-[#0a162f]">
        {/* <img src="/yt.png" className="absolute object-cover w-full h-full" /> */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
          <div className="relative z-10 flex flex-col items-center w-full h-full">
            <h2 className="text-white text-9xl text-center font-black">404</h2>
            <h3 className="text-4xl text-center text-white font-bold">
              We are sorry, Page not found!
            </h3>
            <p className="text-xl text-center text-white font-normal m-6">
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
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
