import Image from "next/image";
import CircleImage from "@/public/assets/GroupImage.jpeg";

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 py-12">
      <div className="w-80 h-80 overflow-hidden rounded-full">
        <Image 
          src={CircleImage} 
          alt="Bethany Covenant Group" 
          width={320} 
          height={320} 
          className="object-cover w-full h-full"
        />
      </div>

      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl font-semibold">
          Bethany Covenant desires to bring <br /> 
          hope and healing to our community.
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Our church is a safe place to ask questions, process hurt, and explore longings. 
          We recognize that no church is perfect, and that everyone has a unique faith experience. 
          Bethany Covenant is a family of Christ followers that will journey alongside you, 
          whatever your church background may be.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
