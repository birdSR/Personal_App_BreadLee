import { useEffect, useState } from 'react';
import svgPaths from "../imports/svg-wne7ofucm7";

interface PassionMeterProps {
  percentage: number;
}

function FlameIcon() {
  return (
    <div className="absolute h-[20px] left-[71px] top-[20px] w-[14px]" data-name="_레이어_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
        <g clipPath="url(#clip0_18_492)" id="_ë ì´ì´_1">
          <path d={svgPaths.p34ad8c00} fill="var(--fill-0, #F47F30)" id="Vector" />
          <path d={svgPaths.p1f2a77f0} fill="var(--fill-0, #EAD086)" id="Vector_2" />
          <path d={svgPaths.p38614480} fill="var(--fill-0, #F4E130)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_18_492">
            <rect fill="white" height="20" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function PassionMeter({ percentage }: PassionMeterProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  
  useEffect(() => {
    // Animate from 0 to target percentage
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = percentage / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= percentage) {
        setAnimatedPercentage(percentage);
        clearInterval(timer);
      } else {
        setAnimatedPercentage(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [percentage]);

  // Calculate stroke-dashoffset for the progress circle
  // Circle radius is 22, circumference = 2 * π * r = 138.23
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div className="bg-[#fff3e3] overflow-clip relative rounded-[14px] size-full">
      {/* Circular Progress */}
      <div className="absolute left-[54px] size-[48px] top-[7px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <g id="Group 2">
            {/* Background circle */}
            <circle 
              cx="24" 
              cy="24" 
              id="Ellipse 14" 
              r="22" 
              stroke="#FFD58D" 
              strokeWidth="4" 
              fill="none"
            />
            {/* Animated progress circle */}
            <circle
              cx="24"
              cy="24"
              r="22"
              stroke="#F47F30"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform="rotate(-90 24 24)"
              style={{
                transition: 'stroke-dashoffset 0.5s ease-out'
              }}
            />
          </g>
        </svg>
      </div>

      {/* Flame Icon */}
      <FlameIcon />

      {/* Text Content */}
      <div className="absolute content-stretch flex flex-col font-['YES_Gothic:Bold',sans-serif] gap-[3px] items-start justify-center leading-[0] left-[calc(50%-25px)] not-italic top-[calc(50%+20px)] tracking-[-0.24px] translate-x-[-50%] translate-y-[-50%] w-[42px]">
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#f97b62] text-[10px] w-[min-content]">
          <p className="leading-[normal]">열정 수치</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#383434] text-[0px] w-[62px]">
          <p className="leading-[normal]">
            <span className="text-[24px]">{animatedPercentage}</span>
            <span className="font-['YES_Gothic:Regular',sans-serif] not-italic text-[14px]">%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
