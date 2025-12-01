import svgPaths from "./svg-qeacjwawom";
import imgBg1 from "figma:asset/5741746dd77ffdb01d3a8343704bf236565aaa41.png";
import imgW21 from "figma:asset/910b1dc3d33b3040541ac51e22a8352ae49048e5.png";
import imgW11 from "figma:asset/7a2f64b5fc84a2356ee2fa30b8a86318f69532da.png";
import imgM11 from "figma:asset/ddce8bb9d7f4f0f7183825c5662f8ac314e9201b.png";
import imgFrame275 from "figma:asset/55292a243c147c2beae549eb98fa149d313dd5d3.png";

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
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-[1.74%] text-[15px] text-black text-center top-[calc(50%-3.5px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function BarsStatusBarIPhoneLight() {
  return (
    <div className="absolute bottom-[94.97%] left-0 right-0 top-0" data-name="Bars / Status Bar / iPhone / Light">
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

function Frame9() {
  return (
    <button className="block cursor-pointer h-[12px] relative shrink-0 w-[6px]">
      <div className="absolute inset-[-8.33%_-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
          <g id="Frame 252">
            <path d="M7 13L1 7L7 1" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </button>
  );
}

function LucideUserRound() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/user-round">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/user-round">
          <path d={svgPaths.p1c10c180} id="Vector" stroke="var(--stroke-0, #383434)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[20px] relative w-full">
          <Frame9 />
          <p className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[20px] left-[calc(50%+0.5px)] not-italic text-[16px] text-black text-center text-nowrap top-[calc(50%-10px)] tracking-[-0.24px] translate-x-[-50%] whitespace-pre">핫-빵</p>
          <LucideUserRound />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative rounded-[14px] shrink-0">
      <div className="h-[32px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[20px] left-[calc(50%+0.5px)] not-italic text-[12px] text-black text-center text-nowrap top-[calc(50%-10px)] tracking-[-0.24px] translate-x-[-50%] whitespace-pre">빵장소</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 bg-[#f47f30] grow h-[32px] min-h-px min-w-px overflow-clip relative rounded-[14px] shrink-0">
      <p className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[20px] left-[calc(50%+1px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-10px)] tracking-[-0.24px] translate-x-[-50%] whitespace-pre">리뷰</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start pb-0 pt-[16px] px-[20px] relative w-full">
          <Frame21 />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function LucideChevronDown() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="lucide/chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="lucide/chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[57px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.1] not-italic relative shrink-0 text-[#242121] text-[10px] text-center text-nowrap whitespace-pre">추천수</p>
      <LucideChevronDown />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#f1f0f0] h-[28px] overflow-clip relative rounded-[14px] shrink-0 w-[80px]" data-name="서울">
      <Frame42 />
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#fff8ed] h-[28px] relative rounded-[14px] shrink-0 w-[80px]" data-name="서울">
      <div className="h-[28px] overflow-clip relative rounded-[inherit] w-[80px]">
        <div className="absolute flex flex-col font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic text-[#f47f30] text-[10px] text-center text-nowrap top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[1.1] whitespace-pre">글 포스트</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f97b62] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Component2 />
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#fff8ed] h-[28px] relative rounded-[14px] shrink-0 w-[107px]" data-name="서울">
      <div className="h-[28px] overflow-clip relative rounded-[inherit] w-[107px]">
        <div className="absolute flex flex-col font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%+1px)] not-italic text-[#f47f30] text-[10px] text-center text-nowrap top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[1.1] whitespace-pre">친구글 모아보기</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f97b62] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Component3 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Component />
      <Frame45 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[44px] relative shrink-0 w-full">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[44px] items-end justify-between pb-0 pt-[16px] px-[20px] relative w-full">
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return <div className="h-[19px] shrink-0 w-[103px]" />;
}

function Frame11() {
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
      <Frame40 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[181px] top-[calc(50%-10px)] translate-y-[-50%] w-[124px]">
      <Frame11 />
    </div>
  );
}

function LucideChevronDown1() {
  return (
    <div className="relative size-[30px]" data-name="lucide/chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="lucide/chevron-down">
          <path d="M7 11L14.5 19L22 11" id="Vector" stroke="var(--stroke-0, #383434)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#fff8ed] h-full overflow-clip relative rounded-[14px] shrink-0 w-[362px]">
      <div className="absolute flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-center leading-[0] left-[166px] not-italic text-[#f47f30] text-[12px] text-nowrap top-[60.5px] tracking-[-0.24px] translate-y-[-50%]">
        <p className="leading-[19px] whitespace-pre">빵투어 투어리스트 모으기</p>
      </div>
      <div className="absolute left-[-9px] size-[201px] top-[-83px]" data-name="bg 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgBg1} />
          <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0" />
        </div>
      </div>
      <Frame18 />
      <div className="absolute flex flex-col font-['YES_Gothic:Bold',sans-serif] justify-center leading-[0] left-[166px] not-italic text-[#383434] text-[14px] text-nowrap top-[41px] tracking-[-0.24px] translate-y-[-50%]">
        <p className="leading-[19px] whitespace-pre">나랑 빵투어 갈 사람?</p>
      </div>
      <div className="absolute flex items-center justify-center left-[313px] size-[30px] top-[36px]" style={{ "--transform-inner-width": "30", "--transform-inner-height": "30" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <LucideChevronDown1 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] h-[98px] items-center relative shrink-0 w-full">
      <Frame10 />
      <div className="absolute flex h-[80px] items-center justify-center left-[17px] top-[9px] w-[65.099px]" style={{ "--transform-inner-width": "50.171875", "--transform-inner-height": "70.28125" } as React.CSSProperties}>
        <div className="flex-none rotate-[346.6deg]">
          <div className="h-[70.285px] relative w-[50.176px]" data-name="w2 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgW21} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[68.857px] items-center justify-center left-[104.93px] top-[19.5px] w-[52.657px]" style={{ "--transform-inner-width": "44.359375", "--transform-inner-height": "63.359375" } as React.CSSProperties}>
        <div className="flex-none rotate-[7.896deg]">
          <div className="h-[63.362px] relative w-[44.373px]" data-name="w1 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgW11} />
          </div>
        </div>
      </div>
      <div className="absolute h-[64px] left-[59.92px] top-[22px] w-[55px]" data-name="m1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgM11} />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[30px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
        <img alt="" className="absolute left-[-9.19%] max-w-none size-[113.24%] top-[-8.13%]" src={imgFrame275} />
      </div>
    </div>
  );
}

function FlowBtn() {
  return (
    <div className="bg-white h-[18px] relative rounded-[20px] shrink-0 w-[45px]" data-name="flow-btn">
      <div className="h-[18px] overflow-clip relative rounded-[inherit] w-[45px]">
        <div className="absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-12.5px)] not-italic text-[#00bb3d] text-[10px] text-nowrap top-[calc(50%+0.5px)] tracking-[-0.11px] translate-y-[-50%]">
          <p className="leading-[1.7] whitespace-pre">팔로우</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00bb3d] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[210px]">
      <Frame13 />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[12px] text-nowrap tracking-[-0.132px] whitespace-pre">나빵조아</p>
      <FlowBtn />
    </div>
  );
}

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
          <path d={svgPaths.p21912200} fill="var(--fill-0, #F47F30)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <LucideBookmark />
      <LucideHeart />
      <LucideStar />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame34 />
      <Frame4 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title />
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[40px] relative shrink-0 w-[294px]">
      <div className="absolute font-['YES_Gothic:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#383434] text-[12px] text-nowrap top-0 tracking-[-0.24px] whitespace-pre">
        <p className="mb-0">오늘 간 베이커리에</p>
        <p className="mb-0">새로나온 빵이 있었는데 이게 뭔..? 완전 왕맛👍</p>
        <p>삼빵동에 있는 뉴위켄드 베이커리! 추천추천이야!</p>
      </div>
    </div>
  );
}

function LucideThumbsUp() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/thumbs-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_56_201)" id="lucide/thumbs-up">
          <path d={svgPaths.p21848000} id="Vector" stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_56_201">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideThumbsUp />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">크림치즈메론빵, 약과 크로플, 말차 크림빵</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame32 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame46 />
    </div>
  );
}

function Txt() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame30 />
          <Frame35 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[150px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame275} />
    </div>
  );
}

function Frame90() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[14px] py-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <Frame27 key={i} />
      ))}
    </div>
  );
}

function Frame47() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[14px] py-0 relative shrink-0 w-[346px]">
      <Frame90 />
    </div>
  );
}

function Img() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="img">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pb-[20px] pt-0 px-[14px] relative w-full">
          <Frame47 />
        </div>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Txt />
      <Img />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f1f0f0] border-solid inset-0 pointer-events-none" />
      <Frame89 />
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[#f1f0f0] box-border content-stretch flex flex-col gap-[14px] items-start pb-0 pt-[14px] px-0 relative rounded-[14px] shrink-0 w-full" data-name="5">
      <div aria-hidden="true" className="absolute border border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Frame33 />
      <Frame29 />
    </div>
  );
}

function LucideVote() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/vote">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/vote">
          <path d={svgPaths.p26371e00} id="Vector" stroke="var(--stroke-0, #00BB9B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[210px]">
      <LucideVote />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[14px] text-nowrap tracking-[-0.154px] whitespace-pre">이번주 핫-빵 투표를 해봅시다.</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame48 />
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#00bb3d] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">투표 10p</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title1 />
    </div>
  );
}

function Component6() {
  return <div className="bg-[#f1f0f0] rounded-[8px] shrink-0 size-[24px]" data-name="Component 9" />;
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[5px] items-center not-italic relative shrink-0 text-nowrap">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] relative shrink-0 text-[12px] text-black tracking-[-0.132px] whitespace-pre">요거트 크림 소금빵</p>
      <div className="flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-end leading-[0] relative shrink-0 text-[#f47f30] text-[10px] tracking-[-0.11px]">
        <p className="leading-[1.7] text-nowrap whitespace-pre">올리브 아파트먼트</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Component6 />
      <Frame39 />
    </div>
  );
}

function Component9() {
  return <div className="bg-[#f1f0f0] rounded-[8px] shrink-0 size-[24px]" data-name="Component 9" />;
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[5px] items-center not-italic relative shrink-0 text-nowrap">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] relative shrink-0 text-[12px] text-black tracking-[-0.132px] whitespace-pre">앙버터 소금빵</p>
      <div className="flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-end leading-[0] relative shrink-0 text-[#f47f30] text-[10px] tracking-[-0.11px]">
        <p className="leading-[1.7] text-nowrap whitespace-pre">죠스</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Component9 />
      <Frame51 />
    </div>
  );
}

function Component10() {
  return <div className="bg-[#f1f0f0] rounded-[8px] shrink-0 size-[24px]" data-name="Component 9" />;
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[5px] items-center not-italic relative shrink-0 text-nowrap">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] relative shrink-0 text-[12px] text-black tracking-[-0.132px] whitespace-pre">무화과 얼그레이 케이크</p>
      <div className="flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-end leading-[0] relative shrink-0 text-[#f47f30] text-[10px] tracking-[-0.11px]">
        <p className="leading-[1.7] text-nowrap whitespace-pre">온드리 케익마켓</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Component10 />
      <Frame52 />
    </div>
  );
}

function Component11() {
  return <div className="bg-[#f1f0f0] rounded-[8px] shrink-0 size-[24px]" data-name="Component 9" />;
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[5px] items-center not-italic relative shrink-0 text-nowrap">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] relative shrink-0 text-[12px] text-black tracking-[-0.132px] whitespace-pre">흑임자 카스테라</p>
      <div className="flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-end leading-[0] relative shrink-0 text-[#f47f30] text-[10px] tracking-[-0.11px]">
        <p className="leading-[1.7] text-nowrap whitespace-pre">옹글당</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Component11 />
      <Frame54 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Frame50 />
      <Frame31 />
      <Frame53 />
      <Frame55 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#5269ff] content-stretch flex gap-[10px] h-[28px] items-center justify-center relative rounded-[8px] shrink-0 w-[177px]">
      <div className="flex flex-col font-['YES_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[-0.132px]">
        <p className="leading-[1.7] whitespace-pre">투표 완료</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative rounded-[8px] shrink-0 w-full">
      <Frame37 />
    </div>
  );
}

function Txt1() {
  return (
    <div className="bg-white relative rounded-bl-[14px] rounded-br-[14px] shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame38 />
          <Frame36 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-full">
      <Txt1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#f1f0f0] box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[14px] shrink-0 w-full" data-name="1">
      <Frame49 />
      <Frame56 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[30px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
        <img alt="" className="absolute left-[-9.19%] max-w-none size-[113.24%] top-[-8.13%]" src={imgFrame275} />
      </div>
    </div>
  );
}

function FlowBtn1() {
  return (
    <div className="bg-white h-[18px] relative rounded-[20px] shrink-0 w-[45px]" data-name="flow-btn">
      <div className="h-[18px] overflow-clip relative rounded-[inherit] w-[45px]">
        <div className="absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-12.5px)] not-italic text-[#00bb3d] text-[10px] text-nowrap top-[calc(50%+0.5px)] tracking-[-0.11px] translate-y-[-50%]">
          <p className="leading-[1.7] whitespace-pre">팔로우</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00bb3d] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[210px]">
      <Frame14 />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[12px] text-nowrap tracking-[-0.132px] whitespace-pre">언제나빵츄</p>
      <FlowBtn1 />
    </div>
  );
}

function LucideBookmark1() {
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

function LucideHeart1() {
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

function LucideStar1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lucide/star">
          <path d={svgPaths.p21912200} fill="var(--fill-0, #F47F30)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <LucideBookmark1 />
      <LucideHeart1 />
      <LucideStar1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame57 />
      <Frame5 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title2 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="h-[42px] relative shrink-0 w-[328px]">
      <div className="absolute font-['YES_Gothic:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#383434] text-[12px] text-nowrap top-0 tracking-[-0.24px] whitespace-pre">
        <p className="mb-0">오늘도 난 빵을 먹엇고... 왕맛이었지..⭐️</p>
        <p className="mb-0">홍빵동 사거리에 있는 빵딜리셔스 라는 곳인데..</p>
        <p>{`빵 계획 없었는데.. 또 빵을 사먹다니.. 나.. 완전 프라임빵인가봐... `}</p>
      </div>
    </div>
  );
}

function LucideThumbsUp1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/thumbs-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_56_201)" id="lucide/thumbs-up">
          <path d={svgPaths.p21848000} id="Vector" stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_56_201">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideThumbsUp1 />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">피스타치오크림빵</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame60 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame61 />
    </div>
  );
}

function Txt2() {
  return (
    <div className="bg-white relative rounded-bl-[14px] rounded-br-[14px] shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame59 />
          <Frame62 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Txt2 />
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-[#f1f0f0] box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[14px] shrink-0 w-full" data-name="9">
      <Frame58 />
      <Frame63 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[30px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
        <img alt="" className="absolute left-[-9.19%] max-w-none size-[113.24%] top-[-8.13%]" src={imgFrame275} />
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[210px]">
      <Frame15 />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[12px] text-nowrap tracking-[-0.132px] whitespace-pre">달달한허니빵</p>
    </div>
  );
}

function LucideBookmark2() {
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

function LucideHeart2() {
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

function LucideStar2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lucide/star">
          <path d={svgPaths.p21912200} fill="var(--fill-0, #F47F30)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <LucideBookmark2 />
      <LucideHeart2 />
      <LucideStar2 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame64 />
      <Frame6 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title3 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="h-[40px] relative shrink-0 w-[294px]">
      <div className="absolute font-['YES_Gothic:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#383434] text-[12px] text-nowrap top-0 tracking-[-0.24px] whitespace-pre">
        <p className="mb-0">오늘은 구빵시 구빵동에 있는 대형 베이커리 카페,</p>
        <p className="mb-0">빵데이즈에 다녀왔어. 완전 빵들이 환상이었고</p>
        <p className="mb-0">빵 맛은 뭔들... 맛도 보장이야! 꼭 가보길 바라 😆 😆 😆</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function LucideThumbsUp2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/thumbs-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_56_201)" id="lucide/thumbs-up">
          <path d={svgPaths.p21848000} id="Vector" stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_56_201">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideThumbsUp2 />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">소금붕어빵, 단팥크림큐브빵, 밤티라미수</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame67 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame68 />
    </div>
  );
}

function Txt3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame66 />
          <Frame70 />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[150px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame275} />
    </div>
  );
}

function Frame71() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[14px] py-0 relative shrink-0 w-[346px]">
      {[...Array(4).keys()].map((_, i) => (
        <Frame28 key={i} />
      ))}
    </div>
  );
}

function Img1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="img">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pb-[20px] pt-0 px-[14px] relative w-full">
          <Frame71 />
        </div>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Txt3 />
      <Img1 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f1f0f0] border-solid inset-0 pointer-events-none" />
      <Frame91 />
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-[#f1f0f0] relative rounded-[14px] shrink-0 w-full" data-name="10">
      <div className="box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[inherit] w-full">
        <Frame65 />
        <Frame72 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[30px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
        <img alt="" className="absolute left-[-9.19%] max-w-none size-[113.24%] top-[-8.13%]" src={imgFrame275} />
      </div>
    </div>
  );
}

function FlowBtn2() {
  return (
    <div className="bg-white h-[18px] relative rounded-[20px] shrink-0 w-[45px]" data-name="flow-btn">
      <div className="h-[18px] overflow-clip relative rounded-[inherit] w-[45px]">
        <div className="absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-12.5px)] not-italic text-[#00bb3d] text-[10px] text-nowrap top-[calc(50%+0.5px)] tracking-[-0.11px] translate-y-[-50%]">
          <p className="leading-[1.7] whitespace-pre">팔로우</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00bb3d] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[210px]">
      <Frame16 />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[12px] text-nowrap tracking-[-0.132px] whitespace-pre">고고빵가자</p>
      <FlowBtn2 />
    </div>
  );
}

function LucideBookmark3() {
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

function LucideHeart3() {
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

function LucideStar3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lucide/star">
          <path d={svgPaths.p21912200} fill="var(--fill-0, #F47F30)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <LucideBookmark3 />
      <LucideHeart3 />
      <LucideStar3 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame73 />
      <Frame7 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title4 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="h-[40px] relative shrink-0 w-[294px]">
      <div className="-webkit-box absolute font-['YES_Gothic:Regular',sans-serif] h-[45px] leading-[normal] left-0 not-italic overflow-ellipsis overflow-hidden text-[#383434] text-[12px] top-0 tracking-[-0.24px] w-[324px]">
        <p className="mb-0">오늘 빵투어 갔다왔는데 가는 곳마다 완전 핫해서</p>
        <p className="mb-0">웨이팅 1시간 이상했어..ㅠ 그래도 분위기, 빵맛 모두 만족이야!</p>
        <p>웨이팅하는 이유를 알겠더라 같이간 빵투어 친구들도 다 행복했데!! 굿데이</p>
      </div>
    </div>
  );
}

function LucideThumbsUp3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/thumbs-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_56_201)" id="lucide/thumbs-up">
          <path d={svgPaths.p21848000} id="Vector" stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_56_201">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideThumbsUp3 />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">{`쿠키크림케이크, 귤소보로빵, 밤페이스트빵, 마늘프레즐 `}</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame76 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame77 />
    </div>
  );
}

function Txt4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame75 />
          <Frame78 />
        </div>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[150px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame275} />
    </div>
  );
}

function Frame80() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[14px] py-0 relative shrink-0 w-[346px]">
      {[...Array(4).keys()].map((_, i) => (
        <Frame79 key={i} />
      ))}
    </div>
  );
}

function Img2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="img">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pb-[20px] pt-0 px-[14px] relative w-full">
          <Frame80 />
        </div>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Txt4 />
      <Img2 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f1f0f0] border-solid inset-0 pointer-events-none" />
      <Frame92 />
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-[#f1f0f0] relative rounded-[14px] shrink-0 w-full" data-name="11">
      <div className="box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[inherit] w-full">
        <Frame74 />
        <Frame81 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[30px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
        <img alt="" className="absolute left-[-9.19%] max-w-none size-[113.24%] top-[-8.13%]" src={imgFrame275} />
      </div>
    </div>
  );
}

function FlowBtn3() {
  return (
    <div className="bg-white h-[18px] relative rounded-[20px] shrink-0 w-[45px]" data-name="flow-btn">
      <div className="h-[18px] overflow-clip relative rounded-[inherit] w-[45px]">
        <div className="absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-12.5px)] not-italic text-[#00bb3d] text-[10px] text-nowrap top-[calc(50%+0.5px)] tracking-[-0.11px] translate-y-[-50%]">
          <p className="leading-[1.7] whitespace-pre">팔로우</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00bb3d] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[210px]">
      <Frame17 />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[12px] text-nowrap tracking-[-0.132px] whitespace-pre">빵돌곰돌</p>
      <FlowBtn3 />
    </div>
  );
}

function LucideBookmark4() {
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

function LucideHeart4() {
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

function LucideStar4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lucide/star">
          <path d={svgPaths.p21912200} fill="var(--fill-0, #F47F30)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <LucideBookmark4 />
      <LucideHeart4 />
      <LucideStar4 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame82 />
      <Frame8 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title5 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="h-[56px] relative shrink-0 w-[328px]">
      <div className="absolute font-['YES_Gothic:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#383434] text-[12px] text-nowrap top-0 tracking-[-0.24px] whitespace-pre">
        <p className="mb-0">장빵동 로데오거리에 놀러갔는데 빵 냄새가 장난이 아니더라?</p>
        <p className="mb-0">그래서 홀린듯이 들어갔는데 완전 빵들이 완벽 그잡체였어..</p>
        <p className="mb-0">빵 사서 하나는 그자리에서 먹어버리고 몇개는 집으로..</p>
        <p>아, 맞다 장빵시 장빵동 로데오거리에 있는 장빵 베리커리야!</p>
      </div>
    </div>
  );
}

function LucideThumbsUp4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/thumbs-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_56_201)" id="lucide/thumbs-up">
          <path d={svgPaths.p21848000} id="Vector" stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_56_201">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideThumbsUp4 />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">고소한오곡크림빵, 초코우유식빵, 치즈듬뿍피자빵</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame85 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame86 />
    </div>
  );
}

function Txt5() {
  return (
    <div className="bg-white relative rounded-bl-[14px] rounded-br-[14px] shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame84 />
          <Frame87 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Txt5 />
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-[#f1f0f0] box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[14px] shrink-0 w-full" data-name="8">
      <Frame83 />
      <Frame88 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[14px] h-[1863px] items-start overflow-clip pb-[140px] pt-[32px] px-[20px] relative shrink-0 w-[401px]">
      <Frame12 />
      <Component4 />
      <Component1 />
      <Component12 />
      <Component7 />
      <Component8 />
      <Component5 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex flex-col h-[144px] items-start left-0 top-[44px] w-[402px]">
      <Frame19 />
      <Frame20 />
      <Frame24 />
      <Frame26 />
    </div>
  );
}

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

function Frame69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-center right-[20px] top-0">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#00bb3d] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">리뷰 100p</p>
      <Posting />
    </div>
  );
}

function LucideBold() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="lucide/bold">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="lucide/bold">
          <path d={svgPaths.p17fe1e80} id="Vector" stroke="var(--stroke-0, #F97B62)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center relative shrink-0 w-[52px]">
      <LucideBold />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#f97b62] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">Home</p>
    </div>
  );
}

function LucideChefHat() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="lucide/chef-hat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="lucide/chef-hat">
          <g id="Vector">
            <path d={svgPaths.p30362980} fill="#928B8B" />
            <path d="M7 19.8333H21Z" fill="#928B8B" />
            <path d={svgPaths.p7c32f00} stroke="var(--stroke-0, #383434)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center relative shrink-0 w-[37px]">
      <LucideChefHat />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[10px] text-black text-nowrap tracking-[-0.11px] whitespace-pre">핫-빵</p>
    </div>
  );
}

function L() {
  return (
    <div className="content-stretch flex gap-[38px] items-center justify-center relative shrink-0 w-[129.333px]" data-name="L">
      <Frame />
      <Frame1 />
    </div>
  );
}

function LucideFlagTriangleRight() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="lucide/flag-triangle-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="lucide/flag-triangle-right">
          <g id="Vector">
            <path d={svgPaths.p31ecd900} fill="#928B8B" />
            <path d={svgPaths.p31ecd900} stroke="var(--stroke-0, #383434)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center relative shrink-0 w-[37px]">
      <LucideFlagTriangleRight />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[10px] text-black text-nowrap tracking-[-0.11px] whitespace-pre">빵맵</p>
    </div>
  );
}

function LucideUserRound1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="lucide/user-round">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="lucide/user-round">
          <g id="Vector">
            <path d={svgPaths.p217d7f80} fill="#928B8B" />
            <path d={svgPaths.p2bd95d00} fill="#928B8B" />
            <path d={svgPaths.p33d62560} stroke="var(--stroke-0, #383434)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center relative shrink-0 w-[37px]">
      <LucideUserRound1 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[10px] text-black text-nowrap tracking-[-0.11px] whitespace-pre">내 정보</p>
    </div>
  );
}

function R() {
  return (
    <div className="content-stretch flex gap-[38px] items-center justify-center relative shrink-0 w-[129.333px]" data-name="R">
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Inner() {
  return (
    <div className="box-border content-stretch flex gap-[91px] h-[80px] items-center justify-center pb-[28px] pt-[34px] px-[30px] relative shrink-0 w-[400px]" data-name="inner">
      <L />
      <R />
    </div>
  );
}

function Box() {
  return (
    <div className="absolute bg-[#f1f0f0] box-border content-stretch flex h-[80px] items-start justify-between left-0 overflow-clip px-[60px] py-0 rounded-tl-[40px] rounded-tr-[40px] top-[32px] w-[402px]" data-name="box">
      <Inner />
    </div>
  );
}

function IconAiDirect() {
  return (
    <div className="absolute left-1/2 rounded-[50px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.08)] size-[84px] top-[calc(50%-12px)] translate-x-[-50%] translate-y-[-50%]" data-name="icon/ai_direct">
      <div className="absolute inset-0 overflow-hidden rounded-[50px]">
        <video autoPlay className="absolute left-[-9.52%] max-w-none size-[119.05%] top-[-10.18%]" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/3c8805cad4a485efaffb271c47f62b41b0e3f9ad" />
        </video>
      </div>
    </div>
  );
}

function DockBar() {
  return (
    <div className="absolute bottom-0 h-[112px] left-0 w-[402px]" data-name="dock-bar">
      <Box />
      <IconAiDirect />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute h-[163px] left-0 top-[711px] w-[402px]">
      <DockBar />
      <Frame69 />
    </div>
  );
}

export default function Mvp1Page() {
  return (
    <div className="bg-white relative size-full" data-name="MVP1_핫빵_리뷰_page">
      <Frame41 />
      <BarsStatusBarIPhoneLight />
      <Frame23 />
    </div>
  );
}