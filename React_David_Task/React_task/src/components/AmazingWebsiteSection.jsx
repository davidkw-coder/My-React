import React from "react";

const AmazingWebsiteSection = () => {
  return (
    <section className="relative flex justify-center items-center bg-gray-100 py-16 overflow-hidden">
      {/* Long green rectangle in background */}
      <div className="absolute w-[480px] h-[1500px] bg-[#359756] top-0 z-0"></div>

      {/* Green circle */}
      <div className="absolute left-[11%] top-[15%] w-60 h-60 bg-[#8ae4a8] rounded-full z-50"></div>

      {/* Illustration image */}
      <div className="relative z-20">
        <img
          src="/more.png"
          alt="Create Website Illustration"
          className="w-[650px] md:w-[800px] rounded-2xl"
        />
      </div>

      {/* White card in front of the image */}
      <div className="absolute bg-white rounded-xl shadow-lg max-w-xl md:max-w-xl h-100 content-center p-6 md:p-8 z-30 right-[10%] top-[99%] transform -translate-y-1/2">
        <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-3">
          Create Amazing Website
        </h2>
        <p className="text-gray-600 mb-4">
          Quis viverra nibh cras pulvinar mattis nunc sed. Lacus sed turpis
          tincidunt id aliquet risus feugiat in. Auctor augue mauris augue
          neque gravida in fermentum et. Faucibus in fermentum posuere urna.
        </p>
        <p className="text-sm text-gray-400 mb-5">
          Image from{" "}
          <a
            href="https://www.freepik.com"
            className="text-green-600 underline hover:text-green-800"
          >
            Freepik
          </a>
        </p>
        <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
          read more
        </button>
      </div>
    </section>
  );
};

export default AmazingWebsiteSection;
