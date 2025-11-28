import svgPaths from "../imports/svg-fkuo8tqckh";
import img2 from "figma:asset/f689da9f5dda9191745d4bbbe181c159d237ca85.png";
import imgFrame275 from "figma:asset/55292a243c147c2beae549eb98fa149d313dd5d3.png";
import PassionMeter from "./PassionMeter";

export default function HomePage() {
  return (
    <div className="bg-white relative w-full min-h-screen pb-[112px]">
      {/* Header - 상단 배터리/시간 등 */}
      <div className="h-[44px] w-full flex items-center justify-between px-[20px]">
        <p className="font-['SF_Pro_Text:Semibold',sans-serif] text-[15px]">9:41</p>
        <div className="flex gap-[8px]">
          <div className="w-[17px] h-[11px]">
            <svg className="block size-full" fill="none" viewBox="0 0 17 11">
              <path d={svgPaths.p297d2880} fill="black" />
            </svg>
          </div>
          <div className="w-[27px] h-[12px]">
            <svg className="block size-full" fill="none" viewBox="0 0 27 12">
              <rect height="10.3333" opacity="0.35" rx="2.16667" stroke="black" width="22.584" x="0.5" y="0.5" />
              <path d={svgPaths.pbbec300} fill="black" opacity="0.4" />
              <rect fill="black" height="7.33333" rx="1.33333" width="19.296" x="2.144" y="2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-[20px] pt-[20px]">
        {/* Today's Bread Section */}
        <div className="mb-[24px]">
          <h2 className="font-['YES_Gothic:Bold',sans-serif] text-[24px] text-[#242121] mb-[16px]">
            오늘의 추천 빵
          </h2>
          <div className="relative bg-gradient-to-br from-[#fff3e3] to-[#ffe9cc] rounded-[20px] p-[20px] h-[200px] overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-['YES_Gothic:Bold',sans-serif] text-[32px] text-[#242121] leading-[1.2] mb-[12px]">
                앙버터<br/>소금빵
              </h3>
              <button className="bg-white text-[#f47f30] font-['YES_Gothic:Bold',sans-serif] text-[12px] px-[16px] py-[8px] rounded-[20px] border-2 border-[#f47f30]">
                AI 추천 빵 정보 보기 →
              </button>
            </div>
            <img 
              src={img2} 
              alt="앙버터 소금빵" 
              className="absolute right-[-20px] top-[50%] translate-y-[-50%] w-[180px] h-[180px] object-cover opacity-90"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-[12px] mb-[24px]">
          <div className="bg-[#fff3e3] rounded-[14px] p-[12px] h-[109px]">
            <p className="font-['YES_Gothic:Bold',sans-serif] text-[10px] text-[#f97b62] mb-[6px]">내 랭킹</p>
            <p className="font-['YES_Gothic:Bold',sans-serif]">
              <span className="text-[24px] text-[#383434]">12</span>
              <span className="text-[14px] text-[#383434]">위</span>
            </p>
          </div>
          <div className="h-[109px]">
            <PassionMeter percentage={80} />
          </div>
          <div className="bg-[#fff3e3] rounded-[14px] p-[12px] h-[109px]">
            <p className="font-['YES_Gothic:Bold',sans-serif] text-[10px] text-[#f47f30] mb-[6px]">나의 빵 감성</p>
            <p className="font-['YES_Gothic:Bold',sans-serif] text-[14px] text-[#383434] leading-[1.3]">
              유럽<br/>소도시
            </p>
          </div>
        </div>

        {/* Challenge Section */}
        <div className="mb-[24px]">
          <div className="flex justify-between items-center mb-[12px]">
            <h3 className="font-['YES_Gothic:Bold',sans-serif] text-[18px] text-[#242121]">진행 중인 챌린지</h3>
            <button className="text-[#f47f30] font-['YES_Gothic:Regular',sans-serif] text-[12px]">더보기 →</button>
          </div>
          <div className="bg-[#f5f5f5] rounded-[14px] p-[16px]">
            <div className="flex items-center justify-between mb-[8px]">
              <p className="font-['YES_Gothic:Bold',sans-serif] text-[14px] text-[#383434]">30일 빵 챌린지</p>
              <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#f47f30]">12/30일</p>
            </div>
            <div className="w-full h-[8px] bg-[#e0e0e0] rounded-full overflow-hidden">
              <div className="h-full bg-[#f47f30] rounded-full" style={{ width: '40%' }} />
            </div>
          </div>
        </div>

        {/* Recent Breads */}
        <div>
          <div className="flex justify-between items-center mb-[12px]">
            <h3 className="font-['YES_Gothic:Bold',sans-serif] text-[18px] text-[#242121]">최근 방문한 빵집</h3>
            <button className="text-[#f47f30] font-['YES_Gothic:Regular',sans-serif] text-[12px]">더보기 →</button>
          </div>
          <div className="grid grid-cols-2 gap-[12px]">
            <div className="bg-[#f5f5f5] rounded-[14px] overflow-hidden">
              <div className="h-[120px] bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0]" />
              <div className="p-[12px]">
                <p className="font-['YES_Gothic:Bold',sans-serif] text-[14px] text-[#242121] mb-[4px]">성심당</p>
                <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#7f7777]">대전 중구</p>
              </div>
            </div>
            <div className="bg-[#f5f5f5] rounded-[14px] overflow-hidden">
              <div className="h-[120px] bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0]" />
              <div className="p-[12px]">
                <p className="font-['YES_Gothic:Bold',sans-serif] text-[14px] text-[#242121] mb-[4px]">뚜레쥬르</p>
                <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#7f7777]">서울 강남구</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
