import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center py-6 px-12 border-b border-[#e5e5e5]">
      <div className="text-2xl font-serif font-semibold tracking-wide">
        <Link href="/">MediaCine.</Link>
      </div>
      <nav>
        <ul className="flex space-x-8 text-sm uppercase tracking-widest text-[#666]">
          <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
          <li><Link href="/works" className="hover:text-black transition-colors">Works</Link></li>
          <li><Link href="/services" className="hover:text-black transition-colors">Services</Link></li>
          <li><Link href="/about" className="hover:text-black transition-colors">About</Link></li>
          <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
