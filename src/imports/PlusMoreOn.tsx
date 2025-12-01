import svgPaths from "./svg-qbt4k2jh2k";

function LucideMapPinPlus() {
  return (
    <div className="absolute left-[calc(50%-1px)] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="lucide/map-pin-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/map-pin-plus">
          <path d={svgPaths.p11c79200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Posting() {
  return (
    <div className="bg-[#b8b3b3] overflow-clip relative rounded-[40px] shrink-0 size-[50px]" data-name="posting">
      <LucideMapPinPlus />
    </div>
  );
}

function LucideFilePlay() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="lucide/file-play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/file-play">
          <path d={svgPaths.pe7a8700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Posting1() {
  return (
    <div className="bg-[#b8b3b3] overflow-clip relative rounded-[40px] shrink-0 size-[50px]" data-name="posting">
      <LucideFilePlay />
    </div>
  );
}

function LucideImages() {
  return (
    <div className="absolute left-1/2 size-[22px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="lucide/images">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_53_206)" id="lucide/images">
          <path d={svgPaths.p12138a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_53_206">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Posting2() {
  return (
    <div className="bg-[#b8b3b3] overflow-clip relative rounded-[40px] shrink-0 size-[50px]" data-name="posting">
      <LucideImages />
    </div>
  );
}

function LucidePlus() {
  return (
    <div className="absolute left-1/2 size-[34px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="lucide/plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lucide/plus">
          <path d={svgPaths.p398b8d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Posting3() {
  return (
    <div className="bg-[#52a2ff] overflow-clip relative rounded-[40px] shrink-0 size-[50px]" data-name="posting">
      <LucidePlus />
    </div>
  );
}

export default function PlusMoreOn() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative size-full" data-name="plus_more/on">
      <Posting />
      <Posting1 />
      <Posting2 />
      <Posting3 />
    </div>
  );
}