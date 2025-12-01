import imgMapMakerSeoulSouthKoreaStandard from "figma:asset/3e5029b6a98ee9ccb84dbac228c64f18b09c94fe.png";

function Frame4() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[12px]">
      <div className="absolute inset-[-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Frame 367">
            <path d="M13 1L1 13M1 1L13 13" id="Vector" stroke="var(--stroke-0, #242121)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </button>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[14px] h-[14px] items-center relative shrink-0 w-full">
      <Frame4 />
      <p className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[20px] left-1/2 not-italic text-[16px] text-black text-center text-nowrap top-[-3px] tracking-[-0.24px] translate-x-[-50%] whitespace-pre">빵맵 장소 등록</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#fff8ed] h-[28px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[28px] items-center p-[10px] relative w-full">
          <div className="flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6464] text-[12px] text-center text-nowrap tracking-[-0.24px]">
            <p className="leading-[20px] whitespace-pre">장소명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return <div className="bg-[#f1f0f0] h-[28px] rounded-[8px] shrink-0 w-[192px]" />;
}

function Frame6() {
  return (
    <div className="bg-[#dedcdc] box-border content-stretch flex gap-[10px] h-[28px] items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0 w-[68px]">
      <div className="flex flex-col font-['YES_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.24px]">
        <p className="leading-[20px] whitespace-pre">주소찾기</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f1f0f0] h-[28px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[28px] items-center p-[10px] relative w-full">
          <div className="flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6464] text-[12px] text-center text-nowrap tracking-[-0.24px]">
            <p className="leading-[20px] whitespace-pre">상세주소 입력</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[9px] grow h-[102px] items-start min-h-px min-w-px relative shrink-0">
      <Frame5 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="[grid-area:1_/_1] h-[91px] ml-0 mt-0 overflow-clip relative w-[268px]">
      <div className="absolute left-[-36px] size-[352px] top-[-130px]" data-name="🌎 Map Maker: Seoul, South Korea (Standard)">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMapMakerSeoulSouthKoreaStandard} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f47f30] h-[32px] overflow-clip relative rounded-[30px] shrink-0 w-full">
      <p className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[20px] left-[calc(50%+0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-10px)] tracking-[-0.24px] translate-x-[-50%] whitespace-pre">등록하기</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0">
      <Frame1 />
      <Frame11 />
      <Frame />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white relative rounded-[14px] size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[22px] py-[25px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}