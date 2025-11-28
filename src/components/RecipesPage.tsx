export default function RecipesPage() {
  const recipes = [
    { id: 1, name: '크루아상', category: '패스츄리', difficulty: '어려움' },
    { id: 2, name: '소금빵', category: '소프트', difficulty: '보통' },
    { id: 3, name: '바게트', category: '하드', difficulty: '어려움' },
    { id: 4, name: '식빵', category: '식빵', difficulty: '쉬움' },
  ];

  const restaurants = [
    { id: 1, name: '성심당', location: '대전', rating: 4.8 },
    { id: 2, name: '뚜레쥬르 강남점', location: '서울', rating: 4.5 },
    { id: 3, name: '파리바게뜨', location: '서울', rating: 4.3 },
  ];

  return (
    <div className="bg-white relative w-full min-h-screen pb-[112px]">
      
      {/* Header */}
      <div className="h-[60px] flex items-center justify-center border-b border-[#e0e0e0]">
        <h1 className="font-['YES_Gothic:Bold',sans-serif] text-[18px] text-[#242121]">맛-빵</h1>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#e0e0e0]">
        <button className="flex-1 py-[16px] font-['YES_Gothic:Bold',sans-serif] text-[14px] text-[#f47f30] border-b-2 border-[#f47f30]">
          레시피
        </button>
        <button className="flex-1 py-[16px] font-['YES_Gothic:Regular',sans-serif] text-[14px] text-[#7f7777]">
          맛집
        </button>
      </div>

      {/* Content */}
      <div className="px-[20px] pt-[20px]">
        <h2 className="font-['YES_Gothic:Bold',sans-serif] text-[16px] text-[#242121] mb-[16px]">
          인기 빵 레시피
        </h2>
        <div className="space-y-[12px]">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-[#f5f5f5] rounded-[14px] p-[16px] flex justify-between items-center">
              <div>
                <p className="font-['YES_Gothic:Bold',sans-serif] text-[16px] text-[#242121] mb-[4px]">
                  {recipe.name}
                </p>
                <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#7f7777]">
                  {recipe.category} · {recipe.difficulty}
                </p>
              </div>
              <button className="text-[#f47f30] font-['YES_Gothic:Regular',sans-serif] text-[12px]">
                보기 →
              </button>
            </div>
          ))}
        </div>

        <h2 className="font-['YES_Gothic:Bold',sans-serif] text-[16px] text-[#242121] mb-[16px] mt-[32px]">
          추천 빵집
        </h2>
        <div className="space-y-[12px]">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-[#f5f5f5] rounded-[14px] p-[16px] flex justify-between items-center">
              <div>
                <p className="font-['YES_Gothic:Bold',sans-serif] text-[16px] text-[#242121] mb-[4px]">
                  {restaurant.name}
                </p>
                <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#7f7777]">
                  {restaurant.location} · ⭐ {restaurant.rating}
                </p>
              </div>
              <button className="text-[#f47f30] font-['YES_Gothic:Regular',sans-serif] text-[12px]">
                상세 →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
