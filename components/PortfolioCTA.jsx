import React from "react";

const PortfolioCTA = () => {
  return (
    <div className="xl:-mb-24 -mb-28">
      <section  className="relative py-10 text-white sm:py-16 lg:py-24 BGCTA">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
              Let&#39;s Connect: Contact Me Today
            </h2>
            <p className="mt-4 text-lg font-extralight">
              Interested in learning more about my services or discussing your
              project needs? Don't hesitate to contact me today. I'm always
              available to answer any questions you may have and provide you
              with the support you need. Let's connect and work together to
              bring your vision to life.
            </p>
            <div className="sm my-8 flex flex-col items-center justify-center sm:flex-row sm:space-x-4 sm:px-0 lg:mt-12">
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >Contact Me</a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioCTA;
