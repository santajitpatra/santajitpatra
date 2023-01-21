import Head from "next/head";
import { Navbar, Footer,  Map, ContactForm} from "../components";
// import Link from "next/link";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Santajit Patra</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen w-screen flex-col bg-gradient-to-tr  from-blue-500 to-purple-500">
        <Navbar />
        <ContactForm />
        <Map />

      <Footer />
      </div>
    </>
  );
};

export default contact;
