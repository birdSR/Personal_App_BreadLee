import { useRef, useState } from "react";
import imgFrame275 from "figma:asset/55292a243c147c2beae549eb98fa149d313dd5d3.png";

interface BreadCardProps {
  rank: string;
  name: string;
  shop: string;
  image: string;
}

function BreadCard({ rank, name, shop, image }: BreadCardProps) {
  return (
    <div className="bg-[#f1f0f0] h-[178px] overflow-clip relative rounded-[14px] shrink-0 w-[158px]">
      {/* Image */}
      <div className="absolute h-[151px] left-[26px] rounded-[70px] top-[calc(50%-44.5px)] translate-y-[-50%] w-[150px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[70px]">
          <img alt="" className="absolute left-[-9.19%] max-w-none size-[113.24%] top-[-8.13%]" src={image} />
        </div>
      </div>
      
      {/* Rank */}
      <div className="absolute flex flex-col font-['YES_Gothic:ExtraBold',sans-serif] justify-center leading-[0] left-[13px] not-italic text-[#f47f30] text-[24px] text-nowrap top-[19.5px] tracking-[-0.24px] translate-y-[-50%]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[1.7] underline whitespace-pre">{rank}</p>
      </div>

      {/* Text Info */}
      <div className="absolute content-stretch flex flex-col font-['YES_Gothic:Bold',sans-serif] gap-[3px] items-start justify-center leading-[0] left-[calc(50%-10px)] not-italic top-[calc(50%+40.5px)] tracking-[-0.24px] translate-x-[-50%] translate-y-[-50%] max-w-[136px]">
        <div className="flex flex-col justify-center leading-[18px] relative shrink-0 text-[#383434] text-[14px]">
          <p className="mb-0 line-clamp-2">{name}</p>
        </div>
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#7f7777] text-[10px] w-[min-content]">
          <p className="leading-[normal]">{shop}</p>
        </div>
      </div>
    </div>
  );
}

export default function HotBreadSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const breads = [
    {
      rank: "01",
      name: "오븐에 이븐하게 구운 크로와상",
      shop: "올리브 아파트먼트",
      image: imgFrame275
    },
    {
      rank: "02",
      name: "요즘 무화과 재철이쥬~ 무화과 크림 케이크",
      shop: "옹글당",
      image: imgFrame275
    },
    {
      rank: "03",
      name: "마늘의 감칠맛 마늘 바게트",
      shop: "요즘 빵 박물관",
      image: imgFrame275
    },
    {
      rank: "04",
      name: "상큼한 레몬의 향연 레몬 마들렌",
      shop: "구움",
      image: imgFrame275
    },
    {
      rank: "05",
      name: "딸기는 무적권이지! 딸기크림몽블랑",
      shop: "온드리 케익마켓",
      image: imgFrame275
    }
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조절
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="mb-[24px] -mr-[20px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-[12px] mr-[20px]">
        <h3 className="font-['YES_Gothic:Bold',sans-serif] text-[18px] text-[#383434]">이번달 갓구운 핫-빵</h3>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={`overflow-x-auto overflow-y-hidden scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-x'
        }}
      >
        <div className="flex gap-[16px] pr-[20px] select-none">
          {breads.map((bread, index) => (
            <BreadCard 
              key={index}
              rank={bread.rank}
              name={bread.name}
              shop={bread.shop}
              image={bread.image}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x proximity;
        }
      `}</style>
    </div>
  );
}
