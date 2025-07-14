import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Trophy, Loader2 } from "lucide-react";

export default function OurOpenGames() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch games data from API
  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jmb-matka.onrender.com/v1/api/game/pagination?page=1&limit=10');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Response:', data); // For debugging
        
        // Extract games array from the response
        const gamesArray = data.result || data.games || data || [];
        setGames(gamesArray);
        setError(null);
      } catch (err) {
        console.error('Error fetching games:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const itemsPerView = {
    desktop: 4,
    tablet: 3,
    mobile: 2,
  };

  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return itemsPerView.desktop;
      if (window.innerWidth >= 768) return itemsPerView.tablet;
      return itemsPerView.mobile;
    }
    return itemsPerView.desktop;
  };

  const currentItemsPerView = getItemsPerView();
  const maxIndex = Math.max(0, games.length - currentItemsPerView);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Format time if needed (adjust based on your API response format)
  const formatTime = (time) => {
    if (!time) return 'N/A';
    // If time is already formatted, return as is
    if (typeof time === 'string') return time;
    // Add your time formatting logic here if needed
    return time;
  };

  // Get game name (adjust field name based on your API response)
  const getGameName = (game) => {
    return game.name || game.gameName || game.title || 'Unknown Game';
  };

  // Get game status (adjust field name based on your API response)
  const getGameStatus = (game) => {
    return game.status || game.gameStatus || 'Opening';
  };

  // Get game time (adjust field name based on your API response)
  const getGameTime = (game) => {
    return formatTime(game.time || game.gameTime || game.openTime || 'N/A');
  };

  // Get players count (adjust field name based on your API response)
  const getPlayersCount = (game) => {
    return game.players || game.playersCount || game.totalPlayers || '0';
  };

  if (loading) {
    return (
      <div style={{ background: "linear-gradient(180deg, #000000 0%, #2D3436 100%)" }} className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-white">
              OUR OPEN GAMES
            </h2>
            <div className="borders w-68 mt-1 mx-auto rounded-full shadow-2xl drop-shadow-lg opacity-30"></div>
          </div>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-yellow-400 animate-spin" />
            <span className="ml-3 text-white text-lg">Loading games...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ background: "linear-gradient(180deg, #000000 0%, #2D3436 100%)" }} className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-white">
              OUR OPEN GAMES
            </h2>
            <div className="borders w-68 mt-1 mx-auto rounded-full shadow-2xl drop-shadow-lg opacity-30"></div>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="text-red-400 text-lg mb-2">Error loading games</div>
              <div className="text-white text-sm">{error}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div style={{ background: "linear-gradient(180deg, #000000 0%, #2D3436 100%)" }} className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-white">
              OUR OPEN GAMES
            </h2>
            <div className="borders w-68 mt-1 mx-auto rounded-full shadow-2xl drop-shadow-lg opacity-30"></div>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="text-white text-lg">No games available</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "linear-gradient(180deg, #000000 0%, #2D3436 100%)" }} className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-white">
            OUR OPEN GAMES
          </h2>
          <div className="borders w-68 mt-1 mx-auto rounded-full shadow-2xl drop-shadow-lg opacity-30"></div>
        </div>

        {/* Desktop/Tablet Carousel */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / currentItemsPerView)
                }%)`,
              }}
            >
              {games.map((game, index) => (
                <div
                  key={game.id || index}
                  className="flex-shrink-0 px-3 p-10"
                  style={{ width: `${100 / currentItemsPerView}%` }}
                >
                  <div className="group relative overflow-hidden w-52 h-48 cursor-pointer transform hover:scale-105 transition-all duration-300">
                    {/* Background Gradient */}
                    <div
                      className="absolute inset-0 border-2 border-white rounded-xl"
                      style={{
                        backgroundImage:
                          "linear-gradient(137.59deg, #F2B701 4.14%, #853601 100%)",
                      }}
                    ></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                      <Trophy className="w-8 h-8 text-white mb-3 drop-shadow-lg" />
                      <h3 className="text-white font-bold text-xl md:text-2xl mb-2 drop-shadow-lg">
                        {getGameName(game)}
                      </h3>
                      <div className="text-white/90 text-sm space-y-1">
                        <p className="font-semibold">{getGameTime(game)}</p>
                        <p className="text-xs">{getPlayersCount(game)} Players</p>
                      </div>
                    </div>
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
                className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-red-500 hover:bg-black/80 p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 backdrop-blur-sm"
                aria-label="Previous games"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>

              <button
                onClick={goToNext}
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-red-500 hover:bg-black/80 p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 backdrop-blur-sm"
                aria-label="Next games"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </>
          )}
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {games.map((game, index) => (
              <div
                key={`mobile-${game.id || index}`}
                className="group relative overflow-hidden rounded-xl h-32 cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                {/* Background */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-500"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #FFF8C3 0%, #FFE066 25%, #D59C43 75%, #B8860B 100%)",
                  }}
                ></div>

                {/* Live Indicator */}
                <div className="absolute top-3 left-3 flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-xs font-semibold bg-black/30 px-2 py-1 rounded-full">
                    {getGameStatus(game)}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
                    {getGameName(game)}
                  </h3>
                  <div className="text-white/90 text-xs space-y-1">
                    <p className="font-semibold">{getGameTime(game)}</p>
                    <p>{getPlayersCount(game)} Players</p>
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