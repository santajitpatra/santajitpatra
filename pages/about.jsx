import Head from "next/head";
import { Navbar, Header, Footer, AboutDescription } from "../components";

const about = () => {
  return (
    <>
      <Head>
        <title>About - Santajit Patra</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex min-h-screen w-screen flex-col text-white bg-gradient-to-tr  from-blue-500 to-purple-500">
        <Navbar />
        <Header title="About" bg='url("./websitedev.jpg")' />
        <AboutDescription />
        <Footer />
      </div>
    </>
  );
};

export default about;
