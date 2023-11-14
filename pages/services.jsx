import Head from "next/head";
import { ServicesOffer, Performance, Whatsapp, ServicesCTA } from "../components";
import { Navbar, Header, Footer} from "../components/layouts";


const services = () => {
  return (
    <>
      {/* <!-- ==================== head  ====================  -->  */}

      <Head>
        <title>Seervices - Santajit Patra</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <!-- ==================== Head  ====================  -->  */}

      <section className="flex min-h-screen w-screen flex-col bg-primary text-primary-text">
        <Navbar />
        <Header
          title="Services"
          bg='url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")'
        />
        <ServicesOffer />
        <ServicesCTA />
        <Performance />
        <Footer />
        <Whatsapp />
      </section>
    </>
  );
};

export default services;
