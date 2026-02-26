import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-12 mt-20 border-t border-[#e5e5e5] bg-[#1a1a1a] text-[#f9f8f6]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0">
          <h2 className="text-4xl font-serif mb-2">MediaCine Films.</h2>
          <p className="text-[#a0a0a0]">Capturing timeless moments.</p>
        </div>
        <div className="flex space-x-12">
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm uppercase tracking-widest text-[#666] mb-2">Navigation</h3>
            <Link href="/works" className="hover:text-white transition-colors">Selected Works</Link>
            <Link href="/services" className="hover:text-white transition-colors">Pricing & Services</Link>
            <Link href="/about" className="hover:text-white transition-colors">Our Story</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm uppercase tracking-widest text-[#666] mb-2">Connect</h3>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Vimeo</a>
            <Link href="/contact" className="hover:text-white transition-colors">Inquire</Link>
          </div>
        </div>
      </div>
      <div className="mt-16 text-xs text-[#666] flex justify-between">
        <p>&copy; {new Date().getFullYear()} MediaCine Films. All rights reserved.</p>
        <p>Design inspired by Nakula</p>
      </div>
    </footer>
  );
}
