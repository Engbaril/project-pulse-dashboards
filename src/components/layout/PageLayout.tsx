
import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

interface PageLayoutProps {
  children: React.ReactNode;
  showFilters?: boolean;
}

const PageLayout = ({ children, showFilters = false }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-64">
        <TopBar showFilters={showFilters} />
        <main className="pt-20 px-6 pb-6">{children}</main>
      </div>
    </div>
  );
};

export default PageLayout;
