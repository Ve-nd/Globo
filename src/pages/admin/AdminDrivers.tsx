import React, { useState } from 'react';
import { Search, MapPin, Star, MoreVertical, Ban, ShieldCheck, Navigation } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const mockDrivers = [
  { id: 'D-101', name: 'Youssef B.', phone: '+212 6 11 22 33 44', status: 'online', ordersToday: 12, rating: 4.9, earnings: 450, location: 'Maarif' },
  { id: 'D-102', name: 'Karim M.', phone: '+212 6 22 33 44 55', status: 'busy', ordersToday: 8, rating: 4.7, earnings: 310, location: 'Gauthier' },
  { id: 'D-103', name: 'Amine S.', phone: '+212 6 33 44 55 66', status: 'offline', ordersToday: 0, rating: 4.8, earnings: 0, location: 'Ain Diab' },
  { id: 'D-104', name: 'Hassan L.', phone: '+212 6 44 55 66 77', status: 'online', ordersToday: 15, rating: 4.6, earnings: 520, location: 'Bourgogne' },
  { id: 'D-105', name: 'Omar T.', phone: '+212 6 55 66 77 88', status: 'offline', ordersToday: 4, rating: 4.5, earnings: 120, location: 'Oulfa' },
];

const AdminDrivers = () => {
  const [search, setSearch] = useState('');

  const filteredDrivers = mockDrivers.filter(d => 
    d.name.toLowerCase().includes(search.toLowerCase()) || 
    d.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">أسطول التوصيل</h1>
          <p className="text-gray-500 text-sm mt-1">إدارة شركاء التوصيل وتتبع حالتهم.</p>
        </div>
        <Button>+ إضافة سائق جديد</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="p-4 flex items-center gap-4 border-l-4 border-green-500">
          <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
            <Navigation size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">متاح للعمل</p>
            <h3 className="text-2xl font-extrabold text-gray-900">42</h3>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-4 border-l-4 border-yellow-500">
          <div className="w-12 h-12 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center">
            <Navigation size={24} className="transform rotate-45" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">قيد التوصيل</p>
            <h3 className="text-2xl font-extrabold text-gray-900">28</h3>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-4 border-l-4 border-gray-300">
          <div className="w-12 h-12 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center">
            <Ban size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">غير متاح</p>
            <h3 className="text-2xl font-extrabold text-gray-900">14</h3>
          </div>
        </Card>
      </div>

      <Card className="overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="flex-1 bg-gray-50 rounded-xl flex items-center px-3 border border-transparent focus-within:border-primary/30 focus-within:bg-white transition-colors max-w-md">
            <Search size={20} className="text-gray-400 flex-shrink-0" />
            <input 
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="بحث بالاسم أو المعرف..."
              className="w-full bg-transparent p-2 text-sm focus:outline-none"
            />
          </div>
          <select className="bg-gray-50 rounded-xl px-4 text-sm font-medium focus:outline-none border-none">
            <option>جميع الحالات</option>
            <option>متاح</option>
            <option>مشغول</option>
            <option>غير متاح</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">سائق</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">الحالة</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">المدينة</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">طلبات اليوم</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">أرباح اليوم</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredDrivers.map((driver) => (
                <tr key={driver.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                        <img src={`https://ui-avatars.com/api/?name=${driver.name}&background=random`} alt={driver.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{driver.name}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>{driver.id}</span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full" />
                          <span className="flex items-center text-yellow-500 font-bold"><Star size={10} className="fill-yellow-500 mr-0.5" /> {driver.rating}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge variant={driver.status === 'online' ? 'green' : driver.status === 'busy' ? 'yellow' : 'gray'}>
                      {driver.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
                      <MapPin size={14} className="text-gray-400" /> {driver.location}
                    </div>
                  </td>
                  <td className="p-4 text-sm font-bold text-gray-900">
                    {driver.ordersToday}
                  </td>
                  <td className="p-4 text-sm font-bold text-primary">
                    {driver.earnings} درهم
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors bg-white rounded-lg shadow-sm border border-gray-100">
                        <ShieldCheck size={16} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors bg-white rounded-lg shadow-sm border border-gray-100">
                        <Ban size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AdminDrivers;