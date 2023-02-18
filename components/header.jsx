import React from "react";

const header = (props) => {
  return (
    <div>
      <section className="">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage: `${props.bg}`,
            height: 500,
            // backgroundImage: 'url("./about.jpg")',
          }}
        />
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="text-center">
            <div
              className="block rounded-lg px-6 py-12 md:py-16 md:px-12"
              style={{
                marginTop: "-170px",
                background: "hsla(360, 100%, 100%, 0.25)",
                backdropFilter: "blur(30px)",
              }}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                {props.title}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default header;
