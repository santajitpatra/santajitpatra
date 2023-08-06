import ContactDetalis from "./ContactDetalis";
import MessageForm from "./MessageForm";

const contactForm = () => {
  return (
    <div>
      <section className="mt-20">
        <div className="container flex flex-col h-full px-6 pb-52 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <ContactDetalis />
            <MessageForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default contactForm;
