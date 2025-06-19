import { Link } from "react-router-dom";
import banner from "../../assets/Hero_banner.png";
import play from "../../assets/playstore.png";

export const HeroSections = () => {
  return (
    <div
      style={{ background: "linear-gradient(90deg, #23231E 0%, #050600 100%)" }}
      className="bg-black w-full min-h-[400px] md:min-h-[500px] lg:h-[500px] flex items-center py-6 md:py-8"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-6 sm:gap-8 lg:gap-12 w-full">
        {/* Content Section */}
        <div className="flex-1 space-y-3 sm:space-y-4 text-center lg:text-left w-full">
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(20px, 4vw, 36px)",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
            className="text-white"
          >
            Download JMB Matka App
          </p>

          <h2 className="headers text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl py-1 sm:py-2 leading-tight">
            Play Online Matka
          </h2>

          <p className="headerpara text-sm sm:text-base md:text-lg text-white mx-auto lg:mx-0 max-w-md lg:max-w-none">
            Play Online Matka with JMB Matka & Win Money Daily! <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Your Game, Your Luck
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
            <button
              style={{
                background: "linear-gradient(180deg, #F44041 0%, #A40909 100%)",
                fontFamily: "Anton, sans-serif",
              }}
              className="hover:bg-red-800 w-[70%] mx-auto transition-colors border-amber-50 border-2 duration-300 font-bold py-3 sm:py-4 lg:py-5 px-6 sm:px-8 lg:px-10 rounded-lg shadow-lg lg:w-full sm:w-auto"
            >
              <Link
                to="/download"
                className="block w-full text-amber-50 text-lg sm:text-xl lg:text-2xl h-full"
              >
                Download Now
              </Link>
            </button>

            <button
              style={{
                background: "linear-gradient(180deg, #F44041 0%, #A40909 100%)",
              }}
              className="hover:bg-red-700 w-[70%] mx-auto border-amber-50 border-2 transition-colors duration-300 text-amber-50 font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 lg:w-full sm:w-auto"
            >
              <img
                src={play}
                alt="Play Store"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
              />
            
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
          <img
            src={banner}
            alt="JMB Matka App Banner"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-lg lg:rounded-none"
          />
        </div>
      </div>
    </div>
  );
};