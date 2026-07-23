import React from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Store, ShoppingBag, Settings, LogOut, BarChart3, Users, MapPin, List } from 'lucide-react';

interface DashboardLayoutProps {
  role: 'merchant' | 'admin';
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ role }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const merchantLinks = [
    { path: '/merchant/dashboard', icon: BarChart3, label: 'لوحة التحكم' },
    { path: '/merchant/orders', icon: ShoppingBag, label: 'الطلبات' },
    { path: '/merchant/menu', icon: List, label: 'القائمة' },
    { path: '/merchant/settings', icon: Settings, label: 'الإعدادات' },
  ];

  const adminLinks = [
    { path: '/admin/dashboard', icon: BarChart3, label: 'نظرة عامة' },
    { path: '/admin/cities', icon: MapPin, label: 'المدن' },
    { path: '/admin/merchants', icon: Store, label: 'التاجر' },
    { path: '/admin/drivers', icon: Users, label: 'سائق' },
    { path: '/admin/settings', icon: Settings, label: 'الإعدادات' },
  ];

  const links = role === 'merchant' ? merchantLinks : adminLinks;

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 flex-col fixed inset-y-0 z-10">
        <div className="p-6">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div>
              <h1 className="font-bold text-xl leading-none">Globo</h1>
              <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-1">
                {role === 'merchant' ? 'تاجر' : 'مشرف'}
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {links.map((link) => {
            const isActive = location.pathname.includes(link.path);
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-orange-50 text-primary font-semibold' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-primary' : 'text-gray-400'} />
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 w-full transition-colors"
          >
            <LogOut size={20} className="text-gray-400" />
            الخروج إلى العرض التجريبي
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen overflow-x-hidden">
        {/* Mobile Header */}
        <div className="md:hidden bg-white border-b border-gray-100 p-4 sticky top-0 z-20 flex items-center justify-between">
          <div className="flex items-center gap-2" onClick={() => navigate('/')}>
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <h1 className="font-bold text-lg">Globo {role === 'admin' ? 'مشرف' : ''}</h1>
          </div>
          <button onClick={() => navigate('/')} className="text-sm text-gray-500 font-medium">خروج</button>
        </div>

        {/* Mobile Nav Tabs */}
        <div className="md:hidden bg-white border-b border-gray-100 flex overflow-x-auto no-scrollbar sticky top-[65px] z-10">
          {links.map((link) => {
            const isActive = location.pathname.includes(link.path);
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={`px-4 py-3 whitespace-nowrap text-sm font-medium border-b-2 transition-colors ${
                  isActive 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500'
                }`}
              >
                {link.label}
              </NavLink>
            );
          })}
        </div>

        <div className="p-4 md:p-8 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
};