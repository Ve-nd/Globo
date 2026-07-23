  1: import React from 'react';
  2: import { useNavigate } from 'react-router-dom';
  3: import { Settings, MapPin, CreditCard, Bell, HelpCircle, ChevronRight, LogOut, Star } from 'lucide-react';
  4: import { Card } from '../../components/ui/Card';
  5: 
  6: const CustomerProfile = () => {
  7:   const navigate = useNavigate();
  8: 
  9:   return (
 10:     <div className="min-h-full bg-gray-50 flex flex-col">
 11:       <div className="bg-primary pt-safe-top pb-16 px-4">
 12:         <h1 className="text-xl font-bold text-white mt-2 mb-6">الملف الشخصي</h1>
 13:         <div className="flex items-center gap-4">
 14:           <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-soft overflow-hidden">
 15:             <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&fit=crop" alt="الملف الشخصي" className="w-full h-full object-cover" />
 16:           </div>
 17:           <div className="text-white">
 18:             <h2 className="text-2xl font-bold">أمين ل.</h2>
 19:             <p className="text-white/80 text-sm font-medium">+212 6 00 11 22 33</p>
 20:           </div>
 21:         </div>
 22:       </div>
 23: 
 24:       <div className="flex-1 px-4 -mt-8 space-y-4 pb-6">
 25:         <Card className="p-4 space-y-4">
 26:           <button className="w-full flex items-center justify-between text-left group">
 27:             <div className="flex items-center gap-3">
 28:               <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center">
 29:                 <MapPin size={20} />
 30:               </div>
 31:               <div>
 32:                 <h3 className="font-bold text-gray-900">العناوين المحفوظة</h3>
 33:                 <p className="text-xs text-gray-500">المنزل، العمل</p>
 34:               </div>
 35:             </div>
 36:             <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
 37:           </button>
 38: 
 39:           <div className="h-px bg-gray-100" />
 40: 
 41:           <button className="w-full flex items-center justify-between text-left group">
 42:             <div className="flex items-center gap-3">
 43:               <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
 44:                 <CreditCard size={20} />
 45:               </div>
 46:               <div>
 47:                 <h3 className="font-bold text-gray-900">طرق الدفع</h3>
 48:                 <p className="text-xs text-gray-500">الدفع عند التوصيل</p>
 49:               </div>
 50:             </div>
 51:             <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
 52:           </button>
 53:           
 54:           <div className="h-px bg-gray-100" />
 55: 
 56:           <button className="w-full flex items-center justify-between text-left group">
 57:             <div className="flex items-center gap-3">
 58:               <div className="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center">
 59:                 <Star size={20} />
 60:               </div>
 61:               <div>
 62:                 <h3 className="font-bold text-gray-900">المتاجر المفضلة</h3>
 63:                 <p className="text-xs text-gray-500">3 متاجر محفوظة</p>
 64:               </div>
 65:             </div>
 66:             <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
 67:           </button>
 68:         </Card>
 69: 
 70:         <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider px-2 pt-2">الإعدادات</h3>
 71:         
 72:         <Card className="p-4 space-y-4">
 73:           <button className="w-full flex items-center justify-between text-left group">
 74:             <div className="flex items-center gap-3">
 75:               <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center">
 76:                 <Bell size={20} />
 77:               </div>
 78:               <h3 className="font-bold text-gray-900">التنبيهات</h3>
 79:             </div>
 80:             <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
 81:           </button>
 82: 
 83:           <div className="h-px bg-gray-100" />
 84: 
 85:           <button className="w-full flex items-center justify-between text-left group">
 86:             <div className="flex items-center gap-3">
 87:               <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center">
 88:                 <Settings size={20} />
 89:               </div>
 90:               <h3 className="font-bold text-gray-900">إعدادات التطبيق</h3>
 91:             </div>
 92:             <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
 93:           </button>
 94: 
 95:           <div className="h-px bg-gray-100" />
 96: 
 97:           <button className="w-full flex items-center justify-between text-left group">
 98:             <div className="flex items-center gap-3">
 99:               <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center">
100:                 <HelpCircle size={20} />
101:               </div>
102:               <h3 className="font-bold text-gray-900">المساعدة والدعم</h3>
103:             </div>
104:             <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
105:           </button>
106:         </Card>
107: 
108:         <button 
109:           onClick={() => navigate('/')}
110:           className="w-full mt-6 bg-red-50 text-red-600 font-bold p-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-100 transition-colors"
111:         >
112:           <LogOut size={20} />
113:           الخروج إلى القائمة التجريبية
114:         </button>
115:       </div>
116:     </div>
117:   );
118: };
119: 
120: export default CustomerProfile;