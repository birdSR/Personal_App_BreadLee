import svgPaths from "./svg-pdow8p49e8";
import imgBg1 from "figma:asset/5741746dd77ffdb01d3a8343704bf236565aaa41.png";
import imgW21 from "figma:asset/910b1dc3d33b3040541ac51e22a8352ae49048e5.png";
import imgW11 from "figma:asset/7a2f64b5fc84a2356ee2fa30b8a86318f69532da.png";
import imgM11 from "figma:asset/ddce8bb9d7f4f0f7183825c5662f8ac314e9201b.png";
import imgFrame275 from "figma:asset/55292a243c147c2beae549eb98fa149d313dd5d3.png";
import VoteComponent from "./1";
import { InteractiveIconGroup } from "../components/InteractiveIcons";
import CommentSection from "../components/CommentSection";
import { useRef, useState } from 'react';
import PostCard from '../components/PostCard';

function Frame28() {
  return <div className="h-[19px] shrink-0 w-[103px]" />;
}

function Frame6() {
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
      <Frame28 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[181px] top-[calc(50%-10px)] translate-y-[-50%] w-[124px]">
      <Frame6 />
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

function Frame5() {
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
      <Frame13 />
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

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] h-[98px] items-center relative shrink-0 w-full">
      <Frame5 />
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

function Frame8() {
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

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[210px]">
      <Frame8 />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[12px] text-nowrap tracking-[-0.132px] whitespace-pre">나빵조아</p>
      <FlowBtn />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame22 />
      <InteractiveIconGroup />
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title />
    </div>
  );
}

function Frame18() {
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
        <g clipPath="url(#clip0_54_56)" id="lucide/thumbs-up">
          <path d={svgPaths.p21848000} id="Vector" stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_54_56">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideThumbsUp />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">크림치즈메론빵, 약과 크로플, 말차 크림빵</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame20 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pt-[8px] relative shrink-0">
      <Frame29 />
    </div>
  );
}

function Txt() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame18 />
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[150px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame275} />
    </div>
  );
}

function Frame30() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[14px] py-0 relative shrink-0 w-[346px]">
      {[...Array(4).keys()].map((_, i) => (
        <Frame15 key={i} />
      ))}
    </div>
  );
}

function Img() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-white relative shrink-0 w-full" data-name="img">
      <div className="flex flex-row items-center size-full">
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`box-border content-stretch flex gap-[10px] items-center pb-[20px] pt-0 pl-[14px] pr-[14px] relative w-full overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x'
          }}
        >
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Txt />
      <Img />
      <CommentSection reviewId="review-1" />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Txt3 />
      <Img1 />
      <CommentSection reviewId="review-4" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f1f0f0] border-solid inset-0 pointer-events-none" />
      <Frame72 />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#f1f0f0] relative rounded-[14px] shrink-0 w-full" data-name="5">
      <div className="box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[inherit] w-full">
        <Frame21 />
        <Frame54 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
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

function Frame31() {
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
      <Frame31 />
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#00bb3d] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">투표 10p</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title1 />
    </div>
  );
}

function Component3() {
  return <div className="bg-[#f1f0f0] rounded-[8px] shrink-0 size-[24px]" data-name="Component 9" />;
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[5px] items-center not-italic relative shrink-0 text-nowrap">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] relative shrink-0 text-[12px] text-black tracking-[-0.132px] whitespace-pre">요거트 크림 소금빵</p>
      <div className="flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-end leading-[0] relative shrink-0 text-[#f47f30] text-[10px] tracking-[-0.11px]">
        <p className="leading-[1.7] text-nowrap whitespace-pre">올리브 아파트먼트</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Component3 />
      <Frame27 />
    </div>
  );
}

function Component6() {
  return <div className="bg-[#f1f0f0] rounded-[8px] shrink-0 size-[24px]" data-name="Component 9" />;
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[5px] items-center not-italic relative shrink-0 text-nowrap">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] relative shrink-0 text-[12px] text-black tracking-[-0.132px] whitespace-pre">앙버터 소금빵</p>
      <div className="flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-end leading-[0] relative shrink-0 text-[#f47f30] text-[10px] tracking-[-0.11px]">
        <p className="leading-[1.7] text-nowrap whitespace-pre">죠스</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Component6 />
      <Frame34 />
    </div>
  );
}

function Component7() {
  return <div className="bg-[#f1f0f0] rounded-[8px] shrink-0 size-[24px]" data-name="Component 9" />;
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[5px] items-center not-italic relative shrink-0 text-nowrap">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] relative shrink-0 text-[12px] text-black tracking-[-0.132px] whitespace-pre">무화과 얼그레이 케이크</p>
      <div className="flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-end leading-[0] relative shrink-0 text-[#f47f30] text-[10px] tracking-[-0.11px]">
        <p className="leading-[1.7] text-nowrap whitespace-pre">온드리 케익마켓</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Component7 />
      <Frame35 />
    </div>
  );
}

function Component8() {
  return <div className="bg-[#f1f0f0] rounded-[8px] shrink-0 size-[24px]" data-name="Component 9" />;
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[5px] items-center not-italic relative shrink-0 text-nowrap">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] relative shrink-0 text-[12px] text-black tracking-[-0.132px] whitespace-pre">흑임자 카스테라</p>
      <div className="flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-end leading-[0] relative shrink-0 text-[#f47f30] text-[10px] tracking-[-0.11px]">
        <p className="leading-[1.7] text-nowrap whitespace-pre">옹글당</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Component8 />
      <Frame37 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Frame33 />
      <Frame19 />
      <Frame36 />
      <Frame38 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#5269ff] content-stretch flex gap-[10px] h-[28px] items-center justify-center relative rounded-[8px] shrink-0 w-[177px]">
      <div className="flex flex-col font-['YES_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[-0.132px]">
        <p className="leading-[1.7] whitespace-pre">투표 완료</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative rounded-[8px] shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function Txt1() {
  return (
    <div className="bg-white relative rounded-bl-[14px] rounded-br-[14px] shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame26 />
          <Frame24 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-full">
      <Txt1 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#f1f0f0] box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[14px] shrink-0 w-full" data-name="1">
      <Frame32 />
      <Frame39 />
    </div>
  );
}

function Frame9() {
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

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[210px]">
      <Frame9 />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[12px] text-nowrap tracking-[-0.132px] whitespace-pre">언제나빵츄</p>
      <FlowBtn1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame40 />
      <InteractiveIconGroup />
    </div>
  );
}

function Frame41() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title2 />
    </div>
  );
}

function Frame42() {
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
        <g clipPath="url(#clip0_54_56)" id="lucide/thumbs-up">
          <path d={svgPaths.p21848000} id="Vector" stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_54_56">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideThumbsUp1 />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">피스타치오크림빵</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame43 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pt-[8px] relative shrink-0">
      <Frame44 />
    </div>
  );
}

function Txt2() {
  return (
    <div className="bg-white relative rounded-bl-[14px] rounded-br-[14px] shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame42 />
          <Frame45 />
        </div>
        <CommentSection reviewId="review-3" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Txt2 />
    </div>
  );
}

function Component9() {
  return (
    <div className="bg-[#f1f0f0] box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[14px] shrink-0 w-full" data-name="9">
      <Frame41 />
      <Frame46 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[30px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
        <img alt="" className="absolute left-[-9.19%] max-w-none size-[113.24%] top-[-8.13%]" src={imgFrame275} />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[210px]">
      <Frame10 />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[12px] text-nowrap tracking-[-0.132px] whitespace-pre">달달한허니빵</p>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame47 />
      <InteractiveIconGroup />
    </div>
  );
}

function Frame48() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title3 />
    </div>
  );
}

function Frame49() {
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
        <g clipPath="url(#clip0_54_56)" id="lucide/thumbs-up">
          <path d={svgPaths.p21848000} id="Vector" stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_54_56">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideThumbsUp2 />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">소금붕어빵, 단팥크림큐브빵, 밤티라미수</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame50 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pt-[8px] relative shrink-0">
      <Frame51 />
    </div>
  );
}

function Txt3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame49 />
          <Frame52 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[150px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame275} />
    </div>
  );
}

function Frame53() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[14px] py-0 relative shrink-0 w-[346px]">
      {[...Array(4).keys()].map((_, i) => (
        <Frame16 key={i} />
      ))}
    </div>
  );
}

function Img1() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-white relative shrink-0 w-full" data-name="img">
      <div className="flex flex-row items-center size-full">
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`box-border content-stretch flex gap-[10px] items-center pb-[20px] pt-0 pl-[14px] pr-[14px] relative w-full overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x'
          }}
        >
          <Frame53 />
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[#f1f0f0] relative rounded-[14px] shrink-0 w-full" data-name="10">
      <div className="box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-[0] pt-[14px] px-0 relative rounded-[inherit] w-full">
        <Frame48 />
        <Frame72 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Frame11() {
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

function Frame55() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[210px]">
      <Frame11 />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[12px] text-nowrap tracking-[-0.132px] whitespace-pre">빵순이빵돌이</p>
      <FlowBtn2 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame55 />
      <InteractiveIconGroup />
    </div>
  );
}

function Frame56() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title4 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="h-[42px] relative shrink-0 w-[328px]">
      <div className="absolute font-['YES_Gothic:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#383434] text-[12px] text-nowrap top-0 tracking-[-0.24px] whitespace-pre">
        <p className="mb-0">오빵동에 놀러갔다가 빵을 사게 됐어!</p>
        <p className="mb-0">빵을 사러 간건 아니었는데 냄새가 너무 좋더라??</p>
        <p>역시 빵은 사랑이야... 진짜 존맛이었어 ㅠㅠ</p>
      </div>
    </div>
  );
}

function LucideThumbsUp3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/thumbs-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_54_56)" id="lucide/thumbs-up">
          <path d={svgPaths.p21848000} id="Vector" stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_54_56">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideThumbsUp3 />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">크림치즈빵, 단팥빵, 소보로빵</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame58 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pt-[8px] relative shrink-0">
      <Frame59 />
    </div>
  );
}

function Txt4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame57 />
          <Frame60 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[150px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame275} />
    </div>
  );
}

function Frame61() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[14px] py-0 relative shrink-0 w-[346px]">
      {[...Array(4).keys()].map((_, i) => (
        <Frame17 key={i} />
      ))}
    </div>
  );
}

function Img2() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-white relative shrink-0 w-full" data-name="img">
      <div className="flex flex-row items-center size-full">
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`box-border content-stretch flex gap-[10px] items-center pb-[20px] pt-0 pl-[14px] pr-[14px] relative w-full overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x'
          }}
        >
          <Frame61 />
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Txt4 />
      <Img2 />
      <CommentSection reviewId="review-5" />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f1f0f0] border-solid inset-0 pointer-events-none" />
      <Frame73 />
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-[#f1f0f0] relative rounded-[14px] shrink-0 w-full" data-name="11">
      <div className="box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[inherit] w-full">
        <Frame56 />
        <Frame63 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Frame12() {
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

function Frame64() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[210px]">
      <Frame12 />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[12px] text-nowrap tracking-[-0.132px] whitespace-pre">빵돌곰돌</p>
      <FlowBtn3 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame64 />
      <InteractiveIconGroup />
    </div>
  );
}

function Frame65() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title5 />
    </div>
  );
}

function Frame66() {
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
        <g clipPath="url(#clip0_54_56)" id="lucide/thumbs-up">
          <path d={svgPaths.p21848000} id="Vector" stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_54_56">
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
      <LucideThumbsUp4 />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">고소한오곡크림빵, 초코우유식빵, 치즈듬뿍피자빵</p>
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

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pt-[8px] relative shrink-0">
      <Frame68 />
    </div>
  );
}

function Txt5() {
  return (
    <div className="bg-white relative rounded-bl-[14px] rounded-br-[14px] shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame66 />
          <Frame69 />
        </div>
        <CommentSection reviewId="review-6" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Txt5 />
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#f1f0f0] box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[14px] shrink-0 w-full" data-name="8">
      <Frame65 />
      <Frame70 />
    </div>
  );
}

export default function Frame14({ userPosts = [] }: { userPosts?: any[] }) {
  const handleDeletePost = (postId: string) => {
    // 로컬스토리지에서 포스트 삭제
    const posts = JSON.parse(localStorage.getItem('reviewPosts') || '[]');
    const updatedPosts = posts.filter((post: any) => post.id !== postId);
    localStorage.setItem('reviewPosts', JSON.stringify(updatedPosts));
    
    // 페이지 새로고침
    window.location.reload();
  };

  return (
    <div className="relative size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] items-start pb-[140px] pt-[32px] px-[20px] relative size-full">
          <Frame7 />
          {/* User Posts - 새로 작성한 포스트들을 첫 번째로 배치 */}
          {userPosts.map((post) => (
            <PostCard key={post.id} post={post} onDelete={handleDeletePost} />
          ))}
          <Component1 />
          <VoteComponent />
          <Component9 />
          <Component4 />
          <Component5 />
          <Component2 />
        </div>
      </div>
    </div>
  );
}