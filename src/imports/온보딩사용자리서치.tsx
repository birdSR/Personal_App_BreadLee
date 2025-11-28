import svgPaths from "./svg-0p2uqjmtp3";

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
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Medium',sans-serif] gap-[20px] items-start not-italic relative shrink-0 tracking-[-0.24px]">
      <p className="leading-[20px] min-w-full relative shrink-0 text-[30px] text-black w-[min-content]">🥐</p>
      <div className="leading-[20px] relative shrink-0 text-[#383434] text-[18px] w-[260px]">
        <p className="mb-0">
          <span className="font-['YES_Gothic:Bold',sans-serif]">달달한허니빵</span>
          <span className="font-['YES_Gothic:Medium',sans-serif]">{` 님의 핫-빵을 위한`}</span>
        </p>
        <p className="font-['YES_Gothic:Medium',sans-serif]">빵 취향 조사를 진행합니다.</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['YES_Gothic:Bold',sans-serif] grow h-[23px] leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#383434] text-[20px] tracking-[-0.24px]">일주일에 빵을 얼마나 먹나요?</p>
    </div>
  );
}

function Component1() {
  return <div className="bg-[#f1f0f0] rounded-[10px] shrink-0 size-[34px]" data-name="Component 6" />;
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Component1 />
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#383434] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">1번</p>
    </div>
  );
}

function Component9() {
  return <div className="bg-[#f1f0f0] rounded-[10px] shrink-0 size-[34px]" data-name="Component 6" />;
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Component9 />
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#383434] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">2번</p>
    </div>
  );
}

function Component10() {
  return <div className="bg-[#f1f0f0] rounded-[10px] shrink-0 size-[34px]" data-name="Component 6" />;
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Component10 />
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#383434] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">3번</p>
    </div>
  );
}

function LucideCheck() {
  return (
    <div className="absolute left-1/2 size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="lucide/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/check">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #F47F30)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Component11() {
  return (
    <div className="bg-[#fff8ed] relative rounded-[10px] shrink-0 size-[34px]" data-name="Component 6">
      <div className="overflow-clip relative rounded-[inherit] size-[34px]">
        <LucideCheck />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f47f30] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Component11 />
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#383434] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">4번 이상</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex gap-[20px] h-[71px] items-start overflow-clip px-0 py-[10px] relative shrink-0 w-full">
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[81px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center justify-center not-italic relative shrink-0 tracking-[-0.24px] w-full">
      <p className="font-['YES_Gothic:Bold',sans-serif] h-[23px] leading-[20px] relative shrink-0 text-[#383434] text-[20px] w-[252px]">어느 빵 종류를 선호하시나요?</p>
      <div className="basis-0 flex flex-col font-['YES_Gothic:Regular',sans-serif] grow h-[23px] justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[#00bb3d] text-[10px]">
        <p className="leading-[20px]">5가지 선택</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 7">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">한국 전통빵</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 8">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">페스츄리</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 9">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">크림</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 12">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">호밀</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Component2 />
      <Component3 />
      <Component4 />
      <Component7 />
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 10">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">구움빵</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 10">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">과일첨가</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 11">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">견과재료</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component13() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 12">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">쿠키</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <Component5 />
      <Component12 />
      <Component6 />
      <Component13 />
    </div>
  );
}

function Component14() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 10">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">식빵류</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component15() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 11">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">케이크</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component16() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 12">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">도넛</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 13">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">베이글</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <Component14 />
      <Component15 />
      <Component16 />
      <Component8 />
    </div>
  );
}

function Component17() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 10">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">딱딱한빵</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component18() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 11">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">쫄깃한빵</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component19() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 12">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">특이재료</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <Component17 />
      <Component18 />
      <Component19 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[200px] items-start overflow-clip px-0 py-[10px] relative shrink-0 w-full">
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[237px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['Pretendard:Bold',sans-serif] grow h-[23px] leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#383434] text-[20px] tracking-[-0.24px]">{`평소 활동 반경은 어떻게 되나요? `}</p>
    </div>
  );
}

function Component20() {
  return <div className="bg-[#f1f0f0] rounded-[10px] shrink-0 size-[34px]" data-name="Component 6" />;
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Component20 />
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#383434] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">5km</p>
    </div>
  );
}

function Component21() {
  return <div className="bg-[#f1f0f0] rounded-[10px] shrink-0 size-[34px]" data-name="Component 6" />;
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Component21 />
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#383434] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">20km</p>
    </div>
  );
}

function LucideCheck1() {
  return (
    <div className="absolute left-1/2 size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="lucide/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/check">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #F47F30)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Component22() {
  return (
    <div className="bg-[#fff8ed] relative rounded-[10px] shrink-0 size-[34px]" data-name="Component 6">
      <div className="overflow-clip relative rounded-[inherit] size-[34px]">
        <LucideCheck1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f47f30] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Component22 />
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#383434] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">40km</p>
    </div>
  );
}

function Component23() {
  return <div className="bg-[#f1f0f0] rounded-[10px] shrink-0 size-[34px]" data-name="Component 6" />;
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0">
      <Component23 />
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#383434] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">80km</p>
    </div>
  );
}

function Component24() {
  return <div className="bg-[#f1f0f0] rounded-[10px] shrink-0 size-[34px]" data-name="Component 6" />;
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0">
      <Component24 />
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#383434] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">100km 이상</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex gap-[32px] h-[71px] items-start overflow-clip px-0 py-[10px] relative shrink-0 w-full">
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame15 />
      <Frame25 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[108px] items-start relative shrink-0 w-full">
      <Frame21 />
      <Frame2 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center justify-center not-italic relative shrink-0 tracking-[-0.24px] w-full">
      <p className="font-['YES_Gothic:Bold',sans-serif] h-[23px] leading-[20px] relative shrink-0 text-[#383434] text-[20px] w-[286px]">좋아하는 빵 브랜드를 골라주세요.</p>
      <div className="basis-0 flex flex-col font-['YES_Gothic:Regular',sans-serif] grow h-[23px] justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[#00bb3d] text-[10px]">
        <p className="leading-[20px]">3가지 선택</p>
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 7">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">파리바게뜨</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component26() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 8">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">뚜레주르</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component27() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 9">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">성심당</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component28() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 13">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">밀도</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Component25 />
      <Component26 />
      <Component27 />
      <Component28 />
    </div>
  );
}

function Component29() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 10">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">송사부 고로케</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component30() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 10">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">태극당</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component31() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 11">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">롤링핀</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <Component29 />
      <Component30 />
      <Component31 />
    </div>
  );
}

function Component32() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 10">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">노티드</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component33() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 11">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">아티제</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component34() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 12">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">던킨도넛</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component35() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 13">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">브레덴코</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <Component32 />
      <Component33 />
      <Component34 />
      <Component35 />
    </div>
  );
}

function Component36() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 10">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">안스베이커리</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component37() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 11">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">삼송빵집</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Component38() {
  return (
    <div className="bg-white relative rounded-[60px] shrink-0" data-name="Component 12">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4747] text-[14px] text-nowrap tracking-[-0.24px] whitespace-pre">크리스피크림</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <Component36 />
      <Component37 />
      <Component38 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[200px] items-start overflow-clip px-0 py-[10px] relative shrink-0 w-full">
      <Frame27 />
      <Frame28 />
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[237px] items-start relative shrink-0 w-full">
      <Frame26 />
      <Frame31 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center relative shrink-0 w-full">
      <p className="font-['YES_Gothic:Bold',sans-serif] h-[23px] leading-[20px] not-italic relative shrink-0 text-[#383434] text-[20px] tracking-[-0.24px] w-[292px]">지금 먹고 싶은 빵을 적어주세요.</p>
    </div>
  );
}

function Component39() {
  return (
    <div className="bg-[#f1f0f0] box-border content-stretch flex gap-[10px] h-[58px] items-center px-[14px] py-0 relative rounded-[14px] shrink-0 w-[362px]" data-name="Component 8">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#615a5a] text-[18px] text-nowrap tracking-[-0.24px] whitespace-pre">l</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame33 />
      <Component39 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[918px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame6 />
      <Frame7 />
      <Frame32 />
      <Frame8 />
    </div>
  );
}

function Cont() {
  return (
    <div className="relative shrink-0 w-full" data-name="cont">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-start pb-[50px] pt-0 px-[20px] relative w-full">
          <Frame5 />
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#5277ff] h-[54px] overflow-clip relative rounded-[14px] shrink-0 w-[362px]">
      <p className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[20px] left-[calc(50%-25px)] not-italic text-[18px] text-nowrap text-white top-[calc(50%-10px)] tracking-[1px] whitespace-pre">NEXT</p>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 w-full" data-name="button">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start px-[20px] py-[10px] relative w-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-[60px] pt-0 px-0 top-[121px] w-[402px]">
      <Cont />
      <Button />
    </div>
  );
}

function Frame35() {
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

function Frame36() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] h-[40px] items-center left-1/2 overflow-clip px-[20px] py-[8px] top-[calc(50%-370px)] translate-x-[-50%] translate-y-[-50%] w-[402px]">
      <Frame35 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="온보딩_사용자리서치">
      <TopIcon />
      <Frame20 />
      <Frame36 />
    </div>
  );
}