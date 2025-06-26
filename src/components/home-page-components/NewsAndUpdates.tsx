"use client";
import React from "react";
import { useRouter } from "next/navigation";

const dummyNews = [
  {
    id: 1,
    image: "/company-span/bfi-bg.jpg",
    date: "2025-06-25",
    category: "Technology",
    title:
      "AI is transforming banking sectors in Nepal with Lots of Changes in Online Banking",
    content:
      "Artificial Intelligence is rapidly changing how banks operate and interact with customers.",
  },
  {
    id: 2,
    image: "/company-span/bfi-bg.jpg",
    date: "2025-06-20",
    category: "Finance",
    title: "Digital wallets booming in 2025",
    content:
      "Digital wallets have become the preferred method of payment in emerging markets.",
  },
  {
    id: 3,
    image: "/news/news3.jpg",
    date: "2025-06-18",
    category: "Innovation",
    title: "F1Soft launches new lending platform",
    content:
      "F1Soft Group introduces a smarter digital lending experience for local banks.",
  },
  {
    id: 4,
    image: "/news/news4.jpg",
    date: "2025-06-15",
    category: "Event",
    title: "Tech Expo 2025 Highlights",
    content:
      "A look back at the most exciting tech trends revealed at the Kathmandu Tech Expo.",
  },
  {
    id: 5,
    image: "/news/news5.jpg",
    date: "2025-06-10",
    category: "Partnership",
    title: "New global fintech partnership",
    content:
      "F1Soft announces a strategic partnership with a leading global fintech company.",
  },
  {
    id: 6,
    image: "/news/news6.jpg",
    date: "2025-06-05",
    category: "Mobile",
    title: "Mobile banking surpasses desktop usage",
    content:
      "Data shows a sharp rise in mobile banking users compared to traditional web banking.",
  },
  {
    id: 7,
    image: "/news/news7.jpg",
    date: "2025-06-01",
    category: "Security",
    title: "Cybersecurity trends 2025",
    content:
      "Explore how banks are protecting their data with advanced security measures.",
  },
  {
    id: 8,
    image: "/news/news8.jpg",
    date: "2025-05-28",
    category: "Update",
    title: "System maintenance completed",
    content:
      "Scheduled system maintenance has been successfully completed with performance upgrades.",
  },
];

const NewsAndUpdates = () => {
  const router = useRouter();

  const recentNews = dummyNews[0];
  const otherNews = dummyNews.slice(1, 7);

  return (
    <div className="flex flex-col  items-start justify-center gap-20 h-auto min-h-screen px-10 py-16 font-poppins">
      {/* Heading */}
      <div className="self-center">
        <h1 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent">
          News & Updates
        </h1>
      </div>

      <div className="flex-row flex justify-center  items-center gap-40">
        {/* Featured News */}
        <div
          onClick={() => router.push(`/news/${recentNews.id}`)}
          className="cursor-pointer group self-start pl-10"
        >
          <img
            src={recentNews.image}
            alt={recentNews.title}
            className="w-200 h-110 object-cover rounded-lg mb-4 group-hover:opacity-90 transition"
          />
          <p className="text-sm text-gray-500">
            {recentNews.date} • {recentNews.category}
          </p>
          <h2 className="text-2xl font-semibold mt-2 text-gray-800 group-hover:text-blue-600 transition text-wrap max-w-2xl ">
            {recentNews.title}
          </h2>
          <p className="text-gray-700 mt-2">{recentNews.content}</p>
        </div>
        {/* Other News */}
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">Other News</h2>
            <button
              onClick={() => router.push("/news")}
              className="text-blue-500 hover:underline text-sm"
            >
              View All
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {otherNews.map((news) => (
              <div
                key={news.id}
                className="cursor-pointer flex gap-4 hover:bg-gray-100 p-2 rounded transition"
                onClick={() => router.push(`/news/${news.id}`)}
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <p className="text-xs text-gray-500">
                    {news.date} • {news.category}
                  </p>
                  <h3 className="text-md font-semibold text-gray-800">
                    {news.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsAndUpdates;
