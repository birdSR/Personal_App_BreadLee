import { Outlet, useLocation } from 'react-router-dom';
import DockBar from './DockBar';
import TopNavBar from './TopNavBar';
import CreatePostButton from './CreatePostButton';

function Battery() {
  return (
    <div className="absolute inset-[39.39%_11.82%_34.85%_81.69%]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 12">
        <g id="Battery">
          <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="22.584" x="0.5" y="0.5" />
          <path d="M23.584 5.16663V6.83329C24.1178 6.83329 24.6297 6.6214 25.0047 6.2463C25.3798 5.8712 25.5917 5.35935 25.5917 4.82554V7.17438C25.5917 6.64057 25.3798 6.12872 25.0047 5.75362C24.6297 5.37852 24.1178 5.16663 23.584 5.16663Z" fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="19.296" x="2.144" y="2" />
        </g>
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute inset-[34.09%_77.33%_18.18%_8.27%]" data-name="Time Style">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-0 text-[15px] text-black text-center top-[calc(50%-12.5px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function TopIcon() {
  return (
    <div className="fixed h-[44px] left-0 top-0 w-full max-w-[402px] mx-auto z-30" data-name="top-icon">
      <Battery />
      <div className="absolute inset-[39.39%_19.64%_35.61%_76.27%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
          <path d="M0.333496 3.16663C2.61337 1.41068 5.46171 0.437866 8.40016 0.437866C11.3386 0.437866 14.187 1.41068 16.4668 3.16663M3.2335 6.33329C4.62566 5.30521 6.32589 4.74414 8.0835 4.74414C9.84111 4.74414 11.5413 5.30521 12.9335 6.33329M6.00016 9.49996C6.66682 8.97859 7.48754 8.68882 8.3335 8.68882C9.17945 8.68882 10.0002 8.97859 10.6668 9.49996" fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_25.07%_35.61%_70.4%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 11">
          <path d="M17.1667 0.583374H16.1667C15.7064 0.583374 15.3333 0.956448 15.3333 1.41671V9.58337C15.3333 10.0436 15.7064 10.4167 16.1667 10.4167H17.1667C17.6269 10.4167 18 10.0436 18 9.58337V1.41671C18 0.956448 17.6269 0.583374 17.1667 0.583374Z" fill="var(--fill-0, black)" id="Cellular Connection" />
          <path d="M12.1667 2.41671H13.1667C13.6269 2.41671 14 2.78978 14 3.25004V9.58337C14 10.0436 13.6269 10.4167 13.1667 10.4167H12.1667C11.7064 10.4167 11.3333 10.0436 11.3333 9.58337V3.25004C11.3333 2.78978 11.7064 2.41671 12.1667 2.41671Z" fill="var(--fill-0, black)" />
          <path d="M7.66667 4.25004H8.66667C9.12693 4.25004 9.5 4.62311 9.5 5.08337V9.58337C9.5 10.0436 9.12693 10.4167 8.66667 10.4167H7.66667C7.2064 10.4167 6.83333 10.0436 6.83333 9.58337V5.08337C6.83333 4.62311 7.2064 4.25004 7.66667 4.25004Z" fill="var(--fill-0, black)" />
          <path d="M3.16667 6.66671H4.16667C4.62693 6.66671 5 7.03978 5 7.50004V9.58337C5 10.0436 4.62693 10.4167 4.16667 10.4167H3.16667C2.7064 10.4167 2.33333 10.0436 2.33333 9.58337V7.50004C2.33333 7.03978 2.7064 6.66671 3.16667 6.66671Z" fill="var(--fill-0, black)" opacity="0.4" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

export default function MainLayout() {
  const location = useLocation();

  // 경로에 따른 타이틀 결정
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/recipes':
        return '핫-빵';
      case '/reviews':
        return '핫-빵';
      case '/bread-map':
        return '빵맵';
      case '/mypage':
        return '마이페이지';
      case '/ai-chat':
        return 'AI챗봇';
      case '/bread-tour':
        return '빵투어';
      case '/bread-tour-members':
        return '빵투어';
      default:
        return undefined; // 홈 페이지는 타이틀 없음
    }
  };

  // 핫-빵 페이지인지 확인
  const isHotBreadPage = location.pathname === '/recipes' || location.pathname === '/reviews';

  // 글작성 페이지인지 확인
  const isCreatePostPage = location.pathname === '/create-post';

  return (
    <div className="bg-white relative size-full flex flex-col overflow-x-hidden">
      {/* Top Status Bar */}
      <TopIcon />

      {/* Top Navigation Bar - 글작성 페이지에서는 숨김 */}
      {!isCreatePostPage && <TopNavBar title={getPageTitle()} />}

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <Outlet />
      </div>

      {/* Create Post Button - 핫-빵 페이지에서만 표시 */}
      {isHotBreadPage && (
        <div className="absolute bottom-0 h-[163px] left-0 w-full pointer-events-none z-40">
          <div className="absolute content-stretch flex flex-col gap-[4px] items-center right-[20px] top-0 pointer-events-auto">
            <CreatePostButton />
          </div>
        </div>
      )}

      {/* Dock Bar - 글작성 페이지에서는 숨김 */}
      {!isCreatePostPage && <DockBar />}
    </div>
  );
}