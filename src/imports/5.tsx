import svgPaths from "./svg-vqi0o3umy5";
import imgFrame275 from "figma:asset/55292a243c147c2beae549eb98fa149d313dd5d3.png";

function Frame1() {
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

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[210px]">
      <Frame1 />
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

function Frame() {
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
      <Frame8 />
      <Frame />
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title />
    </div>
  );
}

function Frame4() {
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideThumbsUp />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">크림치즈메론빵, 약과 크로플, 말차 크림빵</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Txt() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame4 />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[150px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame275} />
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[14px] py-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <Frame2 key={i} />
      ))}
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[14px] py-0 relative shrink-0 w-[346px]">
      <Frame12 />
    </div>
  );
}

function Img() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="img">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pb-[20px] pt-0 px-[14px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Txt />
      <Img />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f1f0f0] border-solid inset-0 pointer-events-none" />
      <Frame11 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f1f0f0] relative rounded-[14px] size-full" data-name="5">
      <div className="box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[inherit] size-full">
        <Frame7 />
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}