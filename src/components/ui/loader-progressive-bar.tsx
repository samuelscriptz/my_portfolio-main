import React from "react";

const LoaderProgressiveBar: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5">
      {/* Container for the character and the bar */}
      <div className="relative w-[400px]">
        {/* Character (Zoro) running on top */}
        <div className="absolute -top-[60px] left-0 w-full h-[60px] pointer-events-none">
          <div className="absolute bottom-0 left-0 animate-loading flex justify-end" style={{ width: '0%' }}>
             <img 
              src="/zoro.png" 
              alt="Running Character" 
              className="w-16 h-16 -mr-8" // -mr-8 to center the character relative to the bar tip
            />
          </div>
        </div>

        {/* Bar background */}
        <div className="flex items-center box-border p-[5px] w-full h-[30px] bg-[#212121] shadow-[inset_-2px_2px_4px_#0c0c0c] rounded-[15px]">
          {/* Loading bar */}
          <div className="relative flex justify-center flex-col w-0 h-[20px] overflow-hidden rounded-[10px]
            bg-gradient-to-t from-[#008c75] to-[#00ffd5]
            animate-loading">

            {/* White bars overlay */}
            <div className="absolute flex items-center gap-[18px]">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[10px] h-[45px] opacity-30 rotate-45
                    bg-gradient-to-tr from-white to-transparent"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderProgressiveBar;
