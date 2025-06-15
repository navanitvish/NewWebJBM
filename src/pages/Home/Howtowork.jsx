import { Download, UserPlus, DollarSign, Award } from "lucide-react";

export default function HowToWorks() {
  const steps = [
    {
      icon: Download,
      title: "Download App",
      description: "Get our mobile app from your app store"
    },
    {
      icon: UserPlus,
      title: "Instant Sign-Up",
      description: "Create your account in seconds"
    },
    {
      icon: DollarSign,
      title: "Deposit Money",
      description: "Add funds to start playing"
    },
    {
      icon: Award,
      title: "Play & Get Win",
      description: "Enjoy games and win rewards"
    }
  ];

  return (
    <div className="bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl  lg:text-6xl font-bold text-center mb-16 bg-[linear-gradient(90deg,_#D3912E_0%,_#AC5600_50%,_#EDB501_100%)] bg-clip-text text-transparent">
          How To Works
        </h2>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Icon Circle */}
              <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-700 transition-colors duration-300 shadow-lg">
                <step.icon className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Connecting Lines (Optional Enhancement) */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30"></div>
        </div>
      </div>
    </div>
  );
}