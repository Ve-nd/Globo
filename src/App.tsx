import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Layouts
import { MobileLayout } from './components/layouts/MobileLayout';
import { DashboardLayout } from './components/layouts/DashboardLayout';
import { CustomerBottomNav, DriverBottomNav } from './components/ui/BottomNav';

import WelcomeScreen from './pages/WelcomeScreen';

import CustomerHome from './pages/customer/CustomerHome';
import CustomerStore from './pages/customer/CustomerStore';
import CustomerCart from './pages/customer/CustomerCart';
import CustomerCheckout from './pages/customer/CustomerCheckout';
import CustomerTracking from './pages/customer/CustomerTracking';
import CustomerReview from './pages/customer/CustomerReview';
import CustomerSearch from './pages/customer/CustomerSearch';
import CustomerProfile from './pages/customer/CustomerProfile';
import CustomerOrders from './pages/customer/CustomerOrders';

import MerchantDashboard from './pages/merchant/MerchantDashboard';
import MerchantOrders from './pages/merchant/MerchantOrders';
import MerchantMenu from './pages/merchant/MerchantMenu';
import MerchantSettings from './pages/merchant/MerchantSettings';

import DriverHome from './pages/driver/DriverHome';
import DriverOrder from './pages/driver/DriverOrder';
import DriverNavigation from './pages/driver/DriverNavigation';
import DriverEarnings from './pages/driver/DriverEarnings';
import DriverHistory from './pages/driver/DriverHistory';
import DriverProfile from './pages/driver/DriverProfile';

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminMerchants from './pages/admin/AdminMerchants';
import AdminDrivers from './pages/admin/AdminDrivers';
import AdminCities from './pages/admin/AdminCities';
import AdminSettings from './pages/admin/AdminSettings';

// All components imported above

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Welcome Screen */}
        <Route path="/" element={<WelcomeScreen />} />

        {/* Customer App */}
        <Route path="/customer" element={<MobileLayout bottomNav={<CustomerBottomNav />} />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<CustomerHome />} />
          <Route path="search" element={<CustomerSearch />} />
          <Route path="orders" element={<CustomerOrders />} />
          <Route path="profile" element={<CustomerProfile />} />
          <Route path="store/:id" element={<CustomerStore />} />
          <Route path="cart" element={<CustomerCart />} />
          <Route path="checkout" element={<CustomerCheckout />} />
          <Route path="tracking" element={<CustomerTracking />} />
          <Route path="review" element={<CustomerReview />} />
        </Route>

        {/* Merchant Dashboard */}
        <Route path="/merchant" element={<DashboardLayout role="merchant" />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<MerchantDashboard />} />
          <Route path="orders" element={<MerchantOrders />} />
          <Route path="menu" element={<MerchantMenu />} />
          <Route path="settings" element={<MerchantSettings />} />
        </Route>

        {/* Driver App */}
        <Route path="/driver" element={<MobileLayout bottomNav={<DriverBottomNav />} />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<DriverHome />} />
          <Route path="earnings" element={<DriverEarnings />} />
          <Route path="history" element={<DriverHistory />} />
          <Route path="profile" element={<DriverProfile />} />
          <Route path="order/:id" element={<DriverOrder />} />
          <Route path="navigation" element={<DriverNavigation />} />
        </Route>

        {/* Admin Dashboard */}
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="cities" element={<AdminCities />} />
          <Route path="merchants" element={<AdminMerchants />} />
          <Route path="drivers" element={<AdminDrivers />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

      </Routes>
    </AnimatePresence>
  );
}

export default App;
