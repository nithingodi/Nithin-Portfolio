
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Book, Briefcase, Home, LucideIcon, Star, Edit, Plus } from 'lucide-react';
import { Button } from './ui/button';

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
        active ? 'bg-analytics-blue text-white' : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
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
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 shadow-lg border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 
            className="text-2xl font-bold cursor-pointer text-white"
            onClick={() => navigate('/')}
          >
            Sai Nithin Godi
          </h1>
          <div className="hidden md:flex items-center gap-4">
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
        {title && <h2 className="text-3xl font-bold mb-6 text-white">{title}</h2>}
        {children}
      </main>
      
      {/* Floating edit buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <Button 
          className="rounded-full p-3 w-12 h-12 flex items-center justify-center bg-analytics-blue hover:bg-blue-700"
          title="Edit content"
        >
          <Edit size={20} />
        </Button>
        <Button 
          className="rounded-full p-3 w-12 h-12 flex items-center justify-center bg-green-600 hover:bg-green-700"
          title="Add new section"
        >
          <Plus size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Layout;
