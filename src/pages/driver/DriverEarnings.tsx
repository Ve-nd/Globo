import React from 'react';
import { ChevronRight, Calendar, Banknote, MapPin } from 'lucide-react';
import { Card } from '../../components/ui/Card';

const DriverEarnings = () => {
  return (
    <div className="min-h-full bg-gray-50 flex flex-col">
      <div className="bg-gradient-primary pt-safe-top pb-16 px-4">
        <h1 className="text-xl font-bold text-white mt-2 mb-6">الأرباح</h1>
        <p className="text-white/80 text-sm font-bold uppercase tracking-wider mb-1">إجمالي اليوم</p>
        <h2 className="text-5xl font-extrabold text-white">450 <span className="text-2xl font-bold opacity-80">MAD</span></h2>
      </div>

      <div className="flex-1 px-4 -mt-8 space-y-4 pb-24">
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 text-center">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">التوصيل</p>
            <h3 className="text-2xl font-extrabold text-gray-900">12</h3>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">المسافة</p>
            <h3 className="text-2xl font-extrabold text-gray-900">45<span className="text-sm">كم</span></h3>
          </Card>
        </div>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">هذا الأسبوع</h3>
            <button className="text-primary text-sm font-bold flex items-center">
              12 - 18 أكتوبر <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="h-40 flex items-end justify-between gap-3 mb-2">
            {[30, 45, 60, 40, 80, 50, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className={`w-full rounded-md ${i === 6 ? 'bg-primary' : 'bg-orange-100'}`} style={{ height: `${h}%` }}></div>
                <span className={`text-xs ${i === 6 ? 'font-bold text-primary' : 'text-gray-400'}`}>
                  {['ا', 'ا', 'ث', 'ر', 'خ', 'ج', 'س'][i]}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <h3 className="font-bold text-gray-900 mt-6 mb-2 px-1">آخر المعاملات</h3>
        <Card className="overflow-hidden">
          {[
            { id: '1', store: 'Pizza House', time: '14:30', amount: 25, distance: '3.2 كم' },
            { id: '2', store: 'Burger Factory', time: '13:15', amount: 18, distance: '1.5 كم' },
            { id: '3', store: 'Pharmacie Centrale', time: '12:00', amount: 15, distance: '0.8 كم' },
            { id: '4', store: 'Sushi Time', time: '11:20', amount: 35, distance: '5.1 كم' },
          ].map((tx, i, arr) => (
            <div key={tx.id} className={`p-4 flex items-center justify-between ${i !== arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
                  <Banknote size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{tx.store}</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                    <span>{tx.time}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>{tx.distance}</span>
                  </div>
                </div>
              </div>
              <span className="font-bold text-green-600">+{tx.amount} MAD</span>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default DriverEarnings;