
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  ListChecks, 
  BarChart3, 
  FileText, 
  Calendar, 
  Users, 
  Settings,
  PieChart,
  AlertTriangle
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}

const SidebarItem = ({ icon, label, href, isActive }: SidebarItemProps) => (
  <Link
    to={href}
    className={cn(
      'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
      isActive 
        ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium' 
        : 'text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  const sidebarItems = [
    { icon: <LayoutDashboard size={18} />, label: 'Dashboard', href: '/' },
    { icon: <ListChecks size={18} />, label: 'Projects', href: '/projects' },
    { icon: <AlertTriangle size={18} />, label: 'Risks & Issues', href: '/risks' },
    { icon: <BarChart3 size={18} />, label: 'Reports', href: '/reports' },
    { icon: <PieChart size={18} />, label: 'Resources', href: '/resources' },
    { icon: <Calendar size={18} />, label: 'Timeline', href: '/timeline' },
    { icon: <FileText size={18} />, label: 'Documents', href: '/documents' },
    { icon: <Users size={18} />, label: 'Team', href: '/team' },
    { icon: <Settings size={18} />, label: 'Settings', href: '/settings' },
  ];

  return (
    <aside className="bg-sidebar h-screen w-64 border-r border-sidebar-border flex flex-col fixed">
      <div className="p-6">
        <h1 className="text-xl font-bold flex items-center gap-2 text-primary">
          <BarChart3 className="h-6 w-6" />
          Project Pulse
        </h1>
      </div>
      <nav className="px-3 py-2 flex-1 overflow-y-auto">
        <div className="space-y-1">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={pathname === item.href}
            />
          ))}
        </div>
      </nav>
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">
            PM
          </div>
          <div>
            <p className="text-sm font-medium">Project Manager</p>
            <p className="text-xs text-sidebar-foreground/80">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
