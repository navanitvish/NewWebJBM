import React from 'react';

import banner1 from "../../assets/banner (1).png";
import banner2 from "../../assets/banner (2).png";


export default function JBMMatkaPromo() {
  return (
    <div className="min-h-screen bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* First Section - Win Big */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <div className="w-full h-auto  overflow-hidden  flex items-center justify-center">
              <img 
                src={banner2}
                alt="Matka Gaming Table"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gray-600 rounded-full hidden items-center justify-center">
                <span className="text-gray-400 text-sm">Gaming Table Image</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-orange-400">
              Win Big with JBM Matka Application - Your Trusted Satta Platform!
            </h1>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Experience the most trusted Matka platform with live updates, expert tips, 
                and real-time results across all major markets. Whether you're playing in the 
                day or night shift, stay ahead with accurate and timely updates to maximize 
                your winnings.
              </p>
              
              <p>
                Get expert advice, live results, and the best Matka tips to increase your chances 
                of winning. Trusted by thousands, JBM Matka brings you the fastest updates for 
                markets like Kalyan, Milan, Supreme, and more. Play smart. Earn real. Become a 
                Matka King!
              </p>
            </div>
          </div>
        </div>
        
        {/* Second Section - Ultimate Companion */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-orange-400">
              Your Ultimate Matka Companion - JBM Matka App
            </h2>
            
            <div className="text-gray-300 leading-relaxed">
              <p>
                Whether you're a beginner or a pro, JBM Matka offers expert 
                guidance, smart tips, and a smooth gaming experience. 
                Get fast results, rate charts, helpful videos, and updates 
                from all major Matka markets. Join the real Satta adventure 
                and play like a king!
              </p>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="flex justify-center lg:order-2">
            <div className="w-full h-auto overflow-hidden  flex items-center justify-center">
              <img 
                src={banner1}
                alt="JBM Matka App"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gray-600 rounded-full hidden items-center justify-center">
                <span className="text-gray-400 text-sm">App Companion Image</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}