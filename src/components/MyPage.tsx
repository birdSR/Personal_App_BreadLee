import { useNavigate } from 'react-router-dom';
import { getUser, logout } from '../utils/localStorage';
import svgPaths from "../imports/svg-r0rxatmmec";
import statusBarSvgPaths from "../imports/svg-i102ysczjd";
import navBarSvgPaths from "../imports/svg-opm5ijb96d";
import imgUser from "figma:asset/fe6bf471017e4a1803942c5f023df9121a504a21.png";
import imgGeminiGeneratedImageV4Wy0Cv4Wy0Cv4Wy2 from "figma:asset/4c8e5814f0fd69914885ebfa078e29b3dd63e389.png";
import img2 from "figma:asset/f689da9f5dda9191745d4bbbe181c159d237ca85.png";
import { imgGeminiGeneratedImageV4Wy0Cv4Wy0Cv4Wy1, img1 } from "../imports/svg-s0qem";

// Status Bar Components
function Battery() {
  return (
    <div className="absolute inset-[39.39%_11.82%_34.85%_81.69%]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 12">
        <g id="Battery">
          <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="22.584" x="0.500086" y="0.5" />
          <path d={statusBarSvgPaths.p3eb63e3e} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="19.296" x="2.14409" y="2" />
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
    <div className="relative h-[44px] w-full" data-name="Bars / Status Bar / iPhone / Light">
      <Battery />
      <div className="absolute inset-[39.39%_19.64%_35.61%_76.27%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
          <path d={statusBarSvgPaths.p297d2880} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_25.07%_35.61%_70.4%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 11">
          <path d={statusBarSvgPaths.p2191df00} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

// Navigation Bar Components
function Frame8() {
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

function LucideSettings({ onLogout }: { onLogout: () => void }) {
  return (
    <button onClick={onLogout} className="h-[28px] relative shrink-0 w-[57.913px]" data-name="lucide/settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 28">
        <g id="lucide/settings">
          <g id="lucide/log-out">
            <path d={navBarSvgPaths.p17961800} id="Vector" stroke="var(--stroke-0, #7F7777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d={navBarSvgPaths.p29994800} id="Vector_2" stroke="var(--stroke-0, #383434)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </button>
  );
}

function Frame25({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="h-[52px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[20px] relative size-full">
          <Frame8 />
          <p className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[20px] left-[calc(50%+1px)] not-italic text-[16px] text-black text-center text-nowrap top-[calc(50%-10px)] tracking-[-0.24px] translate-x-[-50%] whitespace-pre">마이페이지</p>
          <LucideSettings onLogout={onLogout} />
        </div>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="pointer-events-none relative rounded-[140px] shrink-0 size-[74px]" data-name="user">
      <div className="absolute inset-0 overflow-hidden rounded-[140px]">
        <img alt="" className="absolute h-[184.81%] left-[-37.13%] max-w-none top-[-4.95%] w-[173.62%]" src={imgUser} />
      </div>
      <div aria-hidden="true" className="absolute border-[#f47f30] border-[3px] border-solid inset-[-3px] rounded-[143px]" />
    </div>
  );
}

function Frame32({ name, gender }: { name: string, gender: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 text-black">
      <p className="font-['YES_Gothic:Bold',sans-serif] relative shrink-0 text-[14px]">{name}</p>
      <p className="font-['YES_Gothic:Regular',sans-serif] relative shrink-0 text-[12px]">{gender}</p>
    </div>
  );
}

function Frame30({ name, gender, nickname }: { name: string, gender: string, nickname: string }) {
  return (
    <div className="box-border content-stretch flex flex-col h-[74px] items-start justify-between leading-[20px] not-italic pb-0 pt-[8px] px-0 relative shrink-0 text-center text-nowrap tracking-[-0.24px] w-[78px] whitespace-pre">
      <Frame32 name={name} gender={gender} />
      <p className="font-['YES_Gothic:Regular',sans-serif] relative shrink-0 text-[#f47f30] text-[12px]">@{nickname}</p>
    </div>
  );
}

function LucidePenLine() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="lucide/pen-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_26_357)" id="lucide/pen-line">
          <path d={svgPaths.p1a85e8c0} id="Vector" stroke="var(--stroke-0, #615A5A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_26_357">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-center justify-center left-[calc(50%-0.5px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <LucidePenLine />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[27px]">
      <div className="overflow-clip relative rounded-[inherit] size-[27px]">
        <Frame27 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame45({ name, gender, nickname }: { name: string, gender: string, nickname: string }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[267px]">
      <Frame30 name={name} gender={gender} nickname={nickname} />
      <Frame36 />
    </div>
  );
}

function Frame31({ name, gender, nickname }: { name: string, gender: string, nickname: string }) {
  return (
    <div className="content-stretch flex gap-[13px] items-start relative shrink-0 w-[354px]">
      <User />
      <Frame45 name={name} gender={gender} nickname={nickname} />
    </div>
  );
}

function Frame29({ name, gender, nickname }: { name: string, gender: string, nickname: string }) {
  return (
    <div className="bg-white h-[140px] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[140px] items-center justify-between pl-[24px] pr-[20px] py-[10px] relative w-full">
          <Frame31 name={name} gender={gender} nickname={nickname} />
        </div>
      </div>
    </div>
  );
}

function Frame33({ name, gender, nickname }: { name: string, gender: string, nickname: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[140px] items-start relative shrink-0 w-full">
      <Frame29 name={name} gender={gender} nickname={nickname} />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <div className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">
        <p className="mb-0">매일 빵먹기 챌린지중!</p>
        <p>빵 친구 할 사람 마니마니 팔로우 해주세요😘</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[13px] h-[39px] items-center relative shrink-0 w-[168px]">
      <Frame35 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#00bb4d] h-[28px] overflow-clip relative rounded-[14px] shrink-0 w-[80px]" data-name="서울">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic text-[10px] text-center text-nowrap text-white top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[1.1] whitespace-pre">팔로우</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex grow h-[39px] items-center justify-between min-h-px min-w-px overflow-clip px-0 py-[10px] relative shrink-0">
      <Frame38 />
      <Component />
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-[57px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[57px] items-start px-[20px] py-0 relative w-full">
          <Frame39 />
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="h-[17px] relative w-[23px]" data-name="_레이어_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 17">
        <g clipPath="url(#clip0_19_24)" id="_ë ì´ì´_1">
          <path d={svgPaths.p2bea7a00} fill="var(--fill-0, #FFCE76)" id="Vector" />
          <path d={svgPaths.p27d43f80} fill="var(--fill-0, #FFCE76)" id="Vector_2" />
          <path d={svgPaths.p2776100} fill="var(--fill-0, #FFCE76)" id="Vector_3" />
          <path d={svgPaths.p31d97170} fill="var(--fill-0, #FFCE76)" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p23e2bfc0} fill="var(--fill-0, #FFE164)" id="Vector_5" />
            <path d={svgPaths.p3c355200} fill="var(--fill-0, #FFC153)" id="Vector_6" />
            <path d={svgPaths.p1d34d480} fill="var(--fill-0, #FFC153)" id="Vector_7" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_19_24">
            <rect fill="white" height="17" width="23" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col font-['YES_Gothic:Bold',sans-serif] gap-[3px] items-center leading-[0] left-[9px] not-italic top-[53px] tracking-[-0.24px] w-[37px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[#f97b62] text-[10px] w-full">
        <p className="leading-[normal]">내 랭킹</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#383434] text-[0px] w-full">
        <p className="leading-[normal]">
          <span className="text-[24px]">12</span>
          <span className="font-['YES_Gothic:Regular',sans-serif] not-italic text-[14px]">위</span>
        </p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 bg-[#fff3e3] grow h-[109px] min-h-px min-w-px overflow-clip relative rounded-[14px] shrink-0">
      <div className="absolute flex h-[17px] items-center justify-center left-[calc(50%+31.33px)] top-[9px] translate-x-[-50%] w-[23px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Component1 />
        </div>
      </div>
      <Frame16 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[54px] top-[7px]">
      <div className="absolute left-[54px] size-[48px] top-[7px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <circle cx="24" cy="24" id="Ellipse 14" r="22" stroke="var(--stroke-0, #FFD58D)" strokeWidth="4" />
        </svg>
      </div>
      <div className="absolute left-[56px] size-[44px] top-[9px]">
        <div className="absolute inset-[-4.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <path d={svgPaths.p324d6830} id="Ellipse 15" stroke="var(--stroke-0, #F47F30)" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col font-['YES_Gothic:Bold',sans-serif] gap-[3px] items-start justify-center leading-[0] left-[calc(50%-25.17px)] not-italic top-[calc(50%+20px)] tracking-[-0.24px] translate-x-[-50%] translate-y-[-50%] w-[42px]">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#f97b62] text-[10px] w-[min-content]">
        <p className="leading-[normal]">열정 수치</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#383434] text-[0px] w-[62px]">
        <p className="leading-[normal]">
          <span className="text-[24px]">80</span>
          <span className="font-['YES_Gothic:Regular',sans-serif] not-italic text-[14px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute h-[20px] left-[71px] top-[20px] w-[14px]" data-name="_레이어_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
        <g clipPath="url(#clip0_26_363)" id="_ë ì´ì´_1">
          <path d={svgPaths.p34ad8c00} fill="var(--fill-0, #F47F30)" id="Vector" />
          <path d={svgPaths.p1f2a77f0} fill="var(--fill-0, #EAD086)" id="Vector_2" />
          <path d={svgPaths.p38614480} fill="var(--fill-0, #F4E130)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_26_363">
            <rect fill="white" height="20" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 bg-[#fff3e3] grow h-[109px] min-h-px min-w-px overflow-clip relative rounded-[14px] shrink-0">
      <Group />
      <Frame14 />
      <Component2 />
    </div>
  );
}

function LucideHeart() {
  return (
    <div className="absolute left-[82px] size-[18px] top-[8px]" data-name="lucide/heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/heart">
          <path d={svgPaths.p165c9a00} fill="var(--fill-0, #FFAC99)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col font-['YES_Gothic:Bold',sans-serif] gap-[2px] items-start leading-[0] left-[12px] not-italic top-[46px] tracking-[-0.24px] w-[58px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[#f47f30] text-[10px] w-full">
        <p className="leading-[normal]">나의 빵 감성</p>
      </div>
      <div className="flex flex-col justify-center leading-[18px] relative shrink-0 text-[#383434] text-[14px] w-full">
        <p className="mb-0">유럽</p>
        <p>소도시</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 bg-[#fff3e3] grow h-[109px] min-h-px min-w-px overflow-clip relative rounded-[14px] shrink-0">
      <LucideHeart />
      <Frame15 />
    </div>
  );
}

function Cont() {
  return (
    <div className="h-[123px] relative shrink-0 w-full" data-name="cont1">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[123px] items-start pb-0 pt-[14px] px-[20px] relative w-full">
          <Frame9 />
          <Frame10 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#fff8ed] box-border content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[8px] relative rounded-[20px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-[#f47f30] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#f47f30] text-[12px] text-nowrap whitespace-pre">Lv. 빵린이</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col font-['YES_Gothic:Bold',sans-serif] h-[40px] items-start justify-end leading-[0] not-italic relative shrink-0 tracking-[-0.24px] w-[80px]">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#5277ff] text-[10px] w-[min-content]">
        <p className="leading-[normal]">Point</p>
      </div>
      <p className="leading-[normal] relative shrink-0 text-[#383434] text-[0px] text-[24px] w-[85px]">
        5630<span className="font-['YES_Gothic:Regular',sans-serif] not-italic">p</span>
      </p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col font-['YES_Gothic:Bold',sans-serif] h-[40px] items-start justify-end not-italic relative shrink-0 tracking-[-0.24px] w-[80px]">
      <div className="flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#5277ff] text-[10px] w-[min-content]">
        <p className="leading-[normal]">평균 빵력</p>
      </div>
      <p className="leading-[normal] relative shrink-0 text-[#383434] text-[24px] w-[85px]">70%</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame37 />
      <Frame43 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col h-[88px] items-start justify-between relative shrink-0 w-[177px]">
      <Frame42 />
      <Frame44 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[116.712px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[89.177px_33.339px] mask-size-[90.825px_78.792px] ml-[-69.97px] mt-[-19.39px] relative w-[244.035px]" data-name="Gemini_Generated_Image_v4wy0cv4wy0cv4wy 1" style={{ maskImage: `url('${imgGeminiGeneratedImageV4Wy0Cv4Wy0Cv4Wy1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGeminiGeneratedImageV4Wy0Cv4Wy0Cv4Wy2} />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 bg-white grow h-[135px] min-h-px min-w-px relative rounded-[14px] shrink-0">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[135px] items-end justify-between pl-[24px] pr-[40px] py-[24px] relative w-full">
          <Frame46 />
          <div className="flex h-[88.428px] items-center justify-center leading-[0] relative shrink-0 w-[100.317px]" style={{ "--transform-inner-width": "174.0625", "--transform-inner-height": "97.328125" } as React.CSSProperties}>
            <div className="flex-none rotate-[173.075deg] scale-y-[-100%]">
              <MaskGroup />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[16px] h-[135px] items-center relative shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function Cont1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[24px] px-[20px] relative shrink-0 w-[402px]" data-name="cont1">
      <Frame17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['YES_Gothic:Bold',sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#383434] text-[12px] tracking-[-0.24px] w-[138px]">
        <p className="mb-0">{`포인트로 `}</p>
        <p>쿠폰 구입하기</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#ffd0c3] h-[51px] relative rounded-[14px] shrink-0 w-[363px]">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[51px] items-center justify-center px-[11px] py-[50px] relative w-[363px]">
          <Frame18 />
          <div className="absolute flex h-[23.104px] items-center justify-center left-[311px] top-[15px] w-[34.315px]" style={{ "--transform-inner-width": "31.375", "--transform-inner-height": "16.09375" } as React.CSSProperties}>
            <div className="flex-none rotate-[346.23deg]">
              <div className="h-[16.096px] relative w-[31.386px]" data-name="Subtract">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 17">
                  <path d={svgPaths.pd673300} fill="var(--fill-0, #FFF4BF)" id="Subtract" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cont2() {
  return (
    <div className="h-[65px] relative shrink-0 w-full" data-name="cont1">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[65px] items-start pb-0 pt-[14px] px-[20px] relative w-full">
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col font-['YES_Gothic:Bold',sans-serif] gap-[3px] items-start justify-center leading-[0] left-[calc(50%-54.75px)] not-italic top-[calc(50%+18.5px)] tracking-[-0.24px] translate-x-[-50%] translate-y-[-50%] w-[42px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[#5269ff] text-[10px] w-[63px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Ai 추천  핫-빵`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#383434] text-[14px] w-[87px]">
        <p className="leading-[normal]">앙버터소금빵</p>
      </div>
    </div>
  );
}

function BreadIcon() {
  return (
    <div className="absolute contents h-[60.446px] left-[95.16px] top-[8px] w-[72.438px]" data-name="bread_icon">
      <div className="absolute flex items-center justify-center left-[76.26px] size-[110.267px] top-[-16.83px]" style={{ "--transform-inner-width": "97.328125", "--transform-inner-height": "97.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[188.229deg] scale-y-[-100%]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[22.643px_28.493px] mask-size-[64.403px_54.397px] relative size-[97.337px]" data-name="앙버터 소금빵 1" style={{ maskImage: `url('${img1}')` }}>
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 bg-[#f2f5ff] grow h-[108px] min-h-px min-w-px overflow-clip relative rounded-[14px] shrink-0">
      <Frame19 />
      <BreadIcon />
    </div>
  );
}

function Component3() {
  return (
    <div className="h-[17px] relative w-[23px]" data-name="_레이어_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 17">
        <g clipPath="url(#clip0_19_24)" id="_ë ì´ì´_1">
          <path d={svgPaths.p2bea7a00} fill="var(--fill-0, #FFCE76)" id="Vector" />
          <path d={svgPaths.p27d43f80} fill="var(--fill-0, #FFCE76)" id="Vector_2" />
          <path d={svgPaths.p2776100} fill="var(--fill-0, #FFCE76)" id="Vector_3" />
          <path d={svgPaths.p31d97170} fill="var(--fill-0, #FFCE76)" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p23e2bfc0} fill="var(--fill-0, #FFE164)" id="Vector_5" />
            <path d={svgPaths.p3c355200} fill="var(--fill-0, #FFC153)" id="Vector_6" />
            <path d={svgPaths.p1d34d480} fill="var(--fill-0, #FFC153)" id="Vector_7" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_19_24">
            <rect fill="white" height="17" width="23" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col font-['YES_Gothic:Bold',sans-serif] gap-[3px] items-start leading-[normal] left-[9.5px] not-italic top-[47px] tracking-[-0.24px] w-[71px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[#5277ff] text-[10px] w-[62px]">
        <p className="mb-0">{`최근에 방문한 `}</p>
        <p>빵집</p>
      </div>
      <p className="relative shrink-0 text-[#383434] text-[14px] w-[97px]">청솔당 베이커리</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 bg-[#f2f5ff] grow h-[108px] min-h-px min-w-px overflow-clip relative rounded-[14px] shrink-0">
      <div className="absolute flex h-[17px] items-center justify-center left-[calc(50%+63.75px)] top-[9px] translate-x-[-50%] w-[23px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Component3 />
        </div>
      </div>
      <Frame21 />
    </div>
  );
}

function Cont3() {
  return (
    <div className="h-[123px] relative shrink-0 w-full" data-name="cont1">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[123px] items-start pb-0 pt-[14px] px-[20px] relative w-full">
          <Frame20 />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="box-border content-stretch flex items-center justify-between mr-[-306px] relative shrink-0 w-[329px]">
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#383434] text-[14px] tracking-[-0.24px] w-[110px]">내가 작성한 리뷰</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[7px] relative w-[3.5px]" data-name="Vector">
            <div className="absolute inset-[-14.29%_-28.57%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                <path d="M4.5 8L1 4.5L4.5 1" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 bg-white grow h-[51px] min-h-px min-w-px relative rounded-[14px] shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[51px] items-center justify-between pl-[9px] pr-[315px] py-0 relative w-full">
          <Frame40 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Cont4() {
  return (
    <div className="h-[65px] relative shrink-0 w-full" data-name="cont1">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[65px] items-start pb-0 pt-[14px] px-[20px] relative w-full">
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="box-border content-stretch flex items-center justify-between mr-[-306px] relative shrink-0 w-[329px]">
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#383434] text-[14px] tracking-[-0.24px] w-[110px]">저장한 리뷰</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[7px] relative w-[3.5px]" data-name="Vector">
            <div className="absolute inset-[-14.29%_-28.57%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                <path d="M4.5 8L1 4.5L4.5 1" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 bg-white grow h-[51px] min-h-px min-w-px relative rounded-[14px] shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[51px] items-center justify-between pl-[9px] pr-[315px] py-0 relative w-full">
          <Frame41 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Cont5() {
  return (
    <div className="h-[65px] relative shrink-0 w-full" data-name="cont1">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[65px] items-start pb-0 pt-[14px] px-[20px] relative w-full">
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame28({ name, gender, nickname, onLogout }: { name: string, gender: string, nickname: string, onLogout: () => void }) {
  return (
    <div className="relative content-stretch flex flex-col items-start w-full">
      <Frame25 onLogout={onLogout} />
      <Frame33 name={name} gender={gender} nickname={nickname} />
      <Frame34 />
      <Cont />
      <Cont1 />
      <Cont2 />
      <Cont3 />
      <Cont4 />
      <Cont5 />
    </div>
  );
}

export default function MyPage() {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      logout();
      navigate('/login');
    }
  };

  return (
    <div className="bg-white relative w-[402px] min-h-screen overflow-y-auto pb-[150px] flex flex-col">
      <BarsStatusBarIPhoneLight />
      <Frame25 onLogout={handleLogout} />
      <div className="relative content-stretch flex flex-col items-start w-full">
        <Frame33 name={user?.name || '달달한허니빵'} gender={user?.gender || '방조아님'} nickname={user?.nickname || 'zzoa_bbang'} />
        <Frame34 />
        <Cont />
        <Cont1 />
        <Cont2 />
        <Cont3 />
        <Cont4 />
        <Cont5 />
      </div>
    </div>
  );
}
