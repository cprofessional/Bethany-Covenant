export default function LocationBanner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-60 bg-blue-600 p-6 md:p-12">
      {/* Left Side: Google Map Embed */}
      <div className="w-full md:w-1/3">
        <iframe
          className="w-full h-60 rounded-md shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.982456789123!2d-88.30869268456789!3d41.91234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fae1234567890%3A0xabcdef1234567890!2s106%20S%20Riverside%20Ave%2C%20St.%20Charles%2C%20IL%2060174%2C%20USA!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Right Side: Location Details */}
      <div className="w-full md:w-2/3 text-white text-center md:text-left mt-6 md:mt-0 md:pl-12">
        <p className="text-lg font-medium">106 S Riverside Ave</p>
        <p className="text-lg">St. Charles, IL 60174</p>
        <p className="text-md italic">(Inside Pollyanna’s Brewing Co.)</p>
        <p className="text-xl font-semibold mt-4">
          Join us for Sunday service at 9am
        </p>
      </div>
    </div>
  );
}
