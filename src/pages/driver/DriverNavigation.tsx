import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Navigation, Phone, MessageCircle, MoreVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/ui/Button';

const DriverNavigation = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'heading_to_store' | 'at_store' | 'heading_to_customer'>('heading_to_store');

  const advanceStatus = () => {
    if (status === 'heading_to_store') setStatus('at_store');
    else if (status === 'at_store') setStatus('heading_to_customer');
    else navigate('/driver/home'); // Finish delivery
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col relative overflow-hidden">
      {/* Dynamic Header */}
      <div className="absolute top-0 inset-x-0 p-4 pt-safe-top z-20 flex justify-between items-center pointer-events-none">
        <div className="bg-gray-900/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-floating pointer-events-auto flex items-center gap-4 text-white w-full max-w-sm mx-auto">
          <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-primary">
            <Navigation size={24} className="transform rotate-45" />
          </div>
          <div className="flex-1">
            <p className="text-xl font-extrabold leading-none mb-1">
              {status === 'heading_to_store' ? '2.4 km' : status === 'at_store' ? 'Arrived' : '1.2 km'}
            </p>
            <p className="text-gray-400 text-sm font-medium truncate">
              {status === 'heading_to_store' ? 'Continue on Blvd Anfa' : status === 'at_store' ? 'Pick up order #8921' : 'Turn right on Rue des Oliviers'}
            </p>
          </div>
        </div>
      </div>

      {/* Map Area (Dark Mode Illustration) */}
      <div className="flex-1 bg-[#1A1F2C] relative w-full flex-shrink-0">
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
        
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {status === 'heading_to_store' && (
            <path d="M 150 350 L 200 200 L 250 150" fill="none" stroke="#FF8A3D" strokeWidth="8" strokeLinecap="round" />
          )}
          {status === 'heading_to_customer' && (
            <path d="M 250 150 L 100 100" fill="none" stroke="#FF8A3D" strokeWidth="8" strokeLinecap="round" strokeDasharray="10 10" />
          )}
        </svg>

        {/* Current Position Pin */}
        <div className="absolute left-[130px] top-[330px] w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center z-10 animate-pulse">
          <div className="w-6 h-6 bg-primary rounded-full shadow-[0_0_20px_rgba(255,138,61,0.6)]"></div>
        </div>

        {/* Destination Pin */}
        <div className="absolute left-[230px] top-[130px] w-12 h-12 bg-white rounded-full shadow-floating flex items-center justify-center z-10 border-4 border-gray-900 text-xl">
          🏪
        </div>
      </div>

      {/* Bottom Action Sheet */}
      <div className="bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-20 relative p-6 pb-safe flex flex-col -mt-4">
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" />

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-extrabold text-gray-900">
              {status === 'heading_to_store' ? 'Pizza House' : status === 'at_store' ? 'Pick up Order' : 'Amine L.'}
            </h2>
            <p className="text-gray-500 text-sm">
              {status === 'heading_to_store' ? 'Maarif, Casablanca' : status === 'at_store' ? 'Order #ORD-8921' : 'Apt 4B, Résidence les Palmiers'}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-900 flex items-center justify-center shadow-sm">
              <MessageCircle size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-sm">
              <Phone size={20} />
            </button>
          </div>
        </div>

        <Button 
          fullWidth 
          size="lg" 
          className="shadow-floating text-lg"
          onClick={advanceStatus}
        >
          {status === 'heading_to_store' ? 'Mark as Arrived' : 
           status === 'at_store' ? 'Confirm Pickup' : 
           'Swipe to Deliver'}
        </Button>
      </div>
    </div>
  );
};

export default DriverNavigation;
