'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={isVisible ? "enter" : "hidden"}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}