import Image from "next/image";
import TextCross from "@/public/assets/TextCross.png";
import TextDoughnut from "@/public/assets/TextDoughnut.png";
import TextHeart from "@/public/assets/TextHeart.png";

const HistorySection = () => {
  return (
    <section className="bg-blue-200 py-16 px-6 flex flex-col items-center text-center">
      {[
        {
          image: TextCross,
          text: "Bethany Covenant Church has its roots in a community Bible study that began in a park district building in St. Charles in 2014. We sent the kids down the hall for an Awana program, and we circled up and read the Bible with our friends. This group would continue to meet together for several years. We called it a beginner Bible study, and that’s exactly what it was. We learned to encounter God in the Bible together.",
        },
        {
          image: TextDoughnut,
          text: "In the fall of 2021, this group became the nucleus of a new church plant, Bethany Covenant Church. We partnered with the Evangelical Covenant Church and began looking for a space where we could grow together. We began meeting in a donut shop on Main St. in St. Charles. We met weekly for worship at the donut shop from the fall of 2022 through the fall of 2024.",
        },
        {
          image: TextHeart,
          text: "When we went began to outgrow our first location, we wanted to find a welcoming space that had natural connections to the community. We looked for a space where we could meet around tables because that’s where conversation and connection happens naturally. From our roots in a donut shop, we’re moving on to a local brewery. We can’t wait to see what God has for us in this new space!",
        },
      ].map((item, index) => (
        <div key={index} className="max-w-2xl mb-12 flex flex-col items-center">
          <Image src={item.image} alt="History Icon" width={80} height={80} />
          <p className="mt-4 text-lg text-gray-800">{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default HistorySection;
