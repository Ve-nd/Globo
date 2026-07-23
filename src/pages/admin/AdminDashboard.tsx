import React from 'react';
import { ShoppingBag, Users, Store, TrendingUp, AlertCircle, MapPin } from 'lucide-react';
import { Card } from '../../components/ui/Card';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Orders Today', value: '1,245', icon: ShoppingBag, color: 'blue' },
    { label: 'Total Revenue', value: '142,500 MAD', icon: TrendingUp, color: 'green' },
    { label: 'Active Drivers', value: '84', icon: Users, color: 'orange' },
    { label: 'Active Stores', value: '112', icon: Store, color: 'purple' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Platform Overview</h1>
        <p className="text-gray-500 text-sm mt-1">Real-time metrics for Globo platform across all cities.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          const colors = {
            blue: 'bg-blue-50 text-blue-600',
            green: 'bg-green-50 text-green-600',
            orange: 'bg-orange-50 text-orange-600',
            purple: 'bg-purple-50 text-purple-600',
          }[stat.color];

          return (
            <Card key={i} className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors}`}>
                  <Icon size={20} />
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-500 text-xs uppercase tracking-wider font-bold">{stat.label}</p>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">Weekly Orders Volume</h3>
            <select className="bg-gray-50 border-none text-sm font-medium rounded-lg p-2 focus:ring-0">
              <option>This Week</option>
              <option>Last Week</option>
            </select>
          </div>
          
          <div className="h-64 relative flex items-end">
            <svg className="w-full h-full" preserveAspectRatio="none">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map(i => (
                <line key={i} x1="0" y1={i * 25 + "%"} x2="100%" y2={i * 25 + "%"} stroke="#F3F4F6" strokeWidth="1" />
              ))}
              
              {/* Area path */}
              <defs>
                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#FF8A3D" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#FF8A3D" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path 
                d="M 0 100 L 16.6% 80 L 33.3% 120 L 50% 60 L 66.6% 90 L 83.3% 40 L 100% 70 L 100% 256 L 0 256 Z" 
                fill="url(#gradient)" 
              />
              <path 
                d="M 0 100 L 16.6% 80 L 33.3% 120 L 50% 60 L 66.6% 90 L 83.3% 40 L 100% 70" 
                fill="none" 
                stroke="#FF8A3D" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
            <div className="absolute inset-0 flex justify-between items-end px-2 pb-2 opacity-50 pointer-events-none">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <span key={day} className="text-xs text-gray-500 font-medium translate-y-6">{day}</span>
              ))}
            </div>
          </div>
          <div className="h-6" /> {/* Spacer for labels */}
        </Card>

        {/* Coverage Map Mini */}
        <Card className="p-6 flex flex-col">
          <h3 className="font-bold text-gray-900 mb-6">Live Coverage Map</h3>
          <div className="flex-1 bg-[#E8F0F2] rounded-xl relative overflow-hidden flex items-center justify-center min-h-[250px]">
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
            
            {/* Mock map circles for coverage areas */}
            <div className="absolute w-40 h-40 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-24 h-24 bg-primary/30 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(255,138,61,1)]" />
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow-sm">
              <p className="text-xs font-bold text-gray-900 flex items-center gap-1">
                <MapPin size={12} className="text-primary" /> Casablanca
              </p>
              <p className="text-[10px] text-gray-500">15 km radius active</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Alerts */}
      <Card className="p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <AlertCircle size={20} className="text-gray-400" /> System Alerts
        </h3>
        <div className="space-y-3">
          {[
            { msg: 'High order volume in Maarif area. Driver shortage detected.', time: '10 min ago', type: 'warning' },
            { msg: 'New store "Burger Factory" completed onboarding.', time: '1 hour ago', type: 'info' },
            { msg: 'Payment gateway sync successful.', time: '2 hours ago', type: 'success' },
          ].map((alert, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
              <div className={`w-2 h-2 rounded-full mt-1.5 ${
                alert.type === 'warning' ? 'bg-yellow-500' : 
                alert.type === 'info' ? 'bg-blue-500' : 'bg-green-500'
              }`} />
              <div>
                <p className="text-sm font-medium text-gray-900">{alert.msg}</p>
                <p className="text-xs text-gray-500 mt-0.5">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard;
