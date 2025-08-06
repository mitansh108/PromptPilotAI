import React from 'react';
import SideNav from './_components/SideNav';

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-screen text-white">
      
      {/* Always-visible Top Navbar */}
      <SideNav />

      {/* Main Content */}
      <main className="pt-20 px-4">{children}</main> {/* pt-20 offsets navbar height */}
    </div>
  );
}

export default DashboardLayout;
