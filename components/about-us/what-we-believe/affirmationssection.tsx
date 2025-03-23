import Image from "next/image";
import Link from "next/link";
import Cross from "@/public/assets/Cross.jpg";

const AffirmationsSection = () => {
  return (
    <section className="relative bg-blue-700 text-white py-16 px-6 md:px-16">
      <div className="absolute inset-0">
        <Image
          src={Cross}
          alt="Cross Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          className="opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          The Covenant’s core beliefs are summed up in{" "}
          <Link href="https://covchurch.org/resource/covenant-affirmations/" target="_blank" rel="noopener noreferrer">
            <span className="text-lime-300 underline hover:text-lime-400 transition">
              six affirmations
            </span>
          </Link>.
        </h2>

        <ul className="mt-6 text-lg text-gray-200 text-left mx-auto max-w-lg space-y-3">
          <li>• We affirm the centrality of the word of God.</li>
          <li>• We affirm the necessity of the new birth.</li>
          <li>• We affirm a commitment to the whole mission of the church.</li>
          <li>• We affirm the church as a fellowship of believers.</li>
          <li>• We affirm a conscious dependence on the Holy Spirit.</li>
          <li>• We affirm the reality of freedom in Christ.</li>
        </ul>
      </div>
    </section>
  );
};

export default AffirmationsSection;