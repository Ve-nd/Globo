import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../../store/cartStore';
import { stores } from '../../data/mockData';
import { Button } from '../../components/ui/Button';
import { EmptyState } from '../../components/ui/EmptyState';

const CustomerCart = () => {
  const navigate = useNavigate();
  const { items, storeId, updateQuantity, removeItem, getTotal } = useCartStore();
  
  const store = storeId ? stores.find(s => s.id === storeId) : null;
  const subtotal = getTotal();
  const deliveryFee = store?.deliveryFee || 0;
  const total = subtotal + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="min-h-full bg-white flex flex-col">
        <div className="p-4 flex items-center border-b border-gray-100">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold ml-2">السلة</h1>
        </div>
        <div className="flex-1">
          <EmptyState 
            icon={<ShoppingBag size={48} />}
            title="السلة فارغة"
            description="يبدو أنك لم تقم بإضافة أي شيء إلى سلتك بعد."
            actionText="تصفح المتاجر"
            onAction={() => navigate('/customer/home')}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-gray-50 flex flex-col">
      <div className="bg-white p-4 flex items-center border-b border-gray-100 sticky top-0 z-20">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900">
          <ArrowLeft size={24} />
        </button>
        <div className="ml-2">
          <h1 className="text-xl font-bold leading-none">السلة</h1>
          <p className="text-xs text-gray-500 font-medium mt-1">{store?.name}</p>
        </div>
      </div>

      <div className="p-4 flex-1 overflow-y-auto pb-32">
        <div className="bg-white rounded-2xl p-4 shadow-sm space-y-4 mb-6">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, height: 0 }}
                className="flex gap-4 items-center"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm leading-tight">{item.name}</h3>
                  <p className="text-primary font-bold text-sm mt-1">{item.price} MAD</p>
                </div>

                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600"
                  >
                    {item.quantity === 1 ? <Trash2 size={14} className="text-red-500" /> : <Minus size={14} />}
                  </button>
                  <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center bg-white rounded-md shadow-sm text-primary"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
          <label className="block text-sm font-bold text-gray-900 mb-2">ملاحظات الطلب</label>
          <textarea 
            className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            placeholder="هل لديك أي حساسية أو تعليمات خاصة؟"
            rows={2}
          />
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
          <div className="flex justify-between text-sm text-gray-600">
            <span>المجموع الفرعي</span>
            <span className="font-bold text-gray-900">{subtotal} MAD</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>رسوم التوصيل</span>
            <span className="font-bold text-gray-900">{deliveryFee === 0 ? 'مجاني' : `${deliveryFee} MAD`}</span>
          </div>
          <div className="h-px bg-gray-100 my-2" />
          <div className="flex justify-between text-lg">
            <span className="font-bold text-gray-900">الإجمالي</span>
            <span className="font-extrabold text-primary">{total} MAD</span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-100 p-4 pb-safe z-30 md:max-w-md md:mx-auto">
        <Button 
          fullWidth 
          size="lg" 
          onClick={() => navigate('/customer/checkout')}
          className="flex justify-between items-center px-6 shadow-floating"
        >
          <span className="text-white bg-white/20 px-3 py-1 rounded-lg text-sm">{total} MAD</span>
          <span>إتمام الطلب</span>
          <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default CustomerCart;
