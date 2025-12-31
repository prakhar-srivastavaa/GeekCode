import ProblemsTable from "@/Components/ProblemsTable/ProblemsTable";
import Topbar from "@/Components/Topbar/Topbar";
import { useState, useEffect } from "react";
import { FaCode, FaFire, FaTrophy, FaRocket } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

export default function Home() {
  const [stats, setStats] = useState({ solved: 0, streak: 0 });
  
  useEffect(() => {
    // Load stats from localStorage
    const savedStats = localStorage.getItem('geekcode_stats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  return (
    <main className="bg-dark-layer-2 min-h-screen">
      <Topbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
            <div className="bg-dark-layer-1 rounded-xl p-4 border border-dark-fill-3 hover:border-green-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <FaCode className="text-green-400 text-lg" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Problems</p>
                  <p className="text-white font-bold text-sm">11+ Problems</p>
                  <p className="text-gray-500 text-[10px]">(More Coming Soon)</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-layer-1 rounded-xl p-4 border border-dark-fill-3 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors">
                  <FaFire className="text-orange-400 text-lg" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Streak</p>
                  <p className="text-white font-bold text-lg">{stats.streak} days</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-layer-1 rounded-xl p-4 border border-dark-fill-3 hover:border-yellow-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-500/20 rounded-lg group-hover:bg-yellow-500/30 transition-colors">
                  <FaTrophy className="text-yellow-400 text-lg" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Solved</p>
                  <p className="text-white font-bold text-lg">{stats.solved}</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-layer-1 rounded-xl p-4 border border-dark-fill-3 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <BsLightningChargeFill className="text-purple-400 text-lg" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Rank</p>
                  <p className="text-white font-bold text-lg">Beginner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Challenge Yourself <span className="text-green-400">🚀</span>
            </h1>
            <p className="text-gray-400 text-sm">Master coding one problem at a time</p>
          </div>
        </div>
      </div>
      
      {/* Problems Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-dark-layer-1 rounded-xl overflow-hidden border border-dark-fill-3">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-400">
              <thead className="text-xs uppercase bg-dark-layer-2 text-gray-400 border-b border-dark-fill-3">
                <tr>
                  <th scope="col" className="px-4 md:px-6 py-4 font-medium">
                    Status
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-4 font-medium">
                    Title
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-4 font-medium hidden sm:table-cell">
                    Difficulty
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-4 font-medium hidden md:table-cell">
                    Category
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-4 font-medium">
                    Solution
                  </th>
                </tr>
              </thead>
              <ProblemsTable />
            </table>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-dark-fill-3 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">Built with ❤️ for coders | GeekCode © 2025</p>
        </div>
      </footer>
    </main>
  );
}
