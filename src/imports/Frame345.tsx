import svgPaths from "./svg-2uzqhjholm";

function LucideThumbsUp() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/thumbs-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_55_81)" id="lucide/thumbs-up">
          <path d={svgPaths.p21848000} id="Vector" stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_55_81">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideThumbsUp />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">크림치즈메론빵, 약과 크로플, 말차 크림빵</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
      <Frame1 />
    </div>
  );
}