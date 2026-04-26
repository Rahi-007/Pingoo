"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 8;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);
      }

      setProgress(Math.floor(value));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-black">
      {/* Logo Animation */}
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="mb-8">
        <h1 className="text-3xl font-bold text-blue-500">Pingoo</h1>
      </motion.div>

      {/* Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mb-6"
      />

      {/* Progress Text */}
      <motion.p key={progress} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-lg text-gray-700 dark:text-gray-300">
        {progress}%
      </motion.p>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-4 overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        />
      </div>

      {/* Bottom Text */}
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-sm text-gray-500 mt-4">
        Connecting...
      </motion.p>
    </div>
  );
}
