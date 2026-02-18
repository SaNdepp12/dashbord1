import { useNavigate } from "react-router";
import { SimpleCard } from "../components/simple-card";
import { Construction, ArrowLeft } from "lucide-react";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
      <SimpleCard className="max-w-2xl p-12 md:p-16">
        <div className="text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-purple-50 flex items-center justify-center mx-auto mb-8">
            <Construction className="w-10 h-10 md:w-12 md:h-12 text-purple-500" />
          </div>
          <h1 className="text-3xl md:text-[36px] font-bold text-gray-900 mb-4">
            Coming Soon
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            The Business Dashboard is currently under development
          </p>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-200 mx-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>
      </SimpleCard>
    </div>
  );
}