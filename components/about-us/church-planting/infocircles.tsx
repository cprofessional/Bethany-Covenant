import Link from "next/link";

const InfoCircles = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-8 py-16 px-6">
      {[
        { title: "Meet The Team", link: "/about-us/who-we-are", buttonText: "Who We Are" },
        { title: "Who We Are", link: "/about-us/our-story", buttonText: "Our Story" },
        { title: "Contact Us", link: "/contact", buttonText: "Contact" }
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center w-64 h-64 bg-lime-200 rounded-full text-center p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
          <Link href={item.link}>
            <button className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-md shadow-md hover:bg-blue-800 transition">
              {item.buttonText}
            </button>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default InfoCircles;
