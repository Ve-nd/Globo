import React from 'react';
import { Outlet } from 'react-router-dom';

interface MobileLayoutProps {
  bottomNav?: React.ReactNode;
}

export const MobileLayout: React.FC<MobileLayoutProps> = ({ bottomNav }) => {
  return (
    <div className="min-h-[100dvh] bg-background w-full md:max-w-md md:mx-auto md:border-x md:border-gray-200 md:shadow-2xl relative flex flex-col">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
        <Outlet />
      </div>
      {bottomNav}
    </div>
  );
};
