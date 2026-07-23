import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Navigation, Clock, Package } from 'lucide-react';
import { driverOrders } from '../../data/mockData';
import { Button } from '../../components/ui/Button';

const DriverOrder = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isAccepting, setIsAccepting] = useState(false);

  const order = driverOrders.find(o => o.id === id);

  if (!order) return <div className="p-8 text-center">Order not found</div>;

  const handleAccept = () => {
    setIsAccepting(true);
    setTimeout(() => {
      navigate('/driver/navigation');
    }, 1000);
  };

  return (
    <div className="min-h-full bg-gray-50 flex flex-col">
      <div className="bg-white p-4 pt-safe-top flex items-center border-b border-gray-100 sticky top-0 z-20">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold ml-2">Request {id}</h1>
      </div>

      <div className="p-4 flex-1 space-y-4 pb-32">
        {/* Map Preview Placeholder */}
        <div className="h-48 bg-[#E8F0F2] rounded-2xl relative overflow-hidden border border-gray-200">
          <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <path d="M 50 50 Q 150 100, 250 150" fill="none" stroke="#FF8A3D" strokeWidth="4" strokeDasharray="6 6" />
          </svg>
          <div className="absolute left-[30px] top-[30px] w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10 border-2 border-gray-900 text-lg">🏪</div>
          <div className="absolute left-[230px] top-[130px] w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10 border-2 border-primary text-lg">📍</div>
          
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm text-xs font-bold text-gray-700 flex items-center gap-1">
            <Navigation size={14} className="text-primary" /> {order.distance} km
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-5">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-900">Delivery Earnings</h2>
            <span className="text-2xl font-extrabold text-primary">{order.earnings} MAD</span>
          </div>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
            {/* Pickup */}
            <div className="relative">
              <div className="absolute -left-6 top-0 w-5 h-5 bg-white border-4 border-gray-900 rounded-full" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Pickup</p>
              <h3 className="font-bold text-gray-900 text-lg leading-tight">{order.storeName}</h3>
              <p className="text-sm text-gray-500 mt-1">{order.pickupArea}, Casablanca</p>
            </div>
            
            {/* Dropoff */}
            <div className="relative">
              <div className="absolute -left-6 top-0 w-5 h-5 bg-white border-4 border-primary rounded-full" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Drop-off</p>
              <h3 className="font-bold text-gray-900 text-lg leading-tight">{order.customerName}</h3>
              <p className="text-sm text-gray-500 mt-1">Apt 4B, Résidence les Palmiers...</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 flex items-center gap-2">
            <Package size={20} className="text-gray-400" />
            Order Details
          </h3>
          <ul className="space-y-2">
            <li className="flex justify-between text-sm">
              <span className="text-gray-600"><span className="font-bold text-gray-900 mr-2">1x</span> Margherita Pizza</span>
            </li>
            <li className="flex justify-between text-sm">
              <span className="text-gray-600"><span className="font-bold text-gray-900 mr-2">2x</span> Garlic Bread</span>
            </li>
          </ul>
          <div className="pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-yellow-600 bg-yellow-50 p-3 rounded-xl font-medium">
              <Clock size={16} /> Order is already paid online.
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-100 p-4 pb-safe z-30 md:max-w-md md:mx-auto">
        <div className="flex gap-3">
          <Button variant="secondary" className="w-1/3" onClick={() => navigate(-1)}>Decline</Button>
          <Button className="w-2/3 shadow-floating" isLoading={isAccepting} onClick={handleAccept}>Accept Order</Button>
        </div>
      </div>
    </div>
  );
};

export default DriverOrder;
