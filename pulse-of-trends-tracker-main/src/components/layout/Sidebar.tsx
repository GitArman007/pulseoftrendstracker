import { Link } from 'react-router-dom';
import { Home, TrendingUp, Search, BarChart3, Settings, LogOut, Shirt, Camera, Lamp, Smartphone, Cpu, Lightbulb, BookOpen, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <aside className={cn('flex h-screen w-16 lg:w-64 flex-col bg-sidebar', className)}>
      <div className="flex h-16 items-center justify-center lg:justify-start px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white">
            <TrendingUp className="h-5 w-5" />
          </div>
          <span className="hidden text-xl font-semibold text-sidebar-foreground lg:block">
            TrendsObserver
          </span>
        </div>
      </div>
      <nav className="flex-1 space-y-2 p-2">
        <SidebarItem icon={<Home />} label="Dashboard" href="/" />
        <SidebarItem icon={<TrendingUp />} label="Trends" href="/trends" />
        <SidebarItem icon={<Search />} label="Explore" href="/explore" />
        <SidebarItem icon={<BarChart3 />} label="Analytics" href="/analytics" />
        
        {/* Category Submenu */}
        <div className="pt-2 pb-1">
          <div className="px-3 text-xs font-semibold text-muted-foreground uppercase hidden lg:block">
            Categories
          </div>
        </div>
        <SidebarItem 
          icon={<Shirt />} 
          label="Fashion" 
          href="/categories/fashion" 
          color="#EC4899"
        />
        <SidebarItem 
          icon={<Smartphone />} 
          label="Gadgets" 
          href="/categories/gadgets" 
          color="#0EA5E9"
        />
        <SidebarItem 
          icon={<Lamp />} 
          label="Decoration" 
          href="/categories/decoration" 
          color="#8B5CF6"
        />
        <SidebarItem 
          icon={<Camera />} 
          label="Photography" 
          href="/categories/photography" 
          color="#14B8A6"
        />
        <SidebarItem 
          icon={<Cpu />} 
          label="Technology" 
          href="/categories/technology" 
          color="#F97316"
        />
        <SidebarItem 
          icon={<Lightbulb />} 
          label="Skills" 
          href="/categories/skills" 
          color="#10B981"
        />
        <SidebarItem 
          icon={<BookOpen />} 
          label="Books" 
          href="/categories/books" 
          color="#6366F1"
        />
        <SidebarItem 
          icon={<Gift />} 
          label="Gifts" 
          href="/categories/gifts" 
          color="#F59E0B"
        />
      </nav>
      <div className="p-2">
        <SidebarItem icon={<Settings />} label="Settings" href="/settings" />
        <SidebarItem icon={<LogOut />} label="Logout" href="/logout" />
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  color?: string;
}

const SidebarItem = ({ icon, label, href, color }: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className="flex h-10 items-center rounded-md px-3 py-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
    >
      <span className="mr-3" style={color ? { color } : undefined}>{icon}</span>
      <span className="hidden lg:block">{label}</span>
    </Link>
  );
};

export default Sidebar;
