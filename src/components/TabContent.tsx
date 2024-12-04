import React, { useEffect, useState } from 'react';

interface TabContentProps {
  active: boolean;
  children: React.ReactNode;
}

export function TabContent({ active, children }: TabContentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (active) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [active]);

  if (!active && !isVisible) return null;

  return (
    <div
      className={`transition-all duration-300 ${
        active
          ? 'opacity-100 transform translate-y-0'
          : 'opacity-0 transform translate-y-4'
      }`}
    >
      {children}
    </div>
  );
}