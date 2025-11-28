import { useNavigate } from 'react-router-dom';
import userIconPaths from "../imports/svg-v6bj91cgxy";

export default function NavigationBar() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleProfile = () => {
    navigate('/mypage');
  };

  return (
    <div className="absolute box-border content-stretch flex gap-[10px] h-[40px] items-center left-1/2 overflow-clip px-[20px] py-[8px] top-[54px] translate-x-[-50%] w-[402px] z-10">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        {/* Back Button */}
        <button onClick={handleBack} className="h-[12px] relative shrink-0 w-[6px]">
          <div className="absolute inset-[-8.33%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
              <path d="M7 13L1 7L7 1" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </button>
        
        {/* Profile Button */}
        <button onClick={handleProfile} className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={userIconPaths.p1c10c180} stroke="var(--stroke-0, #383434)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
}
