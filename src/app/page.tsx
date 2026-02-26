import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex flex-col justify-center items-center px-12 py-32 text-center text-[#1a1a1a]">
        <FadeIn delay={0.1}>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 tracking-wide leading-tight">
            MediaCine <br /> Films.
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="max-w-xl text-lg md:text-xl text-[#666] mb-12 font-light">
            A boutique wedding cinematography studio specializing in timeless, emotive, and editorial films.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5}>
          <Link 
            href="/works" 
            className="uppercase tracking-widest text-sm border-b border-[#1a1a1a] pb-1 hover:text-[#d2c8bc] hover:border-[#d2c8bc] transition-colors"
          >
            View Our Work
          </Link>
        </FadeIn>
      </section>

      {/* Featured Work Grid */}
      <section className="w-full px-12 py-32 bg-[#f9f8f6]">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn delay={0.1}>
             <h2 className="text-sm uppercase tracking-widest text-[#666] mb-16">Featured Films</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Featured Item 1 (Large) */}
            <FadeIn delay={0.2} className="md:col-span-8 group cursor-pointer">
              <div className="w-full aspect-[16/9] bg-stone-200 mb-6 overflow-hidden">
                <div className="w-full h-full bg-stone-300 transform group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <h3 className="text-2xl font-serif">Sophia & James</h3>
              <p className="text-[#666] text-sm mt-2">Lake Como, Italy</p>
            </FadeIn>

            {/* Featured Item 2 (Small) */}
            <FadeIn delay={0.4} className="md:col-span-4 md:mt-32 group cursor-pointer">
              <div className="w-full aspect-[4/5] bg-stone-200 mb-6 overflow-hidden">
                <div className="w-full h-full bg-stone-300 transform group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <h3 className="text-2xl font-serif">Elena & Marcus</h3>
              <p className="text-[#666] text-sm mt-2">Santorini, Greece</p>
            </FadeIn>
            
             {/* Featured Item 3 (Small) */}
             <FadeIn delay={0.2} className="md:col-span-5 group cursor-pointer">
              <div className="w-full aspect-square bg-stone-200 mb-6 overflow-hidden">
                <div className="w-full h-full bg-stone-300 transform group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <h3 className="text-2xl font-serif">Isabella & Lucas</h3>
              <p className="text-[#666] text-sm mt-2">Amalfi Coast</p>
            </FadeIn>

            {/* Featured Item 4 (Medium) */}
            <FadeIn delay={0.4} className="md:col-span-7 md:-mt-20 group cursor-pointer">
              <div className="w-full aspect-video bg-stone-200 mb-6 overflow-hidden">
                <div className="w-full h-full bg-stone-300 transform group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <h3 className="text-2xl font-serif">Chloe & Noah</h3>
              <p className="text-[#666] text-sm mt-2">Paris, France</p>
            </FadeIn>
            
          </div>
          
          <FadeIn delay={0.3} className="flex justify-center mt-32">
            <Link 
              href="/works" 
              className="uppercase tracking-widest text-sm border-b border-[#1a1a1a] pb-1 hover:text-[#d2c8bc] hover:border-[#d2c8bc] transition-colors"
            >
              Explore Full Portfolio
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
