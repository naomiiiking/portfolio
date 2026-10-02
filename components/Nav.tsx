'use client';

import { useEffect } from 'react';

interface NavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Nav({ activeTab, onTabChange }: NavProps) {
  const tabs = ['skills', 'experience', 'about', 'chat', 'contact'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeIndex = tabs.indexOf(activeTab);

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (activeIndex + 1) % tabs.length;
        onTabChange(tabs[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (activeIndex - 1 + tabs.length) % tabs.length;
        onTabChange(tabs[prevIndex]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, onTabChange]);

  return (
    <nav className="nav">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`nav-item ${activeTab === tab ? 'active' : ''}`}
          onClick={() => onTabChange(tab)}
          data-section={tab}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </nav>
  );
}
