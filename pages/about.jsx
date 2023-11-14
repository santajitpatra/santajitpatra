import Head from "next/head";
import {  Whatsapp } from "../components";
import { Navbar, Header, Footer } from "../components/layouts";
import DownloadCV from "../components/DownloadCV";
import AboutInfo from "../components/AboutInfo";

const about = () => {
  return (
    <>
      <Head>
        <title>About - Santajit Patra</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen w-screen flex-col text-primary-text bg-primary">
        <Navbar />
        <Header
          title="About"
          bg='url("https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")'
        />
        <AboutInfo />
        <DownloadCV />
        <Footer />
        <Whatsapp />
      </div>
    </>
  );
};

export default about;
