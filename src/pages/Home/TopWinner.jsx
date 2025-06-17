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
    <div className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center  bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-500 bg-clip-text text-transparent">
          Top Winner
        </h2>
        <div className="borders w-52  mx-auto rounded-full mt-4  opacity-30"></div>

        {/* Winners List */}
        <div className="space-y-4 mt-12">
          {winners.map((winner, index) => (
            <div
              key={winner.id}
              style={{ backgroundImage: "linear-gradient(180deg, #FFF8C3 0%, #D59C43 100%)" }}
              className="rounded-lg p-3 md:p-4"
            >
              {/* Desktop Layout */}
              <div className="hidden lg:flex items-center justify-between">
                {/* Winner Info Section */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={images[0]} 
                    alt="Winner avatar"
                    className="w-12 h-12  object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-black text-lg">{winner.name}</h3>
                    <p className="text-black text-sm">{winner.location}</p>
                  </div>
                </div>

                {/* Game Info Section */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={images[1]} 
                    alt="Game icon"
                    className="w-12 h-12  object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-black text-lg">{winner.game}</h4>
                    <p className="text-black text-sm">{winner.gameType}</p>
                  </div>
                </div>

                {/* Bet Amount Section */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={images[2]} 
                    alt="Bet icon"
                    className="w-12 h-12  object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-black text-lg">Bet Amount</h4>
                    <p className="text-black text-sm">{winner.betAmount}</p>
                  </div>
                </div>

                {/* Winner Amount Section */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={images[3]} 
                    alt="Winner icon"
                    className="w-12 h-12  object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-black text-lg">Winner Man</h4>
                    <p className="text-black text-sm">{winner.winAmount}</p>
                  </div>
                </div>
              </div>

              {/* Tablet Layout (2x2 Grid) */}
              <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
                {/* Winner Info */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={images[0]} 
                    alt="Winner avatar"
                    className="w-10 h-10  object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-black text-base">{winner.name}</h3>
                    <p className="text-black text-xs">{winner.location}</p>
                  </div>
                </div>

                {/* Game Info */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={images[1]} 
                    alt="Game icon"
                    className="w-10 h-10  object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-black text-base">{winner.game}</h4>
                    <p className="text-black text-xs">{winner.gameType}</p>
                  </div>
                </div>

                {/* Bet Amount */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={images[2]} 
                    alt="Bet icon"
                    className="w-10 h-10  object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-black text-base">Bet Amount</h4>
                    <p className="text-black text-xs">{winner.betAmount}</p>
                  </div>
                </div>

                {/* Winner Amount */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={images[3]} 
                    alt="Winner icon"
                    className="w-10 h-10 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-black text-base">Winner Man</h4>
                    <p className="text-black text-xs">{winner.winAmount}</p>
                  </div>
                </div>
              </div>

              {/* Mobile Layout (Stacked) */}
              <div className="md:hidden space-y-3">
                {/* Winner Info */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={images[0]} 
                    alt="Winner avatar"
                    className="w-10 h-10  object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-black text-base">{winner.name}</h3>
                    <p className="text-black text-xs">{winner.location}</p>
                  </div>
                </div>

                {/* Game Info */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={images[1]} 
                    alt="Game icon"
                    className="w-10 h-10 object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-black text-base">{winner.game}</h4>
                    <p className="text-black text-xs">{winner.gameType}</p>
                  </div>
                </div>

                {/* Bet and Win Amount Row */}
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2 flex-1">
                    <img 
                      src={images[2]} 
                      alt="Bet icon"
                      className="w-8 h-8  object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-black text-sm">Bet</h4>
                      <p className="text-black text-xs">{winner.betAmount}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 flex-1">
                    <img 
                      src={images[3]} 
                      alt="Winner icon"
                      className="w-8 h-8  object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-black text-sm">Win</h4>
                      <p className="text-black text-xs">{winner.winAmount}</p>
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