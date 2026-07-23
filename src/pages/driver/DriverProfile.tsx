 1: import React from 'react';
 2: import { useNavigate } from 'react-router-dom';
 3: import { Settings, ShieldCheck, HelpCircle, LogOut, Star, TrendingUp, ChevronRight } from 'lucide-react';
 4: import { Card } from '../../components/ui/Card';
 5: 
 6: const DriverProfile = () => {
 7:   const navigate = useNavigate();
 8: 
 9:   return (
10:     <div className="min-h-full bg-gray-50 flex flex-col">
11:       <div className="bg-gray-900 pt-safe-top pb-16 px-4">
12:         <h1 className="text-xl font-bold text-white mt-2 mb-6">الملف الشخصي</h1>
13:         <div className="flex items-center gap-4">
14:           <div className="w-20 h-20 rounded-full bg-white border-4 border-gray-800 shadow-soft overflow-hidden">
15:             <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&fit=crop" alt="الملف الشخصي" className="w-full h-full object-cover" />
16:           </div>
17:           <div className="text-white">
18:             <h2 className="text-2xl font-bold">يوسف ب.</h2>
19:             <div className="flex items-center gap-2 text-yellow-400 font-bold mt-1">
20:               <Star size={16} className="fill-yellow-400" /> 4.9 <span className="text-gray-400 text-sm font-medium">(124 رحلة)</span>
21:             </div>
22:           </div>
23:         </div>
24:       </div>
25: 
26:       <div className="flex-1 px-4 -mt-8 space-y-4 pb-24">
27:         <div className="grid grid-cols-2 gap-4">
28:           <Card className="p-4 flex items-center gap-3">
29:             <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
30:               <ShieldCheck size={20} />
31:             </div>
32:             <div>
33:               <p className="text-xs text-gray-500 font-bold uppercase">الحالة</p>
34:               <p className="font-bold text-gray-900">مُوثّق</p>
35:             </div>
36:           </Card>
37:           <Card className="p-4 flex items-center gap-3">
38:             <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
39:               <TrendingUp size={20} />
40:             </div>
41:             <div>
42:               <p className="text-xs text-gray-500 font-bold uppercase">المستوى</p>
43:               <p className="font-bold text-gray-900">محترف</p>
44:             </div>
45:           </Card>
46:         </div>
47: 
48:         <Card className="p-4 space-y-4 mt-2">
49:           <div className="flex items-center justify-between pb-4 border-b border-gray-100">
50:             <div>
51:               <h3 className="font-bold text-gray-900">المركبة</h3>
52:               <p className="text-sm text-gray-500">Honda SH125 (1234-A-56)</p>
53:             </div>
54:             <button className="text-primary text-sm font-bold">تعديل</button>
55:           </div>
56:           
57:           <button className="w-full flex items-center justify-between text-left group">
58:             <div className="flex items-center gap-3">
59:               <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center">
60:                 <Settings size={20} />
61:               </div>
62:               <h3 className="font-bold text-gray-900">إعدادات الحساب</h3>
63:             </div>
64:             <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
65:           </button>
66: 
67:           <div className="h-px bg-gray-100" />
68: 
69:           <button className="w-full flex items-center justify-between text-left group">
70:             <div className="flex items-center gap-3">
71:               <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center">
72:                 <HelpCircle size={20} />
73:               </div>
74:               <h3 className="font-bold text-gray-900">المساعدة والدعم</h3>
75:             </div>
76:             <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
77:           </button>
78:         </Card>
79: 
80:         <button 
81:           onClick={() => navigate('/')}
82:           className="w-full mt-6 bg-red-50 text-red-600 font-bold p-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-100 transition-colors"
83:         >
84:           <LogOut size={20} />
85:           الخروج إلى القائمة التجريبية
86:         </button>
87:       </div>
88:     </div>
89:   );
90: };
91: 
92: export default DriverProfile;