import Image from "next/image";

const ServicesCTA = () => {
  return (
    <div className="relative mx-auto w-full pb-32 pt-8 text-black">
      <div className="absolute inset-0 bottom-56 bg-slate-200" />
      <div className="relative pt-20 mx-auto w-full max-w-screen-xl px-2 text-left sm:px-10">
        <div className="rounded-xl bg-slate-50 shadow-lg shadow-cyan-500 lg:flex">
          <div className="flex flex-col p-4 pb-6 sm:p-10 sm:pt-14 lg:w-2/5">
            <div className="flex-auto">
              <h2 className="text-2xl font-black text-primary-dark">
                Keep Track of Your Projects from Start to Finish
              </h2>
              <p className="pt-4 TEXTCOLOR">
                Create tasks, track time, share with colleagues, nd share
                progress in real time.
              </p>
              <div className="mt-6 flex flex-wrap">
                <p className="m-1 rounded-md TEXTCOLOR bg-gray-100 px-2 py-1 text-sm">
                  Web development
                </p>
                <p className="m-1 rounded-md TEXTCOLOR bg-gray-100 px-2 py-1 text-sm">
                  Graphic design
                </p>
                <p className="m-1 rounded-md TEXTCOLOR bg-gray-100 px-2 py-1 text-sm">
                  Social media marketing
                </p>
                <p className="m-1 rounded-md TEXTCOLOR bg-gray-100 px-2 py-1 text-sm">
                  Virtual assistance
                </p>
              </div>
            </div>
          </div>
          <div className="m-8 lg:w-3/5 hidden overflow-hidden rounded-3xl sm:block">
            <Image
              className=""
              src={
                "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1547&q=80"
              }
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCTA
