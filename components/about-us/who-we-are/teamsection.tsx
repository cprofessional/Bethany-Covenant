import Image from "next/image";
import LauraTarro from "@/public/assets/LauraTarro.png";
import Tarros from "@/public/assets/Tarros.jpeg";
import EthanBryant from "@/public/assets/EthanBryant.jpg";
import MelissaDuncan from "@/public/assets/MelissaDuncan.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      image: LauraTarro,
      alt: "Laura Tarro",
      description: `Laura Tarro is a 1997 graduate of Wheaton College with a B.A. in Art 
        and Philosophy. She holds a Master of Arts in Religion from Trinity Evangelical Divinity School and a Master of Divinity from Northern Seminary.`,
      secondaryImage: Tarros,
      secondaryDescription: `Laura is the founding pastor of Bethany Covenant Church. She is an ordained pastor 
        with the Evangelical Covenant Church. Jeff and Laura met when they both served as Young Life leaders in Naperville, Illinois. 
        Jeff is a Captain at the St. Charles Fire Department and has worked as a firefighter in St. Charles since 2004. The Tarros have been deeply involved 
        in the life and leadership of their local church and in their community. They have two teenagers. Laura is a fan of murder mysteries, 
        theology books, and knitting.`,
    },
    {
      image: EthanBryant,
      alt: "Ethan Bryant",
      description: `Ethan Bryant is the worship coordinator at Bethany Covenant. He is part of a loving family of six people and two cats, Maverick and Goose. 
        He has been a Christian all his life and has been an on and off worship team member for six years. Ethan is a college student at North Central College 
        in Naperville where he studies History and Philosophy. He plans to continue on and get a Master’s Degree in Education. His hobbies include: 
        watching fantastic movies or listening to some great music, preferably on a vinyl record.`,
    },
    {
      image: MelissaDuncan,
      alt: "Melissa Duncan",
      description: `Melissa Duncan is a hospital chaplain and licensed pastor within the Evangelical Covenant Church. 
        She is currently serving as Bethany Covenant’s church-planting resident while she completes her Master of Divinity at North Park Theological Seminary. 
        She has been married to Joel since 2005. They have three children. She is passionate about bridging cultures and has worked in and around refugee resettlement for 15 years. 
        She lived for 2 years in Mauritania (if you can find it on a map, she’d love to hear it!). She loves reading and writing and hearing people’s stories. 
        Her perfect day includes a good cup of coffee, meeting someone new, and a game of sand volleyball.`,
    },
  ];

  return (
    <section className="flex flex-col items-center px-6 md:px-16 py-16 gap-12">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } items-center gap-8 max-w-5xl`}
        >
          <div className="w-64 h-64 flex-shrink-0">
            <Image
              src={member.image}
              alt={member.alt}
              width={256}
              height={256}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-800">{member.description}</p>
            {member.secondaryImage && (
              <div className="mt-6 flex justify-center md:justify-start">
                <Image
                  src={member.secondaryImage}
                  alt={`${member.alt} Family`}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            )}
            {member.secondaryDescription && (
              <p className="mt-4 text-lg text-gray-800">
                {member.secondaryDescription}
              </p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TeamSection;
