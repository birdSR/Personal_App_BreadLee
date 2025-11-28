import svgPaths from "./svg-r82wj0612u";
import imgBg1 from "figma:asset/5741746dd77ffdb01d3a8343704bf236565aaa41.png";
import imgW21 from "figma:asset/910b1dc3d33b3040541ac51e22a8352ae49048e5.png";
import imgW11 from "figma:asset/7a2f64b5fc84a2356ee2fa30b8a86318f69532da.png";
import imgM11 from "figma:asset/ddce8bb9d7f4f0f7183825c5662f8ac314e9201b.png";
import imgFrame334 from "figma:asset/55292a243c147c2beae549eb98fa149d313dd5d3.png";

function Frame22() {
  return <div className="h-[19px] shrink-0 w-[103px]" />;
}

function Frame5() {
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
      <Frame22 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[181px] top-[calc(50%-10px)] translate-y-[-50%] w-[124px]">
      <Frame5 />
    </div>
  );
}

function LucideChevronDown() {
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

function Frame4() {
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
      <Frame7 />
      <div className="absolute flex flex-col font-['YES_Gothic:Bold',sans-serif] justify-center leading-[0] left-[166px] not-italic text-[#383434] text-[14px] text-nowrap top-[41px] tracking-[-0.24px] translate-y-[-50%]">
        <p className="leading-[19px] whitespace-pre">나랑 빵투어 갈 사람?</p>
      </div>
      <div className="absolute flex items-center justify-center left-[313px] size-[30px] top-[36px]" style={{ "--transform-inner-width": "30", "--transform-inner-height": "30" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <LucideChevronDown />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] h-[98px] items-center relative shrink-0 w-full">
      <Frame4 />
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

function FlowBtn() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[52px]" data-name="flow-btn">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[9px] py-0 relative rounded-[inherit] w-[52px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#00bb3d] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">빵맵 등록</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00bb3d] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[210px]">
      <LucideStar />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[14px] text-nowrap tracking-[-0.154px] whitespace-pre">올리브아파트먼트</p>
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

function Frame() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <LucideBookmark />
      <LucideHeart />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame16 />
      <Frame />
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[88px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame334} />
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[14px] py-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <Frame9 key={i} />
      ))}
    </div>
  );
}

function Img() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[14px] py-0 relative shrink-0 w-[347px]" data-name="img">
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[40px] relative shrink-0 w-[294px]">
      <div className="absolute font-['YES_Gothic:Regular',sans-serif] leading-[1.7] left-0 not-italic text-[12px] text-black text-nowrap top-0 tracking-[-0.132px] whitespace-pre">
        <p className="mb-0">잠봉 센드위치가 제일 인기있는 센드위치 맛집!</p>
        <p>이빵동에 새로 생긴 무조건 30분 웨이팅하는 핫한 빵의 성지</p>
      </div>
    </div>
  );
}

function LucideMapPin() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/map-pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="lucide/map-pin">
          <g id="Vector">
            <path d={svgPaths.p5133f00} stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pb3a6a00} stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideMapPin />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">이빵시 이빵구 이빵로304길 32-3 이빵빌딩 1층</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame14 />
    </div>
  );
}

function LucideThumbsUp() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/thumbs-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_26_1215)" id="lucide/thumbs-up">
          <path d={svgPaths.p21848000} id="Vector" stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_26_1215">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideThumbsUp />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">잠봉 센드위치, 올리브 치아바타</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame23 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame13 />
      <Frame24 />
    </div>
  );
}

function Txt() {
  return (
    <div className="bg-white relative rounded-bl-[14px] rounded-br-[14px] shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame12 />
          <Frame17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Img />
      <Txt />
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[#f1f0f0] box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[14px] shrink-0 w-full" data-name="5">
      <Frame15 />
      <Frame11 />
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

function Frame25() {
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
      <Frame25 />
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#00bb3d] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">투표 10p</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title1 />
    </div>
  );
}

function Component5() {
  return <div className="bg-[#f1f0f0] rounded-[8px] shrink-0 size-[24px]" data-name="Component 9" />;
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[5px] items-center not-italic relative shrink-0 text-nowrap">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] relative shrink-0 text-[12px] text-black tracking-[-0.132px] whitespace-pre">요거트 크림 소금빵</p>
      <div className="flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-end leading-[0] relative shrink-0 text-[#f47f30] text-[10px] tracking-[-0.11px]">
        <p className="leading-[1.7] text-nowrap whitespace-pre">올리브 아파트먼트</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Component5 />
      <Frame21 />
    </div>
  );
}

function Component6() {
  return <div className="bg-[#f1f0f0] rounded-[8px] shrink-0 size-[24px]" data-name="Component 9" />;
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[5px] items-center not-italic relative shrink-0 text-nowrap">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] relative shrink-0 text-[12px] text-black tracking-[-0.132px] whitespace-pre">앙버터 소금빵</p>
      <div className="flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-end leading-[0] relative shrink-0 text-[#f47f30] text-[10px] tracking-[-0.11px]">
        <p className="leading-[1.7] text-nowrap whitespace-pre">죠스</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Component6 />
      <Frame28 />
    </div>
  );
}

function Component7() {
  return <div className="bg-[#f1f0f0] rounded-[8px] shrink-0 size-[24px]" data-name="Component 9" />;
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[5px] items-center not-italic relative shrink-0 text-nowrap">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] relative shrink-0 text-[12px] text-black tracking-[-0.132px] whitespace-pre">무화과 얼그레이 케이크</p>
      <div className="flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-end leading-[0] relative shrink-0 text-[#f47f30] text-[10px] tracking-[-0.11px]">
        <p className="leading-[1.7] text-nowrap whitespace-pre">온드리 케익마켓</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Component7 />
      <Frame30 />
    </div>
  );
}

function Component8() {
  return <div className="bg-[#f1f0f0] rounded-[8px] shrink-0 size-[24px]" data-name="Component 9" />;
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[5px] items-center not-italic relative shrink-0 text-nowrap">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] relative shrink-0 text-[12px] text-black tracking-[-0.132px] whitespace-pre">흑임자 카스테라</p>
      <div className="flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-end leading-[0] relative shrink-0 text-[#f47f30] text-[10px] tracking-[-0.11px]">
        <p className="leading-[1.7] text-nowrap whitespace-pre">옹글당</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Component8 />
      <Frame32 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Frame27 />
      <Frame29 />
      <Frame31 />
      <Frame33 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#5269ff] content-stretch flex gap-[10px] h-[28px] items-center justify-center relative rounded-[8px] shrink-0 w-[177px]">
      <div className="flex flex-col font-['YES_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[-0.132px]">
        <p className="leading-[1.7] whitespace-pre">투표 완료</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative rounded-[8px] shrink-0 w-full">
      <Frame19 />
    </div>
  );
}

function Txt1() {
  return (
    <div className="bg-white relative rounded-bl-[14px] rounded-br-[14px] shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame20 />
          <Frame18 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-full">
      <Txt1 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#f1f0f0] box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[14px] shrink-0 w-full" data-name="1">
      <Frame26 />
      <Frame34 />
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

function FlowBtn1() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[52px]" data-name="flow-btn">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[9px] py-0 relative rounded-[inherit] w-[52px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#00bb3d] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">빵맵 등록</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00bb3d] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[210px]">
      <LucideStar1 />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[14px] text-nowrap tracking-[-0.154px] whitespace-pre">죠스</p>
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <LucideBookmark1 />
      <LucideHeart1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame35 />
      <Frame1 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title2 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[88px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame334} />
    </div>
  );
}

function Frame38() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[14px] py-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <Frame37 key={i} />
      ))}
    </div>
  );
}

function Img1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[14px] py-0 relative shrink-0 w-[347px]" data-name="img">
      <Frame38 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="h-[40px] relative shrink-0 w-[294px]">
      <div className="absolute font-['YES_Gothic:Regular',sans-serif] leading-[1.7] left-0 not-italic text-[12px] text-black text-nowrap top-0 tracking-[-0.132px] whitespace-pre">
        <p className="mb-0">죠스하면 앙버터 소금빵이쥬~</p>
        <p>소금빵으로 소문난 빵집, 놀러와요 우리의 빵 맛집 죠스로~</p>
      </div>
    </div>
  );
}

function LucideMapPin1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/map-pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="lucide/map-pin">
          <g id="Vector">
            <path d={svgPaths.pdbdf180} stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2d609780} stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideMapPin1 />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">이빵시 이빵구 이빵로303길 3 브레든 103호</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame40 />
    </div>
  );
}

function LucideThumbsUp1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/thumbs-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_26_1215)" id="lucide/thumbs-up">
          <path d={svgPaths.p21848000} id="Vector" stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_26_1215">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideThumbsUp1 />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">앙버터소금빵, 애그타르트</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame42 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame41 />
      <Frame43 />
    </div>
  );
}

function Txt2() {
  return (
    <div className="bg-white relative rounded-bl-[14px] rounded-br-[14px] shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame39 />
          <Frame44 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Img1 />
      <Txt2 />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#f1f0f0] box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[14px] shrink-0 w-full" data-name="2">
      <Frame36 />
      <Frame45 />
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

function FlowBtn2() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[52px]" data-name="flow-btn">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[9px] py-0 relative rounded-[inherit] w-[52px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#00bb3d] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">빵맵 등록</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00bb3d] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[210px]">
      <LucideStar2 />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[14px] text-nowrap tracking-[-0.154px] whitespace-pre">온드리 케익마켓</p>
      <FlowBtn2 />
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <LucideBookmark2 />
      <LucideHeart2 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame46 />
      <Frame2 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title3 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[88px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame334} />
    </div>
  );
}

function Frame49() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[14px] py-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <Frame48 key={i} />
      ))}
    </div>
  );
}

function Img2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[14px] py-0 relative shrink-0 w-[347px]" data-name="img">
      <Frame49 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="h-[40px] relative shrink-0 w-[294px]">
      <div className="absolute font-['YES_Gothic:Regular',sans-serif] leading-[1.7] left-0 not-italic text-[12px] text-black text-nowrap top-0 tracking-[-0.132px] whitespace-pre">
        <p className="mb-0">특별한 날에 특별한 케이크는 필수죠~</p>
        <p>신선한 과일과 재료들로 채우는 온드리만의 케이크를 만나보세요!</p>
      </div>
    </div>
  );
}

function LucideMapPin2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/map-pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="lucide/map-pin">
          <g id="Vector">
            <path d={svgPaths.pdbdf180} stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2d609780} stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideMapPin2 />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">이빵시 이빵구 이빵로99길 45-123 온드리빌딩 1층 101호</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame51 />
    </div>
  );
}

function LucideThumbsUp2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/thumbs-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_26_1215)" id="lucide/thumbs-up">
          <path d={svgPaths.p21848000} id="Vector" stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_26_1215">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideThumbsUp2 />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">무화과얼그레이케이크, 딸기크림몽블랑</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame53 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame52 />
      <Frame54 />
    </div>
  );
}

function Txt3() {
  return (
    <div className="bg-white relative rounded-bl-[14px] rounded-br-[14px] shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame50 />
          <Frame55 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Img2 />
      <Txt3 />
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#f1f0f0] box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[14px] shrink-0 w-full" data-name="3">
      <Frame47 />
      <Frame56 />
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

function FlowBtn3() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[52px]" data-name="flow-btn">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[9px] py-0 relative rounded-[inherit] w-[52px]">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#00bb3d] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">빵맵 등록</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00bb3d] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[210px]">
      <LucideStar3 />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[14px] text-nowrap tracking-[-0.154px] whitespace-pre">옹글당</p>
      <FlowBtn3 />
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <LucideBookmark3 />
      <LucideHeart3 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame57 />
      <Frame3 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title4 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[88px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame334} />
    </div>
  );
}

function Frame60() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[14px] py-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <Frame59 key={i} />
      ))}
    </div>
  );
}

function Img3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[14px] py-0 relative shrink-0 w-[347px]" data-name="img">
      <Frame60 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="h-[40px] relative shrink-0 w-[294px]">
      <div className="absolute font-['YES_Gothic:Regular',sans-serif] leading-[1.7] left-0 not-italic text-[12px] text-black text-nowrap top-0 tracking-[-0.132px] whitespace-pre">
        <p className="mb-0">건강한 빵의 대가, 제빵명가 옹심욱씨가 운영하는 헬시 베이커리.</p>
        <p>저당과 비건 재료로 만들어 더 좋은 이 집!</p>
      </div>
    </div>
  );
}

function LucideMapPin3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/map-pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="lucide/map-pin">
          <g id="Vector">
            <path d={svgPaths.pdbdf180} stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2d609780} stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideMapPin3 />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">이빵시 이빵구 이빵로302길 2 옹글빌딩 102호</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame62 />
    </div>
  );
}

function LucideThumbsUp3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/thumbs-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_26_1215)" id="lucide/thumbs-up">
          <path d={svgPaths.p21848000} id="Vector" stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_26_1215">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideThumbsUp3 />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">{`무화과 깜빠뉴, 흑임자 케이크 `}</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame64 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame63 />
      <Frame65 />
    </div>
  );
}

function Txt4() {
  return (
    <div className="bg-white relative rounded-bl-[14px] rounded-br-[14px] shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame61 />
          <Frame66 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Img3 />
      <Txt4 />
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#f1f0f0] box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[14px] shrink-0 w-full" data-name="4">
      <Frame58 />
      <Frame67 />
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="relative size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] items-start pb-[140px] pt-[32px] px-[20px] relative size-full">
          <Frame6 />
          <Component4 />
          <Component />
          <Component1 />
          <Component2 />
          <Component3 />
        </div>
      </div>
    </div>
  );
}