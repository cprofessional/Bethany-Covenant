import Image from "next/image";
import TextBrand from "@/public/assets/TextBrand.jpg";

const VisionSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16">
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-lg md:text-xl font-semibold text-blue-900">
          From our beginnings as a community Bible study for beginners, we always knew that we wanted to be a different kind of church.
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-700">
          We wanted to be a place that anyone could feel welcome to come and learn about God: to encounter Jesus, experience transformation, grow in faith, and encourage one another.
          We want to worship in spaces that have natural connections with our community.
        </p>
      </div>

      <div className="mt-8 md:mt-0 w-full md:w-2/3 lg:w-1/2">
        <Image
          src={TextBrand}
          alt="Bethany Covenant Vision"
          width={600}
          height={600}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default VisionSection;
