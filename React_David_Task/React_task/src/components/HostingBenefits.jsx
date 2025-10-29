import React from "react";

export default function HostingBenefits() {
  const benefits = [
    {
      title: "SSL Certificate",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      tag: "FREE",
      icon: "🔒",
    },
    {
      title: "Personal Domain",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon: "🌐",
    },
    {
      title: "Code Editor",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon: "💻",
    },
    {
      title: "Media Storage",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      tag: "FREE",
      icon: "💾",
    },
  ];

  return (
    <section className="bg-[#f2f2f2] py-24 px-8 lg:px-28 flex flex-col lg:flex-row items-center justify-between gap-20">
      {/* LEFT SIDE */}
      <div className="max-w-xl flex flex-col">
        <h2 className="text-5xl md:text-6xl font-bold text-green-700 leading-snug mb-8 font-montserrat">
          Hosting solution <br /> with benefits.
        </h2>
        <p className="text-gray-800 text-[25px] mb-12 leading-relaxed">
          Turn your ideas into reality with Static.
          <br />
          With a lot of powerful features, we guarantee simplicity and clarity.
        </p>
        <button className="bg-[#359756] w-fit text-white font-semibold px-10 py-4 text-[23px] rounded-md hover:bg-green-800 transition duration-200">
          read more
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-3xl">
        {benefits.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-sm transition duration-300 p-10 text-center border border-gray-100 flex flex-col items-center justify-between ${
              index === 0 || index === 3 ? "h-[420px]" : "h-[360px]"
            }`}
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 flex items-center justify-center text-5xl text-green-700 bg-green-100 rounded-full">
                {item.icon}
              </div>
            </div>

            {/* Tag */}
            {item.tag && (
              <span className="inline-block text-xl w-[90px] h-[35px] bg-[#359756] text-white px-4 py-1 rounded-full mb-2">
                {item.tag}
              </span>
            )}

            {/* Title */}
            <h3 className="text-[#359756] text-4xl mt-3 mb-3 font-montserrat">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 italic text-xl mb-5 leading-relaxed">
              {item.text}
            </p>

            {/* Button */}
            <button className="text-black text-lg underline underline-offset-4 decoration-[#359756] decoration-2 hover:decoration-gray-400">
              MORE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
