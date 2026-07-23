import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Clock, Star } from 'lucide-react';
import { stores } from '../../data/mockData';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

const recentSearches = ['بيتزا', 'برجر', 'سوشي', 'صيدلية'];

const CustomerSearch = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('الكل');

  const filters = ['الكل', 'الأعلى تقييماً', 'أقل من 30 دقيقة', 'توصيل مجاني'];

  const getFilteredStores = () => {
    let result = stores;
    
    if (query) {
      result = result.filter(s => 
        s.name.toLowerCase().includes(query.toLowerCase()) || 
        s.category.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    if (activeFilter === 'الأعلى تقييماً') result = result.filter(s => s.rating >= 4.7);
    if (activeFilter === 'أقل من 30 دقيقة') result = result.filter(s => parseInt(s.deliveryTime) <= 30);
    if (activeFilter === 'توصيل مجاني') result = result.filter(s => s.deliveryFee === 0);
    
    return result;
  };

  const results = getFilteredStores();

  return (
    <div className="min-h-full bg-background flex flex-col">
      <div className="bg-white px-4 pt-safe-top pb-3 sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-3 mt-2">
          <div className="flex-1 bg-gray-100 rounded-xl flex items-center px-3 border border-transparent focus-within:border-primary/30 focus-within:bg-white transition-colors">
            <Search size={20} className="text-gray-400 flex-shrink-0" />
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="بحث عن متاجر أو عناصر..."
              className="w-full bg-transparent p-3 text-sm focus:outline-none"
              autoFocus
            />
            {query && (
              <button onClick={() => setQuery('')} className="p-1 text-gray-400 hover:text-gray-600">
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="flex overflow-x-auto no-scrollbar gap-2 mt-4 pb-1">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                activeFilter === filter 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 flex-1">
        {!query && activeFilter === 'الكل' ? (
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">عمليات البحث الأخيرة</h3>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map(item => (
                <button
                  key={item}
                  onClick={() => setQuery(item)}
                  className="px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm text-gray-600 shadow-sm hover:border-primary/30 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 mb-2">
              {results.length} نتيجة
            </h3>
            
            {results.length > 0 ? (
              results.map(store => (
                <Card 
                  key={store.id} 
                  interactive 
                  onClick={() => navigate(`/customer/store/${store.id}`)}
                  className="flex overflow-hidden h-28"
                >
                  <div className="w-28 flex-shrink-0 relative">
                    <img src={store.image} alt={store.name} className="w-full h-full object-cover" />
                    {!store.isOpen && (
                      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
                        <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">مغلق</span>
                      </div>
                    )}
                  </div>
                  <div className="p-3 flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-gray-900 leading-tight mb-1">{store.name}</h4>
                      <div className="flex items-center gap-1 text-xs font-bold bg-gray-50 px-1.5 py-0.5 rounded">
                        <Star size={10} className="text-yellow-400 fill-yellow-400" />
                        {store.rating}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-2 line-clamp-1">{store.description}</p>
                    <div className="flex items-center gap-3 text-[10px] text-gray-500 font-medium">
                      <div className="flex items-center gap-1">
                        <Clock size={12} /> {store.deliveryTime}
                      </div>
                      <div className="flex items-center gap-1 text-primary">
                        🛵 {store.deliveryFee === 0 ? 'مجاني' : `${store.deliveryFee} درهم`}
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                  <Search size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">لا توجد نتائج</h3>
                <p className="text-sm text-gray-500">حاول البحث عن شيء آخر</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerSearch;