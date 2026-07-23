  1: import React from 'react';
  2: import { Save, Store, Clock, Map, Phone } from 'lucide-react';
  3: import { Card } from '../../components/ui/Card';
  4: import { Button } from '../../components/ui/Button';
  5: import toast from 'react-hot-toast';
  6: 
  7: const MerchantSettings = () => {
  8:   const handleSave = () => {
  9:     toast.success('تم الحفظ بنجاح');
 10:   };
 11: 
 12:   return (
 13:     <div className="max-w-4xl mx-auto space-y-6">
 14:       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
 15:         <div>
 16:           <h1 className="text-2xl font-bold text-gray-900">إعدادات المتجر</h1>
 17:           <p className="text-gray-500 text-sm mt-1">إدارة الملف الشخصي للمتجر وحالة التوفر.</p>
 18:         </div>
 19:         <Button onClick={handleSave} className="flex items-center gap-2">
 20:           <Save size={20} />
 21:           حفظ التغييرات
 22:         </Button>
 23:       </div>
 24: 
 25:       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 26:         <div className="md:col-span-2 space-y-6">
 27:           <Card className="p-6 space-y-6">
 28:             <div className="flex items-center gap-3 mb-4">
 29:               <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
 30:                 <Store size={20} />
 31:               </div>
 32:               <h2 className="text-lg font-bold text-gray-900">المعلومات الأساسية</h2>
 33:             </div>
 34: 
 35:             <div className="space-y-4">
 36:               <div>
 37:                 <label className="block text-sm font-bold text-gray-900 mb-1">اسم المتجر</label>
 38:                 <input type="text" defaultValue="Pizza House" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:border-primary/50 transition-colors" />
 39:               </div>
 40:               <div>
 41:                 <label className="block text-sm font-bold text-gray-900 mb-1">الوصف</label>
 42:                 <textarea rows={3} defaultValue="Authentic Italian pizzas baked in a wood-fired oven." className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:border-primary/50 transition-colors resize-none" />
 43:               </div>
 44:               <div className="grid grid-cols-2 gap-4">
 45:                 <div>
 46:                   <label className="block text-sm font-bold text-gray-900 mb-1">الفئة</label>
 47:                   <select className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:border-primary/50 transition-colors appearance-none">
 48:                     <option>مطاعم</option>
 49:                     <option>بقالة</option>
 50:                     <option>مخبز</option>
 51:                   </select>
 52:                 </div>
 53:                 <div>
 54:                   <label className="block text-sm font-bold text-gray-900 mb-1">هاتف التواصل</label>
 55:                   <input type="tel" defaultValue="+212 5 22 33 44 55" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:border-primary/50 transition-colors" />
 56:                 </div>
 57:               </div>
 58:             </div>
 59:           </Card>
 60: 
 61:           <Card className="p-6 space-y-6">
 62:             <div className="flex items-center gap-3 mb-4">
 63:               <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center">
 64:                 <Map size={20} />
 65:               </div>
 66:               <h2 className="text-lg font-bold text-gray-900">إعدادات التوصيل</h2>
 67:             </div>
 68: 
 69:             <div className="space-y-4">
 70:               <div>
 71:                 <div className="flex justify-between items-center mb-1">
 72:                   <label className="block text-sm font-bold text-gray-900">نطاق التوصيل</label>
 73:                   <span className="text-primary font-bold text-sm">5 كم</span>
 74:                 </div>
 75:                 <input type="range" min="1" max="15" defaultValue="5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
 76:                 <div className="flex justify-between text-xs text-gray-400 mt-1">
 77:                   <span>1 كم</span>
 78:                   <span>15 كم</span>
 79:                 </div>
 80:               </div>
 81:               
 82:               <div className="grid grid-cols-2 gap-4 pt-4">
 83:                 <div>
 84:                   <label className="block text-sm font-bold text-gray-900 mb-1">الحد الأدنى للطلب (درهم)</label>
 85:                   <input type="number" defaultValue="50" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:border-primary/50 transition-colors" />
 86:                 </div>
 87:                 <div>
 88:                   <label className="block text-sm font-bold text-gray-900 mb-1">وقت التحضير التقديري (دقيقة)</label>
 89:                   <input type="number" defaultValue="20" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:border-primary/50 transition-colors" />
 90:                 </div>
 91:               </div>
 92:             </div>
 93:           </Card>
 94:         </div>
 95: 
 96:         <div className="space-y-6">
 97:           <Card className="p-6">
 98:             <div className="flex items-center gap-3 mb-6">
 99:               <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
100:                 <Clock size={20} />
101:               </div>
102:               <h2 className="text-lg font-bold text-gray-900">ساعات العمل</h2>
103:             </div>
104: 
105:             <div className="space-y-4">
106:               {['الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'].map((day, i) => (
107:                 <div key={day} className="flex items-center justify-between">
108:                   <span className={`text-sm font-bold ${i === 6 ? 'text-gray-400' : 'text-gray-900'}`}>{day.slice(0, 3)}</span>
109:                   {i === 6 ? (
110:                     <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">مغلق</span>
111:                   ) : (
112:                     <div className="flex items-center gap-2">
113:                       <input type="time" defaultValue="10:00" className="bg-gray-50 border border-gray-100 rounded flex-1 p-1 text-xs text-center focus:outline-none" />
114:                       <span className="text-gray-400 text-xs">-</span>
115:                       <input type="time" defaultValue="23:30" className="bg-gray-50 border border-gray-100 rounded flex-1 p-1 text-xs text-center focus:outline-none" />
116:                     </div>
117:                   )}
118:                 </div>
119:               ))}
120:             </div>
121:           </Card>
122:         </div>
123:       </div>
124:     </div>
125:   );
126: };
127: 
128: export default MerchantSettings;