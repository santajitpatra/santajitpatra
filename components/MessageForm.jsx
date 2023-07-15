
function MessageForm() {
  return (
    <div className="mt-8 lg:w-1/2 lg:mx-6 ">
      <div className="w-full px-8 py-10 mx-auto overflow-hidden shadow-2xl rounded-xl lg:max-w-xl bg-gradient-to-tl  from-violet-600 to-purple-500">
        <h1 className="text-2xl font-medium">Contact form</h1>
        <form
          className="mt-6"
          action="https://formspree.io/f/mbjeolqk"
          method="POST"
        >
          <div className="flex-1">
            <label className="block mb-2 text-sm">Full Name</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="example example"
              className="block w-full px-5 py-3 mt-2 border rounded-md  focus:ring-opacity-40 focus:outline-none focus:ring text-black"
            />
          </div>
          <div className="flex-1 mt-6">
            <label className="block mb-2 text-sm">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              className="block w-full px-5 py-3 mt-2 border rounded-md focus:ring-opacity-40 focus:outline-none focus:ring text-black"
            />
          </div>
          <div className="w-full mt-6">
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              className="block w-full h-32 px-5 py-3 mt-2 rounded-md md:h-48 focus:ring-opacity-40 focus:outline-none focus:ring text-black"
              placeholder="Message"
              defaultValue={""}
              id="message"
              name="message"
            />
          </div>
          <button className="mt-6 rounded-full border-2 border-white px-4 py-2 xl:px-4 text-white transition-colors hover:bg-white hover:text-cyan-500">
            get in touch
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageForm