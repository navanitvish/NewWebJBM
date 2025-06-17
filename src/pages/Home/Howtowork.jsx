import { Download, UserPlus, DollarSign, Award } from "lucide-react";

export default function HowToWorks() {
  const steps = [
    {
      icon: Download,
      title: "Download App",
      description: "Get our mobile app from your app store",
    },
    {
      icon: UserPlus,
      title: "Instant Sign-Up",
      description: "Create your account in seconds",
    },
    {
      icon: DollarSign,
      title: "Deposit Money",
      description: "Add funds to start playing",
    },
    {
      icon: Award,
      title: "Play & Get Win",
      description: "Enjoy games and win rewards",
    },
  ];

  return (
    <div  className=" bg-gradient-to-b from-gray-900 to-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}

        <div className="text-center mb-12">
          <h2
            className="text-2xl lg:text-4xl "
          >
            How To Works
          </h2>
          <div className="borders w-52  mx-auto rounded-full  opacity-30"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Icon Circle */}
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #F44041 0%, #A40909 100%)",
                }}
                className="w-42 h-42 border-2 border-amber-50   rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-700  duration-300 shadow-lg"
              >
                <step.icon className="w-14 h-14  text-white" strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>

             
            </div>
          ))}
        </div>

     
        
      </div>
    </div>
  );
}
