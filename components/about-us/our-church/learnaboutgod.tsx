import Image from "next/image";
import Link from "next/link";
import Cross from "@/public/assets/Cross.jpg";

const LearnAboutGod = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center text-white py-16 px-6">
      <div className="absolute inset-0">
        <Image 
          src={Cross} 
          alt="Background Cross" 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center" 
          quality={100} 
        />
        <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
      </div>

      <div className="relative z-10 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold">
          When we want to learn about God, we look to Jesus.
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          As we experience the power of gospel, we are committed to cultivating risk-taking faith that enables us to follow wherever Jesus leads. 
          We are connected to the historical and global church and are committed to supporting believers around the world.
        </p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
            Talk to Someone
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LearnAboutGod;
