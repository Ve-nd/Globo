import React from 'react';
import { Button } from './Button';
import { motion } from 'framer-motion';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionText,
  onAction
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center text-center p-8 h-full min-h-[300px]"
    >
      <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 mb-6 shadow-inner">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 max-w-sm mb-8">{description}</p>
      
      {actionText && onAction && (
        <Button onClick={onAction}>
          {actionText}
        </Button>
      )}
    </motion.div>
  );
};