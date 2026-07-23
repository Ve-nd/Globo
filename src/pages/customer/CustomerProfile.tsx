import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, MapPin, CreditCard, Bell, HelpCircle, ChevronRight, LogOut, Star } from 'lucide-react';
import { Card } from '../../components/ui/Card';

const CustomerProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-gray-50 flex flex-col">
      <div className="bg-primary pt-safe-top pb-16 px-4">
        <h1 className="text-xl font-bold text-white mt-2 mb-6">الملف الشخصي</h1>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-soft overflow-hidden">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&fit=crop" alt="الملف الشخصي" className="w-full h-full object-cover" />
          </div>
          <div className="text-white">
            <h2 className="text-2xl font-bold">Amine L.</h2>
            <p className="text-white/80 text-sm font-medium">+212 6 00 11 22 33</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 -mt-8 space-y-4 pb-6">
        <Card className="p-4 space-y-4">
          <button className="w-full flex items-center justify-between text-left group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">العناوين المحفوظة</h3>
                <p className="text-xs text-gray-500">المنزل، العمل</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
          </button>

          <div className="h-px bg-gray-100" />

          <button className="w-full flex items-center justify-between text-left group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                <CreditCard size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">طرق الدفع</h3>
                <p className="text-xs text-gray-500">الدفع عند الاستلام</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
          </button>
          
          <div className="h-px bg-gray-100" />

          <button className="w-full flex items-center justify-between text-left group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center">
                <Star size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">المتاجر المفضلة</h3>
                <p className="text-xs text-gray-500">3 متاجر محفوظة</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
          </button>
        </Card>

        <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider px-2 pt-2">الإعدادات</h3>
        
        <Card className="p-4 space-y-4">
          <button className="w-full flex items-center justify-between text-left group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center">
                <Bell size={20} />
              </div>
              <h3 className="font-bold text-gray-900">الإشعارات</h3>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
          </button>

          <div className="h-px bg-gray-100" />

          <button className="w-full flex items-center justify-between text-left group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center">
                <Settings size={20} />
              </div>
              <h3 className="font-bold text-gray-900">إعدادات التطبيق</h3>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
          </button>

          <div className="h-px bg-gray-100" />

          <button className="w-full flex items-center justify-between text-left group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center">
                <HelpCircle size={20} />
              </div>
              <h3 className="font-bold text-gray-900">المساعدة والدعم</h3>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
          </button>
        </Card>

        <button 
          onClick={() => navigate('/')}
          className="w-full mt-6 bg-red-50 text-red-600 font-bold p-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-100 transition-colors"
        >
          <LogOut size={20} />
          الخروج إلى القائمة التجريبية
        </button>
      </div>
    </div>
  );
};

export default CustomerProfile;
