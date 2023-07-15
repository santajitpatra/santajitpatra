import Image from "next/image";
import { selection, wordpress } from "../constants/images";

function AboutInfo() {
  return (
    <section className="text-gray-200 pb-8">
      <div className="container max-w-5xl mx-auto m-8">
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl font-bold leading-none mb-3">
              Lorem ipsum dolor sit amet
            </h3>
            <p className=" mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <Image
              src={selection}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <Image
              src={wordpress}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl font-bold leading-none mb-3">
                Lorem ipsum dolor sit amet
              </h3>
              <p className=" mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutInfo;
