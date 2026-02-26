"use client";
import { useState } from "react";
import CalendarWidget from "@/components/CalendarWidget";

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full flex justify-center pt-32 pb-20 px-12 bg-[#f9f8f6] min-h-[90vh]">
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Column: Calendar Header & Widget */}
        <div className="flex flex-col">
          <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] leading-tight mb-8">
            Check <br/> Availability.
          </h1>
          <p className="text-[#666] font-light text-lg mb-12 max-w-md leading-relaxed">
            Select your preferred event date to inquire about our availability. We take on a limited number of commissions each year.
          </p>
          
          <CalendarWidget onSelectDate={(date) => setSelectedDate(date)} />
        </div>

        {/* Right Column: Dynamic Form */}
        <div className="bg-white p-10 md:p-16 shadow-sm border border-[#e5e5e5] h-fit">
          
          {!selectedDate ? (
            <div className="h-full flex flex-col items-center justify-center min-h-[400px] text-center">
               <span className="text-4xl text-[#e5e5e5] mb-4">📅</span>
               <p className="text-[#a0a0a0] font-light text-sm uppercase tracking-widest">
                Please select a date on the calendar<br/>to begin your inquiry.
               </p>
            </div>
          ) : isSubmitted ? (
             <div className="h-full flex flex-col items-center justify-center min-h-[400px] text-center">
               <h3 className="text-3xl font-serif text-[#1a1a1a] mb-4">Request Received</h3>
               <p className="text-[#666] font-light leading-relaxed">
                  Thank you for considering MediaCine Films for your celebration on <br/>
                  <span className="font-semibold text-[#1a1a1a]">{selectedDate.toLocaleDateString()}</span>.<br/><br/>
                  We will check our availability and reach out within 48 hours.
               </p>
               <button 
                  onClick={() => {setIsSubmitted(false); setSelectedDate(null)}} 
                  className="mt-12 text-xs uppercase tracking-widest text-[#1a1a1a] border-b border-[#1a1a1a] hover:text-[#666] hover:border-[#666] transition-colors pb-1"
                >
                  Return to Calendar
                </button>
            </div>
          ) : (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-2xl font-serif text-[#1a1a1a] mb-2">Request Date</h2>
              <p className="text-[#666] font-light text-sm mb-10">
                Selected: <span className="font-semibold">{selectedDate.toLocaleDateString()}</span>
              </p>

              <form onSubmit={handleBookingSubmit} className="flex flex-col space-y-8">
                
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

                <div className="flex flex-col">
                  <label htmlFor="package" className="text-xs uppercase tracking-widest text-[#666] mb-2">Preferred Package</label>
                  <select 
                    id="package" 
                    className="border-b border-[#e5e5e5] pb-2 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent text-[#1a1a1a] appearance-none rounded-none"
                  >
                    <option value="" disabled selected>Select a package</option>
                    <option value="essential">The Essential ($4,500)</option>
                    <option value="cinematic">The Cinematic ($6,800)</option>
                    <option value="director">The Director&apos;s Cut ($9,500+)</option>
                    <option value="undecided">Not Sure Yet</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="note" className="text-xs uppercase tracking-widest text-[#666] mb-2">Additional Notes</label>
                  <textarea 
                    id="note" 
                    rows={3}
                    className="border-b border-[#e5e5e5] pb-2 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent text-[#1a1a1a] resize-none" 
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="mt-8 bg-[#1a1a1a] text-[#f9f8f6] py-5 uppercase tracking-widest text-sm hover:bg-[#333] transition-colors w-full"
                >
                  Submit Request
                </button>
              </form>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
