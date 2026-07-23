import React, { useState } from 'react';
  2: import { useNavigate } from 'react-router-dom';
  3: import { ArrowLeft, MapPin, Banknote, Clock, CheckCircle } from 'lucide-react';
  4: import { motion } from 'framer-motion';
  5: import toast from 'react-hot-toast';
  6: import { useCartStore } from '../../store/cartStore';
  7: import { stores } from '../../data/mockData';
  8: import { Button } from '../../components/ui/Button';
  9: 
 10: const CustomerCheckout = () => {
 11:   const navigate = useNavigate();
 12:   const { storeId, getTotal, clearCart } = useCartStore();
 13:   const [isPlacingOrder, setIsPlacingOrder] = useState(false);
 14:   
 15:   const store = storeId ? stores.find(s => s.id === storeId) : null;
 16:   const subtotal = getTotal();
 17:   const deliveryFee = store?.deliveryFee || 0;
 18:   const total = subtotal + deliveryFee;
 19: 
 20:   const handlePlaceOrder = () => {
 21:     setIsPlacingOrder(true);
 22:     // Simulate network request
 23:     setTimeout(() => {
 24:       toast.success('تم إتمام الطلب بنجاح!', {
 25:         icon: '🎉',
 26:       });
 27:       clearCart();
 28:       navigate('/customer/tracking');
 29:     }, 1500);
 30:   };
 31: 
 32:   // If we arrived here without a cart, send back
 33:   if (!store && !isPlacingOrder) {
 34:     return (
 35:       <div className=\"min-h-full flex items-center justify-center bg-gray-50\">\n 36:         <Button onClick={() => navigate('/customer/home')}>العودة للرئيسية</Button>
 37:       </div>
 38:     );
 39:   }
 40: 
 41:   return (
 42:     <div className=\"min-h-full bg-gray-50 flex flex-col\">\n 43:       <div className=\"bg-white p-4 flex items-center border-b border-gray-100 sticky top-0 z-20\">\n 44:         <button onClick={() => navigate(-1)} className=\"p-2 -ml-2 text-gray-900\">\n 45:           <ArrowLeft size={24} />\n 46:         </button>\n 47:         <h1 className=\"text-xl font-bold ml-2\">إتمام الطلب</h1>\n 48:       </div>\n 49: \n 50:       <div className=\"p-4 flex-1 space-y-4 pb-32\">\n 51:         {/* Delivery Address */}\n 52:         <section>\n 53:           <h2 className=\"text-sm font-bold text-gray-900 mb-3 px-1 uppercase tracking-wider\">تفاصيل التوصيل</h2>\n 54:           <div className=\"bg-white rounded-2xl p-4 shadow-sm flex items-start gap-4\">\n 55:             <div className=\"w-10 h-10 rounded-full bg-orange-50 text-primary flex items-center justify-center flex-shrink-0 mt-1\">\n 56:               <MapPin size={20} />\n 57:             </div>\n 58:             <div className=\"flex-1\">\n 59:               <div className=\"flex justify-between items-center mb-1\">\n 60:                 <h3 className=\"font-bold text-gray-900\">الرئيسية</h3>\n 61:                 <button className=\"text-primary text-sm font-bold\">تعديل</button>\n 62:               </div>\n 63:               <p className=\"text-sm text-gray-500 line-clamp-2\">\n 64:                 Apt 4B, Résidence les Palmiers<br />\n 65:                 Rue des Oliviers, Maarif<br />\n 66:                 Casablanca\n 67:               </p>\n 68:               <div className=\"mt-3 p-3 bg-gray-50 rounded-xl flex items-center gap-2\">\n 69:                 <Clock size={16} className=\"text-primary\" />\n 70:                 <span className=\"text-sm font-medium text-gray-700\">وقت التوصيل التقديري <span className=\"font-bold\">{store?.deliveryTime}</span></span>\n 71:               </div>\n 72:             </div>\n 73:           </div>\n 74:         </section>\n 75: \n 76:         {/* Payment Method */}\n 77:         <section>\n 78:           <h2 className=\"text-sm font-bold text-gray-900 mb-3 px-1 uppercase tracking-wider mt-6\">الدفع</h2>\n 79:           <div className=\"bg-white rounded-2xl p-4 shadow-sm border-2 border-primary/20 relative overflow-hidden\">\n 80:             <div className=\"absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg\">\n 81:               تم الاختيار\n 82:             </div>\n 83:             <div className=\"flex items-center gap-4\">\n 84:               <div className=\"w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0\">\n 85:                 <Banknote size={20} />\n 86:               </div>\n 87:               <div>\n 88:                 <h3 className=\"font-bold text-gray-900\">الدفع عند الاستلام</h3>\n 89:                 <p className=\"text-sm text-gray-500\">ادفع عند وصول طلبك</p>\n 90:               </div>\n 91:             </div>\n 92:           </div>\n 93:         </section>\n 94: \n 95:         {/* Order Summary Summary */}\n 96:         <section>\n 97:           <h2 className=\"text-sm font-bold text-gray-900 mb-3 px-1 uppercase tracking-wider mt-6\">الملخص</h2>\n 98:           <div className=\"bg-white rounded-2xl p-5 shadow-sm space-y-3\">\n 99:             <div className=\"flex justify-between text-sm text-gray-600\">\n100:               <span>الإجمالي الفرعي</span>\n101:               <span className=\"font-bold text-gray-900\">{subtotal} MAD</span>\n102:             </div>\n103:             <div className=\"flex justify-between text-sm text-gray-600\">\n104:               <span>رسوم التوصيل</span>\n105:               <span className=\"font-bold text-gray-900\">{deliveryFee === 0 ? 'مجاني' : `${deliveryFee} MAD`}</span>\n106:             </div>\n107:             <div className=\"h-px bg-gray-100 my-2\" />\n108:             <div className=\"flex justify-between text-lg\">\n109:               <span className=\"font-bold text-gray-900\">الإجمالي للدفع</span>\n110:               <span className=\"font-extrabold text-primary\">{total} MAD</span>\n111:             </div>\n112:           </div>\n113:         </section>\n114:       </div>\n115: \n116:       <div className=\"fixed bottom-0 inset-x-0 bg-white border-t border-gray-100 p-4 pb-safe z-30 md:max-w-md md:mx-auto\">\n117:         <Button \n118:           fullWidth \n119:           size=\"lg\" \n120:           onClick={handlePlaceOrder}\n121:           isLoading={isPlacingOrder}\n122:           className=\"shadow-floating\"\n123:         >\n124:           إتمام الطلب — {total} MAD\n125:         </Button>\n126:       </div>\n127:     </div>\n128:   );\n129: };\n130: \n131: export default CustomerCheckout;