export default function SkeletonCard() {
  return (
    <div className="rounded-2xl p-6 bg-[#111118] border border-white/10 animate-pulse">

      {/* Icon placeholder */}
      <div className="w-10 h-10 rounded-lg bg-white/10 mb-4" />

      {/* Title placeholder */}
      <div className="h-4 bg-white/10 rounded w-3/4 mb-2" />

      {/* Subtitle placeholder */}
      <div className="h-3 bg-white/10 rounded w-1/2 mb-6" />

      {/* Progress bar placeholder */}
      <div className="h-2 bg-white/10 rounded w-full" />

    </div>
  )
}