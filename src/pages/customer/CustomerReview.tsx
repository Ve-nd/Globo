import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/ui/Button';

const CustomerReview = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      navigate('/customer/home');
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-6 text-center text-white">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6">
            <span className="text-5xl">🎉</span>
          </div>
          <h1 className="text-3xl font-extrabold mb-2">شكراً لك!</h1>
          <p className="text-white/80 font-medium">ملاحظاتك تساعدنا على التحسن.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col pt-12 p-6">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex-1 flex flex-col"
      >
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Gift size={32} />
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2">تم توصيل الطلب!</h1>
          <p className="text-gray-500">كيف كانت تجربتك مع Pizza House؟</p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 mb-8 flex flex-col items-center">
          <h2 className="font-bold text-gray-900 mb-6">قيم طلبك</h2>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setRating(star)}
                className="p-1 transition-transform hover:scale-110 focus:outline-none"
              >
                <Star 
                  size={40} 
                  className={`transition-colors ${
                    (hoveredRating || rating) >= star 
                      ? 'text-yellow-400 fill-yellow-400' 
                      : 'text-gray-300'
                  }`} 
                />
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {rating > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="space-y-4 mb-8"
            >
              <label className="block font-bold text-gray-900 px-2">اترك تعليقاً (اختياري)</label>
              <textarea 
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 text-gray-900 focus:outline-none focus:border-primary/50 focus:bg-white transition-all resize-none"
                placeholder="ما الذي أعجبك أو لم يعجبك؟"
                rows={4}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto">
          <Button 
            fullWidth 
            size="lg" 
            disabled={rating === 0}
            onClick={handleSubmit}
            className="shadow-floating"
          >
            إرسال التقييم
          </Button>
          <button 
            onClick={() => navigate('/customer/home')}
            className="w-full mt-4 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors py-3"
          >
            تخطي الآن
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomerReview;
