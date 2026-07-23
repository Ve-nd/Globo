import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Receipt, ChevronRight } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

const orders = [
  { id: 'ORD-8821', store: 'Pizza House', date: 'اليوم، 12:30 م', items: '2x مارجريتا، 1x كوكاكولا', total: 145, status: 'مكتمل' },
  { id: 'ORD-8742', store: 'Burger Factory', date: 'أمس، 8:15 م', items: '1x برجر كلاسيك، 1x بطاطس', total: 75, status: 'مكتمل' },
  { id: 'ORD-8610', store: 'Pharmacie Centrale', date: '12 أكتوبر، 10:00 ص', items: 'باراسيتامول، فيتامينات', total: 120, status: 'مكتمل' },
];

const CustomerOrders = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-gray-50 flex flex-col">
      <div className="bg-white px-4 pt-safe-top pb-4 sticky top-0 z-20 shadow-sm border-b border-gray-100">
        <h1 className="text-xl font-bold text-gray-900 mt-2">الطلبات السابقة</h1>
      </div>

      <div className="p-4 space-y-4">
        {orders.map((order) => (
          <Card key={order.id} interactive className="p-4 flex flex-col">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center">
                  <Receipt size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 leading-tight">{order.store}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{order.date}</p>
                </div>
              </div>
              <Badge variant="green">{order.status}</Badge>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-3 mb-3">
              <p className="text-sm text-gray-600 line-clamp-2">{order.items}</p>
            </div>
            
            <div className="flex items-center justify-between mt-auto">
              <span className="font-bold text-gray-900">{order.total} MAD</span>
              <button className="text-primary text-sm font-bold flex items-center">
                إعادة الطلب <ChevronRight size={16} />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CustomerOrders;