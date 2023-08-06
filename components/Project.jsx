import Image from "next/legacy/image";

function Project({
  title,
  description,
  name,
  about,
  image,
  button,
  buttonSource,
}) {
  return (
    <div className="flex py-7 px-7 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t bg-gray-100 rounded-3xl mb-10 flex-col sm:flex-row">
      <div className="relative ">
        <Image
          src={
            image ||
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          }
          alt="Picture of the author"
          width={500}
          height={380}
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow w-5/6 pl-5 mt-5 md:mt-0">
        <h3 className="text-2xl text-slate-700 font-semibold">{title}</h3>
        <p className="text-sm TEXTCOLOR mt-5 line-clamp-2">{description}</p>
        <h4 className="mt-6 text-lg font-medium text-slate-500">{name}</h4>
        <p className="text-sm TEXTCOLOR mt-5">{about}</p>{" "}
        <div className=" border-b w-10 pt-2" />
        <div className=" flex justify-between md:justify-end items-end pt-12  flex-col sm:flex-row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={button}
            className="btn-primary "
          >
            See Project
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={buttonSource}
            className="btn-primary "
          >
            source code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
