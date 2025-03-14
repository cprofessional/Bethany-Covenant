import Image from 'next/image';

const ChurchNews = () => {
    const newsPosts = [
        {
            title: "Join us for Christmas!",
            image: "https://images.squarespace-cdn.com/content/v1/631b46aefdaa4642451c1a83/1732634504397-F152KA7Y94OYSVFWVPQS/IMG_6371.png",
            link: "/news/join-us-for-christmas",
            date: "11/26/24",
            excerpt: "Join us for worship this Christmas season starting Sunday, December 1st at 9am at 106 S Riverside Ave."
        },
        {
            title: "I’ve Always Wondered",
            image: "https://images.squarespace-cdn.com/content/v1/631b46aefdaa4642451c1a83/1730827928459-CEQWV51IT1YDDVULQGMX/ana-municio-PbzntH58GLQ-unsplash.jpg",
            link: "/news/ive-always-wondered",
            date: "11/5/24",
            excerpt: "I’ve Always Wondered on Monday, November 11th at 7pm."
        },
        {
            title: "Brunch Church!",
            image: "https://images.squarespace-cdn.com/content/v1/631b46aefdaa4642451c1a83/965f4f99-70be-454f-ad0b-d4f97a993a7a/marcio-azevedo-rp0CyFnqBfw-unsplash.jpg?format=2500w",
            link: "/news/brunch-church",
            date: "10/23/24",
            excerpt: "Join us for Brunch Church on October 27th at 9:00 am!"
        },
        {
            title: "Something’s Brewing",
            image: "https://images.squarespace-cdn.com/content/v1/631b46aefdaa4642451c1a83/1726517053303-LPZ5K08FLR2ASMV6NIAZ/pf-77e64f29--ExStCFront0196.jpg.jpeg?format=2500w",
            link: "/news/somethings-brewing",
            date: "9/16/24",
            excerpt: "Something's brewing and we're moving! Join us on Sunday, September 29th at 9am as we worship in our new location at Pollyanna Brewing."
        },
        {
            title: "Join us for Easter!",
            image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
            link: "/news/join-us-for-easter",
            date: "3/25/24",
            excerpt: "Celebrate Easter with us!"
        },
        {
            title: "Maundy Thursday: Seder Dinner",
            image: "https://images.unsplash.com/photo-1508614999368-9260051292e5",
            link: "/news/maundy-thursday-seder-dinner",
            date: "3/25/24",
            excerpt: "Join us for our Maundy Thursday Seder Dinner."
        },
        {
            title: "Ash Wednesday",
            image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
            link: "/news/ash-wednesday",
            date: "2/2/24",
            excerpt: "Drop in to receive ashes, prayer from a pastor, and experience self-guided prayer stations."
        }
    ];

    return (
        <main id="page" className="container mx-auto p-4" role="main">
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsPosts.map((post, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <a href="/news/">
                                <Image src={post.image} alt={post.title} width={500} height={300} className="w-full object-cover" />
                            </a>
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2"><a href={post.link}>{post.title}</a></h2>
                                <p className="text-sm text-gray-600 mb-4">{post.date}</p>
                                <p className="text-gray-700">{post.excerpt}</p>
                                <a href={post.link} className="text-blue-500 mt-4 inline-block">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ChurchNews;
