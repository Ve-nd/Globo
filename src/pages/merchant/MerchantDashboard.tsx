import React, { useState } from 'react';
import { TrendingUp, ShoppingBag, Clock, Utensils, Star, Bell } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { ConfirmDialog } from '../../components/ui/ConfirmDialog';

const MerchantDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showStatusDialog, setShowStatusDialog] = useState(false);

  const stats = [
    { label: "الطلبات اليوم", value: '47', icon: ShoppingBag, color: 'blue' },
    { label: 'الأرباح', value: '2,340 MAD', icon: TrendingUp, color: 'green' },
    { label: 'معلق', value: '12', icon: Bell, color: 'orange' },
    { label: 'متوسط وقت التحضير', value: '18 min', icon: Clock, color: 'purple' },
  ];

  const popularItems = [
    { name: 'بيتزا مارجريتا', sales: 124, revenue: '8,060 MAD' },
    { name: 'بيتزا بيبروني', sales: 98, revenue: '7,350 MAD' },
    { name: 'كواترو فورماجي', sales: 85, revenue: '7,225 MAD' },
    { name: 'سلطة سيزر', sales: 64, revenue: '2,880 MAD' },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">نظرة عامة على المتجر</h1>
          <p className="text-gray-500 text-sm mt-1">إليك ما يحدث في بيتزا هاوس اليوم.</p>
        </div>
        
        <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full shadow-sm border border-gray-100">
          <button 
            onClick={() => setShowStatusDialog(true)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isOpen ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isOpen ? 'translate-x-6' : 'translate-x-1'
            }`} />
          </button>
          <span className={`text-sm font-bold ${isOpen ? 'text-green-600' : 'text-gray-500'}`}>
            {isOpen ? 'استقبال الطلبات' : 'المتجر مغلق'}
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${colors}`}>
                <Icon size={20} />
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">{stat.label}</p>
              <h3 className="text-2xl font-extrabold text-gray-900">{stat.value}</h3>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Area */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">الأرباح (آخر 7 أيام)</h3>
            <select className="bg-gray-50 border-none text-sm font-medium rounded-lg p-2 focus:ring-0">
              <option>هذا الأسبوع</option>
              <option>الأسبوع الماضي</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {/* Simple CSS Bar Chart */}
            {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full bg-orange-50 rounded-t-lg relative group-hover:bg-orange-100 transition-colors" style={{ height: `${h}%` }}>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {h * 40} MAD
                  </div>
                </div>
                <span className="text-xs text-gray-500">
                  {['الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'][i]}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Popular Items */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">الأصناف الشائعة</h3>
            <Utensils size={20} className="text-gray-400" />
          </div>
          <div className="space-y-4">
            {popularItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-gray-50 font-bold text-gray-400 flex items-center justify-center flex-shrink-0">
                  #{i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 text-sm truncate">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.sales} طلب</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-primary">{item.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <ConfirmDialog 
        isOpen={showStatusDialog}
        onClose={() => setShowStatusDialog(false)}
        title={isOpen ? "إغلاق المتجر؟" : "فتح المتجر؟"}
        message={isOpen 
          ? "ستتوقف عن تلقي طلبات جديدة. يجب تنفيذ الطلبات النشطة الحالية." 
          : "سوف تبدأ في تلقي طلبات جديدة على الفور."}
        confirmText={isOpen ? "نعم، إغلاق المتجر" : "نعم، فتح المتجر"}
        isDanger={isOpen}
        onConfirm={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default MerchantDashboard;
