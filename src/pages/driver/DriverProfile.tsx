import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, ShieldCheck, HelpCircle, LogOut, Star, TrendingUp, ChevronRight } from 'lucide-react';
import { Card } from '../../components/ui/Card';

const DriverProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-gray-50 flex flex-col">
      <div className="bg-gray-900 pt-safe-top pb-16 px-4">
        <h1 className="text-xl font-bold text-white mt-2 mb-6">Profile</h1>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-white border-4 border-gray-800 shadow-soft overflow-hidden">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&fit=crop" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="text-white">
            <h2 className="text-2xl font-bold">Youssef B.</h2>
            <div className="flex items-center gap-2 text-yellow-400 font-bold mt-1">
              <Star size={16} className="fill-yellow-400" /> 4.9 <span className="text-gray-400 text-sm font-medium">(124 trips)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 -mt-8 space-y-4 pb-24">
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase">Status</p>
              <p className="font-bold text-gray-900">Verified</p>
            </div>
          </Card>
          <Card className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase">Level</p>
              <p className="font-bold text-gray-900">Pro</p>
            </div>
          </Card>
        </div>

        <Card className="p-4 space-y-4 mt-2">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div>
              <h3 className="font-bold text-gray-900">Vehicle</h3>
              <p className="text-sm text-gray-500">Honda SH125 (1234-A-56)</p>
            </div>
            <button className="text-primary text-sm font-bold">Edit</button>
          </div>
          
          <button className="w-full flex items-center justify-between text-left group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center">
                <Settings size={20} />
              </div>
              <h3 className="font-bold text-gray-900">Account Settings</h3>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
          </button>

          <div className="h-px bg-gray-100" />

          <button className="w-full flex items-center justify-between text-left group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center">
                <HelpCircle size={20} />
              </div>
              <h3 className="font-bold text-gray-900">Help & Support</h3>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
          </button>
        </Card>

        <button 
          onClick={() => navigate('/')}
          className="w-full mt-6 bg-red-50 text-red-600 font-bold p-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-100 transition-colors"
        >
          <LogOut size={20} />
          Exit to Demo Menu
        </button>
      </div>
    </div>
  );
};

export default DriverProfile;
