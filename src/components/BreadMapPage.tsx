import { useState } from 'react';

export default function BreadMapPage() {
  const [selectedBakery, setSelectedBakery] = useState<number | null>(null);

  const bakeries = [
    { id: 1, name: '성심당', lat: 37.5665, lng: 126.9780, address: '대전 중구 대종로 480번길 15' },
    { id: 2, name: '뚜레쥬르 강남점', lat: 37.5001, lng: 127.0366, address: '서울 강남구 테헤란로 123' },
    { id: 3, name: '파리바게뜨', lat: 37.5172, lng: 127.0473, address: '서울 강남구 역삼동 456' },
  ];

  return (
    <div className="bg-white relative w-full h-screen">
      {/* Map Placeholder */}
      <div className="absolute top-[84px] left-0 right-0 bottom-[112px] bg-[#f0f0f0] flex items-center justify-center">
        <div className="text-center">
          <p className="font-['YES_Gothic:Bold',sans-serif] text-[16px] text-[#7f7777] mb-[8px]">
            🗺️ 구글맵 연동 예정
          </p>
          <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#7f7777]">
            Google Maps API 키 필요
          </p>
        </div>

        {/* Mock Markers */}
        <div className="absolute top-[100px] left-[50px]">
          <button 
            onClick={() => setSelectedBakery(1)}
            className="w-[40px] h-[40px] bg-[#f47f30] rounded-full flex items-center justify-center text-white shadow-lg"
          >
            🍞
          </button>
        </div>
        <div className="absolute top-[200px] right-[80px]">
          <button 
            onClick={() => setSelectedBakery(2)}
            className="w-[40px] h-[40px] bg-[#f47f30] rounded-full flex items-center justify-center text-white shadow-lg"
          >
            🥐
          </button>
        </div>
      </div>

      {/* Bakery List */}
      <div className="absolute bottom-[112px] left-0 right-0 bg-white border-t border-[#e0e0e0] max-h-[200px] overflow-y-auto">
        <div className="px-[20px] py-[16px]">
          <h3 className="font-['YES_Gothic:Bold',sans-serif] text-[14px] text-[#242121] mb-[12px]">
            주변 빵집
          </h3>
          <div className="space-y-[8px]">
            {bakeries.map((bakery) => (
              <button
                key={bakery.id}
                onClick={() => setSelectedBakery(bakery.id)}
                className={`w-full text-left p-[12px] rounded-[10px] transition-colors ${
                  selectedBakery === bakery.id ? 'bg-[#fff3e3]' : 'bg-[#f5f5f5]'
                }`}
              >
                <p className="font-['YES_Gothic:Bold',sans-serif] text-[14px] text-[#242121] mb-[4px]">
                  {bakery.name}
                </p>
                <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#7f7777]">
                  {bakery.address}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Button */}
      <button className="absolute top-[80px] right-[20px] z-20 bg-white shadow-lg rounded-[10px] px-[16px] py-[10px] font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#242121]">
        🔍 검색
      </button>
    </div>
  );
}
