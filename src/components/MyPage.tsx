import { useNavigate } from 'react-router-dom';
import { getUser, logout } from '../utils/localStorage';

export default function MyPage() {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      logout();
      navigate('/login');
    }
  };

  return (
    <div className="bg-white relative w-full min-h-screen pb-[112px]">
      
      {/* Header */}
      <div className="h-[60px] flex items-center justify-center border-b border-[#e0e0e0]">
        <h1 className="font-['YES_Gothic:Bold',sans-serif] text-[18px] text-[#242121]">마이페이지</h1>
      </div>

      {/* Profile Section */}
      <div className="px-[20px] pt-[30px]">
        <div className="flex items-center mb-[30px]">
          <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#ffd58d] to-[#f47f30] flex items-center justify-center">
            <span className="text-[32px]">👤</span>
          </div>
          <div className="ml-[20px]">
            <p className="font-['YES_Gothic:Bold',sans-serif] text-[20px] text-[#242121] mb-[4px]">
              {user?.name || '사용자'}
            </p>
            <p className="font-['YES_Gothic:Regular',sans-serif] text-[14px] text-[#7f7777]">
              {user?.id || 'user@example.com'}
            </p>
          </div>
        </div>

        {/* User Info */}
        <div className="bg-[#f5f5f5] rounded-[14px] p-[20px] mb-[20px]">
          <div className="flex justify-between mb-[12px]">
            <p className="font-['YES_Gothic:Regular',sans-serif] text-[14px] text-[#7f7777]">나이</p>
            <p className="font-['YES_Gothic:Bold',sans-serif] text-[14px] text-[#242121]">{user?.age || '-'}세</p>
          </div>
          <div className="flex justify-between">
            <p className="font-['YES_Gothic:Regular',sans-serif] text-[14px] text-[#7f7777]">성별</p>
            <p className="font-['YES_Gothic:Bold',sans-serif] text-[14px] text-[#242121]">{user?.gender || '-'}</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-[12px] mb-[30px]">
          <button className="w-full bg-[#f5f5f5] rounded-[14px] p-[16px] flex justify-between items-center">
            <span className="font-['YES_Gothic:Regular',sans-serif] text-[16px] text-[#242121]">
              내 활동 기록
            </span>
            <span className="text-[#7f7777]">→</span>
          </button>
          <button className="w-full bg-[#f5f5f5] rounded-[14px] p-[16px] flex justify-between items-center">
            <span className="font-['YES_Gothic:Regular',sans-serif] text-[16px] text-[#242121]">
              찜한 빵집
            </span>
            <span className="text-[#7f7777]">→</span>
          </button>
          <button className="w-full bg-[#f5f5f5] rounded-[14px] p-[16px] flex justify-between items-center">
            <span className="font-['YES_Gothic:Regular',sans-serif] text-[16px] text-[#242121]">
              설정
            </span>
            <span className="text-[#7f7777]">→</span>
          </button>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full bg-white border-2 border-[#e0e0e0] rounded-[14px] py-[16px] font-['YES_Gothic:Regular',sans-serif] text-[16px] text-[#7f7777]"
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}
