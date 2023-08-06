import Image from 'next/image'
import  santajit  from "@/assets/images/santajit-patra-11.jpeg";


const CTA = () => {
  return (
    <>
      <div className="mx-auto my-10 w-screen max-w-screen-xl px-10">
        <div className="to flex items-center rounded-xl bg-gradient-to-r  from-violet-900 to-purple-600 px-8 shadow-lg">
          <div className="my-10 lg:my-8 lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-50">
              Let's talk about business
            </h2>
            <p className="mt-4 text-base TEXTCOLOR">
              "Let's talk about business and the opportunities for growth it
              presents. I believe in empowering businesses with expert web
              development and digital marketing solutions. I want to help you
              take your business to the next level, let's start the conversation
              today."
            </p>
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
