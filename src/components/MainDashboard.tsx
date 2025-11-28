import imgGeminiGeneratedImageXqidofxqidofxqid1 from "figma:asset/cef0e96c00fbd6cf786b28d03f0004301fd74cbf.png";
import img2 from "figma:asset/f689da9f5dda9191745d4bbbe181c159d237ca85.png";
import { img1 } from "../imports/svg-5mqxt";
import { getUser } from "../utils/localStorage";

function BName() {
  return (
    <div className="absolute h-[100px] left-[30px] top-[130px] w-[124px]" data-name="B-name">
      <div className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[50px] left-0 not-italic text-[#242121] text-[44px] text-nowrap top-0 tracking-[-0.24px] whitespace-pre">
        <p className="mb-0">앙버터</p>
        <p>소금빵</p>
      </div>
    </div>
  );
}

function Text() {
  const user = getUser();
  const userName = user?.nickname || "달달한허니빵";

  return (
    <div className="absolute bg-[#ffedd7] h-[344px] left-0 overflow-clip rounded-br-[370px] top-0 w-[402px]" data-name="text">
      <div className="absolute flex items-center justify-center left-[-404px] size-[1162.5px] top-[-488px]" style={{ "--transform-inner-width": "1024", "--transform-inner-height": "1024" } as React.CSSProperties}>
        <div className="flex-none rotate-[351.607deg]">
          <div className="blur-[13px] filter relative size-[1024px]" data-name="Gemini_Generated_Image_xqidofxqidofxqid 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.28] pointer-events-none size-full" src={imgGeminiGeneratedImageXqidofxqidofxqid1} />
          </div>
        </div>
      </div>
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[37px] left-[30px] not-italic text-[#242121] text-[0px] text-[24px] text-nowrap top-[93px] tracking-[-0.24px] whitespace-pre">
        <span className="font-['YES_Gothic:Bold',sans-serif] text-[#f47f30]">{userName}</span>
        <span className="font-['YES_Gothic:Regular',sans-serif]">님의 핫-빵</span>
      </p>
      <BName />
    </div>
  );
}

function InfoIcon() {
  return (
    <div className="absolute left-[286px] size-[20px] top-[101px]" data-name="info-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="info-icon">
          <circle cx="10" cy="10" id="Ellipse 1" r="9" stroke="#615A5A" strokeWidth="2" />
          <rect fill="#615A5A" height="2" id="Rectangle 1" width="2" x="9" y="4" />
          <rect fill="#615A5A" height="9" id="Rectangle 2" width="2" x="9" y="7" />
        </g>
      </svg>
    </div>
  );
}

function LucideChevronRight() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="lucide/chevron-right">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="#383434" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Btn() {
  return (
    <div className="absolute h-[34px] right-[20px] rounded-[30px] top-[328px]" data-name="빵정보바로가기)_btn">
      <div className="box-border content-stretch flex gap-[4px] h-[34px] items-center overflow-clip pl-[20px] pr-[16px] py-[10px] relative rounded-[inherit]">
        <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#383434] text-[0px] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">
          <span className="font-['YES_Gothic:Bold',sans-serif] text-[#f47f30]">Ai 추천 빵</span>
          <span className="font-['YES_Gothic:Bold',sans-serif]"> </span>
          <span className="font-['YES_Gothic:Regular',sans-serif]">정보 보기</span>
        </p>
        <LucideChevronRight />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f47f30] border-solid inset-0 pointer-events-none rounded-[30px]" />
    </div>
  );
}

function BreadIcon() {
  return (
    <div className="absolute contents h-[143.45px] left-[197.91px] top-[139.16px] w-[171.911px]" data-name="bread_icon">
      <div className="absolute flex items-center justify-center left-[153.07px] size-[261.687px] top-[80.23px]" style={{ "--transform-inner-width": "231", "--transform-inner-height": "231" } as React.CSSProperties}>
        <div className="flex-none rotate-[188.229deg] scale-y-[-100%]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[53.736px_67.621px] mask-size-[152.841px_129.096px] relative size-[231.002px]" data-name="앙버터 소금빵 1" style={{ maskImage: `url('${img1}')` }}>
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MainDashboard() {
  return (
    <div className="relative h-[382px] w-full mb-[24px] pt-[84px]" data-name="main_v">
      <Text />
      <InfoIcon />
      <Btn />
      <BreadIcon />
    </div>
  );
}
