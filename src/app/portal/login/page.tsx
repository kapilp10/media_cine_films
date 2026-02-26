"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication delay
    setTimeout(() => {
      router.push("/portal/dashboard");
    }, 500);
  };

  return (
    <div className="w-full max-w-md mt-32 px-6">
      <div className="bg-white p-12 shadow-sm border border-[#e5e5e5] text-center">
        <h1 className="text-3xl font-serif text-[#1a1a1a] mb-2">Access Portal</h1>
        <p className="text-sm text-[#666] font-light mb-8">Enter your client credentials below.</p>

        <form onSubmit={handleLogin} className="flex flex-col space-y-6 text-left">
          
          <div className="flex flex-col">
            <label htmlFor="email" className="text-xs uppercase tracking-widest text-[#666] mb-2">Email Address</label>
            <input 
              type="email" 
              id="email" 
              required
              className="border-b border-[#e5e5e5] pb-2 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent text-[#1a1a1a]" 
            />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between items-end mb-2">
              <label htmlFor="password" className="text-xs uppercase tracking-widest text-[#666]">Password</label>
              <a href="#" className="text-xs text-[#a0a0a0] hover:text-[#1a1a1a] transition-colors">Forgot?</a>
            </div>
            <input 
              type="password" 
              id="password" 
              required
              className="border-b border-[#e5e5e5] pb-2 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent text-[#1a1a1a]" 
            />
          </div>

          <button 
            type="submit" 
            className="mt-4 bg-[#1a1a1a] text-[#f9f8f6] py-4 uppercase tracking-widest text-sm hover:bg-[#333] transition-colors w-full"
          >
            Sign In
          </button>

        </form>
      </div>
    </div>
  );
}
