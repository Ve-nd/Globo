import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Search, Receipt, User, Compass, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const CustomerBottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/customer/home', icon: Home, label: 'الرئيسية' },
    { path: '/customer/search', icon: Search, label: 'بحث' },
    { path: '/customer/orders', icon: Receipt, label: 'الطلبات' },
    { path: '/customer/profile', icon: User, label: 'الملف الشخصي' },
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-100 pb-safe md:hidden z-30">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname.includes(item.path);
          const Icon = item.icon;
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center w-full h-full relative"
            >
              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute top-0 inset-x-0 h-1 bg-primary rounded-b-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon 
                size={24} 
                className={`mb-1 transition-colors ${isActive ? 'text-primary' : 'text-gray-400'}`} 
              />
              <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export const DriverBottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/driver/home', icon: Compass, label: 'متاح' },
    { path: '/driver/earnings', icon: Receipt, label: 'الأرباح' },
    { path: '/driver/history', icon: Clock, label: 'السجل' },
    { path: '/driver/profile', icon: User, label: 'الملف الشخصي' },
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-100 pb-safe md:hidden z-30">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname.includes(item.path);
          const Icon = item.icon;
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center w-full h-full relative"
            >
              {isActive && (
                <motion.div
                  layoutId="driverNavIndicator"
                  className="absolute top-0 inset-x-0 h-1 bg-primary rounded-b-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon 
                size={24} 
                className={`mb-1 transition-colors ${isActive ? 'text-primary' : 'text-gray-400'}`} 
              />
              <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};