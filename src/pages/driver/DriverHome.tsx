import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Navigation, TrendingUp, Navigation2 } from 'lucide-react';
import { driverOrders } from '../../data/mockData';
import { Card } from '../../components/ui/Card';
import { motion, AnimatePresence } from 'framer-motion';

const DriverHome = () => {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="min-h-full bg-gray-50 flex flex-col pb-20">
      <div className="bg-white px-4 pt-safe-top pb-4 sticky top-0 z-20 shadow-sm border-b border-gray-100">
        <div className="flex justify-between items-center mt-2">
          <div>
            <h1 className="text-xl font-bold text-gray-900">طلبات متاحة</h1>
            <p className="text-xs text-gray-500 font-medium">جاري البحث عن عمليات توصيل قريبة...</p>
          </div>
          <button 
            onClick={() => setIsOnline(!isOnline)}
            className={`px-4 py-2 rounded-full font-bold text-sm transition-colors flex items-center gap-2 ${
              isOnline ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></span>
            {isOnline ? 'متاح' : 'غير متاح'}
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Earnings Mini Card */}
        <div className="bg-gradient-primary rounded-2xl p-4 text-white shadow-soft flex items-center justify-between">
          <div>
            <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1">الأرباح اليومية</p>
            <h2 className="text-2xl font-extrabold">245 MAD</h2>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <TrendingUp size={24} />
          </div>
        </div>

        {!isOnline ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4">
              <Navigation2 size={32} />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">أنت غير متصل</h3>
            <p className="text-gray-500 text-sm">اجعل حالتك متاحاً للبدء في استقبال طلبات التوصيل.</p>
          </div>
        ) : (
          <div className="space-y-4 pt-2">
            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider px-1">طلبات قريبة</h3>
            
            <AnimatePresence>
              {driverOrders.map((order, i) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card interactive className="p-4" onClick={() => navigate(`/driver/order/${order.id}`)}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-xs font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded-md mb-2 inline-block">طلب جديد</span>
                        <h3 className="font-bold text-gray-900 leading-tight">{order.storeName}</h3>
                        <p className="text-sm text-gray-500">{order.pickupArea}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-extrabold text-primary block">{order.earnings} MAD</span>
                        <span className="text-xs font-bold text-gray-400">{order.distance} كم إجمالي</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl mb-4">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 shadow-sm flex-shrink-0">
                        <MapPin size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-0.5">العنوان</p>
                        <p className="text-sm font-bold text-gray-900 truncate">{order.customerName}</p>
                      </div>
                    </div>

                    <button className="w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-black transition-colors active:scale-[0.98]">
                      تقييم وقبول
                    </button>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverHome;