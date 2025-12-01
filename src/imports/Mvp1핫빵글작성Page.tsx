import svgPaths from "./svg-8vjvrblgsc";
import imgIos18Iphone16ProMessagesPredictiveTextOptions2 from "figma:asset/fc6505abbe699701cc1d05f08b5d5d99c2cc51b8.png";
import imgGeminiGeneratedImage1N7Zv71N7Zv71N7Z6 from "figma:asset/55292a243c147c2beae549eb98fa149d313dd5d3.png";
import { imgIos18Iphone16ProMessagesPredictiveTextOptions1 } from "./svg-i2w8f";

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

function Frame() {
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

function Frame5() {
  return (
    <div className="content-stretch flex gap-[14px] h-[14px] items-center relative shrink-0 w-[69px]">
      <Frame />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.24px] whitespace-pre">글 작성</p>
    </div>
  );
}

function Component() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[22px]" data-name="서울">
      <div className="overflow-clip relative rounded-[inherit] size-[22px]">
        <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic text-[#f47f30] text-[14px] text-center text-nowrap top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[1.1] whitespace-pre">?</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f97b62] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Guide() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="guide">
      <Component />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f47f30] h-[32px] overflow-clip relative rounded-[30px] shrink-0 w-[99px]">
      <p className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[20px] left-[calc(50%+1px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-10px)] tracking-[-0.24px] translate-x-[-50%] whitespace-pre">등록하기</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-[131px]">
      <Guide />
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[64px] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between p-[20px] relative w-full">
          <Frame5 />
          <Frame9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dedcdc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[44px] w-[402px]">
      <Frame1 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-[540px]" data-name="Mask group">
      <div className="absolute h-[908px] left-[-19px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[19px_558px] mask-size-[402px_334px] top-[-18px] w-[439px]" data-name="ios-18-iphone-16-pro-messages-predictive-text-options 1" style={{ maskImage: `url('${imgIos18Iphone16ProMessagesPredictiveTextOptions1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIos18Iphone16ProMessagesPredictiveTextOptions2} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-[540px]">
      <MaskGroup />
      <div className="absolute h-[53px] left-0 top-[821px] w-[65px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 53">
          <path d="M24 34H65V53H0V0H24V34Z" fill="var(--fill-0, #D0D3D9)" id="Union" />
        </svg>
      </div>
      <div className="absolute flex h-[61px] items-center justify-center left-[calc(50%+136px)] top-[813px] w-[65px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[61px] relative w-[65px]" data-name="Union">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 61">
              <path d="M24 42H65V61H0V0H24V42Z" fill="var(--fill-0, #D0D3D9)" id="Union" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[6px] left-[16px] top-[28px] w-[30px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 6">
        <g id="Frame 360">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" id="Ellipse 22" r="3" />
          <circle cx="15" cy="3" fill="var(--fill-0, white)" id="Ellipse 23" r="3" />
          <circle cx="27" cy="3" fill="var(--fill-0, white)" id="Ellipse 24" r="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[62px]">
      <div className="absolute left-0 rounded-[8px] size-[62px] top-0" data-name="Gemini_Generated_Image_1n7zv71n7zv71n7z 6">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgGeminiGeneratedImage1N7Zv71N7Zv71N7Z6} />
          <div className="absolute bg-[#bfbfbf] inset-0 rounded-[8px]" />
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[20px] py-0 relative shrink-0">
      <div className="relative rounded-[8px] shrink-0 size-[62px]" data-name="Gemini_Generated_Image_1n7zv71n7zv71n7z 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgGeminiGeneratedImage1N7Zv71N7Zv71N7Z6} />
      </div>
      <div className="h-[62px] relative rounded-[8px] shrink-0 w-[61px]" data-name="Gemini_Generated_Image_1n7zv71n7zv71n7z 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgGeminiGeneratedImage1N7Zv71N7Zv71N7Z6} />
      </div>
      <div className="relative rounded-[8px] shrink-0 size-[62px]" data-name="Gemini_Generated_Image_1n7zv71n7zv71n7z 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgGeminiGeneratedImage1N7Zv71N7Zv71N7Z6} />
      </div>
      <div className="relative rounded-[8px] shrink-0 size-[62px]" data-name="Gemini_Generated_Image_1n7zv71n7zv71n7z 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgGeminiGeneratedImage1N7Zv71N7Zv71N7Z6} />
      </div>
      <Frame8 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[86px] top-[460px] w-[316px]">
      <Frame10 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-white h-[215px] left-1/2 overflow-clip top-[127px] translate-x-[-50%] w-[362px]" data-name="text">
      <p className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#4c4747] text-[14px] text-nowrap top-0 tracking-[-0.24px] whitespace-pre">ㅣ</p>
    </div>
  );
}

function LucideMapPinPlus() {
  return (
    <div className="absolute left-[calc(50%-1px)] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="lucide/map-pin-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/map-pin-plus">
          <path d={svgPaths.p11c79200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Posting() {
  return (
    <div className="bg-[#b8b3b3] overflow-clip relative rounded-[40px] shrink-0 size-[50px]" data-name="posting">
      <LucideMapPinPlus />
    </div>
  );
}

function LucideFilePlay() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="lucide/file-play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/file-play">
          <path d={svgPaths.pe7a8700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Posting1() {
  return (
    <div className="bg-[#b8b3b3] overflow-clip relative rounded-[40px] shrink-0 size-[50px]" data-name="posting">
      <LucideFilePlay />
    </div>
  );
}

function LucideImages() {
  return (
    <div className="absolute left-1/2 size-[22px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="lucide/images">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_53_206)" id="lucide/images">
          <path d={svgPaths.p12138a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_53_206">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Posting2() {
  return (
    <div className="bg-[#b8b3b3] overflow-clip relative rounded-[40px] shrink-0 size-[50px]" data-name="posting">
      <LucideImages />
    </div>
  );
}

function LucidePlus() {
  return (
    <div className="absolute left-1/2 size-[34px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="lucide/plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lucide/plus">
          <path d={svgPaths.p398b8d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Posting3() {
  return (
    <div className="bg-[#52a2ff] overflow-clip relative rounded-[40px] shrink-0 size-[50px]" data-name="posting">
      <LucidePlus />
    </div>
  );
}

function PlusMoreOn() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[13px] items-start left-[20px] top-[283px]" data-name="plus_more/on">
      <Posting />
      <Posting1 />
      <Posting2 />
      <Posting3 />
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

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LucideThumbsUp />
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap tracking-[-0.24px] whitespace-pre">치아바타 센드위치, 오렌지 케이크</p>
    </div>
  );
}

function LucidePenLine() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="lucide/pen-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_56_204)" id="lucide/pen-line">
          <path d={svgPaths.pdcbad00} id="Vector" stroke="var(--stroke-0, #615A5A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_56_204">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-center justify-end left-[270px] top-[calc(50%+1px)] translate-y-[-50%]">
      <LucidePenLine />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[#f1f0f0] box-border content-stretch flex flex-col gap-px items-start left-[86px] overflow-clip px-[19px] py-[8px] rounded-[14px] top-[407px] w-[295px]">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame4() {
  return <div className="absolute h-[163px] left-0 top-[711px] w-[402px]" />;
}

export default function Mvp1Page() {
  return (
    <div className="bg-white relative size-full" data-name="MVP1_핫빵_글작성_page">
      <Frame4 />
      <BarsStatusBarIPhoneLight />
      <Frame3 />
      <Group />
      <Frame6 />
      <Text />
      <PlusMoreOn />
      <Frame11 />
    </div>
  );
}