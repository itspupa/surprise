"use client";

import { motion, AnimatePresence } from "framer-motion";

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupModal({ isOpen, onClose }: PopupModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
              }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.5, 
              y: 50,
              transition: {
                duration: 0.2
              }
            }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
                aria-label="Close"
              >
                ×
              </button>

              {/* Card Content */}
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-bold text-left" style={{ fontWeight: 700 }}>
                Thank you for coming into my life. Every day is more meaningful because of you. May this year be the year with the most smiles, and may Oleg be the happiest person in the world. I love you.💕
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

