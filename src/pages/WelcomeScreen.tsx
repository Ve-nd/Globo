import React from 'react';
  2: import { useNavigate } from 'react-router-dom';
  3: import { motion } from 'framer-motion';
  4: import { Store, User, Bike, ShieldCheck, ArrowRight } from 'lucide-react';
  5: import { Card } from '../components/ui/Card';
  6: 
  7: const WelcomeScreen = () => {
  8:   const navigate = useNavigate();
  9: 
 10:   const container = {
 11:     hidden: { opacity: 0 },
 12:     show: {
 13:       opacity: 1,
 14:       transition: { staggerChildren: 0.1 }
 15:     }
 16:   };
 17: 
 18:   const item = {
 19:     hidden: { opacity: 0, y: 20 },
 20:     show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
 21:   };
 22: 
 23:   return (
 24:     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden">
 25:       {/* Background decoration */}
 26:       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-3xl" />
 27:       <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-3xl" />
 28: 
 29:       <div className="w-full max-w-md z-10">
 30:         <motion.div 
 31:           initial={{ opacity: 0, scale: 0.9 }}
 32:           animate={{ opacity: 1, scale: 1 }}
 33:           transition={{ duration: 0.5 }}
 34:           className="text-center mb-12"
 35:         >
 36:           <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-3xl shadow-floating flex items-center justify-center mb-6">
 37:             <span className="text-white text-5xl font-extrabold">G</span>
 38:           </div>
 39:           <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Globo</h1>
 40:           <p className="text-lg text-gray-500 font-medium">كل ما تحتاجه.</p>
 41:         </motion.div>
 42: 
 43:         <motion.div 
 44:           variants={container}
 45:           initial="hidden"
 46:           animate="show"
 47:           className="space-y-4"
 48:         >
 49:           <motion.div variants={item}>
 50:             <Card 
 51:               interactive 
 52:               onClick={() => navigate('/customer/home')}
 53:               className="p-5 flex items-center gap-4 bg-white hover:bg-orange-50 transition-colors border-2 border-transparent hover:border-primary/20"
 54:             >
 55:               <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-primary">
 56:                 <User size={24} />
 57:               </div>
 58:               <div className="flex-1">
 59:                 <h3 className="font-bold text-lg">تطبيق العميل</h3>
 60:                 <p className="text-sm text-gray-500">اطلب الطعام، البقالة والمزيد</p>
 61:               </div>
 62:               <ArrowRight className="text-gray-300" />
 63:             </Card>
 64:           </motion.div>
 65: 
 66:           <motion.div variants={item}>
 67:             <Card 
 68:               interactive 
 69:               onClick={() => navigate('/merchant/dashboard')}
 70:               className="p-5 flex items-center gap-4 bg-white hover:bg-orange-50 transition-colors border-2 border-transparent hover:border-primary/20"
 71:             >
 72:               <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
 73:                 <Store size={24} />
 74:               </div>
 75:               <div className="flex-1">
 76:                 <h3 className="font-bold text-lg">لوحة تحكم التاجر</h3>
 77:                 <p className="text-sm text-gray-500">إدارة الطلبات والقائمة</p>
 78:               </div>
 79:               <ArrowRight className="text-gray-300" />
 80:             </Card>
 81:           </motion.div>
 82: 
 83:           <motion.div variants={item}>
 84:             <Card 
 85:               interactive 
 86:               onClick={() => navigate('/driver/home')}
 87:               className="p-5 flex items-center gap-4 bg-white hover:bg-orange-50 transition-colors border-2 border-transparent hover:border-primary/20"
 88:             >
 89:               <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
 90:                 <Bike size={24} />
 91:               </div>
 92:               <div className="flex-1">
 93:                 <h3 className="font-bold text-lg">تطبيق السائق</h3>
 94:                 <p className="text-sm text-gray-500">قبول وتوصيل الطلبات</p>
 95:               </div>
 96:               <ArrowRight className="text-gray-300" />
 97:             </Card>
 98:           </motion.div>
 99: 
100:           <motion.div variants={item}>
101:             <Card 
102:               interactive 
103:               onClick={() => navigate('/admin/dashboard')}
104:               className="p-5 flex items-center gap-4 bg-white hover:bg-orange-50 transition-colors border-2 border-transparent hover:border-primary/20"
105:             >
106:               <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
107:                 <ShieldCheck size={24} />
108:               </div>
109:               <div className="flex-1">
110:                 <h3 className="font-bold text-lg">لوحة تحكم المشرف</h3>
111:                 <p className="text-sm text-gray-500">نظرة عامة على المنصة والإعدادات</p>
112:               </div>
113:               <ArrowRight className="text-gray-300" />
114:             </Card>
115:           </motion.div>
116:         </motion.div>
117:         
118:         <motion.p 
119:           initial={{ opacity: 0 }} 
120:           animate={{ opacity: 1 }} 
121:           transition={{ delay: 1 }}
122:           className="text-center text-xs text-gray-400 mt-12 font-medium uppercase tracking-widest"
123:         >
124:           نموذج أولي تفاعلي
125:         </motion.p>
126:       </div>
127:     </div>
128:   );
129: };
130: 
131: export default WelcomeScreen;