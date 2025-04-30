'use client';

import { motion } from 'framer-motion';
import { Challenge } from '@/lib/questions';

export default function TruthCard({ challenge }: { challenge: Challenge }) {
  return (
    <motion.div
      className="card truth-card"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="card-corner top-left" />
      <div className="card-corner top-right" />
      <div className="card-corner bottom-left" />
      <div className="card-corner bottom-right" />
      
      <div className="card-content">
        <div className="card-badge truth">VÉRITÉ</div>
        <motion.p 
          className="card-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {challenge.text}
        </motion.p>
      </div>
      
      <div className="card-pattern" aria-hidden="true" />
    </motion.div>
  );
}