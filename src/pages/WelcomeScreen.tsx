import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Store, User, Bike, ShieldCheck, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-3xl" />

      <div className="w-full max-w-md z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-3xl shadow-floating flex items-center justify-center mb-6">
            <span className="text-white text-5xl font-extrabold">G</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Globo</h1>
          <p className="text-lg text-gray-500 font-medium">كل ما تحتاجه.</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          <motion.div variants={item}>
            <Card 
              interactive 
              onClick={() => navigate('/customer/home')}
              className="p-5 flex items-center gap-4 bg-white hover:bg-orange-50 transition-colors border-2 border-transparent hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-primary">
                <User size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">تطبيق العميل</h3>
                <p className="text-sm text-gray-500">اطلب الطعام، البقالة والمزيد</p>
              </div>
              <ArrowRight className="text-gray-300" />
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card 
              interactive 
              onClick={() => navigate('/merchant/dashboard')}
              className="p-5 flex items-center gap-4 bg-white hover:bg-orange-50 transition-colors border-2 border-transparent hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <Store size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">لوحة تحكم التاجر</h3>
                <p className="text-sm text-gray-500">إدارة الطلبات والقائمة</p>
              </div>
              <ArrowRight className="text-gray-300" />
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card 
              interactive 
              onClick={() => navigate('/driver/home')}
              className="p-5 flex items-center gap-4 bg-white hover:bg-orange-50 transition-colors border-2 border-transparent hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                <Bike size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">تطبيق السائق</h3>
                <p className="text-sm text-gray-500">قبول وتوصيل الطلبات</p>
              </div>
              <ArrowRight className="text-gray-300" />
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card 
              interactive 
              onClick={() => navigate('/admin/dashboard')}
              className="p-5 flex items-center gap-4 bg-white hover:bg-orange-50 transition-colors border-2 border-transparent hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                <ShieldCheck size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">لوحة تحكم الإدارة</h3>
                <p className="text-sm text-gray-500">نظرة عامة على المنصة والإعدادات</p>
              </div>
              <ArrowRight className="text-gray-300" />
            </Card>
          </motion.div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1 }}
          className="text-center text-xs text-gray-400 mt-12 font-medium uppercase tracking-widest"
        >
          نموذج أولي تفاعلي
        </motion.p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
