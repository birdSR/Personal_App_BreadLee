import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IPhoneKeyboard } from './IPhoneKeyboard';
import { BreadMapModal } from './BreadMapModal';
import { BreadMapCard } from './BreadMapCard';
import { getUser } from '../utils/localStorage';
import svgPaths from "../imports/svg-8vjvrblgsc";
import imgGeminiGeneratedImage1N7Zv71N7Zv71N7Z6 from "figma:asset/55292a243c147c2beae549eb98fa149d313dd5d3.png";

function BackButton() {
  const navigate = useNavigate();
  
  return (
    <button 
      onClick={() => navigate(-1)}
      className="block cursor-pointer h-[12px] relative shrink-0 w-[6px]"
    >
      <div className="absolute inset-[-8.33%_-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
          <g id="Frame 252">
            <path d="M7 13L1 7L7 1" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </button>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[14px] h-[14px] items-center relative shrink-0 w-[69px]">
      <BackButton />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.24px] whitespace-pre">글 작성</p>
    </div>
  );
}

function Component() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[22px]" data-name="서울">
      <div className="overflow-clip relative rounded-[inherit] size-[22px]">
        <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic text-[#f47f30] text-[14px] text-center text-nowrap top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[1.1] whitespace-pre">?</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f97b62] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Guide() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative content-stretch flex gap-[14px] items-center shrink-0" data-name="guide">
      <button 
        onClick={() => setShowTooltip(!showTooltip)}
        className="relative"
      >
        <Component />
      </button>
      
      {/* 툴팁 메모박스 */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[32px] right-0 z-[99]"
          >
            {/* 검은색 툴팁 박스 */}
            <div className="relative bg-[#2d2d2d] rounded-[8px] px-[14px] py-[10px] w-[200px]">
              {/* 메모 내용 */}
              <p className="font-['YES_Gothic:Medium',sans-serif] text-[10px] text-white leading-[15px] tracking-[-0.24px]">
                글 작성 시 다녀온 장소명과 대략적인 위치를 적어주세요! 빵러버에게 핫-빵을 찾을 큰 힘이 됩니다.
                <br /><br />
                빵맵 등록 시 내 빵맵에 자동 동기화 됩니다.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Frame2({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-[#f47f30] h-[32px] overflow-clip relative rounded-[30px] shrink-0 w-[99px]">
      <p className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[20px] left-[calc(50%+1px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-10px)] tracking-[-0.24px] translate-x-[-50%] whitespace-pre">등록하기</p>
    </button>
  );
}

function Frame9({ onRegister }: { onRegister: () => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-[131px] z-[99]">
      <Guide />
      <Frame2 onClick={onRegister} />
    </div>
  );
}

function Frame1({ onRegister }: { onRegister: () => void }) {
  return (
    <div className="h-[64px] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-visible rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between p-[20px] relative w-full">
          <Frame5 />
          <Frame9 onRegister={onRegister} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dedcdc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame3({ onRegister }: { onRegister: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[44px] w-[402px] z-[99]">
      <Frame1 onRegister={onRegister} />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-[540px]">
      <IPhoneKeyboard />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[6px] left-[16px] top-[28px] w-[30px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 6">
        <g id="Frame 360">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" id="Ellipse 22" r="3" />
          <circle cx="15" cy="3" fill="var(--fill-0, white)" id="Ellipse 23" r="3" />
          <circle cx="27" cy="3" fill="var(--fill-0, white)" id="Ellipse 24" r="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[62px]">
      <div className="absolute left-0 rounded-[8px] size-[62px] top-0" data-name="Gemini_Generated_Image_1n7zv71n7zv71n7z 6">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgGeminiGeneratedImage1N7Zv71N7Zv71N7Z6} />
          <div className="absolute bg-[#bfbfbf] inset-0 rounded-[8px]" />
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[20px] py-0 relative shrink-0">
      <div className="relative rounded-[8px] shrink-0 size-[62px]" data-name="Gemini_Generated_Image_1n7zv71n7zv71n7z 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgGeminiGeneratedImage1N7Zv71N7Zv71N7Z6} />
      </div>
      <div className="h-[62px] relative rounded-[8px] shrink-0 w-[61px]" data-name="Gemini_Generated_Image_1n7zv71n7zv71n7z 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgGeminiGeneratedImage1N7Zv71N7Zv71N7Z6} />
      </div>
      <div className="relative rounded-[8px] shrink-0 size-[62px]" data-name="Gemini_Generated_Image_1n7zv71n7zv71n7z 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgGeminiGeneratedImage1N7Zv71N7Zv71N7Z6} />
      </div>
      <div className="relative rounded-[8px] shrink-0 size-[62px]" data-name="Gemini_Generated_Image_1n7zv71n7zv71n7z 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgGeminiGeneratedImage1N7Zv71N7Zv71N7Z6} />
      </div>
      <Frame8 />
    </div>
  );
}

function Frame6() {
  // 키보드 높이(217px) + 여백(14px) = 231px
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[86px] bottom-[231px] w-[316px]">
      <Frame10 />
    </div>
  );
}

function Text({ value, onChange, onFocus }: { value: string; onChange: (value: string) => void; onFocus: () => void }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // 페이지 로드 시 자동 포커스
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  return (
    <div className="absolute bg-white h-[215px] left-1/2 top-[127px] translate-x-[-50%] w-[362px] px-[20px] py-[10px]" data-name="text">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        placeholder="내용을 입력하세요..."
        className="w-full h-full bg-transparent border-none outline-none resize-none font-['YES_Gothic:Bold',sans-serif] text-[14px] text-[#4c4747] tracking-[-0.24px]"
      />
    </div>
  );
}

function LucideMapPinPlus() {
  return (
    <div className="absolute left-[calc(50%-1px)] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="lucide/map-pin-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/map-pin-plus">
          <path d={svgPaths.p11c79200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Posting({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#b8b3b3] overflow-clip relative rounded-[40px] shrink-0 size-[50px]" 
      data-name="posting"
    >
      <LucideMapPinPlus />
    </button>
  );
}

function LucideFilePlay() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="lucide/file-play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/file-play">
          <path d={svgPaths.pe7a8700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Posting1() {
  return (
    <button className="bg-[#b8b3b3] overflow-clip relative rounded-[40px] shrink-0 size-[50px]" data-name="posting">
      <LucideFilePlay />
    </button>
  );
}

function LucideImages() {
  return (
    <div className="absolute left-1/2 size-[22px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="lucide/images">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_53_206)" id="lucide/images">
          <path d={svgPaths.p12138a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_53_206">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Posting2() {
  return (
    <button className="bg-[#b8b3b3] overflow-clip relative rounded-[40px] shrink-0 size-[50px]" data-name="posting">
      <LucideImages />
    </button>
  );
}

function LucidePlus() {
  return (
    <div className="absolute left-1/2 size-[34px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="lucide/plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lucide/plus">
          <path d={svgPaths.p398b8d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Posting3() {
  return (
    <button className="bg-[#52a2ff] overflow-clip relative rounded-[40px] shrink-0 size-[50px]" data-name="posting">
      <LucidePlus />
    </button>
  );
}

function PlusMoreOn({ onOpenMapModal }: { onOpenMapModal: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 회색 버튼들 - 파란색 버튼 위 14px에서 순차적으로 나타남 */}
      <div className="absolute left-[20px] bottom-[295px] pointer-events-none">
        <div className="relative flex flex-col-reverse gap-[13px] items-start">
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="pointer-events-auto"
                >
                  <Posting2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="pointer-events-auto"
                >
                  <Posting1 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  className="pointer-events-auto"
                >
                  <Posting onClick={onOpenMapModal} />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* 파란색 추가 버튼 - 키보드 위 14px (키보드 217px + 여백 14px = bottom 231px) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute left-[20px] bottom-[231px] z-10"
      >
        <Posting3 />
      </button>
    </>
  );
}

function LucideThumbsUp() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/thumbs-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_56_201)" id="lucide/thumbs-up">
          <path d={svgPaths.p21848000} id="Vector" stroke="var(--stroke-0, #5277FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_56_201">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame11({ value, onChange, onFocus }: { value: string; onChange: (value: string) => void; onFocus: () => void }) {
  const handleReset = () => {
    onChange('');
  };

  // 이미지 박스(Frame6) 높이 62px + 여백 8px + 키보드 위치 231px = bottom-[301px]
  return (
    <div className="absolute bg-[#f1f0f0] box-border content-stretch flex items-center left-[86px] overflow-clip px-[19px] py-[8px] rounded-[14px] bottom-[301px] w-[295px] gap-[8px]">
      <LucideThumbsUp />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        placeholder="추천빵 내용 작성"
        className="flex-1 bg-transparent border-none outline-none font-['YES_Gothic:Regular',sans-serif] text-[10px] text-black tracking-[-0.24px]"
      />
      <button onClick={handleReset} className="shrink-0">
        <LucidePenLine />
      </button>
    </div>
  );
}

function LucidePenLine() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="lucide/pen-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_56_204)" id="lucide/pen-line">
          <path d={svgPaths.pdcbad00} id="Vector" stroke="var(--stroke-0, #615A5A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_56_204">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return <div className="absolute h-0 left-0 top-[711px] w-[402px]" />;
}

export default function CreatePostPage() {
  const navigate = useNavigate();
  const [textValue, setTextValue] = useState('');
  const [recommendText, setRecommendText] = useState('');
  const [currentFocus, setCurrentFocus] = useState<'text' | 'recommend'>('text');
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [breadMapData, setBreadMapData] = useState<{
    placeName: string;
    address: string;
    detailAddress: string;
  } | null>(null);

  const handleKeyPress = (key: string) => {
    if (currentFocus === 'text') {
      setTextValue(prev => prev + key);
    } else {
      setRecommendText(prev => prev + key);
    }
  };

  const handleDelete = () => {
    if (currentFocus === 'text') {
      setTextValue(prev => prev.slice(0, -1));
    } else {
      setRecommendText(prev => prev.slice(0, -1));
    }
  };

  const handleMapRegister = (data: { placeName: string; address: string; detailAddress: string }) => {
    setBreadMapData(data);
    setIsMapModalOpen(false);
  };

  const handleMapEdit = () => {
    setIsMapModalOpen(true);
  };

  const handleMapDelete = () => {
    setBreadMapData(null);
  };

  const handleRegister = () => {
    // 로컬스토리지에서 현재 사용자 정보 가져오기
    const currentUser = getUser();
    
    if (!textValue.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    // 로컬스토리지에서 기존 포스트 가져오기
    const existingPosts = JSON.parse(localStorage.getItem('reviewPosts') || '[]');
    
    // 새 포스트 생성
    const newPost = {
      id: `post-${Date.now()}`,
      username: currentUser?.nickname || '빵러버',
      content: textValue,
      recommendedBreads: recommendText || '추천빵 없음',
      images: [imgGeminiGeneratedImage1N7Zv71N7Zv71N7Z6, imgGeminiGeneratedImage1N7Zv71N7Zv71N7Z6, imgGeminiGeneratedImage1N7Zv71N7Zv71N7Z6, imgGeminiGeneratedImage1N7Zv71N7Zv71N7Z6],
      timestamp: Date.now()
    };

    // 포스트 추가 (최신 포스트가 앞에 오도록)
    const updatedPosts = [newPost, ...existingPosts];
    localStorage.setItem('reviewPosts', JSON.stringify(updatedPosts));

    // 리뷰 페이지로 이동
    navigate('/reviews');
  };

  return (
    <div className="bg-white relative w-full h-[874px]" data-name="MVP1_핫빵_글작성_page">
      <Frame4 />
      <Frame3 onRegister={handleRegister} />
      <IPhoneKeyboard onKeyPress={handleKeyPress} onDelete={handleDelete} />
      <Frame6 />
      <Text value={textValue} onChange={setTextValue} onFocus={() => setCurrentFocus('text')} />
      <PlusMoreOn onOpenMapModal={() => setIsMapModalOpen(true)} />
      <Frame11 value={recommendText} onChange={setRecommendText} onFocus={() => setCurrentFocus('recommend')} />
      
      {/* 빵맵 카드 - Frame11 위 8px 위치 */}
      {breadMapData && (
        <div className="absolute left-[86px] bottom-[350px] w-[295px]">
          <BreadMapCard
            placeName={breadMapData.placeName}
            address={breadMapData.address}
            detailAddress={breadMapData.detailAddress}
            onEdit={handleMapEdit}
            onDelete={handleMapDelete}
          />
        </div>
      )}

      {/* 빵맵 등록 모달 */}
      <BreadMapModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        onRegister={handleMapRegister}
      />
    </div>
  );
}