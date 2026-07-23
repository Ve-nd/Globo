import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Star, Clock, Info, Plus, Minus, ShoppingBag } from 'lucide-react';
import { stores, getStoreMenu } from '../../data/mockData';
import { useCartStore } from '../../store/cartStore';
import toast from 'react-hot-toast';

const CustomerStore = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const store = stores.find(s => s.id === id);
  const menuItems = getStoreMenu(id || '');
  
  const cartStore = useCartStore();
  const cartItemsCount = cartStore.items.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartStore.getTotal();

  // Extract unique categories
  const categories = Array.from(new Set(menuItems.map(item => item.category)));
  const [activeCategory, setActiveCategory] = useState(categories[0] || '');

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 150], [0, 1]);
  const titleY = useTransform(scrollY, [0, 150], [20, 0]);

  if (!store) return <div className="p-8 text-center">Store not found</div>;

  const handleAddToCart = (item: any) => {
    cartStore.addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
      storeId: store.id
    });
    toast.success(`Added ${item.name} to cart`);
  };

  return (
    <div className="bg-background min-h-screen pb-24 relative">
      {/* Sticky Header */}
      <motion.div 
        style={{ opacity: headerOpacity }}
        className="fixed top-0 inset-x-0 h-16 bg-white shadow-sm z-30 flex items-center justify-center md:max-w-md md:mx-auto"
      >
        <motion.h1 style={{ y: titleY }} className="font-bold text-lg truncate px-12">
          {store.name}
        </motion.h1>
      </motion.div>

      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 z-40 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-soft text-gray-900 md:ml-auto"
      >
        <ArrowLeft size={20} />
      </button>

      {/* Cover Image */}
      <div className="h-64 w-full relative">
        <img src={store.image} alt={store.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Store Info Card */}
      <div className="relative px-4 -mt-12 z-10">
        <div className="bg-white rounded-2xl p-5 shadow-soft">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-1">{store.name}</h1>
          <p className="text-gray-500 text-sm mb-4">{store.description}</p>
          
          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center font-bold text-gray-900 gap-1">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                {store.rating}
              </div>
              <span className="text-[10px] text-gray-500 uppercase tracking-wide">Rating</span>
            </div>
            <div className="w-px h-8 bg-gray-100"></div>
            <div className="flex flex-col items-center">
              <div className="flex items-center font-bold text-gray-900 gap-1">
                <Clock size={16} className="text-primary" />
                {store.deliveryTime}
              </div>
              <span className="text-[10px] text-gray-500 uppercase tracking-wide">Delivery</span>
            </div>
            <div className="w-px h-8 bg-gray-100"></div>
            <div className="flex flex-col items-center">
              <div className="flex items-center font-bold text-gray-900 gap-1">
                <Info size={16} className="text-gray-400" />
                {store.deliveryFee} MAD
              </div>
              <span className="text-[10px] text-gray-500 uppercase tracking-wide">Fee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Categories */}
      <div className="sticky top-16 bg-background/95 backdrop-blur-md z-20 px-4 py-3 mt-2 -mx-4 overflow-x-auto no-scrollbar flex gap-2 border-b border-gray-200">
        <div className="w-4 flex-shrink-0" /> {/* Spacer */}
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              const el = document.getElementById(`category-${cat}`);
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 120;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors ${
              activeCategory === cat 
                ? 'bg-gray-900 text-white' 
                : 'bg-white text-gray-600 shadow-sm'
            }`}
          >
            {cat}
          </button>
        ))}
        <div className="w-4 flex-shrink-0" />
      </div>

      {/* Menu List */}
      <div className="p-4 space-y-8 mt-4">
        {categories.map((category) => (
          <div key={category} id={`category-${category}`}>
            <h2 className="text-xl font-bold text-gray-900 mb-4">{category}</h2>
            <div className="space-y-4">
              {menuItems.filter(i => i.category === category).map((item) => {
                const cartItem = cartStore.items.find(i => i.id === item.id);
                
                return (
                  <div key={item.id} className="bg-white rounded-2xl p-3 flex gap-4 shadow-sm border border-gray-50">
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 leading-tight">{item.name}</h3>
                        <p className="text-xs text-gray-500 line-clamp-2 mb-2">{item.description}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-primary">{item.price} MAD</span>
                        
                        {cartItem ? (
                          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                            <button 
                              onClick={() => cartStore.updateQuantity(item.id, cartItem.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="font-bold text-sm w-4 text-center">{cartItem.quantity}</span>
                            <button 
                              onClick={() => cartStore.updateQuantity(item.id, cartItem.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center bg-white rounded-md shadow-sm text-primary"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        ) : (
                          <button 
                            onClick={() => handleAddToCart(item)}
                            className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                          >
                            <Plus size={20} />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Cart Button */}
      {cartItemsCount > 0 && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-6 inset-x-4 z-40 md:max-w-md md:mx-auto"
        >
          <button 
            onClick={() => navigate('/customer/cart')}
            className="w-full bg-gray-900 text-white rounded-2xl p-4 flex items-center justify-between shadow-floating active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                {cartItemsCount}
              </div>
              <span className="font-bold">View Cart</span>
            </div>
            <span className="font-bold">{cartTotal} MAD</span>
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default CustomerStore;
