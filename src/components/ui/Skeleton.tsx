import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  type?: 'text' | 'circular' | 'rectangular';
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', type = 'rectangular' }) => {
  const baseClasses = 'bg-gray-200 animate-pulse';
  
  let typeClasses = '';
  if (type === 'circular') {
    typeClasses = 'rounded-full';
  } else if (type === 'rectangular') {
    typeClasses = 'rounded-xl';
  } else if (type === 'text') {
    typeClasses = 'rounded h-4 w-3/4';
  }

  return (
    <div className={`${baseClasses} ${typeClasses} ${className}`} />
  );
};

export const StoreCardSkeleton = ({ className = '' }: { className?: string }) => (
  <div className={`bg-white rounded-2xl shadow-soft overflow-hidden ${className}`}>
    <Skeleton className="w-full h-40" />
    <div className="p-4 space-y-3">
      <Skeleton className="h-6 w-2/3" />
      <div className="flex gap-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  </div>
);

export const ProductCardSkeleton = () => (
  <div className="bg-white rounded-xl shadow-sm p-4 flex gap-4">
    <div className="flex-1 space-y-2">
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-5 w-16 mt-2" />
    </div>
    <Skeleton className="w-24 h-24 rounded-lg flex-shrink-0" />
  </div>
);
