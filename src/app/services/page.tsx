export default function Services() {
  const packages = [
    {
      name: "The Essential",
      description: "Perfect for intimate celebrations and elopements, capturing the core moments of your day.",
      price: "$4,500",
      features: [
        "Up to 6 hours of consecutive coverage",
        "1 Cinematographer",
        "3-5 minute highlight film",
        "Documentary edit of ceremony and toasts",
        "Digital delivery"
      ]
    },
    {
      name: "The Cinematic",
      description: "Our most popular offering. Comprehensive storytelling that preserves the full emotional arc of your wedding weekend.",
      price: "$6,800",
      features: [
        "Up to 9 hours of consecutive coverage",
        "2 Cinematographers",
        "6-8 minute premium highlight film",
        "Full documentary edit of ceremony, toasts, and special dances",
        "Teaser trailer delivered within one week",
        "Drone coverage (weather and location permitting)"
      ]
    },
    {
      name: "The Director's Cut",
      description: "An uncompromising, editorial approach designed for multi-day events and destination weddings.",
      price: "From $9,500",
      features: [
        "Full weekend coverage (Rehearsal dinner + Wedding day)",
        "3 Cinematographers",
        "10-15 minute short film",
        "Complete documentary edit of all major events",
        "Next-day social media teaser",
        "Extensive drone coverage",
        "Raw footage provided on custom hard drive"
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col pt-32 pb-20 px-12 bg-[#f9f8f6] min-h-screen">
      <div className="max-w-[1000px] mx-auto w-full">
        
        {/* Header */}
        <div className="mb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] mb-6">Pricing & Services</h1>
          <p className="text-[#666] text-lg max-w-2xl mx-auto font-light">
             We limit our commissions to 15 weddings per year to ensure each film receives our uncompromising attention and artistic vision.
          </p>
        </div>

        {/* Pricing Packages List */}
        <div className="flex flex-col space-y-24">
          {packages.map((pkg, index) => (
            <div key={index} className="flex flex-col md:flex-row border-t border-[#e5e5e5] pt-12">
              
              {/* Left Column: Title & Price */}
              <div className="md:w-1/3 mb-8 md:mb-0 pr-8">
                <h2 className="text-3xl font-serif text-[#1a1a1a] mb-4">{pkg.name}</h2>
                <p className="text-[#666] font-light mb-6">{pkg.description}</p>
                <div className="text-sm uppercase tracking-widest text-[#1a1a1a] font-semibold">
                  Starting at <br/> <span className="text-xl font-serif font-normal mt-1 block">{pkg.price}</span>
                </div>
              </div>

              {/* Right Column: Features */}
              <div className="md:w-2/3 md:pl-16 md:border-l border-[#e5e5e5]">
                 <h3 className="text-sm uppercase tracking-widest text-[#666] mb-6">Deliverables</h3>
                 <ul className="space-y-4">
                   {pkg.features.map((feature, fIndex) => (
                     <li key={fIndex} className="flex items-start text-[#1a1a1a]">
                       <span className="mr-4 text-[#d2c8bc]">―</span>
                       <span className="font-light">{feature}</span>
                     </li>
                   ))}
                 </ul>
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
         <div className="mt-32 text-center border-t border-[#e5e5e5] pt-20">
          <h2 className="text-4xl font-serif text-[#1a1a1a] mb-6">Ready to reserve your date?</h2>
          <p className="text-[#666] max-w-xl mx-auto font-light mb-12">
            Let&apos;s start the conversation. We would love to hear more about your vision and how we can bring it to life.
          </p>
           <a 
              href="/contact" 
              className="inline-block bg-[#1a1a1a] text-[#f9f8f6] px-10 py-4 uppercase tracking-widest text-sm hover:bg-[#333] transition-colors"
            >
              Inquire Now
            </a>
        </div>

      </div>
    </div>
  );
}
