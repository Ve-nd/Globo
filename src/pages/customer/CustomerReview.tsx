import React, { useState } from 'react';
  2: import { useNavigate } from 'react-router-dom';
  3: import { Star, Gift } from 'lucide-react';
  4: import { motion, AnimatePresence } from 'framer-motion';
  5: import { Button } from '../../components/ui/Button';
  6: 
  7: const CustomerReview = () => {
  8:   const navigate = useNavigate();
  9:   const [rating, setRating] = useState(0);
 10:   const [hoveredRating, setHoveredRating] = useState(0);
 11:   const [submitted, setSubmitted] = useState(false);
 12: 
 13:   const handleSubmit = () => {
 14:     setSubmitted(true);
 15:     setTimeout(() => {
 16:       navigate('/customer/home');
 17:     }, 2000);
 18:   };
 19: 
 20:   if (submitted) {
 21:     return (
 22:       <div className=\"min-h-screen bg-gradient-primary flex items-center justify-center p-6 text-center text-white\">\n 23:         <motion.div
 24:           initial={{ scale: 0.8, opacity: 0 }}
 25:           animate={{ scale: 1, opacity: 1 }}
 26:           transition={{ type: 'spring', bounce: 0.5 }}
 27:           className=\"flex flex-col items-center\"
 28:         >
 29:           <div className=\"w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6\">
 30:             <span className=\"text-5xl\">🎉</span>
 31:           </div>
 32:           <h1 className=\"text-3xl font-extrabold mb-2\">شكراً لك!</h1>
 33:           <p className=\"text-white/80 font-medium\">ملاحظاتك تساعدنا على التحسن.</p>
 34:         </motion.div>
 35:       </div>
 36:     );
 37:   }
 38: 
 39:   return (
 40:     <div className=\"min-h-screen bg-white flex flex-col pt-12 p-6\">
 41:       <motion.div 
 42:         initial={{ y: 20, opacity: 0 }}
 43:         animate={{ y: 0, opacity: 1 }}
 44:         className=\"flex-1 flex flex-col\"
 45:       >
 46:         <div className=\"text-center mb-10\">
 47:           <div className=\"w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm\">
 48:             <Gift size={32} />
 49:           </div>
 50:           <h1 className=\"text-2xl font-extrabold text-gray-900 mb-2\">تم توصيل الطلب!</h1>
 51:           <p className=\"text-gray-500\">كيف كانت تجربتك مع بيتزا هاوس؟</p>
 52:         </div>
 53: 
 54:         <div className=\"bg-gray-50 rounded-3xl p-8 mb-8 flex flex-col items-center\">
 55:           <h2 className=\"font-bold text-gray-900 mb-6\">قيم طلبك</h2>
 56:           <div className=\"flex gap-2\">
 57:             {[1, 2, 3, 4, 5].map((star) => (
 58:               <button
 59:                 key={star}
 60:                 onMouseEnter={() => setHoveredRating(star)}
 61:                 onMouseLeave={() => setHoveredRating(0)}
 62:                 onClick={() => setRating(star)}
 63:                 className=\"p-1 transition-transform hover:scale-110 focus:outline-none\"
 64:               >
 65:                 <Star 
 66:                   size={40} 
 67:                   className={`transition-colors ${
 68:                     (hoveredRating || rating) >= star 
 69:                       ? 'text-yellow-400 fill-yellow-400' 
 70:                       : 'text-gray-300'
 71:                   }`} 
 72:                 />
 73:               </button>
 74:             ))}
 75:           </div>
 76:         </div>
 77: 
 78:         <AnimatePresence>
 79:           {rating > 0 && (
 80:             <motion.div
 81:               initial={{ height: 0, opacity: 0 }}
 82:               animate={{ height: 'auto', opacity: 1 }}
 83:               className=\"space-y-4 mb-8\"
 84:             >
 85:               <label className=\"block font-bold text-gray-900 px-2\">اترك تعليقاً (اختياري)</label>
 86:               <textarea 
 87:                 className=\"w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 text-gray-900 focus:outline-none focus:border-primary/50 focus:bg-white transition-all resize-none\"
 88:                 placeholder=\"ما الذي أعجبك أو لم يعجبك؟\"
 89:                 rows={4}
 90:               />
 91:             </motion.div>
 92:           )}
 93:         </AnimatePresence>
 94: 
 95:         <div className=\"mt-auto\">
 96:           <Button 
 97:             fullWidth 
 98:             size=\"lg\" 
 99:             disabled={rating === 0}
100:             onClick={handleSubmit}
101:             className=\"shadow-floating\"
102:           >
103:             إرسال التقييم
104:           </Button>
105:           <button 
106:             onClick={() => navigate('/customer/home')}
107:             className=\"w-full mt-4 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors py-3\"
108:           >
109:             تخطي الآن
110:           </button>
111:         </div>
112:       </motion.div>
113:     </div>
114:   );
115: };
116: 
117: export default CustomerReview;