import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-eiabxzvoqt";

function LucideUserRound() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/user-round">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/user-round">
          <path d={svgPaths.p1c10c180} id="Vector" stroke="var(--stroke-0, #383434)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

interface TopNavBarProps {
  title?: string;
}

export default function TopNavBar({ title }: TopNavBarProps) {
  const navigate = useNavigate();

  return (
    <div className="fixed left-0 right-0 top-[44px] z-30 h-[40px] max-w-[402px] mx-auto">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[20px] py-[8px] relative size-full">
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="h-[12px] relative shrink-0 w-[6px]"
            data-name="Vector"
          >
            <div className="absolute inset-[-8.33%_-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
                <path d="M7 13L1 7L7 1" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </button>

          {/* Page Title */}
          {title && (
            <p className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[20px] left-[50%] not-italic text-[16px] text-black text-center text-nowrap top-[50%] tracking-[-0.24px] translate-x-[-50%] translate-y-[-50%] whitespace-pre">
              {title}
            </p>
          )}

          {/* User Icon Button */}
          <button onClick={() => navigate('/mypage')}>
            <LucideUserRound />
          </button>
        </div>
      </div>
    </div>
  );
}
