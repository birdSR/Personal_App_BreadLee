import svgPaths from "./svg-q8tswsfsae";
import imgFrame407 from "figma:asset/654ae5b6297ef69cf639a8f50c233c4102ba76d7.png";

function Frame1() {
  return (
    <div className="absolute h-[27px] left-[122px] top-[13px] w-[115px]">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[1.7] left-[calc(50%-74.5px)] not-italic text-[16px] text-nowrap text-white top-0 tracking-[-0.176px] whitespace-pre">Instagram DM 보내기</p>
    </div>
  );
}

function LucideInstagram() {
  return (
    <div className="absolute left-[313px] size-[24px] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="lucide/instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/instagram">
          <path d={svgPaths.p18a68ff0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="overflow-clip relative rounded-[14px] size-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
        <div className="absolute inset-0 overflow-hidden rounded-[14px]">
          <img alt="" className="absolute h-[113.21%] left-0 max-w-none top-[-9.43%] w-full" src={imgFrame407} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.08)] inset-0 rounded-[14px]" />
      </div>
      <Frame1 />
      <LucideInstagram />
    </div>
  );
}