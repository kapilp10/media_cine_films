
export default function Works() {
  const projects = [
    { id: 1, title: "Sophia & James", location: "Lake Como, Italy", size: "large", type: "aspect-[16/9]" },
    { id: 2, title: "Elena & Marcus", location: "Santorini, Greece", size: "small", type: "aspect-[4/5]" },
    { id: 3, title: "Maya & David", location: "Tuscany, Italy", size: "small", type: "aspect-square" },
    { id: 4, title: "Isabella & Lucas", location: "Amalfi Coast", size: "medium", type: "aspect-video" },
    { id: 5, title: "Chloe & Noah", location: "Paris, France", size: "large", type: "aspect-[21/9]" },
    { id: 6, title: "Zara & Liam", location: "Kyoto, Japan", size: "small", type: "aspect-[3/4]" },
  ];

  return (
    <div className="w-full flex flex-col pt-32 pb-20 px-12 bg-[#f9f8f6] min-h-screen">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Header */}
        <div className="mb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] mb-6">Selected Works</h1>
          <p className="text-[#666] text-lg max-w-2xl mx-auto font-light">
            A curated collection of our favorite love stories, captured across the globe.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-24">
          
          {/* Project 1 - Full Width/Hero scale */}
          <div className="md:col-span-12 group cursor-pointer">
            <div className={`w-full ${projects[0].type} bg-stone-200 mb-6 overflow-hidden`}>
              <div className="w-full h-full bg-stone-300 transform group-hover:scale-105 transition-transform duration-1000"></div>
            </div>
            <div className="flex justify-between items-baseline">
                <h3 className="text-3xl font-serif text-[#1a1a1a]">{projects[0].title}</h3>
                <p className="text-[#666] text-sm uppercase tracking-widest">{projects[0].location}</p>
            </div>
          </div>

          {/* Project 2 - Left column */}
          <div className="md:col-span-5 md:mt-20 group cursor-pointer">
            <div className={`w-full ${projects[1].type} bg-stone-200 mb-6 overflow-hidden`}>
              <div className="w-full h-full bg-stone-300 transform group-hover:scale-105 transition-transform duration-1000"></div>
            </div>
            <h3 className="text-2xl font-serif text-[#1a1a1a]">{projects[1].title}</h3>
            <p className="text-[#666] text-sm mt-2">{projects[1].location}</p>
          </div>

          {/* Project 3 - Right column */}
          <div className="md:col-span-6 md:col-start-7 group cursor-pointer">
             <div className={`w-full ${projects[2].type} bg-stone-200 mb-6 overflow-hidden`}>
              <div className="w-full h-full bg-stone-300 transform group-hover:scale-105 transition-transform duration-1000"></div>
            </div>
            <h3 className="text-2xl font-serif text-[#1a1a1a]">{projects[2].title}</h3>
            <p className="text-[#666] text-sm mt-2">{projects[2].location}</p>
          </div>

          {/* Project 4 - Full width offset */}
          <div className="md:col-span-10 md:col-start-2 group cursor-pointer">
             <div className={`w-full ${projects[3].type} bg-stone-200 mb-6 overflow-hidden`}>
              <div className="w-full h-full bg-stone-300 transform group-hover:scale-105 transition-transform duration-1000"></div>
            </div>
            <h3 className="text-2xl font-serif text-[#1a1a1a]">{projects[3].title}</h3>
            <p className="text-[#666] text-sm mt-2">{projects[3].location}</p>
          </div>
          
           {/* Project 5 - Left column wide */}
           <div className="md:col-span-7 group cursor-pointer">
             <div className={`w-full ${projects[4].type} bg-stone-200 mb-6 overflow-hidden`}>
              <div className="w-full h-full bg-stone-300 transform group-hover:scale-105 transition-transform duration-1000"></div>
            </div>
            <h3 className="text-2xl font-serif text-[#1a1a1a]">{projects[4].title}</h3>
            <p className="text-[#666] text-sm mt-2">{projects[4].location}</p>
          </div>

          {/* Project 6 - Right column narrow */}
          <div className="md:col-span-4 md:col-start-9 md:-mt-32 group cursor-pointer">
             <div className={`w-full ${projects[5].type} bg-stone-200 mb-6 overflow-hidden`}>
              <div className="w-full h-full bg-stone-300 transform group-hover:scale-105 transition-transform duration-1000"></div>
            </div>
            <h3 className="text-2xl font-serif text-[#1a1a1a]">{projects[5].title}</h3>
            <p className="text-[#666] text-sm mt-2">{projects[5].location}</p>
          </div>

        </div>

      </div>
    </div>
  );
}
