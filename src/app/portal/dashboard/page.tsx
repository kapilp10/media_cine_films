export default function Dashboard() {
  const mockWidgets = [
    {
      title: "Your Film Status",
      content: "In Post-Production",
      subtext: "Estimated completion: October 15",
      action: "View Timeline"
    },
    {
      title: "Documents",
      content: "Pending Signature",
      subtext: "Final delivery approval form.",
      action: "Sign Document"
    },
    {
      title: "Messages",
      content: "2 Unread",
      subtext: "From Julian (Lead Director)",
      action: "Open Inbox"
    }
  ];

  return (
    <div className="w-full max-w-[1200px] px-12 py-20 min-h-screen">
      
      {/* Welcome Header */}
      <div className="mb-16 border-b border-[#e5e5e5] pb-8">
        <h1 className="text-sm uppercase tracking-widest text-[#666] mb-2">Client Dashboard</h1>
        <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">Welcome back, <br className="hidden md:block"/> Elena & Marcus.</h2>
      </div>

      {/* Stats/Widgets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {mockWidgets.map((widget, i) => (
          <div key={i} className="bg-white p-8 border border-[#e5e5e5] flex flex-col justify-between h-full group hover:shadow-sm transition-shadow">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#a0a0a0] mb-6">{widget.title}</h3>
              <p className="text-2xl font-serif text-[#1a1a1a] mb-2">{widget.content}</p>
              <p className="text-sm text-[#666] font-light">{widget.subtext}</p>
            </div>
            <a href="#" className="mt-12 text-sm uppercase tracking-widest text-[#1a1a1a] border-b border-[#1a1a1a] self-start group-hover:text-[#666] group-hover:border-[#666] transition-colors pb-1">
              {widget.action}
            </a>
          </div>
        ))}
      </div>

      {/* Recent Activity or Additional Info */}
      <div className="bg-white p-8 border border-[#e5e5e5]">
        <h3 className="text-xl font-serif text-[#1a1a1a] mb-6">Recent Activity</h3>
        <ul className="space-y-4 text-[#666] font-light text-sm">
          <li className="flex justify-between items-center py-2 border-b border-[#e5e5e5] last:border-0 pointer-events-none">
            <span>First deposit invoice paid.</span>
            <span className="text-[#a0a0a0]">Sep 10</span>
          </li>
          <li className="flex justify-between items-center py-2 border-b border-[#e5e5e5] last:border-0 pointer-events-none">
            <span>Wedding day timeline approved.</span>
            <span className="text-[#a0a0a0]">Sep 01</span>
          </li>
           <li className="flex justify-between items-center py-2 border-b border-[#e5e5e5] last:border-0 pointer-events-none">
            <span>Contract signed by both parties.</span>
            <span className="text-[#a0a0a0]">Aug 15</span>
          </li>
        </ul>
      </div>

    </div>
  );
}
