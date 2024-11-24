'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Receipt, Users, Settings, Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

const menuItems = [
  { name: 'Dashboard', icon: Home, href: '/dashboard' },
  { name: 'Invoices', icon: Receipt, href: '/dashboard/invoices' },
  { name: 'Customers', icon: Users, href: '/dashboard/customers' },
  { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
];

export default function SideNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "fixed top-4 left-4 z-40 md:hidden p-2 rounded-lg shadow-lg transition-colors",
          "bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
        )}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={clsx(
        "fixed top-0 left-0 h-full transition-all duration-300 ease-in-out z-30",
        "bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700",
        isOpen ? 'w-64' : 'w-0 md:w-16'
      )}>
        {/* Logo Section */}
        <div className={clsx(
          "flex items-center justify-between h-16 px-4",
          "border-b border-gray-200 dark:border-gray-700"
        )}>
          <span className={clsx(
            "font-bold text-xl transition-opacity duration-300",
            isOpen ? 'opacity-100' : 'opacity-0 md:opacity-100'
          )}>
            Acme Inc
          </span>
          {isOpen && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center p-3 rounded-lg transition-all duration-200",
                  {
                    'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400': isActive,
                    'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700': !isActive
                  }
                )}
              >
                <Icon 
                  size={20} 
                  className={clsx({
                    'text-blue-600 dark:text-blue-400': isActive,
                    'text-gray-500 dark:text-gray-400': !isActive
                  })} 
                />
                <span className={clsx(
                  "ml-3 transition-opacity duration-300",
                  isOpen ? 'opacity-100' : 'opacity-0 md:opacity-100',
                  !isOpen && 'md:hidden'
                )}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Footer Section */}
        <div className={clsx(
          "absolute bottom-0 left-0 right-0 p-4",
          "border-t border-gray-200 dark:border-gray-700",
          isOpen ? 'block' : 'hidden md:block'
        )}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className={clsx(
              "transition-opacity duration-300",
              isOpen ? 'opacity-100' : 'opacity-0 md:hidden'
            )}>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">john@acme.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}