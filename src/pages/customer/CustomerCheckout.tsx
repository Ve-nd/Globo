import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Banknote, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useCartStore } from '../../store/cartStore';
import { stores } from '../../data/mockData';
import { Button } from '../../components/ui/Button';

const CustomerCheckout = () => {
  const navigate = useNavigate();
  const { storeId, getTotal, clearCart } = useCartStore();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  
  const store = storeId ? stores.find(s => s.id === storeId) : null;
  const subtotal = getTotal();
  const deliveryFee = store?.deliveryFee || 0;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    setIsPlacingOrder(true);
    // Simulate network request
    setTimeout(() => {
      toast.success('Order placed successfully!', {
        icon: '🎉',
      });
      clearCart();
      navigate('/customer/tracking');
    }, 1500);
  };

  // If we arrived here without a cart, send back
  if (!store && !isPlacingOrder) {
    return (
      <div className="min-h-full flex items-center justify-center bg-gray-50">
        <Button onClick={() => navigate('/customer/home')}>Return Home</Button>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-gray-50 flex flex-col">
      <div className="bg-white p-4 flex items-center border-b border-gray-100 sticky top-0 z-20">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold ml-2">Checkout</h1>
      </div>

      <div className="p-4 flex-1 space-y-4 pb-32">
        {/* Delivery Address */}
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-3 px-1 uppercase tracking-wider">Delivery Details</h2>
          <div className="bg-white rounded-2xl p-4 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-50 text-primary flex items-center justify-center flex-shrink-0 mt-1">
              <MapPin size={20} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-gray-900">Home</h3>
                <button className="text-primary text-sm font-bold">Edit</button>
              </div>
              <p className="text-sm text-gray-500 line-clamp-2">
                Apt 4B, Résidence les Palmiers<br />
                Rue des Oliviers, Maarif<br />
                Casablanca
              </p>
              <div className="mt-3 p-3 bg-gray-50 rounded-xl flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                <span className="text-sm font-medium text-gray-700">Est. delivery in <span className="font-bold">{store?.deliveryTime}</span></span>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Method */}
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-3 px-1 uppercase tracking-wider mt-6">Payment</h2>
          <div className="bg-white rounded-2xl p-4 shadow-sm border-2 border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
              SELECTED
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                <Banknote size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Cash on Delivery</h3>
                <p className="text-sm text-gray-500">Pay when your order arrives</p>
              </div>
            </div>
          </div>
        </section>

        {/* Order Summary Summary */}
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-3 px-1 uppercase tracking-wider mt-6">Summary</h2>
          <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span className="font-bold text-gray-900">{subtotal} MAD</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Delivery Fee</span>
              <span className="font-bold text-gray-900">{deliveryFee === 0 ? 'Free' : `${deliveryFee} MAD`}</span>
            </div>
            <div className="h-px bg-gray-100 my-2" />
            <div className="flex justify-between text-lg">
              <span className="font-bold text-gray-900">Total to pay</span>
              <span className="font-extrabold text-primary">{total} MAD</span>
            </div>
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-100 p-4 pb-safe z-30 md:max-w-md md:mx-auto">
        <Button 
          fullWidth 
          size="lg" 
          onClick={handlePlaceOrder}
          isLoading={isPlacingOrder}
          className="shadow-floating"
        >
          Place Order — {total} MAD
        </Button>
      </div>
    </div>
  );
};

export default CustomerCheckout;
