export default function About() {
  return (
    <div className="w-full flex justify-center items-center py-32 px-12 bg-[#f9f8f6] min-h-[90vh]">
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image Placeholder */}
        <div className="w-full aspect-[3/4] bg-stone-200 relative overflow-hidden group">
            <div className="absolute inset-0 bg-stone-300 transform group-hover:scale-105 transition-transform duration-1000"></div>
        </div>

        {/* Story Content */}
        <div className="flex flex-col">
          <h1 className="text-sm uppercase tracking-widest text-[#666] mb-6">Our Story</h1>
          <h2 className="text-5xl md:text-6xl font-serif text-[#1a1a1a] leading-tight mb-8">
            Cinematic storytelling <br/> for the modern romance.
          </h2>
          
          <div className="space-y-6 text-lg text-[#666] font-light leading-relaxed">
            <p>
              At MediaCine Films, we believe your wedding day is more than just an event; it&apos;s a legacy. 
              Our approach is rooted in editorial aesthetics and genuine emotion, capturing the nuanced, 
              in-between moments that traditional videography often misses.
            </p>
            <p>
              We craft films that feel like art pieces—timeless, sophisticated, and undeniably you. 
              By blending documentary intimacy with cinematic grandeur, we ensure that every frame 
              of your story is preserved with the utmost care and vision.
            </p>
          </div>

          <div className="mt-16 border-t border-[#e5e5e5] pt-8">
            <h3 className="text-2xl font-serif text-[#1a1a1a]">Julian & Clara</h3>
            <p className="text-sm uppercase tracking-widest text-[#666] mt-2">Founders & Lead Directors</p>
          </div>
        </div>

      </div>
    </div>
  );
}
