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
    <section className="bg-gray-50 py-20 px-8 flex flex-col lg:flex-row items-start justify-center gap-12">
      {/* LEFT SIDE */}
      <div className="max-w-sm">
        <h2 className="text-3xl font-bold text-green-700 leading-tight mb-4">
          Hosting solution <br /> with benefits.
        </h2>
        <p className="text-gray-700 mb-6">
          Turn your ideas into reality with Static.
          <br />
          With a lot of powerful features, we guarantee simplicity and clarity.
        </p>
        <button className="bg-green-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-700 transition">
          read more
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-lg p-8 text-center border border-gray-100"
          >
            <div className="flex justify-center mb-4 text-5xl text-green-600">
              {item.icon}
            </div>
            {item.tag && (
              <span className="text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                {item.tag}
              </span>
            )}
            <h3 className="text-green-600 font-semibold mt-2 mb-2 text-lg">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm mb-4">{item.text}</p>
            <button className="text-green-600 font-semibold text-sm hover:underline">
              MORE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
