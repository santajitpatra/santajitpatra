import React from "react";
import Head from "next/head";
import {
  PortfolioRight,
  PortfolioLeft,
  Whatsapp,
} from "../components";
import { Navbar, Header, Footer} from "../components/layouts";


const portfolio = () => {
  return (
    <div>
      <Head>
        <title>Portfolio - Santajit Patra</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen w-screen flex-col BG">
        <Navbar />
        <Header title="Portfolio" bg='url("./website.jpg")' />

        <div className="container my-24 px-6 mx-auto">
          <PortfolioLeft
            title="Hotflix | A Revolutionary Streaming Platform for Movies & TV Shows"
            description="I recently completed the development of Hotflix, a streaming web site for watching movies and shows. Hotflix offers a comprehensive selection of movies and shows from a variety of genres. Users can browse through the library and watch their favorite movies and shows. The site also features a ratings system for each movie or show so users can easily find the best content. Additionally, Hotflix provides a personalized experience for each user by offering recommendations based on their viewing history. Hotflix is a great way to watch the latest movies and shows in a convenient and enjoyable way."
            name="Santajit Patra"
            about="Freelance web developer"
            image="/project2.png"
            button="https://hotflix0.netlify.app/"
            buttonSource="https://github.com/santajitpatra/hotflix.git"
          />

          <PortfolioRight
            title="Creating the Ecommerce Website 'Blackhole'"
            description="I recently completed a project to create a fully functional ecommerce website, 'Blackhole'. The project involved me designing and developing the website from the ground up, including the back-end and front-end. This project has enabled me to become more proficient with web development, while also providing a solid example of my ability to create a reliable and user-friendly website."
            name="Santajit Patra"
            about="Freelance web developer"
            image="/project1.png"
            button="/404"
            buttonSource="https://github.com/santajitpatra/blackhole.git"
          />
        </div>
        <Footer />
        <Whatsapp />
      </section>
    </div>
  );
};

export default portfolio;
