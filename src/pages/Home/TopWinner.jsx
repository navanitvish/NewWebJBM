import React from 'react';
import { User, Award, CircleDollarSign, Trophy } from 'lucide-react';

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

  return (
    <div className="bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12 bg-[linear-gradient(90deg,_#D3912E_0%,_#AC5600_50%,_#EDB501_100%)] bg-clip-text text-transparent">
          Top Winner
        </h2>

        {/* Winners List */}
        <div className="space-y-4">
          {winners.map((winner) => (
            <div
              key={winner.id}
              style={{ backgroundImage: "linear-gradient(180deg, #FFF8C3 0%, #D59C43 100%)" }}
              className="rounded-lg p-3 md:p-4"
            >
              {/* Desktop Layout */}
              <div className="hidden lg:flex items-center justify-between">
                {/* Winner Info Section */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg">{winner.name}</h3>
                    <p className="text-black text-sm">{winner.location}</p>
                  </div>
                </div>

                {/* Game Info Section */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">{winner.game}</h4>
                    <p className="text-black text-sm">{winner.gameType}</p>
                  </div>
                </div>

                {/* Bet Amount Section */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <CircleDollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">Bet Amount</h4>
                    <p className="text-black text-sm">{winner.betAmount}</p>
                  </div>
                </div>

                {/* Winner Amount Section */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
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
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-base">{winner.name}</h3>
                    <p className="text-black text-xs">{winner.location}</p>
                  </div>
                </div>

                {/* Game Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-base">{winner.game}</h4>
                    <p className="text-black text-xs">{winner.gameType}</p>
                  </div>
                </div>

                {/* Bet Amount */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <CircleDollarSign className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-base">Bet Amount</h4>
                    <p className="text-black text-xs">{winner.betAmount}</p>
                  </div>
                </div>

                {/* Winner Amount */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
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
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black text-base">{winner.name}</h3>
                    <p className="text-black text-xs">{winner.location}</p>
                  </div>
                </div>

                {/* Game Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-black text-base">{winner.game}</h4>
                    <p className="text-black text-xs">{winner.gameType}</p>
                  </div>
                </div>

                {/* Bet and Win Amount Row */}
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2 flex-1">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <CircleDollarSign className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-sm">Bet</h4>
                      <p className="text-black text-xs">{winner.betAmount}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 flex-1">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
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