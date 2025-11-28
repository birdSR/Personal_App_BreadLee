import svgPaths from "../imports/svg-skrxj6w69w";
import imgW21 from "figma:asset/910b1dc3d33b3040541ac51e22a8352ae49048e5.png";
import imgW11 from "figma:asset/7a2f64b5fc84a2356ee2fa30b8a86318f69532da.png";
import imgM11 from "figma:asset/ddce8bb9d7f4f0f7183825c5662f8ac314e9201b.png";
import imgBg1 from "figma:asset/5741746dd77ffdb01d3a8343704bf236565aaa41.png";

function Frame4() {
  return <div className="h-[19px] shrink-0 w-[103px]" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <div className="absolute h-[101px] left-[-92px] top-[-30.5px] w-[277px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 277 101">
          <path d="M0 0H277V101H0V0Z" fill="url(#paint0_linear_22_450)" id="Rectangle 6" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_22_450" x1="18.5793" x2="83.8882" y1="66" y2="66">
              <stop stopColor="#C7DB99" stopOpacity="0" />
              <stop offset="1" stopColor="#C5EAF2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[181px] top-[calc(50%-10px)] translate-y-[-50%] w-[124px]">
      <Frame1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start leading-[0] left-[166px] not-italic top-[calc(50%+2px)] tracking-[-0.24px] translate-y-[-50%] w-[116px]">
      <div className="flex flex-col font-['YES_Gothic:Bold',sans-serif] h-[17px] justify-center relative shrink-0 text-[#383434] text-[12px] w-full">
        <p className="leading-[19px]">나랑 빵투어 갈 사람?</p>
      </div>
      <div className="flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-center relative shrink-0 text-[#f47f30] text-[10px] w-full">
        <p className="leading-[19px]">빵투어 투어리스트 모으기</p>
      </div>
    </div>
  );
}

function LucideChevronDown() {
  return <div className="size-[20px]" data-name="lucide/chevron-down" />;
}

function Frame7() {
  return (
    <div className="absolute h-[11px] left-[333px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[6px]">
      <div className="absolute inset-[-9.09%_-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 13">
          <g id="Frame 398">
            <path d={svgPaths.p271f9740} id="Vector" stroke="var(--stroke-0, #383434)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[80px] left-[14px] top-[-4px] w-[140.587px]">
      <div className="absolute flex h-[72.837px] items-center justify-center left-0 top-[3.16px] w-[59.27px]" style={{ "--transform-inner-width": "45.671875", "--transform-inner-height": "63.984375" } as React.CSSProperties}>
        <div className="flex-none rotate-[346.6deg]">
          <div className="h-[63.992px] relative w-[45.684px]" data-name="w2 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgW21} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[62.692px] items-center justify-center left-[80.06px] top-[12.72px] w-[47.942px]" style={{ "--transform-inner-width": "40.390625", "--transform-inner-height": "57.6875" } as React.CSSProperties}>
        <div className="flex-none rotate-[7.896deg]">
          <div className="h-[57.689px] relative w-[40.4px]" data-name="w1 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgW11} />
          </div>
        </div>
      </div>
      <div className="absolute h-[58px] left-[39px] top-[15px] w-[50px]" data-name="m1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgM11} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#fff8ed] h-[54px] overflow-clip relative rounded-[14px] shrink-0 w-[362px]">
      <div className="absolute left-[-9px] size-[201px] top-[-83px]" data-name="bg 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgBg1} />
          <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0" />
        </div>
      </div>
      <Frame3 />
      <Frame6 />
      <div className="absolute flex items-center justify-center left-[313px] size-[20px] top-[46px]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <LucideChevronDown />
        </div>
      </div>
      <Frame7 />
      <Frame5 />
    </div>
  );
}

export default function BreadTourBanner() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative w-full">
      <Frame />
    </div>
  );
}
