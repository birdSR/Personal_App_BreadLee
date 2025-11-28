import { useEffect, useState } from 'react';
import { HelpCircle } from 'lucide-react';

interface BreadPowerMeterProps {
  percentage: number;
}

export default function BreadPowerMeter({ percentage }: BreadPowerMeterProps) {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  
  useEffect(() => {
    // Animate from 0 to target percentage
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = percentage / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= percentage) {
        setAnimatedWidth(percentage);
        clearInterval(timer);
      } else {
        setAnimatedWidth(current);
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <div className="mb-[24px]">
      <div className="bg-[#f5f5f5] rounded-[14px] p-[16px]">
        <div className="flex items-center justify-between mb-[8px]">
          <div className="flex items-center gap-[6px] relative">
            <p className="font-['YES_Gothic:Bold',sans-serif] text-[14px] text-[#383434]">오늘의 빵력</p>
            <button 
              onClick={() => setShowTooltip(!showTooltip)}
              className="relative"
            >
              <HelpCircle className="w-[14px] h-[14px] text-[#7f7777]" />
            </button>
            {showTooltip && (
              <div className="absolute left-0 top-[24px] bg-[#383434] text-white px-[12px] py-[8px] rounded-[8px] shadow-lg z-10 whitespace-nowrap">
                <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px]">오늘의 빵 활동 수치</p>
                <div className="absolute left-[12px] top-[-4px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-[#383434]" />
              </div>
            )}
          </div>
          <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#7f7777]">
            {Math.floor(animatedWidth)}%
          </p>
        </div>
        <div className="w-full h-[12px] bg-[#e0e0e0] rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-[#ff9068] via-[#f47f30] to-[#ff6b3d]"
            style={{ 
              width: `${animatedWidth}%`,
              transition: 'width 0.1s ease-out',
              boxShadow: animatedWidth > 0 ? '0 0 10px rgba(244, 127, 48, 0.5)' : 'none'
            }} 
          />
        </div>
      </div>
    </div>
  );
}
