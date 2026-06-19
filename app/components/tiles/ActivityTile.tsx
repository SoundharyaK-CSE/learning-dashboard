'use client'

import { motion } from 'framer-motion'

const activityData = [
  0, 1, 2, 3, 1, 0, 2,
  1, 3, 2, 0, 1, 2, 3,
  2, 1, 0, 3, 2, 1, 0,
  3, 2, 1, 0, 3, 2, 1,
  0, 1, 2, 3, 0, 1, 2,
  1, 0, 3, 2, 1, 0, 3,
  2, 1, 0, 1, 2, 3, 1,
]

const activityColors: Record<number, string> = {
  0: 'rgba(255,255,255,0.05)',
  1: 'rgba(88, 28, 135, 0.6)',
  2: 'rgba(147, 51, 234, 0.6)',
  3: 'rgba(192, 132, 252, 0.8)',
}

export default function ActivityTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        background: 'linear-gradient(135deg, #13131f 0%, #0f0f1a 100%)',
        borderRadius: '1rem',
        padding: '1.5rem',
        border: '1px solid rgba(255,255,255,0.08)',
        boxSizing: 'border-box',
        width: '100%',
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
      }}>
        <h2 style={{ color: '#ffffff', fontWeight: 600, fontSize: '1rem' }}>
          Learning Activity
        </h2>
        <span style={{ color: '#6b7280', fontSize: '12px' }}>Last 7 weeks</span>
      </div>

      {/* Activity Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 28px)',
        gap: '6px',
      }}>
        {activityData.map((level, index) => (
          <div
            key={index}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '4px',
              background: activityColors[level],
            }}
          />
        ))}
      </div>

      {/* Legend */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        marginTop: '16px',
      }}>
        <span style={{ color: '#6b7280', fontSize: '11px' }}>Less</span>
        {Object.values(activityColors).map((color, index) => (
          <div
            key={index}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '3px',
              background: color,
            }}
          />
        ))}
        <span style={{ color: '#6b7280', fontSize: '11px' }}>More</span>
      </div>

    </motion.article>
  )
}