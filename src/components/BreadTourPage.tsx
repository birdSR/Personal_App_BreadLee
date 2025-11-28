import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadTourLoadingPage from './BreadTourLoadingPage';
import imgB21 from "figma:asset/207f84958672331d9bb0006dd2dc08b536fe5cae.png";
import imgB11 from "figma:asset/be2f61ed4702966ff7fc0291d91ff9464fafbca7.png";
import imgB31 from "figma:asset/7d797e2529179e90d9f8217a359f8ef3ca3dc483.png";
import imgB51 from "figma:asset/a0763b2942feb9cacab786819f96a47ab772b973.png";
import imgB41 from "figma:asset/a81ab6ae0e0447daf98dbac3d2df65b6cafe7aa8.png";
import imgW21 from "figma:asset/910b1dc3d33b3040541ac51e22a8352ae49048e5.png";
import imgW11 from "figma:asset/7a2f64b5fc84a2356ee2fa30b8a86318f69532da.png";
import imgM11 from "figma:asset/ddce8bb9d7f4f0f7183825c5662f8ac314e9201b.png";
import imgBg2 from "figma:asset/5741746dd77ffdb01d3a8343704bf236565aaa41.png";

function FloatingBreads() {
  return (
    <div className="absolute h-[357px] left-[-51px] top-[131px] w-[517px]">
      <div className="absolute flex h-[74.887px] items-center justify-center left-[346px] top-[203.49px] w-[65.184px]" style={{ "--transform-inner-width": "64", "--transform-inner-height": "39" } as React.CSSProperties}>
        <div className="flex-none rotate-[60.929deg]">
          <div className="blur-[2.5px] filter h-[39px] relative w-[64px]" data-name="b2 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgB21} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[38.422px] items-center justify-center left-[72px] top-[35px] w-[38.057px]" style={{ "--transform-inner-width": "27.890625", "--transform-inner-height": "28.765625" } as React.CSSProperties}>
        <div className="flex-none rotate-[332.402deg]">
          <div className="blur-[1.5px] filter h-[28.768px] relative w-[27.905px]" data-name="b1 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgB11} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[55.278px] items-center justify-center left-[39px] top-[272.49px] w-[56.798px]" style={{ "--transform-inner-width": "43.5625", "--transform-inner-height": "40.265625" } as React.CSSProperties}>
        <div className="flex-none rotate-[154.041deg] scale-y-[-100%]">
          <div className="blur-[2px] filter h-[40.271px] relative w-[43.566px]" data-name="b3 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgB31} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[42.667px] items-center justify-center left-[361.69px] top-[-13.74px] w-[42.986px]" style={{ "--transform-inner-width": "31.609375", "--transform-inner-height": "29.21875" } as React.CSSProperties}>
        <div className="flex-none rotate-[320.42deg]">
          <div className="h-[29.223px] relative w-[31.614px]" data-name="b3 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgB31} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[78.786px] items-center justify-center left-[25.67px] top-[129.29px] w-[84.604px]" style={{ "--transform-inner-width": "63.78125", "--transform-inner-height": "71.65625" } as React.CSSProperties}>
        <div className="flex-none rotate-[256.47deg]">
          <div className="h-[71.67px] relative w-[63.79px]" data-name="b5 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgB51} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[74.683px] items-center justify-center left-[400px] top-[48px] w-[93.934px]" style={{ "--transform-inner-width": "82.359375", "--transform-inner-height": "46.46875" } as React.CSSProperties}>
        <div className="flex-none rotate-[22.712deg]">
          <div className="h-[46.483px] relative w-[82.374px]" data-name="b4 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgB41} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[53.914px] items-center justify-center left-[411px] top-[298.49px] w-[52.791px]" style={{ "--transform-inner-width": "45.15625", "--transform-inner-height": "46.546875" } as React.CSSProperties}>
        <div className="flex-none rotate-[190.358deg] scale-y-[-100%]">
          <div className="h-[46.553px] relative w-[45.157px]" data-name="b1 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgB11} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TouristGroup() {
  return (
    <div className="absolute contents left-[7px] top-[87px]">
      <div className="absolute flex h-[140.494px] items-center justify-center left-[7px] top-[87px] w-[114.325px]" style={{ "--transform-inner-width": "88.109375", "--transform-inner-height": "123.421875" } as React.CSSProperties}>
        <div className="flex-none rotate-[346.6deg]">
          <div className="h-[123.434px] relative w-[88.119px]" data-name="w2 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgW21} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[120.926px] items-center justify-center left-[161.42px] top-[105.44px] w-[92.475px]" style={{ "--transform-inner-width": "77.921875", "--transform-inner-height": "111.265625" } as React.CSSProperties}>
        <div className="flex-none rotate-[7.896deg]">
          <div className="h-[111.275px] relative w-[77.927px]" data-name="w1 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgW11} />
          </div>
        </div>
      </div>
      <div className="absolute h-[112.079px] left-[81.72px] top-[109.48px] w-[97.459px]" data-name="m1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgM11} />
      </div>
    </div>
  );
}

function MainIllustration() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] size-[271px] top-[153px] translate-x-[-50%]">
      <div className="absolute left-0 rounded-[300px] size-[271px] top-0" data-name="bg 2">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[300px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[300px] size-full" src={imgBg2} />
          <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[300px]" />
        </div>
      </div>
      <TouristGroup />
    </div>
  );
}

export default function BreadTourPage() {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (showLoading) {
      // 1400ms 후 페이드 아웃 시작
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 1400);

      // 1400ms + 400ms = 1800ms 후 다음 페이지로 이동
      const navigateTimer = setTimeout(() => {
        navigate('/bread-tour-members');
      }, 1800);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(navigateTimer);
      };
    }
  }, [showLoading, navigate]);

  const handleStart = () => {
    setShowLoading(true);
  };

  if (showLoading) {
    return (
      <div 
        className="transition-opacity duration-[400ms]"
        style={{ opacity: fadeOut ? 0 : 1 }}
      >
        <BreadTourLoadingPage />
      </div>
    );
  }

  return (
    <div className="bg-white relative w-full min-h-[calc(100vh-200px)] pb-[20px]">
      <FloatingBreads />
      <MainIllustration />
      
      <div className="absolute flex flex-col font-['YES_Gothic:ExtraBold',sans-serif] justify-center leading-[44px] left-1/2 not-italic text-[#383434] text-[32px] text-center text-nowrap top-[434px] tracking-[-0.24px] translate-x-[-50%] translate-y-[-50%] whitespace-pre">
        <p className="mb-0">빵투어 투어리스트</p>
        <p>모으기</p>
      </div>

      <div className="absolute flex flex-col font-['YES_Gothic:Bold',sans-serif] justify-center leading-[24px] left-1/2 not-italic text-[#898080] text-[16px] text-center text-nowrap top-[538px] tracking-[-0.24px] translate-x-[-50%] translate-y-[-50%] whitespace-pre">
        <p className="mb-0">빵투어를 즐겨 볼 준비 되셨나요?</p>
        <p>함께할 친구들을 모아봅시다!</p>
      </div>

      <div className="absolute box-border content-stretch flex gap-[10px] items-start left-px overflow-clip px-[20px] py-[10px] top-[643px] w-[402px]">
        <button 
          onClick={handleStart}
          className="bg-[#5277ff] h-[53px] overflow-clip relative rounded-[14px] shrink-0 w-[361px]"
        >
          <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[1.7] left-[calc(50%-27.5px)] not-italic text-[16px] text-nowrap text-white top-[calc(50%-13.5px)] tracking-[-0.176px] whitespace-pre">시작하기</p>
        </button>
      </div>
    </div>
  );
}
