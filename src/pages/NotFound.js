
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <motion.div
      className="p-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <AlertTriangle size={48} className="text-red-500" />
        <h2 className="text-3xl font-bold">404 - Page Not Found</h2>
        <p className="text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <ArrowLeft /> Go Home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
