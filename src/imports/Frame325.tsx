function Frame1() {
  return (
    <div className="basis-0 bg-[#f47f30] grow h-[32px] min-h-px min-w-px overflow-clip relative rounded-[14px] shrink-0">
      <p className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[20px] left-[calc(50%+0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-10px)] tracking-[-0.24px] translate-x-[-50%] whitespace-pre">빵장소</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative rounded-[14px] shrink-0">
      <div className="h-[32px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[20px] left-[calc(50%+1px)] not-italic text-[12px] text-black text-center text-nowrap top-[calc(50%-10px)] tracking-[-0.24px] translate-x-[-50%] whitespace-pre">리뷰</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start pb-0 pt-[16px] px-[20px] relative size-full">
          <Frame1 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}