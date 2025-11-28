import svgPaths from "../imports/svg-fkuo8tqckh";
import PassionMeter from "./PassionMeter";
import RankingCard from "./RankingCard";
import BreadSentimentCard from "./BreadSentimentCard";
import BreadPowerMeter from "./BreadPowerMeter";
import HotBreadSection from "./HotBreadSection";
import WeeklyBestSection from "./WeeklyBestSection";
import BreadTourBanner from "./BreadTourBanner";
import MainDashboard from "./MainDashboard";

export default function HomePage() {
  return (
    <div className="bg-white relative w-full min-h-screen pb-[112px] overflow-x-hidden">

      {/* Main Dashboard */}
      <MainDashboard />

      {/* Main Content */}
      <div className="px-[20px]">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-[12px] mb-[24px]">
          <div className="h-[109px]">
            <RankingCard rank={12} />
          </div>
          <div className="h-[109px]">
            <PassionMeter percentage={80} />
          </div>
          <div className="h-[109px]">
            <BreadSentimentCard sentiment="유럽\n소도시" />
          </div>
        </div>

        {/* Bread Power Meter */}
        <BreadPowerMeter percentage={75} />
      </div>

      {/* Hot Bread Section */}
      <div className="pl-[20px]">
        <HotBreadSection />
      </div>

      <div className="px-[20px]">
        {/* Weekly Best Section */}
        <WeeklyBestSection />

        {/* Recent Breads */}
        <div className="mt-[24px]">
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

        {/* Bread Tour Banner */}
        <div className="mt-[24px]">
          <BreadTourBanner />
        </div>
      </div>
    </div>
  );
}
