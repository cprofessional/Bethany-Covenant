import Image from "next/image";
import Link from "next/link";
import GroupContact from "@/public/assets/GroupContact.jpeg";

const ContactSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-stretch w-full">
      <div className="w-full md:w-1/2 h-72 md:h-80">
        <Image 
          src={GroupContact} 
          alt="Group Contact" 
          width={800} 
          height={400} 
          className="w-full h-full object-cover object-[20%_35%]"
        />
      </div>
      
      <div className="w-full md:w-1/2 bg-blue-900 text-white flex flex-col items-center justify-center p-10">
        <h2 className="text-xl md:text-2xl font-semibold">Contact Us</h2>
        <Link href="/contact">
          <button className="mt-4 px-5 py-2 bg-white text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
            Contact
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
