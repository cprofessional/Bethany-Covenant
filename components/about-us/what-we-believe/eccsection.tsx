import Image from "next/image";
import Link from "next/link";
import ECCLogo from "@/public/assets/ECCLogo.png";

const ECCSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 py-12 max-w-6xl mx-auto">
      <div className="w-32 md:w-48 flex-shrink-0 flex justify-center">
        <Image 
          src={ECCLogo} 
          alt="ECC Logo" 
          width={200} 
          height={200} 
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-2xl text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-black">
          Bethany Covenant Church is part of the{" "}
          <Link href="https://covchurch.org/" target="_blank" rel="noopener noreferrer">
            <span className="text-blue-700 underline hover:text-blue-900 transition">
              Evangelical Covenant Church
            </span>
          </Link> (ECC).
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          The ECC was founded in 1885 by Scandinavian immigrants. Today it is one of the most 
          ethnically diverse denominations in North America.
        </p>
        <p className="mt-2 text-lg text-gray-700">
          The ECC is a fast-growing denomination in the United States. It has more than 850 
          congregations throughout the U.S. and Canada. These congregations are organized into 
          11 regions called conferences.
        </p>
        <p className="mt-2 text-lg text-gray-700">
          The ECC has mission partnerships around the globe in Africa, Asia, Europe, Latin America, 
          and the Middle East North Africa, joining the global church in extending the whole gospel 
          across cultures and around the world.
        </p>
        <p className="mt-2 text-lg text-gray-700">
          The denominational offices are in Chicago.
        </p>
      </div>
    </section>
  );
};

export default ECCSection;
