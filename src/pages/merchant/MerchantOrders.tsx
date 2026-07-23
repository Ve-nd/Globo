import React, { useState } from 'react';
import { Check, Clock, Phone, MapPin, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { merchantOrders } from '../../data/mockData';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const MerchantOrders = () => {
  const [activeTab, setActiveTab] = useState<'new' | 'preparing' | 'ready'>('new');
  const [orders, setOrders] = useState(merchantOrders);

  const filteredOrders = orders.filter(o => o.status === activeTab);

  const updateOrderStatus = (id: string, newStatus: string) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  return (
    <div className=\"max-w-6xl mx-auto h-[calc(100vh-120px)] flex flex-col\">
      <div className=\"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6\">
        <div>
          <h1 className=\"text-2xl font-bold text-gray-900\">الطلبات الواردة</h1>
          <p className=\"text-gray-500 text-sm mt-1\">إدارة وتتبع الطلبات المباشرة.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className=\"flex gap-2 p-1 bg-gray-100 rounded-xl w-full md:w-auto mb-6\">
        {[
          { id: 'new', label: 'جديد', count: orders.filter(o => o.status === 'new').length, color: 'bg-red-500' },
          { id: 'preparing', label: 'قيد التحضير', count: orders.filter(o => o.status === 'preparing').length, color: 'bg-yellow-500' },
          { id: 'ready', label: 'جاهز', count: orders.filter(o => o.status === 'ready').length, color: 'bg-green-500' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 md:px-8 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === tab.id 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
            {tab.count > 0 && (
              <span className={`w-5 h-5 rounded-full text-[10px] text-white flex items-center justify-center ${tab.color} ${tab.id === 'new' ? 'animate-pulse' : ''}`}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Order Grid */}
      <div className=\"flex-1 overflow-y-auto no-scrollbar\">
        {filteredOrders.length === 0 ? (
          <div className=\"h-full flex flex-col items-center justify-center text-gray-400\">
            <div className=\"w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4\">
              <Check size={32} />
            </div>
            <h3 className=\"text-lg font-bold text-gray-900\">لا توجد طلبات {activeTab}</h3>
            <p className=\"text-sm\">أنت على اطلاع بكافة الطلبات.</p>
          </div>
        ) : (
          <div className=\"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4\">
            <AnimatePresence>
              {filteredOrders.map((order) => (
                <motion.div
                  key={order.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Card className=\"p-5 flex flex-col h-full border border-gray-100\">
                    <div className=\"flex justify-between items-start mb-4\">
                      <div>
                        <h3 className=\"font-extrabold text-lg text-gray-900\">{order.id}</h3>
                        <p className=\"text-gray-500 text-sm\">{order.customerName}</p>
                      </div>
                      <div className=\"text-right\">
                        <Badge variant={
                          order.status === 'new' ? 'red' : 
                          order.status === 'preparing' ? 'yellow' : 'green'
                        }>
                          {order.timeElapsed}
                        </Badge>
                      </div>
                    </div>

                    <div className=\"bg-gray-50 rounded-xl p-4 mb-4 flex-1\">
                      <ul className=\"space-y-3\">
                        {order.items.map((item, i) => (
                          <li key={i} className=\"flex justify-between text-sm\">
                            <span className=\"font-bold text-gray-900\">
                              <span className=\"text-primary mr-2\">{item.qty}x</span>
                              {item.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className=\"flex justify-between items-center mb-4\">
                      <span className=\"text-gray-500 text-sm\">الإجمالي</span>
                      <span className=\"font-extrabold text-lg text-primary\">{order.total} MAD</span>
                    </div>

                    <div className=\"mt-auto\">
                      {order.status === 'new' && (
                        <div className=\"flex gap-2\">
                          <Button variant=\"secondary\" className=\"flex-1\">إلغاء</Button>
                          <Button onClick={() => updateOrderStatus(order.id, 'preparing')} className=\"flex-1 bg-green-500 hover:bg-green-600 border-none shadow-none\">
                            قبول
                          </Button>
                        </div>
                      )}
                      {order.status === 'preparing' && (
                        <Button fullWidth onClick={() => updateOrderStatus(order.id, 'ready')}>
                          تحديد كجاهز
                        </Button>
                      )}
                      {order.status === 'ready' && (
                        <div className=\"text-center py-3 bg-green-50 text-green-700 font-bold rounded-xl text-sm border border-green-100\">
                          في انتظار السائق...
                        </div>
                      )}
                    </div>
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

export default MerchantOrders;