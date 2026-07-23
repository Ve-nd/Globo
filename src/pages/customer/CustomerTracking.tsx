import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Star, ArrowLeft, MoreHorizontal, CheckCircle2, ChefHat, Bike, Gift } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

const statuses = [
  { id: 'confirmed', label: 'تم تأكيد الطلب', icon: CheckCircle2, time: '12:30' },
  { id: 'preparing', label: 'جاري التحضير', icon: ChefHat, time: '12:35' },
  { id: 'delivering', label: 'في الطريق', icon: Bike, time: '12:45' },
  { id: 'delivered', label: 'مكتمل', icon: Gift, time: '13:00' },
];

const CustomerTracking = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  // Auto-advance through statuses for demo purposes
  useEffect(() => {
    if (currentStep < 3) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 5000); // Advance every 5 seconds
      return () => clearTimeout(timer);
    } else {
      // After delivered, wait a bit and go to review
      const timer = setTimeout(() => {
        navigate('/customer/review');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, navigate]);

  const activeStatus = statuses[currentStep];
  const ActiveIcon = activeStatus.icon;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
      {/* Header overlay */}
      <div className="absolute top-0 inset-x-0 p-4 pt-safe-top z-20 flex justify-between items-center pointer-events-none">
        <button onClick={() => navigate('/customer/home')} className="w-10 h-10 bg-white shadow-soft rounded-full flex items-center justify-center text-gray-900 pointer-events-auto">
          <ArrowLeft size={20} />
        </button>
        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-soft font-bold text-sm pointer-events-auto">
          ETA: {currentStep === 3 ? 'مكتمل' : '15 دقيقة'}
        </div>
      </div>

      {/* Map Area (Illustrated) */}
      <div className="h-[45vh] bg-[#E8F0F2] relative w-full flex-shrink-0">
        {/* Simple CSS map illustration */}
        <div className="absolute inset-0 opacity-50" 
             style={{ backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
        
        {/* Route Path (SVG) */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path 
            d="M 50 100 Q 150 150, 200 250 T 350 300" 
            fill="none" 
            stroke="#CBD5E1" 
            strokeWidth="6" 
            strokeLinecap="round" 
            strokeDasharray="10, 10" 
          />
          <path 
            d="M 50 100 Q 150 150, 200 250 T 350 300" 
            fill="none" 
            stroke="#FF8A3D" 
            strokeWidth="6" 
            strokeLinecap="round" 
            className="transition-all duration-1000 ease-linear"
            strokeDasharray="1000"
            strokeDashoffset={currentStep === 0 ? 950 : currentStep === 1 ? 800 : currentStep === 2 ? 400 : 0}
          />
        </svg>

        {/* Store Pin */}
        <div className="absolute left-[30px] top-[70px] w-12 h-12 bg-white rounded-full shadow-floating flex items-center justify-center z-10">
          <span className="text-2xl">🏪</span>
        </div>

        {/* Customer Pin */}
        <div className="absolute left-[330px] top-[270px] w-12 h-12 bg-white rounded-full shadow-floating flex items-center justify-center z-10 border-4 border-primary">
          <span className="text-2xl">📍</span>
        </div>

        {/* Moving Driver Pin */}
        <AnimatePresence>
          {currentStep >= 1 && currentStep < 3 && (
            <motion.div 
              initial={{ x: 30, y: 70 }}
              animate={{ 
                x: currentStep === 1 ? 80 : 250, 
                y: currentStep === 1 ? 120 : 260 
              }}
              transition={{ duration: 4, ease: "linear" }}
              className="absolute w-14 h-14 bg-gradient-primary rounded-full shadow-floating flex items-center justify-center z-20"
            >
              <span className="text-2xl drop-shadow-md">🛵</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Status Bottom Sheet */}
      <div className="flex-1 bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] -mt-6 z-20 relative p-6 pb-safe flex flex-col">
        {/* Handle */}
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" />

        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-orange-50 text-primary flex items-center justify-center">
            <ActiveIcon size={28} />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-gray-900">{activeStatus.label}</h2>
            <p className="text-gray-500 text-sm">
              {currentStep === 0 && 'لقد استلمنا طلبك'}
              {currentStep === 1 && 'طعامك يتم تحضيره'}
              {currentStep === 2 && 'السائق في طريقه إليك'}
              {currentStep === 3 && 'استمتع بوجبتك!'}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 space-y-6 mb-8 flex-1">
          {/* Vertical Line */}
          <div className="absolute left-[29px] top-2 bottom-2 w-0.5 bg-gray-100 rounded-full" />
          
          {statuses.map((status, index) => {
            const isCompleted = index <= currentStep;
            const isCurrent = index === currentStep;
            
            return (
              <div key={status.id} className="relative flex items-center gap-4">
                <div className={`absolute -left-[30px] w-4 h-4 rounded-full border-4 bg-white z-10 transition-colors duration-500 ${
                  isCompleted ? 'border-primary' : 'border-gray-200'
                } ${isCurrent ? 'scale-125 shadow-[0_0_0_4px_rgba(255,138,61,0.2)]' : ''}`} />
                
                <div className={`flex-1 ${isCompleted ? 'opacity-100' : 'opacity-40'} transition-opacity duration-500`}>
                  <h4 className={`font-bold ${isCurrent ? 'text-primary' : 'text-gray-900'}`}>
                    {status.label}
                  </h4>
                </div>
                <div className={`text-xs font-medium ${isCompleted ? 'text-gray-500' : 'text-gray-300'}`}>
                  {isCompleted ? status.time : '--:--'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Driver Card (Only show if assigned) */}
        {currentStep >= 2 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between mt-auto"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&fit=crop" alt="سائق" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">يوسف</h4>
                <div className="flex items-center gap-1 text-xs font-bold text-gray-500">
                  <Star size={12} className="text-yellow-400 fill-yellow-400" />
                  4.9
                  <span className="mx-1">•</span>
                  هوندا SH125
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-sm">
                <MessageCircle size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-sm">
                <Phone size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CustomerTracking;
