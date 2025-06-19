import React from 'react';

import TopWinnerimage2 from '../../assets/topwinner (1).png';
import TopWinnerimage3 from '../../assets/topwinner (2).png';
import TopWinnerimage4 from '../../assets/topwinner (3).png';
import TopWinnerimage1 from '../../assets/topwinner (4).png';

export default function TopWinner() {
  const winners = [
    {
      id: 1,
      name: "Rohit Sharma",
      location: "Winner, Jharkhand",
      game: "Delhi bazar",
      gameType: "Jackpot",
      betAmount: "₹ 30000",
      winAmount: "₹ 50000"
    },
    {
      id: 2,
      name: "Rohit Sharma",
      location: "Winner, Jharkhand",
      game: "Delhi bazar",
      gameType: "Jackpot",
      betAmount: "₹ 30000",
      winAmount: "₹ 50000"
    },
    {
      id: 3,
      name: "Rohit Sharma",
      location: "Winner, Jharkhand",
      game: "Delhi bazar",
      gameType: "Jackpot",
      betAmount: "₹ 30000",
      winAmount: "₹ 50000"
    },
    {
      id: 4,
      name: "Rohit Sharma",
      location: "Winner, Jharkhand",
      game: "Delhi bazar",
      gameType: "Jackpot",
      betAmount: "₹ 30000",
      winAmount: "₹ 50000"
    },
    {
      id: 5,
      name: "Rohit Sharma",
      location: "Winner, Jharkhand",
      game: "Delhi bazar",
      gameType: "Jackpot",
      betAmount: "₹ 30000",
      winAmount: "₹ 50000"
    },
    {
      id: 6,
      name: "Rohit Sharma",
      location: "Winner, Jharkhand",
      game: "Delhi bazar",
      gameType: "Jackpot",
      betAmount: "₹ 30000",
      winAmount: "₹ 50000"
    }
  ];

  const images = [TopWinnerimage1, TopWinnerimage2, TopWinnerimage3, TopWinnerimage4];

  return (
    <div className="bg-black py-8 sm:py-12 lg:py-16 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-500 bg-clip-text text-transparent leading-tight">
          Top Winner
        </h2>
        <div className="borders w-32 sm:w-40 md:w-52 mx-auto rounded-full mt-3 sm:mt-4 opacity-30"></div>

        {/* Winners List */}
        <div className="space-y-3 sm:space-y-4 mt-8 sm:mt-10 lg:mt-12">
          {winners.map((winner, index) => (
            <div
              key={winner.id}
              style={{ backgroundImage: "linear-gradient(180deg, #FFF8C3 0%, #D59C43 100%)" }}
              className="rounded-lg p-3 sm:p-4 shadow-lg"
            >
              {/* Desktop Layout */}
              <div className="hidden xl:flex items-center justify-between">
                {/* Winner Info Section */}
                <div className="flex items-center space-x-4 min-w-0 flex-1">
                  <img 
                    src={images[0]} 
                    alt="Winner avatar"
                    className="w-12 h-12 object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="font-bold text-black text-lg leading-tight truncate">{winner.name}</h3>
                    <p className="text-black text-sm leading-tight truncate">{winner.location}</p>
                  </div>
                </div>

                {/* Game Info Section */}
                <div className="flex items-center space-x-4 min-w-0 flex-1">
                  <img 
                    src={images[1]} 
                    alt="Game icon"
                    className="w-12 h-12 object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-bold text-black text-lg leading-tight truncate">{winner.game}</h4>
                    <p className="text-black text-sm leading-tight truncate">{winner.gameType}</p>
                  </div>
                </div>

                {/* Bet Amount Section */}
                <div className="flex items-center space-x-4 min-w-0 flex-1">
                  <img 
                    src={images[2]} 
                    alt="Bet icon"
                    className="w-12 h-12 object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-bold text-black text-lg leading-tight">Bet Amount</h4>
                    <p className="text-black text-sm leading-tight">{winner.betAmount}</p>
                  </div>
                </div>

                {/* Winner Amount Section */}
                <div className="flex items-center space-x-4 min-w-0 flex-1">
                  <img 
                    src={images[3]} 
                    alt="Winner icon"
                    className="w-12 h-12 object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-bold text-black text-lg leading-tight">Winner Man</h4>
                    <p className="text-black text-sm leading-tight">{winner.winAmount}</p>
                  </div>
                </div>
              </div>

              {/* Large Tablet Layout (2x2 Grid) */}
              <div className="hidden lg:grid xl:hidden grid-cols-2 gap-4">
                {/* Winner Info */}
                <div className="flex items-center space-x-3 min-w-0">
                  <img 
                    src={images[0]} 
                    alt="Winner avatar"
                    className="w-11 h-11 object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-black text-base leading-tight truncate">{winner.name}</h3>
                    <p className="text-black text-sm leading-tight truncate">{winner.location}</p>
                  </div>
                </div>

                {/* Game Info */}
                <div className="flex items-center space-x-3 min-w-0">
                  <img 
                    src={images[1]} 
                    alt="Game icon"
                    className="w-11 h-11 object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-black text-base leading-tight truncate">{winner.game}</h4>
                    <p className="text-black text-sm leading-tight truncate">{winner.gameType}</p>
                  </div>
                </div>

                {/* Bet Amount */}
                <div className="flex items-center space-x-3 min-w-0">
                  <img 
                    src={images[2]} 
                    alt="Bet icon"
                    className="w-11 h-11 object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-black text-base leading-tight">Bet Amount</h4>
                    <p className="text-black text-sm leading-tight">{winner.betAmount}</p>
                  </div>
                </div>

                {/* Winner Amount */}
                <div className="flex items-center space-x-3 min-w-0">
                  <img 
                    src={images[3]} 
                    alt="Winner icon"
                    className="w-11 h-11 object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-black text-base leading-tight">Winner Man</h4>
                    <p className="text-black text-sm leading-tight">{winner.winAmount}</p>
                  </div>
                </div>
              </div>

              {/* Small Tablet Layout (Compact 2x2) */}
              <div className="hidden md:grid lg:hidden grid-cols-2 gap-3">
                {/* Winner Info */}
                <div className="flex items-center space-x-2 min-w-0">
                  <img 
                    src={images[0]} 
                    alt="Winner avatar"
                    className="w-9 h-9 object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-black text-sm leading-tight truncate">{winner.name}</h3>
                    <p className="text-black text-xs leading-tight truncate">{winner.location}</p>
                  </div>
                </div>

                {/* Game Info */}
                <div className="flex items-center space-x-2 min-w-0">
                  <img 
                    src={images[1]} 
                    alt="Game icon"
                    className="w-9 h-9 object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-black text-sm leading-tight truncate">{winner.game}</h4>
                    <p className="text-black text-xs leading-tight truncate">{winner.gameType}</p>
                  </div>
                </div>

                {/* Bet Amount */}
                <div className="flex items-center space-x-2 min-w-0">
                  <img 
                    src={images[2]} 
                    alt="Bet icon"
                    className="w-9 h-9 object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-black text-sm leading-tight">Bet</h4>
                    <p className="text-black text-xs leading-tight">{winner.betAmount}</p>
                  </div>
                </div>

                {/* Winner Amount */}
                <div className="flex items-center space-x-2 min-w-0">
                  <img 
                    src={images[3]} 
                    alt="Winner icon"
                    className="w-9 h-9 object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-black text-sm leading-tight">Win</h4>
                    <p className="text-black text-xs leading-tight">{winner.winAmount}</p>
                  </div>
                </div>
              </div>

              {/* Mobile Layout (Optimized Stacked) */}
              <div className="md:hidden space-y-2.5">
                {/* Top Row: Winner Info and Game Info */}
                <div className="flex items-center justify-between space-x-3">
                  {/* Winner Info */}
                  <div className="flex items-center space-x-2 min-w-0 flex-1">
                    <img 
                      src={images[0]} 
                      alt="Winner avatar"
                      className="w-10 h-10 sm:w-11 sm:h-11 object-cover flex-shrink-0 rounded-full"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-black text-sm sm:text-base leading-tight truncate">{winner.name}</h3>
                      <p className="text-black text-xs leading-tight truncate">{winner.location}</p>
                    </div>
                  </div>

                  {/* Game Info */}
                  <div className="flex items-center space-x-2 min-w-0 flex-1">
                    <img 
                      src={images[1]} 
                      alt="Game icon"
                      className="w-10 h-10 sm:w-11 sm:h-11 object-cover flex-shrink-0 rounded-full"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-black text-sm sm:text-base leading-tight truncate">{winner.game}</h4>
                      <p className="text-black text-xs leading-tight truncate">{winner.gameType}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Bet and Win Amount */}
                <div className="flex items-center justify-between space-x-4 rounded-lg p-2">
                  <div className="flex items-center space-x-2 flex-1 min-w-0">
                    <img 
                      src={images[2]} 
                      alt="Bet icon"
                      className="w-8 h-8 sm:w-9 sm:h-9 object-cover flex-shrink-0 rounded-full"
                    />
                    <div className="min-w-0">
                      <h4 className="font-bold text-black text-xs sm:text-sm leading-tight">Bet Amount</h4>
                      <p className="text-black text-xs sm:text-sm font-semibold leading-tight">{winner.betAmount}</p>
                    </div>
                  </div>
                  
                  <div className="w-px h-8 bg-black opacity-20"></div>
                  
                  <div className="flex items-center space-x-2 flex-1 min-w-0">
                    <img 
                      src={images[3]} 
                      alt="Winner icon"
                      className="w-8 h-8 sm:w-9 sm:h-9 object-cover flex-shrink-0 rounded-full"
                    />
                    <div className="min-w-0">
                      <h4 className="font-bold text-black text-xs sm:text-sm leading-tight">Won Amount</h4>
                      <p className="text-green-700 text-xs sm:text-sm font-bold leading-tight">{winner.winAmount}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}