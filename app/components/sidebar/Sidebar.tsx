'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, BookOpen, BarChart2, Settings } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: BookOpen, label: 'Courses' },
  { icon: BarChart2, label: 'Activity' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  const [active, setActive] = useState('Home')
  const [screenSize, setScreenSize] = useState('desktop')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScreenSize('mobile')
      } else if (width >= 768 && width < 1024) {
        setScreenSize('tablet')
      } else {
        setScreenSize('desktop')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Before mount — always show desktop sidebar
  // This prevents wrong layout on first render
  if (!mounted) {
    return (
      <nav style={{
        width: '220px',
        minHeight: '100vh',
        background: '#0d0d14',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 12px',
        flexShrink: 0,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 12px',
          marginBottom: '28px',
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #9333ea, #3b82f6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 700 }}>L</span>
          </div>
          <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '15px' }}>
            LearnDash
          </span>
        </div>
      </nav>
    )
  }

  // Mobile — bottom navigation
  if (screenSize === 'mobile') {
    return (
      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '64px',
        background: '#0d0d14',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        zIndex: 100,
        padding: '0 16px',
      }}>
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: active === item.label ? '#a855f7' : '#6b7280',
              padding: '8px',
            }}
          >
            <item.icon size={20} />
            <span style={{
              fontSize: '10px',
              fontWeight: active === item.label ? 600 : 400,
            }}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    )
  }

  // Tablet — icons only
  if (screenSize === 'tablet') {
    return (
      <nav style={{
        width: '64px',
        minHeight: '100vh',
        background: '#0d0d14',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 0',
        flexShrink: 0,
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #9333ea, #3b82f6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '28px',
        }}>
          <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 700 }}>L</span>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          width: '100%',
          alignItems: 'center',
        }}>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              style={{
                position: 'relative',
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: active === item.label ? '#a855f7' : '#6b7280',
              }}
            >
              {active === item.label && (
                <motion.div
                  layoutId="activeNavTablet"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '10px',
                    background: 'rgba(147, 51, 234, 0.15)',
                    border: '1px solid rgba(147, 51, 234, 0.25)',
                  }}
                />
              )}
              <item.icon size={18} style={{ position: 'relative', zIndex: 1 }} />
            </button>
          ))}
        </div>
      </nav>
    )
  }

  // Desktop — full sidebar
  return (
    <nav style={{
      width: '220px',
      minHeight: '100vh',
      background: '#0d0d14',
      borderRight: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 12px',
      flexShrink: 0,
    }}>

      {/* Logo */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '8px 12px',
        marginBottom: '28px',
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #9333ea, #3b82f6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 700 }}>L</span>
        </div>
        <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '15px' }}>
          LearnDash
        </span>
      </div>

      {/* Menu label */}
      <p style={{
        color: '#4b5563',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '0 12px',
        marginBottom: '8px',
      }}>
        Menu
      </p>

      {/* Nav Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 12px',
              borderRadius: '10px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              width: '100%',
              textAlign: 'left',
              color: active === item.label ? '#ffffff' : '#6b7280',
            }}
          >
            {active === item.label && (
              <motion.div
                layoutId="activeNav"
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '10px',
                  background: 'rgba(147, 51, 234, 0.15)',
                  border: '1px solid rgba(147, 51, 234, 0.25)',
                }}
              />
            )}
            <item.icon size={18} style={{ position: 'relative', zIndex: 1, flexShrink: 0 }} />
            <span style={{
              fontSize: '14px',
              fontWeight: active === item.label ? 600 : 400,
              position: 'relative',
              zIndex: 1,
            }}>
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Bottom section */}
      <div style={{ marginTop: 'auto', padding: '12px', paddingBottom: '24px' }}>
        <div style={{
          background: 'rgba(147, 51, 234, 0.1)',
          border: '1px solid rgba(147, 51, 234, 0.2)',
          borderRadius: '10px',
          padding: '12px',
        }}>
          <p style={{ color: '#a855f7', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
            Pro Plan
          </p>
          <p style={{ color: '#6b7280', fontSize: '11px' }}>
            Upgrade for more courses
          </p>
        </div>
      </div>

    </nav>
  )
}