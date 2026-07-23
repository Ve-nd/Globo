import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, GripVertical } from 'lucide-react';
import { menuItems } from '../../data/mockData';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { ConfirmDialog } from '../../components/ui/ConfirmDialog';
import toast from 'react-hot-toast';

const MerchantMenu = () => {
  const [items, setItems] = useState(menuItems['1']); // Using Pizza House menu as mock
  const [search, setSearch] = useState('');
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(items.map(item => item.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = () => {
    if (itemToDelete) {
      setItems(items.filter(i => i.id !== itemToDelete));
      toast.success('Item deleted successfully');
      setItemToDelete(null);
    }
  };

  const toggleAvailability = (id: string) => {
    toast.success('Availability updated');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Menu Management</h1>
          <p className="text-gray-500 text-sm mt-1">Add, edit, or remove products from your menu.</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus size={20} />
          Add Product
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex-1 bg-gray-50 rounded-xl flex items-center px-3 border border-transparent focus-within:border-primary/30 focus-within:bg-white transition-colors">
          <Search size={20} className="text-gray-400 flex-shrink-0" />
          <input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-transparent p-3 text-sm focus:outline-none"
          />
        </div>
        
        <div className="flex overflow-x-auto no-scrollbar gap-2 md:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors ${
                activeCategory === cat 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map(item => (
          <Card key={item.id} className="p-4 flex gap-4">
            <div className="flex flex-col gap-2 items-center justify-center text-gray-300 cursor-move">
              <GripVertical size={20} />
            </div>
            
            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-gray-900 truncate">{item.name}</h3>
                <span className="font-bold text-primary whitespace-nowrap ml-2">{item.price} MAD</span>
              </div>
              <p className="text-xs text-gray-500 line-clamp-1 mb-2">{item.category}</p>
              
              <div className="flex items-center justify-between mt-3">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" defaultChecked onChange={() => toggleAvailability(item.id)} />
                    <div className="block bg-green-500 w-10 h-6 rounded-full transition-colors peer-checked:bg-green-500"></div>
                    <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform translate-x-4"></div>
                  </div>
                  <div className="ml-2 text-xs font-bold text-gray-600">Available</div>
                </label>

                <div className="flex gap-2">
                  <button className="p-1.5 text-gray-400 hover:text-primary transition-colors bg-gray-50 rounded-lg">
                    <Edit2 size={16} />
                  </button>
                  <button 
                    onClick={() => setItemToDelete(item.id)}
                    className="p-1.5 text-gray-400 hover:text-red-500 transition-colors bg-gray-50 rounded-lg"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <ConfirmDialog
        isOpen={!!itemToDelete}
        onClose={() => setItemToDelete(null)}
        onConfirm={handleDelete}
        title="Delete Product?"
        message="Are you sure you want to delete this product? This action cannot be undone."
        confirmText="Delete"
        isDanger={true}
      />
      
      <style>{`
        input:not(:checked) ~ .block { background-color: #D1D5DB; }
        input:not(:checked) ~ .dot { transform: translateX(0); }
      `}</style>
    </div>
  );
};

export default MerchantMenu;
