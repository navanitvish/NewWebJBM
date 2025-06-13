import { Link } from "react-router-dom";
import banner from "../../assets/Hero_banner.png";

export const HeroSections = () => {
  return (
    <div className="bg-black w-full h-[500px] flex items-center py-8">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 lg:gap-12">

        {/* Content Section */}
        <div className="flex-2 space-y-6 text-center lg:text-left">
          <h4 className="text-xl sm:text-2xl font-bold text-white">
            Download JMB Matka App
          </h4>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 leading-tight">
            Play Online Matka
          </h2>
          
          <p className="text-base sm:text-lg text-yellow-100 max-w-md mx-auto lg:mx-0">
            Play Online Matka with JMB Matka & Win Money Daily! Your Game, Your Luck
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 text-black font-bold py-3 px-6 rounded-lg shadow-lg">
              <Link to="/download" className="block w-full h-full">
                Download Now
              </Link>
            </button>
            
            <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 text-black font-bold py-3 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Google Play
            </button>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="flex-3 w-full  ">
          <img 
            src={banner} 
            alt="JMB Matka App Banner" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};