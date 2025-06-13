import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function OurOpenGames() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Game data - you can modify this to add more games
  const games = [
    { id: 1, name: "Delhi Bazar", status: "Open" },
    { id: 2, name: "Mumbai Bazar", status: "Open" },
    { id: 3, name: "Kolkata Bazar", status: "Open" },
    { id: 4, name: "Chennai Bazar", status: "Open" },
    { id: 5, name: "Pune Bazar", status: "Open" },
    { id: 6, name: "Jaipur Bazar", status: "Open" },
    { id: 7, name: "Hyderabad Bazar", status: "Open" },
    { id: 8, name: "Bangalore Bazar", status: "Open" },
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, games.length - itemsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, maxIndex]);

  const goToNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div className="bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
          OUR OPEN GAMES
        </h2>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel Track */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              width: `${(games.length / itemsPerView) * 100}%`
            }}
          >
            {games.map((game, index) => (
              <div 
                key={game.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / games.length}%` }}
              >
                <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg p-6 h-32 flex items-center justify-center cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 border-2 border-orange-400">
                  <div className="text-center">
                    <h3 className="text-white font-bold text-lg md:text-xl">
                      {game.name}
                    </h3>
                    <div className="mt-2 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                      <span className="text-white text-sm font-medium">
                        {game.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous games"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next games"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-orange-500 scale-125' 
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Responsive Grid for Mobile */}
        <div className="md:hidden mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {games.slice(0, 6).map((game) => (
              <div 
                key={`mobile-${game.id}`}
                className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg p-4 h-24 flex items-center justify-center border-2 border-orange-400"
              >
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg">
                    {game.name}
                  </h3>
                  <div className="mt-1 flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                    <span className="text-white text-sm font-medium">
                      {game.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}