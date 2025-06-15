import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Trophy } from 'lucide-react';

export default function OurOpenGames() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Game data with more details
  const games = [
    { id: 1, name: "Delhi Bazar", status: "Open", time: "10:30 AM", players: "2.5K" },
    { id: 2, name: "Mumbai Bazar", status: "Open", time: "11:00 AM", players: "3.2K" },
    { id: 3, name: "Kolkata Bazar", status: "Open", time: "11:30 AM", players: "1.8K" },
    { id: 4, name: "Chennai Bazar", status: "Open", time: "12:00 PM", players: "2.1K" },
    { id: 5, name: "Pune Bazar", status: "Open", time: "12:30 PM", players: "1.9K" },
    { id: 6, name: "Jaipur Bazar", status: "Open", time: "01:00 PM", players: "1.5K" },
    { id: 7, name: "Hyderabad Bazar", status: "Open", time: "01:30 PM", players: "2.3K" },
    { id: 8, name: "Bangalore Bazar", status: "Open", time: "02:00 PM", players: "2.7K" },
  ];

  const itemsPerView = {
    desktop: 4,
    tablet: 3,
    mobile: 2
  };

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return itemsPerView.desktop;
      if (window.innerWidth >= 768) return itemsPerView.tablet;
      return itemsPerView.mobile;
    }
    return itemsPerView.desktop;
  };

  const currentItemsPerView = getItemsPerView();
  const maxIndex = Math.max(0, games.length - currentItemsPerView);

  const goToNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-[linear-gradient(90deg,_#D3912E_0%,_#AC5600_50%,_#EDB501_100%)] bg-clip-text text-transparent">
            OUR OPEN GAMES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 text-lg">Choose your favorite game and start winning today!</p>
        </div>

        {/* Desktop/Tablet Carousel */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / currentItemsPerView)}%)`,
              }}
            >
              {games.map((game) => (
                <div 
                  key={game.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / currentItemsPerView}%` }}
                >
                  <div className="group relative overflow-hidden rounded-xl h-48 cursor-pointer transform hover:scale-105 transition-all duration-300">
                    {/* Background Gradient */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-500"
                      style={{ backgroundImage: "linear-gradient(135deg, #FFF8C3 0%, #FFE066 25%, #D59C43 75%, #B8860B 100%)" }}
                    ></div>
                    

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                      <Trophy className="w-8 h-8 text-white mb-3 drop-shadow-lg" />
                      <h3 className="text-white font-bold text-xl md:text-2xl mb-2 drop-shadow-lg">
                        {game.name}
                      </h3>
                      <div className="text-white/90 text-sm space-y-1">
                        <p className="font-semibold">{game.time}</p>
                        <p className="text-xs">{game.players} Players</p>
                      </div>
                    </div>

                  

                    {/* Border Glow Effect */}
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-orange-400 group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 backdrop-blur-sm"
                aria-label="Previous games"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 backdrop-blur-sm"
                aria-label="Next games"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

        
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {games.map((game) => (
              <div 
                key={`mobile-${game.id}`}
                className="group relative overflow-hidden rounded-xl h-32 cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                {/* Background */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-500"
                  style={{ backgroundImage: "linear-gradient(135deg, #FFF8C3 0%, #FFE066 25%, #D59C43 75%, #B8860B 100%)" }}
                ></div>
                
                {/* Live Indicator */}
                <div className="absolute top-3 left-3 flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-xs font-semibold bg-black/30 px-2 py-1 rounded-full">
                    LIVE
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
                    {game.name}
                  </h3>
                  <div className="text-white/90 text-xs space-y-1">
                    <p className="font-semibold">{game.time}</p>
                    <p>{game.players} Players</p>
                  </div>
                </div>

                {/* Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-orange-400/50 group-hover:border-orange-400 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </div>
  );
}