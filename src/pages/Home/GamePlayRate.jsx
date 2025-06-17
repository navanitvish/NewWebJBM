import React from "react";
import banner from "../../assets/banner (3).png";

export default function GamePlayRates() {
  const gameRates = [
    {
      game: "JODI DIGIT 10 ka 900",
      rate: "10 ka 900",
    },
    {
      game: "HRUF 100 ka 900",
      rate: "100 ka 900",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(269.91deg, #262825 0.06%, #151B1B 99.91%)",
      }}
      className="bg-gray-900 py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={banner}
                alt="Casino Game Graphics"
                className="w-full max-w-md h-auto object-contain rounded-lg shadow-2xl"
              />
              {/* Optional overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Right Side - Game Rates */}
          <div className="space-y-2">
            <h2
              style={{ fontFamily: "Anton, sans-serif" }}
              className="text-2xl md:text-4xl text-center  "
            >
              Game Play Rates
            </h2>
            <div className="borders w-68   mx-auto rounded-full opacity-30 "></div>

            <div className="space-y-4 mt-16">
              {gameRates.map((rate, index) => (
                <button
                  style={{
                    background:
                      "linear-gradient(90deg, #131512 0%, #000100 100%)",
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 400,
                  }}
                  key={index}
                  className="w-full bg-gray-800 hover:bg-gray-700 border-2 text-3xl border-yellow-500 rounded-3xl px-6 py-4 text-white   transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transform hover:scale-105"
                >
                  {rate.game}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
