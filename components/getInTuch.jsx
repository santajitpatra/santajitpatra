const getInTuch = () => {
  return (
    <div>
      <section className="mb-40">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage: 'url("/services.jpg")',
            height: 500,
          }}
        />
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="text-center">
            <div
              className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12"
              style={{
                marginTop: "-170px",
                background: "hsla(206, 60%, 0%, 0.47)",
                backdropFilter: "blur(30px)",
              }}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                Get In Tuch With Us
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default getInTuch;
