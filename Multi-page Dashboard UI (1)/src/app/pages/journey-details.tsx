import { useNavigate, useParams } from "react-router";
import { SimpleCard } from "../components/simple-card";
import { Calendar, ChevronRight, Search, ArrowLeft } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const dropOffData = [
  { page: "Landing", techFail: 6, policy: 9, abandoned: 15 },
  { page: "Details", techFail: 5, policy: 10, abandoned: 15 },
  { page: "OTP", techFail: 12, policy: 3, abandoned: 10 },
  { page: "Offer", techFail: 4, policy: 6, abandoned: 14 },
  { page: "Payment", techFail: 8, policy: 2, abandoned: 12 },
  { page: "Confirm", techFail: 2, policy: 1, abandoned: 6 },
];

const trendData = [
  { time: "10:00", failures: 12 },
  { time: "10:05", failures: 15 },
  { time: "10:10", failures: 18 },
  { time: "10:15", failures: 25 },
  { time: "10:20", failures: 32 },
  { time: "10:25", failures: 28 },
];

export default function JourneyDetails() {
  const navigate = useNavigate();
  const { journeyId } = useParams();

  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Header with Breadcrumb */}
        <SimpleCard className="p-4 md:p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <ArrowLeft 
                  className="w-4 h-4 cursor-pointer hover:text-blue-500" 
                  onClick={() => navigate("/tech-dashboard")}
                />
                <span
                  onClick={() => navigate("/tech-dashboard")}
                  className="cursor-pointer hover:text-blue-500 transition-colors"
                >
                  Tech Dashboard
                </span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-400">Journey</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-900 font-semibold">Gold Loan</span>
              </div>
              <h1 className="text-2xl md:text-[26px] font-bold text-gray-900">Gold Loan Journey</h1>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-sm text-gray-700 placeholder:text-gray-400 w-32"
              />
            </div>
          </div>
        </SimpleCard>

        {/* Filter Strip */}
        <SimpleCard className="p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Last 24 hours</span>
            </div>
            <input
              type="text"
              placeholder="Mobile input"
              className="px-4 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 placeholder:text-gray-400 border border-gray-200 outline-none focus:border-blue-400"
            />
            <select className="px-4 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 border border-gray-200 outline-none focus:border-blue-400">
              <option>All Journey IDs</option>
              <option>JID-12345</option>
              <option>JID-67890</option>
            </select>
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm text-white transition-all duration-200">
              Investigate
            </button>
          </div>
        </SimpleCard>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Customer Journey Investigation */}
            <SimpleCard className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <h2 className="text-xl md:text-[22px] font-bold text-gray-900">
                  Customer Journey Investigation
                </h2>
                <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm border border-red-200 w-fit">
                  Journey Failed
                </span>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Started</p>
                    <p className="font-bold text-gray-900">10:20:12</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Failed</p>
                    <p className="font-bold text-gray-900">10:25:41</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Duration</p>
                    <p className="font-bold text-gray-900">5m 29s</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 mb-1">Drop-off Point</p>
                    <p className="font-bold text-gray-900">Payment</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 mb-1">Reason</p>
                    <p className="font-bold text-gray-900">API Timeout</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 mb-1">Impacted API</p>
                    <p className="font-bold text-gray-900">/payment/authorize</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Error</p>
                    <p className="font-mono text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg border border-red-200">
                      PGW_504_TIMEOUT
                    </p>
                  </div>
                </div>
              </div>
            </SimpleCard>

            {/* API Reliability Overview */}
            <SimpleCard className="p-6">
              <h2 className="text-xl md:text-[22px] font-bold text-gray-900 mb-6">
                API Reliability Overview
              </h2>
              <div className="space-y-4">
                {[
                  { name: "Validate Customer", success: 98, failure: 2 },
                  { name: "Eligibility Check", success: 92, failure: 8 },
                  { name: "Payment Gateway", success: 90, failure: 10 },
                ].map((api) => (
                  <div key={api.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-900 font-medium">{api.name}</span>
                      <span className="text-gray-600">{api.success}% / {api.failure}%</span>
                    </div>
                    <div className="flex h-8 rounded-lg overflow-hidden border border-gray-200">
                      <div
                        className="bg-green-100 border-r border-green-200 flex items-center justify-center text-xs font-semibold text-green-700"
                        style={{ width: `${api.success}%` }}
                      >
                        {api.success}%
                      </div>
                      <div
                        className="bg-red-100 flex items-center justify-center text-xs font-semibold text-red-700"
                        style={{ width: `${api.failure}%` }}
                      >
                        {api.failure}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SimpleCard>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Volume Summary KPIs */}
            <SimpleCard className="p-6">
              <h2 className="text-xl md:text-[22px] font-bold text-gray-900 mb-6">Volume Summary</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Total</p>
                  <p className="text-[28px] md:text-[32px] font-extrabold text-gray-900">1,500</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-600 mb-1">Successful</p>
                  <p className="text-[28px] md:text-[32px] font-extrabold text-green-600">1,100</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm text-red-600 mb-1">Failed</p>
                  <p className="text-[28px] md:text-[32px] font-extrabold text-red-600">250</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-600 mb-1">Abandoned</p>
                  <p className="text-[28px] md:text-[32px] font-extrabold text-amber-600">150</p>
                </div>
              </div>
            </SimpleCard>

            {/* Drop-off Drivers Table */}
            <SimpleCard className="p-6">
              <h2 className="text-xl md:text-[22px] font-bold text-gray-900 mb-4">Drop-off Drivers</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 text-sm text-gray-500">Page</th>
                      <th className="text-right py-3 text-sm text-gray-500">TechFail%</th>
                      <th className="text-right py-3 text-sm text-gray-500">Policy%</th>
                      <th className="text-right py-3 text-sm text-gray-500">Abandoned%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dropOffData.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-100">
                        <td className="py-3 text-sm text-gray-900">{row.page}</td>
                        <td className="py-3 text-sm text-right text-gray-900">{row.techFail}</td>
                        <td className="py-3 text-sm text-right text-gray-900">{row.policy}</td>
                        <td className="py-3 text-sm text-right text-gray-900">{row.abandoned}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>

            {/* Failure Trend Chart */}
            <SimpleCard className="p-6">
              <h2 className="text-xl md:text-[22px] font-bold text-gray-900 mb-4">Failure Trend</h2>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="colorFailures" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="time" stroke="#6b7280" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: '12px'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="failures"
                    stroke="#ef4444"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorFailures)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </SimpleCard>

            {/* User Flow Funnel */}
            <SimpleCard className="p-6">
              <h2 className="text-xl md:text-[22px] font-bold text-gray-900 mb-4">User Flow Funnel</h2>
              <div className="space-y-2">
                {[
                  { stage: "Landing", percent: 100, count: 1500 },
                  { stage: "Details", percent: 85, count: 1275 },
                  { stage: "OTP", percent: 70, count: 1050 },
                  { stage: "Offer", percent: 58, count: 870 },
                  { stage: "Payment", percent: 44, count: 660 },
                  { stage: "Confirm", percent: 36, count: 540 },
                ].map((stage, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-900">{stage.stage}</span>
                      <span className="text-gray-600">
                        {stage.count} ({stage.percent}%)
                      </span>
                    </div>
                    <div
                      className="h-6 bg-blue-100 border border-blue-200 rounded-lg transition-all duration-300"
                      style={{ width: `${stage.percent}%` }}
                    />
                  </div>
                ))}
              </div>
            </SimpleCard>
          </div>
        </div>
      </div>
    </div>
  );
}
