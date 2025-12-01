import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Frame32928448 from '../imports/Frame329-28-448';
import Frame33254333 from '../imports/Frame332-54-333';

export default function ReviewPage() {
  const navigate = useNavigate();
  const [userPosts, setUserPosts] = useState<any[]>([]);

  useEffect(() => {
    // 로컬스토리지에서 포스트 불러오기
    const posts = JSON.parse(localStorage.getItem('reviewPosts') || '[]');
    setUserPosts(posts);
  }, []);

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

      {/* Reviews Content - userPosts를 props로 전달 */}
      <Frame33254333 userPosts={userPosts} />
    </div>
  );
}