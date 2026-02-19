export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-cyan-400 to-indigo-500" />
          <span className="text-sm font-semibold tracking-tight text-slate-50">
            Xai · Intelligence Workspace
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="cursor-pointer hover:text-slate-100">Overview</span>
          <span className="cursor-pointer hover:text-slate-100">Insights</span>
          <span className="cursor-pointer hover:text-slate-100">Automations</span>
        </div>
      </div>
    </header>
  );
}