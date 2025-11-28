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

function Frame2() {
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
      <Frame2 />
    </div>
  );
}

function Component1() {
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Component1 />
    </div>
  );
}

function Component2() {
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Component2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Component />
      <Frame5 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-between pb-0 pt-[16px] px-[20px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}
