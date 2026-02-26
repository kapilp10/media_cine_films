import Link from "next/link";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f9f8f6] flex flex-col">
      {/* Minimal Portal Header */}
      <header className="w-full flex justify-between items-center py-6 px-12 border-b border-[#e5e5e5] bg-white">
        <div className="text-xl font-serif font-semibold tracking-wide text-[#1a1a1a]">
          <Link href="/">MediaCine.</Link>
          <span className="text-sm font-sans font-normal text-[#666] ml-4 tracking-normal">Client Portal</span>
        </div>
        <nav>
          <Link href="/portal/login" className="text-xs uppercase tracking-widest text-[#666] hover:text-[#1a1a1a] transition-colors">
            Sign Out
          </Link>
        </nav>
      </header>

      {/* Portal Content */}
      <main className="flex-grow flex flex-col items-center">
        {children}
      </main>

      {/* Minimal Portal Footer */}
      <footer className="w-full py-6 text-center text-xs text-[#a0a0a0] border-t border-[#e5e5e5] bg-white">
        &copy; {new Date().getFullYear()} MediaCine Films
      </footer>
    </div>
  );
}
