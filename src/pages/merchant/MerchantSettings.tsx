import React from 'react';
import { Save, Store, Clock, Map, Phone } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import toast from 'react-hot-toast';

const MerchantSettings = () => {
  const handleSave = () => {
    toast.success('تم حفظ الإعدادات بنجاح');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">إعدادات المتجر</h1>
          <p className="text-gray-500 text-sm mt-1">إدارة الملف الشخصي للمتجر والتوافر.</p>
        </div>
        <Button onClick={handleSave} className="flex items-center gap-2">
          <Save size={20} />
          حفظ التغييرات
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card className="p-6 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Store size={20} />
              </div>
              <h2 className="text-lg font-bold text-gray-900">المعلومات الأساسية</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">اسم المتجر</label>
                <input type="text" defaultValue="Pizza House" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">الوصف</label>
                <textarea rows={3} defaultValue="Authentic Italian pizzas baked in a wood-fired oven." className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:border-primary/50 transition-colors resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1">الفئة</label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                    <option>مطاعم</option>
                    <option>بقالة</option>
                    <option>مخبز</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1">رقم هاتف التواصل</label>
                  <input type="tel" defaultValue="+212 5 22 33 44 55" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center">
                <Map size={20} />
              </div>
              <h2 className="text-lg font-bold text-gray-900">إعدادات التوصيل</h2>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-bold text-gray-900">نطاق التوصيل</label>
                  <span className="text-primary font-bold text-sm">5 كم</span>
                </div>
                <input type="range" min="1" max="15" defaultValue="5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1 كم</span>
                  <span>15 كم</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1">الحد الأدنى للطلب (درهم)</label>
                  <input type="number" defaultValue="50" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1">وقت التحضير المتوقع (دقيقة)</label>
                  <input type="number" defaultValue="20" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Clock size={20} />
              </div>
              <h2 className="text-lg font-bold text-gray-900">ساعات العمل</h2>
            </div>

            <div className="space-y-4">
              {['الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'].map((day, i) => (
                <div key={day} className="flex items-center justify-between">
                  <span className={`text-sm font-bold ${i === 6 ? 'text-gray-400' : 'text-gray-900'}`}>{day.slice(0, 3)}</span>
                  {i === 6 ? (
                    <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">مغلق</span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <input type="time" defaultValue="10:00" className="bg-gray-50 border border-gray-100 rounded flex-1 p-1 text-xs text-center focus:outline-none" />
                      <span className="text-gray-400 text-xs">-</span>
                      <input type="time" defaultValue="23:30" className="bg-gray-50 border border-gray-100 rounded flex-1 p-1 text-xs text-center focus:outline-none" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MerchantSettings;
