import Image from "next/image";
import Freedom from "@/public/assets/Freedom.jpg";

const FreedomSection = () => {
  return (
    <section className="relative bg-blue-900 text-gray-100 py-20 px-8 md:py-24 md:px-20">
      <div className="absolute inset-0">
        <Image 
          src={Freedom} 
          alt="Freedom Background" 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center" 
          quality={100} 
          className="opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-xl md:text-2xl font-medium">
        <p>
          At Bethany Covenant, we offer freedom to one another to differ on 
          issues of belief or practice in areas where the Bible allows for a variety 
          of interpretations.
        </p>
        <p className="mt-8">
          As a Covenant church, we want to focus on what unites us rather 
          than on what divides us.
        </p>
      </div>
    </section>
  );
};

export default FreedomSection;
