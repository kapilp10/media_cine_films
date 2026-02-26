"use client";
import { useState } from "react";

export default function CalendarWidget({ onSelectDate }: { onSelectDate: (date: Date) => void }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newDate);
    onSelectDate(newDate);
  };

  const getDaysArray = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div className="w-full bg-white border border-[#e5e5e5] p-8 shadow-sm">
      
      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-8">
        <button onClick={handlePrevMonth} className="text-[#a0a0a0] hover:text-[#1a1a1a] transition-colors uppercase tracking-widest text-xs">Prev</button>
        <h3 className="text-2xl font-serif text-[#1a1a1a]">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <button onClick={handleNextMonth} className="text-[#a0a0a0] hover:text-[#1a1a1a] transition-colors uppercase tracking-widest text-xs">Next</button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 text-center mb-4">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
           <div key={day} className="text-xs uppercase tracking-widest text-[#a0a0a0] py-2">{day}</div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-2 text-center">
        {getDaysArray().map((day, index) => {
          const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === currentDate.getMonth() && selectedDate?.getFullYear() === currentDate.getFullYear();
          const isPast = day ? new Date(currentDate.getFullYear(), currentDate.getMonth(), day) < new Date(new Date().setHours(0,0,0,0)) : false;

          return (
            <div 
              key={index} 
              className={`
                aspect-square flex items-center justify-center text-sm font-light transition-colors
                ${!day ? "" : isPast ? "text-[#ccc] cursor-not-allowed" : isSelected ? "bg-[#1a1a1a] text-[#f9f8f6]" : "text-[#1a1a1a] hover:bg-[#f9f8f6] cursor-pointer"}
              `}
              onClick={() => day && !isPast && handleDateClick(day)}
            >
              {day}
            </div>
          )
        })}
      </div>

    </div>
  );
}
