import { useNavigate } from "react-router";
import { SimpleCard } from "../components/simple-card";
import { Server, Briefcase, ArrowRight } from "lucide-react";

export default function Entry() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full">
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-[42px] font-bold text-gray-900 mb-4 tracking-tight">
            Operations Command Center
          </h1>
          <p className="text-lg md:text-xl text-gray-600">Choose a dashboard</p>
        </div>

        {/* Dashboard Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Tech Dashboard Card */}
          <SimpleCard hover onClick={() => navigate("/tech-dashboard")}>
            <div className="p-8 md:p-12 flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-blue-50 flex items-center justify-center">
                <Server className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
              </div>
              <div>
                <h2 className="text-2xl md:text-[28px] font-bold text-gray-900 mb-3">
                  Tech Dashboard
                </h2>
                <p className="text-gray-600">
                  Journeys, APIs, incidents, reliability
                </p>
              </div>
              <button className="mt-4 flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-200">
                <span>Open</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </SimpleCard>

          {/* Business Dashboard Card */}
          <SimpleCard hover onClick={() => navigate("/business-dashboard")}>
            <div className="p-8 md:p-12 flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-purple-50 flex items-center justify-center">
                <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-purple-500" />
              </div>
              <div>
                <h2 className="text-2xl md:text-[28px] font-bold text-gray-900 mb-3">
                  Business Dashboard
                </h2>
                <p className="text-gray-600">
                  Business metrics & ops (placeholder)
                </p>
              </div>
              <button className="mt-4 flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl transition-all duration-200">
                <span>Open</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </SimpleCard>
        </div>
      </div>
    </div>
  );
}