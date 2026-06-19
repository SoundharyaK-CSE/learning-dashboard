'use client'

import { motion } from 'framer-motion'

export default function HeroTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
      style={{
        background: 'linear-gradient(135deg, #1a0533 0%, #0d1b4b 50%, #0a0a0f 100%)',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        overflow: 'hidden',
        transformOrigin: 'center center',
      }}
    >
      {/* Glow effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(147,51,234,0.3), transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ color: '#a855f7', fontSize: '0.8rem', marginBottom: '8px' }}>
          Tuesday, June 17
        </p>
        <h1 style={{
          color: '#ffffff',
          fontSize: '2.2rem',
          fontWeight: 700,
          marginBottom: '8px',
        }}>
          Welcome back, Alex! 👋
        </h1>
        <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>
          Ready to continue your learning journey?
        </p>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255,255,255,0.08)',
          padding: '8px 16px',
          borderRadius: '999px',
          border: '1px solid rgba(255,255,255,0.1)',
        }}>
          <span style={{ fontSize: '1.2rem' }}>🔥</span>
          <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.85rem' }}>
            7 Day Streak
          </span>
        </div>
      </div>
    </motion.article>
  )
}