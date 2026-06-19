'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroTile from './tiles/HeroTile'
import ActivityTile from './tiles/ActivityTile'
import CourseTile from './tiles/CourseTile'
import { Course } from '../types/index'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

interface BentoGridProps {
  courses: Course[]
}

export default function BentoGrid({ courses }: BentoGridProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))',
        gap: '16px',
        padding: isMobile ? '16px' : '24px',
        paddingBottom: isMobile ? '80px' : '24px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Hero Tile */}
      <motion.div
        variants={itemVariants}
        style={{ gridColumn: isMobile ? '1' : 'span 2', padding: '4px' }}
      >
        <HeroTile />
      </motion.div>

      {/* Course Tiles */}
      {courses.map((course) => (
        <motion.div
          key={course.id}
          variants={itemVariants}
          style={{ padding: '4px' }}
        >
          <CourseTile course={course} />
        </motion.div>
      ))}

      {/* Activity Tile */}
      <motion.div
        variants={itemVariants}
        style={{
          gridColumn: isMobile ? '1' : 'span 2',
          padding: '4px',
          paddingBottom: '16px',
        }}
      >
        <ActivityTile />
      </motion.div>

    </motion.main>
  )
}