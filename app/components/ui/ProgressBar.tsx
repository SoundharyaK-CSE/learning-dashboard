'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  progress: number
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full mt-3">

      {/* Progress text */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-gray-500">Progress</span>
        <span className="text-xs font-bold text-purple-400">{progress}%</span>
      </div>

      {/* Track */}
      <div className="w-full h-1.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.08)' }}
      >
        {/* Animated Fill */}
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #9333ea, #3b82f6)'
          }}
        />
      </div>

    </div>
  )
}