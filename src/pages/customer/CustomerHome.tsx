import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Bell, Search, Star, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { stores } from '../../data/mockData';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { StoreCardSkeleton } from '../../components/ui/Skeleton';

const categories = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'restaurants', name: 'Restaurants', icon: '🍔' },
  { id: 'grocery', name: 'Grocery', icon: '🛒' },
  { id: 'pharmacy', name: 'Pharmacy', icon: '💊' },
  { id: 'bakery', name: 'Bakery', icon: '🥐' },
  { id: 'convenience', name: 'Convenience', icon: '🏪' },
];

const CustomerHome = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate network request
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredStores = stores.filter(store => 
    activeCategory === 'all' ? true : store.category === activeCategory
  );

  return (
    <div className="min-h-full bg-background flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 pt-safe-top pb-4 sticky top-0 z-20 shadow-sm">
        <div className="flex items-center justify-between mt-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-soft">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Delivering to</p>
              <div className="flex items-center gap-1 text-primary font-bold">
                <MapPin size={16} />
                <span>Casablanca, Maarif</span>
              </div>
            </div>
          </div>
          <button className="relative p-2 bg-gray-50 rounded-full text-gray-600">
            <Bell size={20} />
            <span className="absolute top-1.5 right-2 w-2 h-2 bg-accent rounded-full border-2 border-white"></span>
          </button>
        </div>

        {/* Search Bar */}
        <div 
          onClick={() => navigate('/customer/search')}
          className="bg-gray-100 rounded-xl p-3 flex items-center gap-3 text-gray-500 cursor-text"
        >
          <Search size={20} />
          <span className="flex-1 font-medium text-sm">What are you craving?</span>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Categories */}
        <div>
          <div className="flex overflow-x-auto no-scrollbar gap-3 -mx-4 px-4 pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex flex-col items-center gap-2 min-w-[72px] transition-transform active:scale-95 ${
                  activeCategory === cat.id ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm transition-colors ${
                  activeCategory === cat.id ? 'bg-primary text-white shadow-primary/20' : 'bg-white'
                }`}>
                  {cat.icon}
                </div>
                <span className={`text-xs font-semibold ${
                  activeCategory === cat.id ? 'text-primary' : 'text-gray-600'
                }`}>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Section */}
        {activeCategory === 'all' && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-gray-900">Featured Today</h2>
              <button className="text-primary text-sm font-semibold flex items-center">
                See all <ChevronRight size={16} />
              </button>
            </div>
            
            <div className="flex overflow-x-auto no-scrollbar gap-4 -mx-4 px-4 pb-4">
              {isLoading ? (
                <>
                  <StoreCardSkeleton className="w-[280px] flex-shrink-0" />
                  <StoreCardSkeleton className="w-[280px] flex-shrink-0" />
                </>
              ) : (
                stores.slice(0, 3).map((store) => (
                  <Card 
                    key={`featured-${store.id}`} 
                    interactive 
                    onClick={() => navigate(`/customer/store/${store.id}`)}
                    className="w-[280px] flex-shrink-0"
                  >
                    <div className="relative h-36">
                      <img src={store.image} alt={store.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <h3 className="font-bold text-lg leading-tight">{store.name}</h3>
                        <p className="text-sm opacity-90">{store.description}</p>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>
        )}

        {/* Store List */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Nearby Stores</h2>
          <div className="space-y-4">
            {isLoading ? (
              <>
                <StoreCardSkeleton />
                <StoreCardSkeleton />
                <StoreCardSkeleton />
              </>
            ) : (
              filteredStores.map((store) => (
                <Card 
                  key={store.id} 
                  interactive 
                  onClick={() => navigate(`/customer/store/${store.id}`)}
                  className={!store.isOpen ? 'opacity-70 grayscale-[30%]' : ''}
                >
                  <div className="relative h-40">
                    <img src={store.image} alt={store.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                      <Badge variant={store.isOpen ? 'green' : 'red'}>
                        {store.isOpen ? 'Open' : 'Closed'}
                      </Badge>
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                        <Star size={12} className="text-yellow-400 fill-yellow-400" />
                        {store.rating}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-lg">{store.name}</h3>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">{store.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 font-medium">
                      <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                        <Clock size={14} className="text-primary" />
                        {store.deliveryTime}
                      </div>
                      <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                        <span className="text-primary">🛵</span>
                        {store.deliveryFee === 0 ? 'Free' : `${store.deliveryFee} MAD`}
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
            
            {!isLoading && filteredStores.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p>No stores found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerHome;
