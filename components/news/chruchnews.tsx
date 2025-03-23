"use client"

import Image from "next/image"
import { useMemo } from "react"

const sanitizeTitle = (title: string): string => {
  return title.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
}

interface NewsPost {
  title: string
  link: string
  date: string
  excerpt: string
  image?: string
}

const ChurchNews = () => {
  const newsPosts: NewsPost[] = useMemo(
    () => [
      {
        title: "Join us for Christmas!",
        link: "/news/join-us-for-christmas",
        date: "11/26/24",
        excerpt:
          "Join us for worship this Christmas season starting Sunday, December 1st at 9am at 106 S Riverside Ave.",
      },
      {
        title: "I've Always Wondered",
        link: "/news/ive-always-wondered",
        date: "11/5/24",
        excerpt: "I've Always Wondered on Monday, November 11th at 7pm.",
      },
      {
        title: "Brunch Church!",
        link: "/news/brunch-church",
        date: "10/23/24",
        excerpt: "Join us for Brunch Church on October 27th at 9:00 am!",
      },
      {
        title: "Something's Brewing",
        link: "/news/somethings-brewing",
        date: "9/16/24",
        excerpt:
          "Something's brewing and we're moving! Join us on Sunday, September 29th at 9am as we worship in our new location at Pollyanna Brewing.",
      },
      {
        title: "Join us for Easter!",
        link: "/news/join-us-for-easter",
        date: "3/25/24",
        excerpt: "Celebrate Easter with us!",
      },
      {
        title: "Maundy Thursday: Seder Dinner",
        link: "/news/maundy-thursday-seder-dinner",
        date: "3/25/24",
        excerpt: "Join us for our Maundy Thursday Seder Dinner.",
      },
      {
        title: "Ash Wednesday",
        link: "/news/ash-wednesday",
        date: "2/2/24",
        excerpt: "Drop in to receive ashes, prayer from a pastor, and experience self-guided prayer stations.",
      },
    ],
    [],
  )

  return (
    <main id="page" className="container mx-auto p-4" role="main">
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsPosts.map((post, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <a href={post.link}>
                            <Image 
                                src={`/assets/news/${sanitizeTitle(post.title)}.png`} 
                                alt={post.title} 
                                width={500} 
                                height={300} 
                                className="w-full object-cover" 
                            />
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

export default ChurchNews

