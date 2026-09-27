export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full">
        <div className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-3xl p-10 md:p-16 shadow-2xl space-y-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            Admin Dashboard
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight">
            <span className="text-white">Control </span>
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Center</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-xl mx-auto">
            This is the default homepage for the <span className="text-white font-medium">pm_admin</span> application. You can build out your administrative tools and dashboard interfaces here.
          </p>
          <div className="pt-6">
            <button className="px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white transition-all font-semibold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]">
              Enter Dashboard
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
