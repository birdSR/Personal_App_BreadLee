import { useNavigate } from 'react-router-dom';
import Frame329 from '../imports/Frame329';
import Frame332 from '../imports/Frame332';
import VoteComponent from '../imports/1';

export default function RecipesPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white relative w-full min-h-screen pb-[112px] pt-[84px]">

      {/* Tabs */}
      <div className="pt-[16px] px-[20px] pb-0">
        <div className="flex gap-[16px]">
          <button className="basis-0 grow h-[32px] rounded-[14px] overflow-clip" style={{ backgroundColor: 'var(--orange-600)' }}>
            <p className="font-['YES_Gothic:Bold',sans-serif] leading-[20px] not-italic text-[12px] text-center text-white tracking-[-0.24px]">빵장소</p>
          </button>
          <button 
            onClick={() => navigate('/reviews')}
            className="basis-0 grow h-[32px] rounded-[14px] overflow-clip border-2 border-solid" 
            style={{ borderColor: '#dedcdc' }}
          >
            <p className="font-['YES_Gothic:Bold',sans-serif] leading-[20px] not-italic text-[12px] text-black text-center tracking-[-0.24px]">리뷰</p>
          </button>
        </div>
      </div>

      {/* Region Selection */}
      <Frame329 />

      {/* Vote Component */}
      <div className="px-[20px] pt-[20px]">
        <VoteComponent />
      </div>

      {/* Content */}
      <Frame332 />
    </div>
  );
}
