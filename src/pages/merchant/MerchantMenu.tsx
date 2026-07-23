  1: import React, { useState } from 'react';
  2: import { Plus, Search, Edit2, Trash2, GripVertical } from 'lucide-react';
  3: import { menuItems } from '../../data/mockData';
  4: import { Card } from '../../components/ui/Card';
  5: import { Badge } from '../../components/ui/Badge';
  6: import { Button } from '../../components/ui/Button';
  7: import { ConfirmDialog } from '../../components/ui/ConfirmDialog';
  8: import toast from 'react-hot-toast';
  9: 
 10: const MerchantMenu = () => {
 11:   const [items, setItems] = useState(menuItems['1']); // Using Pizza House menu as mock
 12:   const [search, setSearch] = useState('');
 13:   const [itemToDelete, setItemToDelete] = useState<string | null>(null);
 14: 
 15:   const categories = ['الكل', ...Array.from(new Set(items.map(item => item.category)))];
 16:   const [activeCategory, setActiveCategory] = useState('الكل');
 17: 
 18:   const filteredItems = items.filter(item => {
 19:     const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
 20:     const matchesCategory = activeCategory === 'الكل' || item.category === activeCategory;
 21:     return matchesSearch && matchesCategory;
 22:   });
 23: 
 24:   const handleDelete = () => {
 25:     if (itemToDelete) {
 26:       setItems(items.filter(i => i.id !== itemToDelete));
 27:       toast.success('تم الحذف بنجاح');
 28:       setItemToDelete(null);
 29:     }
 30:   };
 31: 
 32:   const toggleAvailability = (id: string) => {
 33:     toast.success('تم تحديث حالة التوفر');
 34:   };
 35: 
 36:   return (
 37:     <div className=\"max-w-6xl mx-auto space-y-6\">\n 38:       <div className=\"flex flex-col md:flex-row md:items-center justify-between gap-4\">\n 39:         <div>\n 40:           <h1 className=\"text-2xl font-bold text-gray-900\">إدارة القائمة</h1>\n 41:           <p className=\"text-gray-500 text-sm mt-1\">إضافة، تعديل، أو إزالة المنتجات من قائمتك.</p>\n 42:         </div>\n 43:         <Button className=\"flex items-center gap-2\">\n 44:           <Plus size={20} />\n 45:           إضافة منتج\n 46:         </Button>\n 47:       </div>\n 48: \n 49:       <div className=\"flex flex-col md:flex-row gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100\">\n 50:         <div className=\"flex-1 bg-gray-50 rounded-xl flex items-center px-3 border border-transparent focus-within:border-primary/30 focus-within:bg-white transition-colors\">\n 51:           <Search size={20} className=\"text-gray-400 flex-shrink-0\" />\n 52:           <input \n 53:             type=\"text\"\n 54:             value={search}\n 55:             onChange={(e) => setSearch(e.target.value)}\n 56:             placeholder=\"بحث عن المنتجات...\"\n 57:             className=\"w-full bg-transparent p-3 text-sm focus:outline-none\"\n 58:           />\n 59:         </div>\n 60:         \n 61:         <div className=\"flex overflow-x-auto no-scrollbar gap-2 md:w-auto\">\n 62:           {categories.map(cat => (\n 63:             <button\n 64:               key={cat}\n 65:               onClick={() => setActiveCategory(cat)}\n 66:               className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors ${\n 67:                 activeCategory === cat \n 68:                   ? 'bg-gray-900 text-white' \n 69:                   : 'bg-gray-50 text-gray-600 hover:bg-gray-100'\n 70:               }`}\n 71:             >\n 72:               {cat}\n 73:             </button>\n 74:           ))}\n 75:         </div>\n 76:       </div>\n 77: \n 78:       <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n 79:         {filteredItems.map(item => (\n 80:           <Card key={item.id} className=\"p-4 flex gap-4\">\n 81:             <div className=\"flex flex-col gap-2 items-center justify-center text-gray-300 cursor-move\">\n 82:               <GripVertical size={20} />\n 83:             </div>\n 84:             \n 85:             <div className=\"w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100\">\n 86:               <img src={item.image} alt={item.name} className=\"w-full h-full object-cover\" />\n 87:             </div>\n 88: \n 89:             <div className=\"flex-1 min-w-0\">\n 90:               <div className=\"flex justify-between items-start mb-1\">\n 91:                 <h3 className=\"font-bold text-gray-900 truncate\">{item.name}</h3>\n 92:                 <span className=\"font-bold text-primary whitespace-nowrap ml-2\">{item.price} MAD</span>\n 93:               </div>\n 94:               <p className=\"text-xs text-gray-500 line-clamp-1 mb-2\">{item.category}</p>\n 95:               \n 96:               <div className=\"flex items-center justify-between mt-3\">\n 97:                 <label className=\"flex items-center cursor-pointer\">\n 98:                   <div className=\"relative\">\n 99:                     <input type=\"checkbox\" className=\"sr-only\" defaultChecked onChange={() => toggleAvailability(item.id)} />\n100:                     <div className=\"block bg-green-500 w-10 h-6 rounded-full transition-colors peer-checked:bg-green-500\"></div>\n101:                     <div className=\"dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform translate-x-4\"></div>\n102:                   </div>\n103:                   <div className=\"ml-2 text-xs font-bold text-gray-600\">متاح</div>\n104:                 </label>\n105: \n106:                 <div className=\"flex gap-2\">\n107:                   <button className=\"p-1.5 text-gray-400 hover:text-primary transition-colors bg-gray-50 rounded-lg\">\n108:                     <Edit2 size={16} />\n109:                   </button>\n110:                   <button \n111:                     onClick={() => setItemToDelete(item.id)}\n112:                     className=\"p-1.5 text-gray-400 hover:text-red-500 transition-colors bg-gray-50 rounded-lg\"\n113:                   >\n114:                     <Trash2 size={16} />\n115:                   </button>\n116:                 </div>\n117:               </div>\n118:             </div>\n119:           </Card>\n120:         ))}\n121:       </div>\n122: \n123:       <ConfirmDialog\n124:         isOpen={!!itemToDelete}\n125:         onClose={() => setItemToDelete(null)}\n126:         onConfirm={handleDelete}\n127:         title=\"حذف المنتج؟\"\n128:         message=\"هل أنت متأكد من رغبتك في حذف هذا المنتج؟ لا يمكن التراجع عن هذا الإجراء.\"\n129:         confirmText=\"حذف\"\n130:         isDanger={true}\n131:       />\n132:       \n133:       <style>{`\n134:         input:not(:checked) ~ .block { background-color: #D1D5DB; }\n135:         input:not(:checked) ~ .dot { transform: translateX(0); }\n136:       `}</style>\n137:     </div>\n138:   );\n139: };\n140: \n141: export default MerchantMenu;