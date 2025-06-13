import React from 'react';
import banner from "../../assets/banner (3).png";

export default function GamePlayRates() {
  const gameRates = [
    {
      game: "JODI DIGIT 10 ka 900",
      rate: "10 ka 900"
    },
    {
      game: "HRUF 100 ka 900", 
      rate: "100 ka 900"
    }
  ];

  return (
    <div className="bg-gray-900 py-16 px-4">
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
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Game Play Rates
            </h2>
            
            <div className="space-y-4">
              {gameRates.map((rate, index) => (
                <button
                  key={index}
                  className="w-full bg-gray-800 hover:bg-gray-700 border-2 border-yellow-500 rounded-lg px-6 py-4 text-white font-semibold text-lg transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transform hover:scale-105"
                >
                  {rate.game}
                </button>
              ))}
            </div>
            
            {/* Additional decorative elements */}
            <div className="flex justify-center space-x-4 mt-8">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}