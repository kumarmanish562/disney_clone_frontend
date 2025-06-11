import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

/**
 * MainLayout component that provides a consistent layout structure across the application
 * Includes header, main content area, and footer
 */
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0617]">
      {/* Header stays fixed at the top */}
      <Header />
      
      {/* Main content area that grows to fill available space */}
      <main className="flex-grow pt-16 px-4 md:px-6">
        <Outlet />
      </main>
      
      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;