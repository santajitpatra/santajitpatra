import Marquee from "react-fast-marquee";
import Image from "next/image";

const MarqueeSection = () => {
  return (
    <div className=" mb-20 mt-10 px-20">
      <Marquee className="py-4 scrollbar-hide" speed={100} gradient gradientColor="#0a162f" >
        <h2 className="text-2xl md:text-7xl font-medium text-primary-dark">
          Building websites that convert and marketing strategies that
          ignite.&nbsp;
        </h2>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
