import { getCourses } from './lib/supabase'
import Sidebar from './components/sidebar/Sidebar'
import BentoGrid from './components/BentoGrid'
import SkeletonCard from './components/ui/SkeletonCard'
import { Suspense } from 'react'

async function DashboardContent() {
  const courses = await getCourses()
  return <BentoGrid courses={courses} />
}

function DashboardSkeleton() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '16px',
        padding: '24px',
      }}
    >
      <div
        style={{
          gridColumn: 'span 2',
          height: '12rem',
          borderRadius: '1rem',
          background: 'rgba(255,255,255,0.05)',
        }}
        className="animate-pulse"
      />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  )
}

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      width: '100vw',
      overflow: 'hidden',
      position: 'relative',
    }}>

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        minWidth: 0,
        maxWidth: '100%',
      }}>
        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardContent />
        </Suspense>
      </div>

    </div>
  )
}