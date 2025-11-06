import React from "react";
import { Upload } from "lucide-react";

export default function GetStarted() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white px-6 py-12">

      {/* ✅ Two short green rectangles behind content, visible only between image & card */}
      <div className="hidden lg:block absolute left-[8%] top-1/2 -translate-y-1/2 w-[600px] h-72 bg-[#359756] "></div>

      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-15 relative z-10">

        {/* ✅ Image */}
        <div className="flex-1 flex bg-white justify-center">
          <img
            src="/upload.png"
            alt="Team working illustration"
            className="w-[550px] h-[580px]"
          />
        </div>

        {/* ✅ Card */}
        <div className="bg-[#f2f2f2] p-10 h-[580px] content-center flex-1">
          <h1 className="text-5xl lg:text-5xl font-bold text-[#359756] leading-tight">
            Get started <br />
            with the <br />
            simpliest static <br />
            page
          </h1>

          <p className="mt-4 text-gray-500 text-lg">
            Image from <span className="text-green-600 underline">Freepik</span>
          </p>

          <button className="mt-6 bg-[#359756] text-white px-8 py-3 rounded-lg flex items-center gap-3 text-lg font-semibold hover:bg-green-700 transition">
            <Upload size={22} />
            Upload for Free
          </button>
        </div>
      </div>
    </section>
  );
}
