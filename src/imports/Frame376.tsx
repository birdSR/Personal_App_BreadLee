import svgPaths from "./svg-amscdc2uyk";

function LucideMapPin() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/map-pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="lucide/map-pin">
          <g id="Vector">
            <path d={svgPaths.p5133f00} stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pb3a6a00} stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LucideMapPin />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.24px] whitespace-pre">청솔당 베이커리</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap tracking-[-0.24px] whitespace-pre">청빵시 청빵구 청빵동 345-2 청빵 청솔당</p>
    </div>
  );
}

function LucidePenLine() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="lucide/pen-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_56_204)" id="lucide/pen-line">
          <path d={svgPaths.pdcbad00} id="Vector" stroke="var(--stroke-0, #615A5A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_56_204">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[8px]">
      <div className="absolute inset-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Frame 367">
            <path d={svgPaths.p2e230080} id="Vector" stroke="var(--stroke-0, #615A5A)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-center justify-end left-[253px] top-[11px]">
      <LucidePenLine />
      <Frame />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="bg-[#f1f0f0] relative rounded-[14px] size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-px items-start overflow-clip px-[19px] py-[8px] relative size-full">
          <Frame1 />
          <Frame2 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}