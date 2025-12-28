"use client";

import { ArrowDown } from "lucide-react";

export default function GoToWaitlistButton() {
  // Función para realizar el scroll
  const handleScrollToContent = () => {
    const element = document.getElementById("waitlist-button"); // El ID debe coincidir
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
          className={`
            w-full mt-10 py-3.5 px-6 rounded-xl font-bold text-white shadow-lg shadow-[#8B7FDB]/20
            flex items-center justify-center gap-2 overflow-hidden transition-all duration-300
            bg-[#8B7FDB] hover:bg-[#7366CC] hover:scale-[1.02] cursor-pointer
          `}
          onClick={handleScrollToContent}
        >
          <span>Quiero unirme a la lista de espera</span>
          {<ArrowDown className="w-4 h-4" />}
        </button>
  );
}