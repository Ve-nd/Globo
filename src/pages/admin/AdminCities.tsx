import React from 'react';
import { MapPin, Settings2, Plus, Trash2 } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const AdminCities = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">إدارة المدن</h1>
          <p className="text-gray-500 text-sm mt-1">إدارة المدن التشغيلية ومناطق التوصيل والإعدادات الخاصة بالمدينة.</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus size={20} />
          إضافة مدينة جديدة
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
          {/* City List */}
          <Card className="border-2 border-primary/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
              نشط
            </div>
            <div className="p-5 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 leading-tight mb-1">الدار البيضاء</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="green">تشغيلية</Badge>
                  <span className="text-xs text-gray-500 font-bold">• 112 متجر</span>
                </div>
                
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">عمولة أساسية</span>
                    <span className="font-bold text-gray-900">15%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">نطاق التوصيل</span>
                    <span className="font-bold text-gray-900">15 كم</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">رسوم التوصيل الأساسية</span>
                    <span className="font-bold text-gray-900">10 درهم</span>
                  </div>
                </div>

                <div className="mt-6 flex gap-2">
                  <Button variant="secondary" className="flex-1 py-2 text-sm">تعديل الإعدادات</Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-5 flex items-start gap-4 opacity-70 grayscale-[30%]">
            <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-400 flex items-center justify-center flex-shrink-0">
              <MapPin size={24} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 leading-tight mb-1">الرباط</h3>
                  <Badge variant="gray">قريباً</Badge>
                </div>
                <button className="text-red-500 p-2 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">الإعداد غير مكتمل. مفقود مناطق التوصيل وتهيئة التجار.</p>
              <Button variant="secondary" className="w-full mt-4 py-2 text-sm">استكمال الإعداد</Button>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2">
          {/* Selected City Details / Map */}
          <Card className="h-full flex flex-col min-h-[500px]">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white z-10">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <MapPin size={20} className="text-primary" />
                خريطة تغطية الدار البيضاء
              </h3>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" className="flex items-center gap-2">
                  <Settings2 size={16} /> أدوات الخريطة
                </Button>
              </div>
            </div>

            <div className="flex-1 bg-[#E8F0F2] relative overflow-hidden">
              <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              {/* Coverage Area 1 (Maarif/Anfa) */}
              <div className="absolute left-[30%] top-[40%] w-[300px] h-[300px] bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/50 -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span className="absolute top-1/2 mt-2 text-primary font-bold text-sm bg-white/80 px-2 rounded">المنطقة أ</span>
              </div>

              {/* Coverage Area 2 (Ain Diab) */}
              <div className="absolute left-[60%] top-[30%] w-[200px] h-[200px] bg-blue-500/20 rounded-full flex items-center justify-center border-2 border-blue-500/50 -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="absolute top-1/2 mt-2 text-blue-600 font-bold text-sm bg-white/80 px-2 rounded">المنطقة ب</span>
              </div>

              {/* Coverage Area 3 (Sidi Maarouf) */}
              <div className="absolute left-[45%] top-[70%] w-[250px] h-[250px] bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500/50 -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="absolute top-1/2 mt-2 text-green-600 font-bold text-sm bg-white/80 px-2 rounded">المنطقة ج</span>
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="flex gap-6">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">إجمالي مساحة التغطية</p>
                  <p className="font-bold text-gray-900">~125 كم مربع</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">تقدير السكان المشمولين</p>
                  <p className="font-bold text-gray-900">2.4 مليون</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminCities;
