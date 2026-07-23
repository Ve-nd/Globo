import React, { useState } from 'react';
import { Search, Store, MoreVertical, Edit2, Ban, ExternalLink } from 'lucide-react';
import { stores } from '../../data/mockData';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const AdminMerchants = () => {
  const [search, setSearch] = useState('');
  
  const filteredStores = stores.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Merchants</h1>
          <p className="text-gray-500 text-sm mt-1">Manage partner stores, restaurants, and shops.</p>
        </div>
        <Button>+ Add New Merchant</Button>
      </div>

      <Card className="overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="flex-1 bg-gray-50 rounded-xl flex items-center px-3 border border-transparent focus-within:border-primary/30 focus-within:bg-white transition-colors max-w-md">
            <Search size={20} className="text-gray-400 flex-shrink-0" />
            <input 
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search merchants..."
              className="w-full bg-transparent p-2 text-sm focus:outline-none"
            />
          </div>
          <select className="bg-gray-50 rounded-xl px-4 text-sm font-medium focus:outline-none border-none">
            <option>All Categories</option>
            <option>Restaurants</option>
            <option>Grocery</option>
            <option>Pharmacy</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Store</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Today's Orders</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Revenue (7d)</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredStores.map((store) => (
                <tr key={store.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                        <img src={store.image} alt={store.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{store.name}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          ⭐ {store.rating} ({Math.floor(Math.random() * 500) + 50} reviews)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="capitalize text-sm font-medium text-gray-600">{store.category}</span>
                  </td>
                  <td className="p-4">
                    <Badge variant={store.isOpen ? 'green' : 'gray'}>
                      {store.isOpen ? 'Active' : 'Closed'}
                    </Badge>
                  </td>
                  <td className="p-4 text-sm font-bold text-gray-900">
                    {Math.floor(Math.random() * 80) + 10}
                  </td>
                  <td className="p-4 text-sm font-bold text-primary">
                    {Math.floor(Math.random() * 20000) + 5000} MAD
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors bg-white rounded-lg shadow-sm border border-gray-100">
                        <ExternalLink size={16} />
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

export default AdminMerchants;
