import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Card } from '../../components/ui/Card';

const DriverHistory = () => {
  return (
    <div className="min-h-full bg-gray-50 flex flex-col">
      <div className="bg-white px-4 pt-safe-top pb-4 sticky top-0 z-20 shadow-sm border-b border-gray-100">
        <h1 className="text-xl font-bold text-gray-900 mt-2">السجل</h1>
      </div>

      <div className="p-4 space-y-4 pb-24">
        {[
          { date: 'اليوم', items: [
            { id: 'ORD-8921', store: 'Pizza House', customer: 'Karim B.', time: '14:30', earnings: 25 },
            { id: 'ORD-8910', store: 'Burger Factory', customer: 'Sara T.', time: '12:15', earnings: 18 }
          ]},
          { date: 'أمس', items: [
            { id: 'ORD-8855', store: 'Café Atlas', customer: 'Youssef M.', time: '19:45', earnings: 30 },
            { id: 'ORD-8842', store: 'Pharmacie Centrale', customer: 'Nadia R.', time: '16:20', earnings: 15 }
          ]}
        ].map(group => (
          <div key={group.date}>
            <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider px-1 mb-3">{group.date}</h3>
            <div className="space-y-3">
              {group.items.map(item => (
                <Card key={item.id} className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span className="font-bold text-gray-900">{item.id}</span>
                    </div>
                    <span className="font-bold text-primary">+{item.earnings} MAD</span>
                  </div>
                  
                  <div className="flex gap-4 relative pl-2 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                    <div className="flex-1">
                      <div className="relative mb-3">
                        <div className="absolute -left-3 top-1.5 w-2 h-2 bg-gray-900 rounded-full" />
                        <p className="text-sm font-bold text-gray-900 leading-tight">{item.store}</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-3 top-1.5 w-2 h-2 bg-primary rounded-full" />
                        <p className="text-sm font-medium text-gray-600 leading-tight">{item.customer}</p>
                      </div>
                    </div>
                    <div className="text-right flex flex-col justify-between">
                      <span className="text-xs text-gray-500 font-medium">{item.time}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverHistory;
