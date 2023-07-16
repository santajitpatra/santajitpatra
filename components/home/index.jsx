import React from "react";
import {
  Hero,
  Card,
  CTA,
  ContactForm,
  ServicesOffer,
  Whatsapp,
} from "../../components";
import { Navbar, Footer } from "../layouts";

const index = () => {
  return (
    <div>
      <div className="flex min-h-screen w-screen flex-col BG">
        <Navbar />
        <Hero />
        <Card />
        <CTA />
        <h2 className="mt-12 text-center font-sans text-5xl font-bold text-white">
          My Services
        </h2>
        <ServicesOffer />
        <h2 className="text-center font-sans text-5xl font-bold text-white">
          Contact Us
        </h2>
        <ContactForm />
        <Footer />
        <Whatsapp />
      </div>
    </div>
  );
};

export default index;
