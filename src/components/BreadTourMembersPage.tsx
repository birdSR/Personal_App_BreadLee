import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-9oevml6ofp";
import imgUser from "figma:asset/fe6bf471017e4a1803942c5f023df9121a504a21.png";
import imgGeminiGeneratedImage35Pjdh35Pjdh35Pj2 from "figma:asset/d2b6cb2dede3a3ff7949f1cdf3221d57cb9203c9.png";
import imgUser1 from "figma:asset/55292a243c147c2beae549eb98fa149d313dd5d3.png";
import { imgGeminiGeneratedImage35Pjdh35Pjdh35Pj1 } from "../imports/svg-4ic4x";
import imgFrame407 from "figma:asset/654ae5b6297ef69cf639a8f50c233c4102ba76d7.png";
import svgPathsInstagram from "../imports/svg-xo0hn2pavn";
import svgPathsTrash from "../imports/svg-7hxv9hd979";

function LucideInstagram() {
  return (
    <div className="relative size-full" data-name="lucide/instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/instagram">
          <path d={svgPathsInstagram.p18a68ff0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideTrash() {
  return (
    <div className="relative size-full" data-name="lucide/trash-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="lucide/trash-2">
          <path d={svgPathsTrash.pa918b80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function User() {
  return (
    <div className="pointer-events-none relative rounded-[50px] shrink-0 size-[48px]" data-name="user">
      <div className="absolute inset-0 overflow-hidden rounded-[50px]">
        <img alt="" className="absolute h-[184.81%] left-[-37.13%] max-w-none top-[-4.95%] w-[173.62%]" src={imgUser} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#00bb3d] border-solid inset-[-2px] rounded-[52px]" />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents h-[18.925px] left-[-7.71px] top-[-4.68px] w-[22.042px]" data-name="Mask group">
      <div className="absolute flex h-[38.547px] items-center justify-center left-[-15.49px] top-[-14.52px] w-[38.548px]" style={{ "--transform-inner-width": "33.328125", "--transform-inner-height": "33.3125" } as React.CSSProperties}>
        <div className="flex-none rotate-[9.87deg]">
          <div className="h-[33.327px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9.543px_11.897px] mask-size-[19.971px_15.086px] relative w-[33.329px]" data-name="Gemini_Generated_Image_35pjdh35pjdh35pj 1" style={{ maskImage: `url('${imgGeminiGeneratedImage35Pjdh35Pjdh35Pj1}')` }}>
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGeminiGeneratedImage35Pjdh35Pjdh35Pj2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function User1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center px-0 py-[2px] relative shrink-0 size-[48px]" data-name="user">
      <User />
      <MaskGroup />
    </div>
  );
}

function LeaderCard() {
  return (
    <div className="bg-[#fff8ed] box-border content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip px-[20px] py-[10px] relative shrink-0 w-[402px]">
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
        <User1 />
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[305px]">
          <div className="content-stretch flex flex-col gap-[2px] items-start justify-center not-italic relative shrink-0 text-nowrap">
            <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#383434] text-[14px]">
              <p className="leading-[normal] text-nowrap whitespace-pre">달달한허니빵</p>
            </div>
            <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#f47f30] text-[12px] text-center tracking-[-0.24px] whitespace-pre">@zzoa_bbang</p>
          </div>
          <div className="content-stretch flex gap-[14px] items-center justify-end relative shrink-0 w-[147px]">
            <div className="bg-white h-[28px] relative rounded-[14px] shrink-0 w-[80px]">
              <div className="h-[28px] overflow-clip relative rounded-[inherit] w-[80px]">
                <div className="absolute flex flex-col font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic text-[#f47f30] text-[10px] text-center text-nowrap top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]">
                  <p className="leading-[1.1] whitespace-pre">Lv. 핫빵이</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-2 border-[#f97b62] border-solid inset-0 pointer-events-none rounded-[14px]" />
            </div>
            <div className="box-border content-stretch flex gap-[4px] items-center px-px py-0 relative shrink-0 w-[55px]">
              <div className="relative shrink-0 size-[4px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                  <circle cx="2" cy="2" fill="var(--fill-0, #00BB3D)" r="2" />
                </svg>
              </div>
              <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#00bb3d] text-[10px] text-nowrap whitespace-pre">빵투어 리더</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function User2() {
  return (
    <div className="pointer-events-none relative rounded-[50px] shrink-0 size-[48px]" data-name="user">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain rounded-[50px] size-full" src={imgUser1} />
      <div aria-hidden="true" className="absolute border-2 border-[#f4c030] border-solid inset-[-2px] rounded-[52px]" />
    </div>
  );
}

function User3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center px-0 py-[2px] relative shrink-0 size-[48px]" data-name="user">
      <User2 />
    </div>
  );
}

interface MemberCardProps {
  name: string;
  username: string;
  level: string;
  delay: number;
  onDelete: () => void;
}

function MemberCard({ name, username, level, delay, onDelete }: MemberCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleStart = (clientX: number) => {
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    
    const diff = clientX - startX;
    
    // 왼쪽으로만 드래그 가능, 최대 -80px까지
    if (diff < 0 && diff > -80) {
      setDragOffset(diff);
    } else if (diff < -80) {
      setDragOffset(-80);
    } else if (diff > 0) {
      setDragOffset(0);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    
    // -40px 이상 드래그했으면 삭제 버튼 표시
    if (dragOffset < -40) {
      setDragOffset(-80);
    } else {
      setDragOffset(0);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && Math.abs(e.touches[0].clientX - startX) > 5) {
      e.preventDefault();
    }
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd();
    }
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete();
    }, 300);
  };

  return (
    <div 
      className={`bg-white relative shrink-0 w-full transition-all ${
        isDeleting ? 'opacity-0 scale-95 duration-300' : 'duration-500'
      } ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'
      }`}
    >
      <div className="relative overflow-hidden">
        {/* 삭제 버튼 배경 */}
        <div className="absolute right-0 top-0 h-full w-[80px] bg-[#ff3b30] flex items-center justify-center">
          <button 
            onClick={handleDelete}
            className="flex items-center justify-center w-full h-full"
          >
            <div className="size-[28px]">
              <LucideTrash />
            </div>
          </button>
        </div>

        {/* 드래그 가능한 카드 */}
        <div 
          className={`flex flex-col justify-center rounded-[inherit] size-full bg-white cursor-grab active:cursor-grabbing ${
            isDragging ? '' : 'transition-transform duration-300'
          }`}
          style={{ 
            transform: `translateX(${dragOffset}px)`,
            touchAction: 'none',
            userSelect: 'none'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div className="box-border content-stretch flex flex-col items-start justify-center px-[16px] py-[4px] relative w-full">
            <div className="relative rounded-[50px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-2 border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-[50px]" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[10px] items-center pl-[14px] pr-[20px] py-[10px] relative w-full">
                  <User3 />
                  <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center not-italic relative shrink-0 text-nowrap">
                      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#383434] text-[14px]">
                        <p className="leading-[normal] text-nowrap whitespace-pre">{name}</p>
                      </div>
                      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#f47f30] text-[12px] text-center tracking-[-0.24px] whitespace-pre">{username}</p>
                    </div>
                    <div className="content-stretch flex gap-[14px] items-center justify-end relative shrink-0 w-[147px]">
                      <div className="bg-[#fff8ed] h-[28px] relative rounded-[14px] shrink-0 w-[80px]">
                        <div className="h-[28px] overflow-clip relative rounded-[inherit] w-[80px]">
                          <div className="absolute flex flex-col font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#ffa08b] text-[10px] text-center text-nowrap top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]">
                            <p className="leading-[1.1] whitespace-pre">{level}</p>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border-2 border-[#ffa08b] border-solid inset-0 pointer-events-none rounded-[14px]" />
                      </div>
                      <div className="box-border content-stretch flex gap-[4px] items-center px-px py-0 relative shrink-0 w-[55px]">
                        <div className="relative shrink-0 size-[4px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                            <circle cx="2" cy="2" fill="var(--fill-0, #5277FF)" r="2" />
                          </svg>
                        </div>
                        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5277ff] text-[10px] text-nowrap whitespace-pre">빵투어 멤버</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BreadTourMembersPage() {
  const navigate = useNavigate();

  const [members, setMembers] = useState([
    { id: 1, name: '나빵조아', username: '@najoy123', level: 'Lv.빵쟁이', delay: 200 },
    { id: 2, name: '언제나빵츄', username: '@bbchu_S2', level: 'Lv. 빵쟁이', delay: 400 },
    { id: 3, name: '고고빵가자', username: '@gogogo012', level: 'Lv. 빵쟁이', delay: 600 },
    { id: 4, name: '빵돌곰돌', username: '@bearbbang9', level: 'Lv. 빵순이', delay: 800 }
  ]);

  const handleDelete = (id: number) => {
    setMembers(members.filter(member => member.id !== id));
  };

  return (
    <div className="bg-white relative w-full min-h-screen pb-[200px] pt-[84px]">
      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[402px]">
        <LeaderCard />
      </div>
      
      <div className="box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip px-0 py-[10px] relative shrink-0 w-full">
        {members.map((member) => (
          <MemberCard 
            key={member.id}
            name={member.name}
            username={member.username}
            level={member.level}
            delay={member.delay}
            onDelete={() => handleDelete(member.id)}
          />
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="absolute bottom-[132px] left-0 w-full">
        <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip p-[20px] relative shrink-0 w-[402px]">
          <button 
            onClick={() => navigate('/home')}
            className="h-[53px] overflow-clip relative rounded-[14px] shrink-0 w-[361px]"
          >
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
              <div className="absolute inset-0 overflow-hidden rounded-[14px]">
                <img alt="" className="absolute h-[113.21%] left-0 max-w-none top-[-9.43%] w-full" src={imgFrame407} />
              </div>
              <div className="absolute bg-[rgba(255,255,255,0.08)] inset-0 rounded-[14px]" />
            </div>
            <div className="absolute h-[27px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center gap-[8px]">
              <p className="font-['Pretendard:Bold',sans-serif] leading-[1.7] not-italic text-[16px] text-nowrap text-white tracking-[-0.176px] whitespace-pre">Instagram DM 보내기</p>
            </div>
            <div className="absolute right-[20px] size-[24px] top-[50%] translate-y-[-50%]">
              <LucideInstagram />
            </div>
          </button>
        </div>
        <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-[20px] py-0 relative shrink-0 w-[402px]">
          <button 
            onClick={() => navigate('/bread-tour')}
            className="bg-[#dedcdc] h-[53px] overflow-clip relative rounded-[14px] shrink-0 w-[361px]"
          >
            <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[1.7] left-[calc(50%-35.5px)] not-italic text-[#6b6464] text-[16px] text-nowrap top-[calc(50%-13.5px)] tracking-[-0.176px] whitespace-pre">다시 모으기</p>
          </button>
        </div>
      </div>
    </div>
  );
}
