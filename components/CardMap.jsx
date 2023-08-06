import Link from "next/link";
import Image from "next/image";

function CardMap({ title, description, type, image, button }) {
  return (
    <article className="bg-gray-100 h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-2xl pb-2 shadow-lg transition-transform duration-200 TA">
      <Image
        className="max-h-40 w-full object-cover"
        alt="featured image"
        src={image}
        width={500}
        height={500}
      />
      <div className="w-full  p-4">
        <p className="text-md font-medium text-green-500">{type}</p>
        <p className="mb-2 text-xl font-medium text-gray-600">{title} </p>
        <p className="text-md font-light line-clamp-3 text-slate-700">
          {description}
        </p>
        <div className="justify-center mt-4 flex flex-wrap items-center">
          <Link href="/about" className="btn-primary ">
            {button}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CardMap;
