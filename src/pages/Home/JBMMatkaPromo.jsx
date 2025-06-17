import React from "react";

import banner1 from "../../assets/banner (1).png";
import banner2 from "../../assets/banner (2).png";
import bg1 from "../../assets/bg-1 (1).png";
import bg2 from "../../assets/bg-1 (2).png";
import bg3 from "../../assets/bg-1 (3).png";
import bg4 from "../../assets/bg-1 (4).png";






export default function JBMMatkaPromo() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #1D1D1D 0%, #737373 100%)",
      }}
      className="min-h-screen text-white py-12 px-4"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Main Title Section */}
        <div className="text-center space-y-4">
          <h2          
          >
            Win Big with JBM Matka Application - Your Trusted Satta Platform!
          </h2>
          <div className="borders w-full max-w-md  mx-auto rounded-full  opacity-30"></div>
        </div>

        {/* First Section - Win Big */}
        <div className="grid lg:grid-cols-2 gap-1 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center ">
            <div className="w-full max-w-2xl  overflow-hidden">
              <img
                src={banner2}
                alt="Matka Gaming Table"
                className="w-full h-auto object-cover "
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="w-full h-64 bg-gray-600 rounded-lg hidden items-center justify-center">
                <span className="text-gray-400 text-sm">
                  Gaming Table Image
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className=" flex justify-center space-y-6">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div className="relative min-h-[300px]">
                {/* Background Images */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <img
                    src={bg1}
                    alt=""
                    className="absolute top-80 left-0 w-1/2 h-auto object-contain"
                  />
                  <img
                    src={bg2}
                    alt=""
                    className="absolute top-4 right-0 w-1/2 h-auto object-contain"
                  />
                </div>

                {/* Content over background */}
                <div className="relative z-10 space-y-6 w-[80%] left-10 lg:left-25 ">
                  <p className="text-gray-300 leading-relaxed text-lg lg:text-2xl ">
                    Experience the most trusted Matka platform with live
                    updates, expert tips, and real-time results across all major
                    markets. Whether you're playing in the day or night shift,
                    stay ahead with accurate and timely updates to maximize your
                    winnings.
                  </p>

                  <p className="text-gray-300 leading-relaxed text-lg lg:text-2xl">
                    Get expert advice, live results, and the best Matka tips to
                    increase your chances of winning. Trusted by thousands, JBM
                    Matka brings you the fastest updates for markets like
                    Kalyan, Milan, Supreme, and more. Play smart. Earn real.
                    Become a Matka King!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Ultimate Companion */}
        <div className="space-y-8">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 
              className="text-2xl lg:text-4xl "
             
            >
              Your Ultimate Matka Companion - JBM Matka App
            </h2>
            <div className="borders w-[75%]  mx-auto rounded-full opacity-30"></div>
          </div>

          <div className="grid lg:grid-cols-2  items-center">
            {/* Left side - Content */}
            <div className="space-y-6 order-1 lg:order-1">
              <div className="text-gray-300 leading-relaxed">
                <div className="relative min-h-[300px]">
                  {/* Background Image */}
                  <div className="absolute inset-0  top-10 left-10  opacity-30 pointer-events-none">
                    <img
                      src={bg1}
                      alt=""
                      className="w-1/2  h-auto object-contain -rotate-55 left-10 lg:right-12 "
                    />
                     <img
                    src={bg4}
                    alt=""
                    className="absolute  top-25 lg:right-50 w-1/2 h-auto object-contain"
                  />
                  </div>

                  {/* Content over background */}
                  <div className="relative   z-10  lg:w-[65%] w-[80%] left-10 lg:left-25">
                    <p className="text-yellow-100 leading-relaxed mt-8 text-lg lg:text-2xl  ">
                      Whether you're a beginner or a pro, JBM Matka offers expert
                      guidance, smart tips, and a smooth gaming experience. Get
                      fast results, rate charts, helpful videos, and updates from
                      all major Matka markets. Join the real Satta adventure and
                      play like a king!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center  order-1 lg:order-2">
              <div className="w-full max-w-lg overflow-hidden ">
                <img
                  src={banner1}
                  alt="JBM Matka App"
                  className="w-92 h-92 object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="w-full h-64 bg-gray-600 rounded-lg hidden items-center justify-center">
                  <span className="text-gray-400 text-sm">
                    App Companion Image
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}