"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 10;

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
        <h1 className="text-4xl font-bold text-gray-700">Pingoo</h1>
      </motion.div>

      {/* Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-10 h-10 border-3 border-gray-800 border-t-transparent rounded-full mb-2"
      />

      {/* Progress Bar */}
      <div className="w-64 h-1 dark:bg-gray-600 rounded-full my-2 overflow-hidden">
        <motion.div
          className="h-full bg-gray-800"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        />
      </div>

      {/* Bottom Text */}
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-sm text-gray-700">
        Connecting...
      </motion.p>

      {/* Progress Text */}
      <motion.p key={progress} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-lg dark:text-gray-700">
        {progress}%
      </motion.p>
    </div>
  );
}
