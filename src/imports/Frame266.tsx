import svgPaths from "./svg-w6cuhi3ak7";

function Component() {
  return (
    <div className="h-[17px] relative w-[23px]" data-name="_레이어_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 17">
        <g clipPath="url(#clip0_19_24)" id="_ë ì´ì´_1">
          <path d={svgPaths.p2bea7a00} fill="var(--fill-0, #FFCE76)" id="Vector" />
          <path d={svgPaths.p27d43f80} fill="var(--fill-0, #FFCE76)" id="Vector_2" />
          <path d={svgPaths.p2776100} fill="var(--fill-0, #FFCE76)" id="Vector_3" />
          <path d={svgPaths.p31d97170} fill="var(--fill-0, #FFCE76)" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p23e2bfc0} fill="var(--fill-0, #FFE164)" id="Vector_5" />
            <path d={svgPaths.p3c355200} fill="var(--fill-0, #FFC153)" id="Vector_6" />
            <path d={svgPaths.p1d34d480} fill="var(--fill-0, #FFC153)" id="Vector_7" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_19_24">
            <rect fill="white" height="17" width="23" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['YES_Gothic:Bold',sans-serif] gap-[3px] items-center leading-[0] left-[9px] not-italic top-[53px] tracking-[-0.24px] w-[37px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[#f97b62] text-[10px] w-full">
        <p className="leading-[normal]">내 랭킹</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#383434] text-[0px] w-full">
        <p className="leading-[normal]">
          <span className="text-[24px]">12</span>
          <span className="font-['YES_Gothic:Regular',sans-serif] not-italic text-[14px]">위</span>
        </p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#fff3e3] overflow-clip relative rounded-[14px] size-full">
      <div className="absolute flex h-[17px] items-center justify-center left-[calc(50%+31.33px)] top-[9px] translate-x-[-50%] w-[23px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Component />
        </div>
      </div>
      <Frame1 />
    </div>
  );
}