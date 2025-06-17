import { Link } from "react-router-dom";
import banner from "../../assets/Hero_banner.png";
import play from "../../assets/playstore.png";

export const HeroSections = () => {
  return (
    <div
      style={{ background: "linear-gradient(90deg, #23231E 0%, #050600 100%)" }}
      className="bg-black w-full h-[500px] flex items-center py-8"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 lg:gap-12">
        {/* Content Section */}
        <div className="flex-1 space-y-4 text-center lg:text-left">
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 400,
              fontSize: "36px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
            className="text-xl sm:text-2xl font-bold text-white"
          >
            Download JMB Matka App
          </p>

          <h2 className="headers text-3xl sm:text-4xl py-2  lg:text-6xl ">
            Play Online Matka
          </h2>

          <p className="headerpara text-base  text-white  mx-auto lg:mx-0">
            Play Online Matka with JMB Matka & Win Money Daily! <br /> Your
            Game, Your Luck
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              style={{
                background: "linear-gradient(180deg, #F44041 0%, #A40909 100%)",
                fontFamily: "Anton, sans-serif",
              }}
              className=" hover:bg-red-800 transition-colors border-amber-50 border-2 duration-300 font-bold py-5 px-10 rounded-lg shadow-lg"
            >
              <Link
                to="/download"
                className="block w-full text-amber-50 text-2xl h-full"
              >
                Download Now
              </Link>
            </button>

            <button
              style={{
                background: "linear-gradient(180deg, #F44041 0%, #A40909 100%)",
              }}
              className=" hover:bg-red-700 border-amber-50 border-2 transition-colors duration-300 text-amber-50 font-bold py-3 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2"
            >
              <img
                src={play}
                alt="Play Store"
                className="w-12 h-12 object-contain"
              />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <img
            src={banner}
            alt="JMB Matka App Banner"
            className="w-full h-[300px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
