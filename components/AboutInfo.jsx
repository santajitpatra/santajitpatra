import Image from "next/image";
import selection from "../assets/svg/selection.svg";
import wordpress from "../assets/svg/wordpress.svg";

function AboutInfo() {
  return (
    <section className="text-gray-200 pb-8 mt-20">
      <div className="container max-w-6xl mx-auto m-8">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 p-6">
            <Image
              src={selection}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <h3 className="text-3xl text-cyan-500 font-bold leading-none mb-3">
              Who am I ?
            </h3>
            <p className="TEXTCOLOR mb-8">
              I am a full stack developer with years of experience in building
              web applications. I have a strong understanding of both the
              front-end and back-end of web development, and I am proficient in
              a variety of programming languages and frameworks. I am passionate
              about building user-friendly and engaging web applications that
              solve real-world problems. I am also a team player and I am always
              willing to learn new things. I have a strong understanding of the
              latest digital marketing trends, and I am proficient in a variety
              of marketing channels
            </p>
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle TEXTCOLOR">
              <h3 className="text-3xl text-cyan-500 font-bold leading-none mb-3">
                What am I good at ?
              </h3>
              <p className=" mb-8 text-sm">
                I have a strong understanding of the following skills:
              </p>
              <ul className="space-y-1">
                <li>Programming Languages: JavaScript, TypeScript</li>
                <li>
                  Front-end development: HTML, CSS, JavaScript, React, Vue.js
                </li>
                <li>Back-end development: Node.js, express.js, PHP </li>
                <li>Databases: MySQL, PostgreSQL, MongoDB</li>
                <li>Version control: Git, GitHub</li>
                <li>Web hosting: AWS, Google Cloud Platform and other</li>
                <li>
                  Digital marketing: SEO, PPC advertising, Social media
                  marketing, Content marketing, Email marketing
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <Image
              src={wordpress}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutInfo;
