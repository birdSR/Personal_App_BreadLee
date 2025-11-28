import { useNavigate, useLocation } from 'react-router-dom';
import svgPaths from "../imports/svg-lb3tn9rpj4";

function LucideBold({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="lucide/bold">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="lucide/bold">
          <path d={svgPaths.p17fe1e80} id="Vector" stroke={isActive ? "#F97B62" : "#383434"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function LucideChefHat({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="lucide/chef-hat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="lucide/chef-hat">
          <g id="Vector">
            <path d={svgPaths.p30362980} fill={isActive ? "#F97B62" : "#928B8B"} />
            <path d="M7 19.8333H21Z" fill={isActive ? "#F97B62" : "#928B8B"} />
            <path d={svgPaths.p7c32f00} stroke={isActive ? "#F97B62" : "#383434"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LucideFlagTriangleRight({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="lucide/flag-triangle-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="lucide/flag-triangle-right">
          <g id="Vector">
            <path d={svgPaths.p31ecd900} fill={isActive ? "#F97B62" : "#928B8B"} />
            <path d={svgPaths.p31ecd900} stroke={isActive ? "#F97B62" : "#383434"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LucideUserRound({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="lucide/user-round">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="lucide/user-round">
          <g id="Vector">
            <path d={svgPaths.p217d7f80} fill={isActive ? "#F97B62" : "#928B8B"} />
            <path d={svgPaths.p2bd95d00} fill={isActive ? "#F97B62" : "#928B8B"} />
            <path d={svgPaths.p33d62560} stroke={isActive ? "#F97B62" : "#383434"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconAiDirect() {
  return (
    <div className="absolute left-1/2 rounded-[50px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.08)] size-[84px] top-[calc(50%-12px)] translate-x-[-50%] translate-y-[-50%]" data-name="icon/ai_direct">
      <div className="absolute inset-0 overflow-hidden rounded-[50px]">
        <video autoPlay className="absolute left-[-9.52%] max-w-none size-[119.05%] top-[-10.18%]" controlsList="nodownload" loop playsInline muted>
          <source src="/_videos/v1/3c8805cad4a485efaffb271c47f62b41b0e3f9ad" />
        </video>
      </div>
    </div>
  );
}

export default function DockBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="absolute bottom-0 h-[112px] left-0 w-[402px]" data-name="dock-bar">
      {/* Background Box */}
      <div className="absolute bg-[#f1f0f0] box-border content-stretch flex h-[80px] items-start justify-between left-0 overflow-clip px-[60px] py-0 rounded-tl-[40px] rounded-tr-[40px] top-[32px] w-[402px]" data-name="box">
        <div className="box-border content-stretch flex gap-[91px] h-[80px] items-center justify-center pb-[28px] pt-[34px] px-[30px] relative shrink-0 w-[400px]" data-name="inner">
          {/* Left Group */}
          <div className="content-stretch flex gap-[38px] items-center justify-center relative shrink-0 w-[129.333px]" data-name="L">
            {/* Home */}
            <button 
              onClick={() => navigate('/home')}
              className="content-stretch flex flex-col h-[56px] items-center relative shrink-0 w-[52px]"
            >
              <LucideBold isActive={isActive('/home')} />
              <p className={`font-['Pretendard:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre ${
                isActive('/home') ? 'text-[#f97b62]' : 'text-black'
              }`}>Home</p>
            </button>

            {/* 맛-빵 */}
            <button 
              onClick={() => navigate('/recipes')}
              className="content-stretch flex flex-col h-[56px] items-center relative shrink-0 w-[37px]"
            >
              <LucideChefHat isActive={isActive('/recipes')} />
              <p className={`font-['Pretendard:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre ${
                isActive('/recipes') ? 'text-[#f97b62]' : 'text-black'
              }`}>맛-빵</p>
            </button>
          </div>

          {/* Right Group */}
          <div className="content-stretch flex gap-[38px] items-center justify-center relative shrink-0 w-[129.333px]" data-name="R">
            {/* 빵맵 */}
            <button 
              onClick={() => navigate('/bread-map')}
              className="content-stretch flex flex-col h-[56px] items-center relative shrink-0 w-[37px]"
            >
              <LucideFlagTriangleRight isActive={isActive('/bread-map')} />
              <p className={`font-['Pretendard:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre ${
                isActive('/bread-map') ? 'text-[#f97b62]' : 'text-black'
              }`}>빵맵</p>
            </button>

            {/* 내 정보 */}
            <button 
              onClick={() => navigate('/mypage')}
              className="content-stretch flex flex-col h-[56px] items-center relative shrink-0 w-[37px]"
            >
              <LucideUserRound isActive={isActive('/mypage')} />
              <p className={`font-['Pretendard:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre ${
                isActive('/mypage') ? 'text-[#f97b62]' : 'text-black'
              }`}>내 정보</p>
            </button>
          </div>
        </div>
      </div>

      {/* AI Chatbot Center Button */}
      <button onClick={() => navigate('/ai-chat')}>
        <IconAiDirect />
      </button>
    </div>
  );
}
