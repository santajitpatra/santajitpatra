import Link from "next/link";
import Image from "next/image";

const footer = () => {
  return (
    <>

      <div className="container mx-auto px-6 mb-12 md:px-12 xl:px-32">
        <div className="text-center">
          <div
            className="block rounded-lg px-6 py-12 md:py-12 md:px-12"
            style={{
              marginBottom: "-130px",
              background: "hsla(360, 100%, 100%, 0.25)",
              backdropFilter: "blur(30px)",
            }}
          >
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white">
              Get In Tuch With Us
            </h1>
          </div>
        </div>
      </div>

      <footer className="pt-20 bg-gradient-to-tl  from-cyan-500 to-blue-700 text-white">
        <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
          <div className="max-w-sm">
            <div className="mb-6 flex h-12 items-center space-x-2">
              <span className="mr-0 text-4xl text-cyan-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-react-native"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#00abfb"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
                  <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
                  <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
                  <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
                  <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
                  <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
                  <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a0.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
                </svg>
              </span>
              <span className="text-3xl font-bold">
                Santajit<span className="text-cyan-300">Patra</span>
              </span>
            </div>
            <div className="text-purple-100">
              "Expert web development and digital marketing solutions for
              business success."
            </div>
          </div>
          <div className="">
            <div className="mt-4 mb-2 font-medium text-lg xl:mb-4">
              GET STARTED
            </div>
            <nav aria-label="Footer Navigation" className="">
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-purple-100 hover:text-cyan-300"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-purple-100 hover:text-cyan-300"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-purple-100 hover:text-cyan-300"
                    href="services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-purple-100 hover:text-cyan-300"
                    href="contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <div className="mt-4 mb-2 font-medium text-lg xl:mb-4">LEGAL</div>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-purple-100 hover:text-cyan-300"
                    href="terms"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-purple-100 hover:text-cyan-300"
                    href="privacy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-purple-100 hover:text-cyan-300"
                    href="disclaimer"
                  >
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-purple-100 hover:text-cyan-300"
                    href="sitemap"
                  >
                    sitemap
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="">
            <div className="mt-4 mb-2 font-medium xl:mb-4">PRODUCTS</div>
            <div className="flex flex-col">
              <div className="mb-4">
                <div className="space-y-3">
                  <Image
                    src="/playstore-free-img.png"
                    className="w-48 rounded"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/appstore-free-img.png"
                    className="w-48 rounded"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center sm:flex-row sm:justify-between sm:text-left items-center">
            <div className="">© 2023 SantajitPatra | All Rights Reserved</div>
            <div className="flex">
              <a
                href="https://www.facebook.com/Santajit-Patra-191090504774038"
                className="mx-2  transition-colors duration-300 hover:text-cyan-300"
                aria-label="Github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/santajitpatra/"
                className="mx-2  transition-colors duration-300 hover:text-cyan-300"
                aria-label="Github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/santajit-patra-9136651b4/"
                className="mx-2  transition-colors duration-300 hover:text-cyan-300"
                aria-label="Github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://twitter.com/SantajitPatra"
                className="mx-2  transition-colors duration-300 hover:text-cyan-300"
                aria-label="Github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-twitter"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/santajitpatra/"
                className="mx-2  transition-colors duration-300 hover:text-cyan-300"
                aria-label="Github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
