function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex flex-col items-center text-center animate-pulse">
        {/* Avatar skeleton */}
        <div className="w-20 h-20 bg-slate-200 rounded-full mb-4"></div>

        {/* Name skeleton */}
        <div className="h-6 bg-slate-200 rounded-md w-32 mb-1"></div>

        {/* Subtitle skeleton */}
        <div className="h-4 bg-slate-200 rounded-md w-24 mb-2"></div>

        {/* Country skeleton */}
        <div className="h-4 bg-slate-200 rounded-md w-20 mb-3"></div>

        {/* Email skeleton */}
        <div className="h-4 bg-slate-200 rounded-md w-40"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;
