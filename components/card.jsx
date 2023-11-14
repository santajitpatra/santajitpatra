import CardMap from "./CardMap"


const cardData = [
  {
    type: "Gamma",
    title: "Please Feel Free To Contact Us",
    description:
      "Need help with your online presence? Contact us for web development and digital marketing consultation.",
    button: "Contact Us",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    type: "Beta",
    title: "You Can Check Our Services Here",
    description:
      "Web design, development, SEO, social media marketing, and more. Let us help you grow your online presence.",
    button: "Our Services",
    image:
      "https://images.pexels.com/photos/374720/pexels-photo-374720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    type: "Alpha",
    title: "Discover Our Story: All About Us",
    description:
      "Maximize Your Business Potential with Our Professional Web Development and Digital Marketing Expertise",
    button: "About Us",
    image:
      "https://images.pexels.com/photos/5426403/pexels-photo-5426403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const card = () => {
  return (
    <div>
      <section className="py-20 ">
        <h2 className="mb-12 text-center font-sans text-5xl font-bold text-primary-dark">
          Let's Discover Categories
        </h2>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 overflow-y-hidden">
          {cardData.map(({ title, description, type, image, button }) => (
            <CardMap
              key={title}
              title={title}
              description={description}
              type={type}
              image={image}
              button={button}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default card;
