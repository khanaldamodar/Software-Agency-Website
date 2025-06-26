import React from "react";

//? Company Location Details
const companyLocaionsInfo = [
  {
    image: "/company-span/countries-bg.jpg",
    total: 2,
    description:
      "With our innovation center in Nepal and business center in Dubai, we continue to expand our horizons",
  },
];

//?: Partners with Company
const partners = [
  {
    image: "/company-span/bfi-bg.jpg",
    total: 5,
    description:
      "Global partners helping us scale and innovate across markets.",
  },
];

//?: Users of Softwares
const totalUsers = [
  {
    image: "/company-span/transaction-bg.jpg",
    total: 20000,
    description: "Users actively using our digital platforms every day.",
  },
];

//?: Our Team
const ourTeams = [
  {
    image: "/company-span/team-bg.png",
    total: 150,
    description: "Experienced professionals dedicated to digital excellence.",
  },
];

const cardData = [
  ...companyLocaionsInfo,
  ...partners,
  ...totalUsers,
  ...ourTeams,
];

const CompanySpan = () => {
  return (
    <div className="min-h-screen px-6 md:px-32 py-10 flex flex-col font-poppins justify-center gap-20">
      {/* About Company */}
      <div className="flex flex-col justify-center items-center gap-10 text-center">
        <h1 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent">
          20+ years of driving digital transformation
        </h1>

        <p className="text-lg md:text-xl text-gray-800  text-justify">
          For over two decades, F1Soft has been at the forefront of developing
          and delivering impactful digital solutions that reshape the financial
          landscape. From pioneering digital payments to building robust
          financial platforms, our expertise lies in not just delivering
          cutting-edge solutions, but also driving widespread market adoption.
          Today, our platforms power millions of transactions, enabling
          individuals and businesses to thrive in an increasingly digital
          economy.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-5 flex-wrap justify-center">
          <button className="border rounded-xl px-8 py-2 bg-blue-700 text-white hover:bg-blue-800 transition">
            Join Us
          </button>
          <button className="border rounded-xl px-8 py-2 text-black hover:bg-gray-100 transition">
            More About Us
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row  justify-center gap-6">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[300px] h-[350px] rounded-xl overflow-hidden shadow-md"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4 gap-5">
              <h2 className="text-5xl font-bold mt-20">{item.total}+</h2>
              <p className="mt-2 text-sm ">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanySpan;
