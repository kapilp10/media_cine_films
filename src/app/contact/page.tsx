export default function Contact() {
  return (
    <div className="w-full flex justify-center pt-32 pb-20 px-12 bg-[#f9f8f6] min-h-[90vh]">
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Column: Messaging */}
        <div className="flex flex-col pr-8">
           <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] leading-tight mb-8">
            Tell us <br/> your story.
          </h1>
          <p className="text-[#666] font-light text-lg mb-12 max-w-md leading-relaxed">
            We take on a limited number of commissions each year to ensure every film receives our full creative dedication. Please fill out the form, and we will be in touch within 48 hours.
          </p>
          
          <div className="space-y-6 mt-auto">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-[#1a1a1a] font-semibold mb-1">Email</h3>
              <a href="mailto:hello@mediacinefilms.com" className="text-[#666] hover:text-[#1a1a1a] transition-colors font-light">
                hello@mediacinefilms.com
              </a>
            </div>
             <div>
              <h3 className="text-sm uppercase tracking-widest text-[#1a1a1a] font-semibold mb-1">Studio</h3>
              <p className="text-[#666] font-light">Available Nationwide.<br/>Based in Indore, India.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="bg-white p-10 md:p-16 shadow-sm border border-[#e5e5e5]">
          <form className="flex flex-col space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="flex flex-col">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-[#666] mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="border-b border-[#e5e5e5] pb-2 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent text-[#1a1a1a]" 
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-[#666] mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="border-b border-[#e5e5e5] pb-2 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent text-[#1a1a1a]" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="flex flex-col">
                <label htmlFor="date" className="text-xs uppercase tracking-widest text-[#666] mb-2">Event Date</label>
                <input 
                  type="text" 
                  id="date" 
                  placeholder="MM/DD/YYYY"
                  className="border-b border-[#e5e5e5] pb-2 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent text-[#1a1a1a] placeholder:text-[#ccc]" 
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="venue" className="text-xs uppercase tracking-widest text-[#666] mb-2">Venue / Location</label>
                <input 
                  type="text" 
                  id="venue" 
                  className="border-b border-[#e5e5e5] pb-2 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent text-[#1a1a1a]" 
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="budget" className="text-xs uppercase tracking-widest text-[#666] mb-2">Budget Range</label>
              <select 
                id="budget" 
                className="border-b border-[#e5e5e5] pb-2 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent text-[#1a1a1a] appearance-none rounded-none"
              >
                <option value="" disabled selected>Select a range</option>
                <option value="4k-6k">$4,000 - $6,000</option>
                <option value="6k-9k">$6,000 - $9,000</option>
                <option value="9k+">$9,000+</option>
              </select>
            </div>

             <div className="flex flex-col">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-[#666] mb-2">Tell us about your celebration</label>
              <textarea 
                id="message" 
                rows={4}
                required
                className="border-b border-[#e5e5e5] pb-2 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent text-[#1a1a1a] resize-none" 
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="mt-8 bg-[#1a1a1a] text-[#f9f8f6] py-5 uppercase tracking-widest text-sm hover:bg-[#333] transition-colors w-full"
            >
              Submit Inquiry
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
