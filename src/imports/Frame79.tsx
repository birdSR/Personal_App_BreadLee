import svgPaths from "./svg-il30bxelql";

function LucideBookmark() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="lucide/bookmark">
          <path d={svgPaths.p21315100} id="Vector" stroke="var(--stroke-0, #383434)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function LucideHeart() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="lucide/heart">
          <path d={svgPaths.p29a82fe0} id="Vector" stroke="var(--stroke-0, #383434)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function LucideStar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lucide/star">
          <path d={svgPaths.p21068900} id="Vector" stroke="var(--stroke-0, #242121)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative size-full">
      <LucideBookmark />
      <LucideHeart />
      <LucideStar />
    </div>
  );
}