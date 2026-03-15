"use client";

import { useTheme } from "@/app/context/ThemeContext";

export default function Team() {
  const { darkMode } = useTheme();



  return (
    <div
      className={`min-h-screen px-5 pt-24 pb-16 sm:px-8 sm:pt-24 sm:pb-20 lg:px-20 lg:py-24 transition-colors duration-300 ${
        darkMode ? "bg-[#121212] text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        {/* PAGE HEADER */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 sm:mb-12">
          I Am <br />
          Muzammil Rehman
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* LEFT SIDE - DESCRIPTION */}
          <div className="w-full lg:w-1/2">
            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I am a dedicated builder with years of hands-on experience delivering
              reliable home improvement, renovation, and repair services. My focus
              is on precision, durability, and clean workmanship that transforms
              spaces into functional, beautiful environments. Whether it's a minor
              repair or a full-scale remodel, I take pride in providing solutions
              that are efficient, long-lasting, and tailored to your needs.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#C8102E]">
              Services I Provide
            </h2>

            <ul
              className={`space-y-4 text-base sm:text-lg ${
                darkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              <li>
                <span className="font-semibold text-[#C8102E]">General Repairs:</span>{" "}
                Fixing leaky faucets, squeaky doors, broken fixtures, and all small
                issues before they become big problems.
              </li>

              <li>
                <span className="font-semibold text-[#C8102E]">Custom Carpentry:</span>{" "}
                Bespoke shelving, cabinetry, stud walls, and flat-pack joinery,
                crafted with precision and strength.
              </li>

              <li>
                <span className="font-semibold text-[#C8102E]">Painting & Decorating:</span>{" "}
                Clean interior and exterior painting with smooth, premium finishes.
              </li>

              <li>
                <span className="font-semibold text-[#C8102E]">Renovations:</span>{" "}
                Complete remodeling for kitchens, bathrooms, bedrooms, and living
                rooms -- handled from start to finish.
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE - VISUAL STACK */}
          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              {/* BACK SQUARE - Main Theme Color */}
              <div
                className="absolute -inset-2 sm:-inset-3 rounded-xl -rotate-[8deg]"
                style={{ backgroundColor: "#C8102E" }}
              ></div>

              {/* SECOND SQUARE - Light Color */}
              <div
                className="absolute -inset-1 sm:-inset-2 rounded-xl rotate-[3deg]"
                style={{ backgroundColor: darkMode ? "#2b2b2b" : "#eaeaea" }}
              ></div>

              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <img
                  src="/pic1.png"
                  alt="Muzammil Rehman"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


