'use client'

import { motion } from 'framer-motion'
import { Layers, Code2, Zap, Paintbrush, LucideIcon } from 'lucide-react'
import ProgressBar from '../ui/ProgressBar'
import { Course } from '../../types/index'

const iconMap: Record<string, LucideIcon> = {
  Layers: Layers,
  Code2: Code2,
  Zap: Zap,
  Paintbrush: Paintbrush,
}

interface CourseTileProps {
  course: Course
}

export default function CourseTile({ course }: CourseTileProps) {
  const Icon = iconMap[course.icon_name] || Layers

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        background: 'linear-gradient(135deg, #13131f 0%, #0f0f1a 100%)',
        borderRadius: '1rem',
        padding: '1.25rem',
        border: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        width: '100%',
      }}
    >
      {/* Corner glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(147,51,234,0.15), transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Icon */}
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          background: 'rgba(147, 51, 234, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '12px',
        }}>
          <Icon size={18} color="#a855f7" />
        </div>

        {/* Title */}
        <h3 style={{
          color: '#ffffff',
          fontWeight: 600,
          fontSize: '0.95rem',
          marginBottom: '4px',
        }}>
          {course.title}
        </h3>

        {/* Subtitle */}
        <p style={{
          color: '#6b7280',
          fontSize: '0.75rem',
          marginBottom: '8px',
        }}>
          Continue learning
        </p>

        {/* Progress Bar */}
        <ProgressBar progress={course.progress} />

      </div>
    </motion.article>
  )
}