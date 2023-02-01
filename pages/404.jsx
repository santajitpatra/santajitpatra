import Link from "next/link";

const Error = () => {
  return (
    <>
      <div className="relative xl:h-screen overflow-hidden bg-gradient-to-br from-cyan-300 to-blue-900">
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

            <Link
              href="/home"
              className="text-center text-lg text-white hover:text-yellow-50 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-full mx-96 py-3 px-3 w-52"
            >
              Back To Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
