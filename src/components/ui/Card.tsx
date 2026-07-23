import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ 
  className = '', 
  children, 
  onClick,
  interactive = false,
  ...props 
}, ref) => {
  const interactiveStyles = interactive || onClick ? 'cursor-pointer hover:shadow-floating active:scale-[0.98] transition-all' : '';
  
  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      className={`bg-white rounded-2xl shadow-soft overflow-hidden ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = 'Card';
