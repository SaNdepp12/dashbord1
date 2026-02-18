import { useNavigate } from "react-router";
import { SimpleCard } from "../components/simple-card";
import { StatusChip } from "../components/status-chip";
import { Search, Calendar, ArrowLeft } from "lucide-react";

interface Journey {
  id: string;
  name: string;
  status: "Green" | "Amber" | "Red";
  success: number;
  abandoned: number;
  failure: number;
  volume: number;
  group: string;
}

const journeys: Journey[] = [
  {
    id: "gold-loan",
    name: "Gold Loan",
    status: "Green",
    success: 72,
    abandoned: 14,
    failure: 14,
    volume: 2000,
    group: "Assets",
  },
  {
    id: "forex-card",
    name: "Forex Card",
    status: "Amber",
    success: 58,
    abandoned: 21,
    failure: 21,
    volume: 1500,
    group: "Cards",
  },
  {
    id: "savings-account",
    name: "Savings Account",
    status: "Red",
    success: 41,
    abandoned: 24,
    failure: 35,
    volume: 1000,
    group: "Liabilities",
  },
  {
    id: "insurance-buy",
    name: "Insurance Buy",
    status: "Green",
    success: 79,
    abandoned: 11,
    failure: 10,
    volume: 1000,
    group: "Third Party",
  },
];

const groups = ["Assets", "Cards", "Liabilities", "Third Party"];

export default function TechDashboard() {
  const navigate = useNavigate();

  const stableCount = journeys.filter((j) => j.status === "Green").length;
  const degradedCount = journeys.filter((j) => j.status === "Amber").length;
  const criticalCount = journeys.filter((j) => j.status === "Red").length;

  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Header with KPIs */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/")}
                className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl md:text-[26px] font-bold text-gray-900">
                  Tech Dashboard / Journey Health
                </h1>
                <p className="text-sm text-gray-600">Monitor journey performance and reliability</p>
              </div>
            </div>
            
            {/* KPI Pills - Right to Left: Critical, Degraded, Stable */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-red-50 border border-red-200 rounded-full">
                <span className="text-sm text-gray-600">Critical Journeys: </span>
                <span className="font-bold text-red-600">{criticalCount}</span>
              </div>
              <div className="px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
                <span className="text-sm text-gray-600">Degraded Journeys: </span>
                <span className="font-bold text-amber-600">{degradedCount}</span>
              </div>
              <div className="px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                <span className="text-sm text-gray-600">Stable Journeys: </span>
                <span className="font-bold text-green-600">{stableCount}</span>
              </div>
            </div>
          </div>

          {/* Filters */}
          <SimpleCard className="p-4">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">Last 7 days</span>
              </div>
              <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search journeys..."
                  className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder:text-gray-400"
                />
              </div>
            </div>
          </SimpleCard>
        </div>

        {/* Journey Groups in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group) => {
            const groupJourneys = journeys.filter((j) => j.group === group);
            return (
              <SimpleCard key={group} className="p-6">
                <h2 className="text-xl md:text-[22px] font-bold text-gray-900 mb-4">{group}</h2>
                <div className="space-y-3">
                  {groupJourneys.map((journey) => (
                    <div
                      key={journey.id}
                      onClick={() => navigate(`/journey/${journey.id}`)}
                      className="p-4 bg-gray-50 hover:bg-blue-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-gray-900">{journey.name}</h3>
                        <StatusChip status={journey.status} />
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-gray-500">Success%</p>
                          <p className="font-bold text-gray-900">{journey.success}%</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Abandoned%</p>
                          <p className="font-bold text-gray-900">{journey.abandoned}%</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Failure%</p>
                          <p className="font-bold text-gray-900">{journey.failure}%</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Volume</p>
                          <p className="font-bold text-gray-900">
                            {journey.volume.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SimpleCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
