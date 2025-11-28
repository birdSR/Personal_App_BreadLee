import svgPaths from "./svg-9u5fcl0hvh";

function LucideHeart() {
  return (
    <div className="absolute left-[82px] size-[18px] top-[8px]" data-name="lucide/heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/heart">
          <path d={svgPaths.p165c9a00} fill="var(--fill-0, #FFAC99)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['YES_Gothic:Bold',sans-serif] gap-[2px] items-start leading-[0] left-[12px] not-italic top-[46px] tracking-[-0.24px] w-[58px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[#f47f30] text-[10px] w-full">
        <p className="leading-[normal]">나의 빵 감성</p>
      </div>
      <div className="flex flex-col justify-center leading-[18px] relative shrink-0 text-[#383434] text-[14px] w-full">
        <p className="mb-0">유럽</p>
        <p>소도시</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#fff3e3] overflow-clip relative rounded-[14px] size-full">
      <LucideHeart />
      <Frame1 />
    </div>
  );
}