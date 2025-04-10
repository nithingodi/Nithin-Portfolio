
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Book, Briefcase, Home, LucideIcon, Star } from 'lucide-react';

interface NavItemProps {
  label: string;
  icon: LucideIcon;
  path: string;
  active: boolean;
}

const NavItem = ({ label, icon: Icon, path, active }: NavItemProps) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer transition-all ${
        active ? 'bg-analytics-blue text-white' : 'hover:bg-gray-100'
      }`}
      onClick={() => navigate(path)}
    >
      <Icon size={20} />
      <span>{label}</span>
    </div>
  );
};

interface LayoutProps {
  children: ReactNode;
  title?: string;
  activePage?: string;
}

const Layout = ({ children, title, activePage = '' }: LayoutProps) => {
  const navigate = useNavigate();
  
  const navItems = [
    { label: 'Home', icon: Home, path: '/' },
    { label: 'Projects', icon: BarChart3, path: '/projects' },
    { label: 'Work Experience', icon: Briefcase, path: '/work-experience' },
    { label: 'Education', icon: Book, path: '/education' },
    { label: 'Skills', icon: Star, path: '/skills' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 
            className="text-2xl font-bold cursor-pointer"
            onClick={() => navigate('/')}
          >
            Sai Nithin Godi
          </h1>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavItem
                key={item.path}
                label={item.label}
                icon={item.icon}
                path={item.path}
                active={activePage === item.path.substring(1) || (activePage === '' && item.path === '/')}
              />
            ))}
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {title && <h2 className="text-3xl font-bold mb-6">{title}</h2>}
        {children}
      </main>
    </div>
  );
};

export default Layout;
