import svgPaths from "./svg-k9v655gnnj";

function LucidePlus() {
  return (
    <div className="absolute left-[10px] size-[34px] top-[10px]" data-name="lucide/plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lucide/plus">
          <path d={svgPaths.p398b8d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Posting() {
  return (
    <div className="bg-[#5277ff] overflow-clip relative rounded-[40px] shrink-0 size-[54px]" data-name="posting">
      <LucidePlus />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative size-full">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#00bb3d] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">리뷰 100p</p>
      <Posting />
    </div>
  );
}