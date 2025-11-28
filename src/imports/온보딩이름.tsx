import svgPaths from "./svg-pc1mh63hx3";

function Battery() {
  return (
    <div className="absolute inset-[39.39%_11.82%_34.85%_81.69%]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 12">
        <g id="Battery">
          <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="22.584" x="0.5" y="0.5" />
          <path d={svgPaths.pbbec300} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="19.296" x="2.144" y="2" />
        </g>
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute inset-[34.09%_77.33%_18.18%_8.27%]" data-name="Time Style">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-0 text-[15px] text-black text-center top-[calc(50%-12.5px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[12px] relative shrink-0 w-[6px]">
      <div className="absolute inset-[-8.33%_-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
          <g id="Frame 252">
            <path d="M7 13L1 7L7 1" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] h-[40px] items-center left-1/2 overflow-clip px-[20px] py-[8px] top-[calc(50%+45px)] translate-x-[-50%] translate-y-[-50%] w-[402px]">
      <Frame6 />
    </div>
  );
}

function TopIcon() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[402px]" data-name="top-icon">
      <Battery />
      <div className="absolute inset-[39.39%_19.64%_35.61%_76.27%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
          <path d={svgPaths.p297d2880} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_25.07%_35.61%_70.4%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 11">
          <path d={svgPaths.p2191df00} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
      <Frame5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[20px] not-italic relative shrink-0 tracking-[-0.24px] w-[164px]">
      <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0 text-[30px] text-black w-full">💬</p>
      <p className="font-['YES_Gothic:Medium',sans-serif] relative shrink-0 text-[#383434] text-[18px] w-full">이름을 등록해주세요.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['YES_Gothic:Bold',sans-serif] grow h-[23px] leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#383434] text-[28px] tracking-[-0.24px]">이름</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#f1f0f0] box-border content-stretch flex gap-[10px] h-[58px] items-center px-[14px] py-0 relative rounded-[14px] shrink-0 w-[362px]" data-name="Component 2">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#615a5a] text-[18px] text-nowrap tracking-[-0.24px] whitespace-pre">l</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[71px] items-start overflow-clip px-0 py-[10px] relative shrink-0 w-full">
      <Component1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[108px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[60px] items-start left-0 px-[20px] py-0 top-[121px] w-[402px]">
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#5277ff] h-[54px] overflow-clip relative rounded-[14px] shrink-0 w-[362px]">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[20px] left-[calc(50%-25px)] not-italic text-[18px] text-nowrap text-white top-[calc(50%-10px)] tracking-[1px] whitespace-pre">NEXT</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-0 overflow-clip px-[20px] py-[10px] top-[743px] w-[402px]">
      <Frame8 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="온보딩_이름">
      <TopIcon />
      <Frame4 />
      <Frame7 />
    </div>
  );
}