import { useNavigate } from 'react-router-dom';
import Frame32928448 from '../imports/Frame329-28-448';
import Frame379 from '../imports/Frame379';
import VoteComponent from '../imports/1';

export default function ReviewPage() {
  const navigate = useNavigate();
  const reviews = [
    {
      id: 1,
      userName: '빵순이',
      userImage: '🧑‍🦱',
      bakery: '올리브아파트먼트',
      rating: 5,
      date: '2024.11.20',
      bread: '잠봉 센드위치',
      comment: '진짜 맛있어요! 잠봉이 듬뿍 들어있고 빵도 촉촉해서 최고입니다. 웨이팅이 있지만 기다릴 가치가 있어요.',
      likes: 24,
      images: 3
    },
    {
      id: 2,
      userName: '빵돌이',
      userImage: '👨',
      bakery: '죠스',
      rating: 4,
      date: '2024.11.19',
      bread: '앙버터 소금빵',
      comment: '소금빵 맛집이에요. 겉은 바삭하고 속은 부드러워요. 앙버터가 정말 고소합니다!',
      likes: 18,
      images: 2
    },
    {
      id: 3,
      userName: '케이크러버',
      userImage: '👩',
      bakery: '온드리 케익마켓',
      rating: 5,
      date: '2024.11.18',
      bread: '무화과 얼그레이 케이크',
      comment: '무화과와 얼그레이 조합이 환상적이에요. 달지 않아서 좋고 재료가 신선해요.',
      likes: 31,
      images: 4
    },
    {
      id: 4,
      userName: '빵집탐험가',
      userImage: '🧑',
      bakery: '옹글당',
      rating: 5,
      date: '2024.11.17',
      bread: '흑임자 카스테라',
      comment: '흑임자 향이 진하고 카스테라가 부드러워요. 선물용으로도 좋을 것 같아요!',
      likes: 15,
      images: 2
    }
  ];

  return (
    <div className="bg-white relative w-full min-h-screen pb-[112px] pt-[84px]">

      {/* Tabs */}
      <div className="pt-[16px] px-[20px] pb-0">
        <div className="flex gap-[16px]">
          <button 
            onClick={() => navigate('/recipes')}
            className="basis-0 grow h-[32px] rounded-[14px] overflow-clip border-2 border-solid" 
            style={{ borderColor: '#dedcdc' }}
          >
            <p className="font-['YES_Gothic:Bold',sans-serif] leading-[20px] not-italic text-[12px] text-black text-center tracking-[-0.24px]">빵장소</p>
          </button>
          <button className="basis-0 grow h-[32px] rounded-[14px] overflow-clip" style={{ backgroundColor: 'var(--orange-600)' }}>
            <p className="font-['YES_Gothic:Bold',sans-serif] leading-[20px] not-italic text-[12px] text-center text-white tracking-[-0.24px]">리뷰</p>
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="h-[44px]">
        <Frame32928448 />
      </div>

      {/* Reviews Content */}
      <div className="px-[20px] pt-[20px]">
        <div className="flex items-center justify-between mb-[16px]">
          <p className="font-['YES_Gothic:Bold',sans-serif] text-[16px] text-[#242121]">
            최근 리뷰 {reviews.length}개
          </p>
          <select className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#7f7777] bg-transparent border-none outline-none">
            <option>최신순</option>
            <option>인기순</option>
            <option>별점높은순</option>
          </select>
        </div>

        <div className="space-y-[16px]">
          {reviews.map((review, index) => (
            <div key={review.id}>
              {/* Insert Vote Component after 2nd review */}
              {index === 2 && (
                <div className="mb-[16px]">
                  <VoteComponent />
                </div>
              )}
              
              <div className="bg-[#f5f5f5] rounded-[14px] p-[16px]">
              {/* User Info */}
              <div className="flex items-center justify-between mb-[12px]">
                <div className="flex items-center gap-[8px]">
                  <div className="w-[32px] h-[32px] rounded-full bg-[#ffe4d6] flex items-center justify-center text-[16px]">
                    {review.userImage}
                  </div>
                  <div>
                    <p className="font-['YES_Gothic:Bold',sans-serif] text-[14px] text-[#242121]">
                      {review.userName}
                    </p>
                    <p className="font-['YES_Gothic:Regular',sans-serif] text-[10px] text-[#7f7777]">
                      {review.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? 'text-[#f47f30]' : 'text-[#dedcdc]'}>
                      ⭐
                    </span>
                  ))}
                </div>
              </div>

              {/* Bakery & Bread */}
              <div className="mb-[10px]">
                <p className="font-['YES_Gothic:Bold',sans-serif] text-[14px] text-[#f47f30] mb-[4px]">
                  {review.bakery}
                </p>
                <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#383434]">
                  {review.bread}
                </p>
              </div>

              {/* Comment */}
              <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#383434] leading-[1.7] mb-[12px]">
                {review.comment}
              </p>

              {/* Images Indicator */}
              <div className="flex items-center gap-[6px] mb-[12px]">
                {[...Array(review.images)].map((_, i) => (
                  <div key={i} className="w-[60px] h-[60px] bg-[#dedcdc] rounded-[8px]" />
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-[12px] pt-[12px] border-t border-[#dedcdc]">
                <button className="flex items-center gap-[4px]">
                  <span className="text-[14px]">👍</span>
                  <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#7f7777]">
                    {review.likes}
                  </p>
                </button>
                <button className="flex items-center gap-[4px]">
                  <span className="text-[14px]">💬</span>
                  <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#7f7777]">
                    댓글
                  </p>
                </button>
                <button className="flex items-center gap-[4px] ml-auto">
                  <span className="text-[14px]">🔖</span>
                  <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#7f7777]">
                    저장
                  </p>
                </button>
              </div>
            </div>
            </div>
          ))}
        </div>

        {/* Write Review Button */}
        <div className="fixed bottom-[132px] right-[20px] w-[54px] h-[72px]">
          <Frame379 />
        </div>
      </div>
    </div>
  );
}
