import svgPaths from "./svg-e40t36560b";

function Frame() {
  return (
    <button className="block cursor-pointer h-[12px] relative shrink-0 w-[6px]">
      <div className="absolute inset-[-8.33%_-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
          <g id="Frame 252">
            <path d="M7 13L1 7L7 1" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </button>
  );
}

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

export default function Frame1() {
  return (
    <div className="relative size-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[20px] relative size-full">
          <Frame />
          <p className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[20px] left-[calc(50%+0.5px)] not-italic text-[16px] text-black text-center text-nowrap top-[calc(50%-10px)] tracking-[-0.24px] translate-x-[-50%] whitespace-pre">핫-빵</p>
          <LucideUserRound />
        </div>
      </div>
    </div>
  );
}