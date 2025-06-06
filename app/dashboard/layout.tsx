import React from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-screen text-white">
      {/* Top Navbar */}
     

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-84">
          <SideNav />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:pl-8">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
