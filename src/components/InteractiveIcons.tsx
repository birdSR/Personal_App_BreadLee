import { useState } from 'react';
import svgPathsInactive from "../imports/svg-il30bxelql";
import svgPathsActive from "../imports/svg-4a4gwn6w91";
import LucideEllipsisVertical from "../imports/LucideEllipsisVertical";
import { motion, AnimatePresence } from 'motion/react';

export function BookmarkIcon() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button 
      onClick={() => setIsActive(!isActive)}
      className="relative shrink-0 size-[14px]" 
      data-name="lucide/bookmark"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="lucide/bookmark">
          {isActive ? (
            <path d={svgPathsActive.p21315100} fill="#5277FF" id="Vector" />
          ) : (
            <path d={svgPathsInactive.p21315100} id="Vector" stroke="#383434" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </g>
      </svg>
    </button>
  );
}

export function HeartIcon() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button 
      onClick={() => setIsActive(!isActive)}
      className="relative shrink-0 size-[14px]" 
      data-name="lucide/heart"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="lucide/heart">
          {isActive ? (
            <path d={svgPathsActive.p29a82fe0} fill="#F97B62" id="Vector" />
          ) : (
            <path d={svgPathsInactive.p29a82fe0} id="Vector" stroke="#383434" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </g>
      </svg>
    </button>
  );
}

export function StarIcon() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button 
      onClick={() => setIsActive(!isActive)}
      className="relative shrink-0 size-[16px]" 
      data-name="lucide/star"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lucide/star">
          {isActive ? (
            <path d={svgPathsActive.p21912200} fill="#F47F30" id="Vector" />
          ) : (
            <path d={svgPathsInactive.p21068900} id="Vector" stroke="#242121" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </g>
      </svg>
    </button>
  );
}

export function InteractiveIconGroup({ isOwnPost, onDelete }: { isOwnPost?: boolean; onDelete?: () => void }) {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <BookmarkIcon />
      <HeartIcon />
      <StarIcon />
      {isOwnPost && <MoreOptionsIcon onDelete={onDelete} />}
    </div>
  );
}

export function MoreOptionsIcon({ onDelete }: { onDelete?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
    setIsOpen(false);
  };

  return (
    <div className="relative shrink-0 size-[12px]" data-name="lucide/ellipsis-vertical">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute left-0 top-0 size-full"
      >
        <LucideEllipsisVertical />
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 배경 오버레이 - 클릭하면 닫힘 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[100]"
            />
            {/* 삭제 버튼 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-[20px] z-[101] bg-white rounded-[8px] shadow-lg overflow-hidden"
              style={{ minWidth: '80px' }}
            >
              <button
                onClick={handleDelete}
                className="w-full px-[14px] py-[8px] text-left font-['YES_Gothic:Medium',sans-serif] text-[12px] text-[#f47f30] hover:bg-[#f1f0f0] transition-colors"
              >
                삭제
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}