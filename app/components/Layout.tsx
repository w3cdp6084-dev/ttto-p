'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useSearchParams } from 'next/navigation';
import MenuComponent from './MenuComponent';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentChildren, setCurrentChildren] = useState(children);

  useEffect(() => {
    setCurrentChildren(children);
  }, [pathname, searchParams, children]);

  return (
    <div className="layout">
      <MenuComponent />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {currentChildren}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}