import svgPaths from "./svg-wne7ofucm7";

function Group() {
  return (
    <div className="absolute left-[54px] size-[48px] top-[7px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Group 2">
          <circle cx="24" cy="24" id="Ellipse 14" r="22" stroke="var(--stroke-0, #FFD58D)" strokeWidth="4" />
          <path d={svgPaths.p324d6830} id="Ellipse 15" stroke="var(--stroke-0, #F47F30)" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['YES_Gothic:Bold',sans-serif] gap-[3px] items-start justify-center leading-[0] left-[calc(50%-25px)] not-italic top-[calc(50%+20px)] tracking-[-0.24px] translate-x-[-50%] translate-y-[-50%] w-[42px]">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#f97b62] text-[10px] w-[min-content]">
        <p className="leading-[normal]">열정 수치</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#383434] text-[0px] w-[62px]">
        <p className="leading-[normal]">
          <span className="text-[24px]">80</span>
          <span className="font-['YES_Gothic:Regular',sans-serif] not-italic text-[14px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[20px] left-[71px] top-[20px] w-[14px]" data-name="_레이어_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
        <g clipPath="url(#clip0_18_492)" id="_ë ì´ì´_1">
          <path d={svgPaths.p34ad8c00} fill="var(--fill-0, #F47F30)" id="Vector" />
          <path d={svgPaths.p1f2a77f0} fill="var(--fill-0, #EAD086)" id="Vector_2" />
          <path d={svgPaths.p38614480} fill="var(--fill-0, #F4E130)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_18_492">
            <rect fill="white" height="20" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#fff3e3] overflow-clip relative rounded-[14px] size-full">
      <Group />
      <Frame1 />
      <Component />
    </div>
  );
}