// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] flex flex-col">
      {/* Header skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/98 shadow-[0px_4px_24px_rgba(0,59,122,0.08)] flex items-center px-6">
        <div className="container-max w-full flex items-center justify-between">
          <div className="h-9 w-36 bg-gray-100 rounded-xl animate-pulse" />
          <div className="hidden lg:flex items-center gap-2">
            {[80, 72, 68, 80, 64, 56, 72].map((w, i) => (
              <div
                key={i}
                className="h-8 rounded-xl bg-gray-100 animate-pulse"
                style={{ width: w, animationDelay: `${i * 60}ms` }}
              />
            ))}
          </div>
          <div className="h-9 w-24 bg-gold/20 rounded-xl animate-pulse" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="pt-20">
        <div
          className="bg-primary relative overflow-hidden"
          style={{ height: "clamp(360px, 45vw, 560px)" }}
        >
          {/* Grid texture */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          {/* Shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-pulse" />

          <div className="container-max h-full flex flex-col justify-center gap-5 relative z-10 px-4 md:px-8">
            <div className="h-3 w-24 bg-gold/30 rounded-full animate-pulse" />
            <div className="space-y-3">
              <div className="h-10 md:h-14 w-[min(480px,85%)] bg-white/10 rounded-2xl animate-pulse" />
              <div
                className="h-10 md:h-14 w-[min(320px,65%)] bg-gold/20 rounded-2xl animate-pulse"
                style={{ animationDelay: "120ms" }}
              />
            </div>
            <div className="space-y-2 mt-2">
              <div
                className="h-4 w-[min(440px,80%)] bg-white/8 rounded-lg animate-pulse"
                style={{ animationDelay: "80ms" }}
              />
              <div
                className="h-4 w-[min(360px,65%)] bg-white/8 rounded-lg animate-pulse"
                style={{ animationDelay: "160ms" }}
              />
            </div>
            <div className="flex gap-3 mt-4">
              <div className="h-12 w-44 bg-gold/25 rounded-2xl animate-pulse" />
              <div
                className="h-12 w-36 bg-white/8 rounded-2xl animate-pulse"
                style={{ animationDelay: "100ms" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content skeleton — card grid */}
      <div className="container-max px-4 md:px-8 py-16 flex-1">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-gold/40" />
          <div className="h-3 w-28 bg-gray-200 rounded-full animate-pulse" />
        </div>
        {/* Heading */}
        <div className="space-y-3 mb-12">
          <div className="h-8 w-64 bg-gray-200 rounded-xl animate-pulse" />
          <div
            className="h-8 w-44 bg-gold/15 rounded-xl animate-pulse"
            style={{ animationDelay: "80ms" }}
          />
        </div>
        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden animate-pulse"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-48 bg-gray-100" />
              <div className="p-6 space-y-3">
                <div className="h-3 w-16 bg-gold/20 rounded-full" />
                <div className="h-5 w-full bg-gray-100 rounded-lg" />
                <div className="h-5 w-4/5 bg-gray-100 rounded-lg" />
                <div className="h-3 w-full bg-gray-50 rounded-lg mt-4" />
                <div className="h-3 w-3/4 bg-gray-50 rounded-lg" />
                <div className="h-8 w-28 bg-primary/8 rounded-xl mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
