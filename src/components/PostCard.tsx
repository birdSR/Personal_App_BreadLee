import { useRef, useState } from 'react';
import svgPaths from "../imports/svg-vqi0o3umy5";
import imgFrame275 from "figma:asset/55292a243c147c2beae549eb98fa149d313dd5d3.png";
import { InteractiveIconGroup } from './InteractiveIcons';
import CommentSection from './CommentSection';
import { getUser } from '../utils/localStorage';

interface PostCardProps {
  post: {
    id: string;
    username: string;
    content: string;
    recommendedBreads: string;
    images: string[];
    timestamp: number;
  };
  onDelete?: (postId: string) => void;
}

function Frame1() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[30px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
        <img alt="" className="absolute left-[-9.19%] max-w-none size-[113.24%] top-[-8.13%]" src={imgFrame275} />
      </div>
    </div>
  );
}

function FlowBtn() {
  return (
    <div className="bg-white h-[18px] relative rounded-[20px] shrink-0 w-[45px]" data-name="flow-btn">
      <div className="h-[18px] overflow-clip relative rounded-[inherit] w-[45px]">
        <div className="absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-12.5px)] not-italic text-[#00bb3d] text-[10px] text-nowrap top-[calc(50%+0.5px)] tracking-[-0.11px] translate-y-[-50%]">
          <p className="leading-[1.7] whitespace-pre">팔로우</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00bb3d] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame8({ username }: { username: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[210px]">
      <Frame1 />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[12px] text-nowrap tracking-[-0.132px] whitespace-pre">{username}</p>
      <FlowBtn />
    </div>
  );
}

function Title({ username, isOwnPost, onDelete }: { username: string; isOwnPost: boolean; onDelete?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame8 username={username} />
      <InteractiveIconGroup isOwnPost={isOwnPost} onDelete={onDelete} />
    </div>
  );
}

function Frame7({ username, isOwnPost, onDelete }: { username: string; isOwnPost: boolean; onDelete?: () => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title username={username} isOwnPost={isOwnPost} onDelete={onDelete} />
    </div>
  );
}

function Frame4({ content }: { content: string }) {
  const lines = content.split('\n');
  
  return (
    <div className="relative shrink-0 w-[294px]" style={{ minHeight: '40px' }}>
      <div className="font-['YES_Gothic:Regular',sans-serif] leading-[normal] not-italic text-[#383434] text-[12px] tracking-[-0.24px] whitespace-pre-wrap">
        {lines.map((line, index) => (
          <p key={index} className={index < lines.length - 1 ? "mb-0" : ""}>{line || '\u00A0'}</p>
        ))}
      </div>
    </div>
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

function Frame6({ recommendedBreads }: { recommendedBreads: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <LucideThumbsUp />
      <p className="font-['YES_Gothic:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#383434] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">{recommendedBreads}</p>
    </div>
  );
}

function Frame10({ recommendedBreads }: { recommendedBreads: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
      <Frame6 recommendedBreads={recommendedBreads} />
    </div>
  );
}

function Frame9({ recommendedBreads }: { recommendedBreads: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame10 recommendedBreads={recommendedBreads} />
    </div>
  );
}

function Txt({ content, recommendedBreads }: { content: string; recommendedBreads: string }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="txt">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
          <Frame4 content={content} />
          <Frame9 recommendedBreads={recommendedBreads} />
        </div>
      </div>
    </div>
  );
}

function Frame2({ image }: { image: string }) {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[150px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={image} />
    </div>
  );
}

function Frame12({ images }: { images: string[] }) {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[14px] py-0 relative shrink-0">
      {images.map((image, i) => (
        <Frame2 key={i} image={image} />
      ))}
    </div>
  );
}

function Frame5({ images }: { images: string[] }) {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[14px] py-0 relative shrink-0 w-[346px]">
      <Frame12 images={images} />
    </div>
  );
}

function Img({ images }: { images: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-white relative shrink-0 w-full" data-name="img">
      <div className="flex flex-row items-center size-full">
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`box-border content-stretch flex gap-[10px] items-center pb-[20px] pt-0 pl-[14px] pr-[14px] relative w-full overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x'
          }}
        >
          <Frame5 images={images} />
        </div>
      </div>
    </div>
  );
}

function Frame11({ content, recommendedBreads, images, postId }: { content: string; recommendedBreads: string; images: string[]; postId: string }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Txt content={content} recommendedBreads={recommendedBreads} />
      {images.length > 0 && <Img images={images} />}
      <CommentSection reviewId={postId} />
    </div>
  );
}

function Frame3({ content, recommendedBreads, images, postId }: { content: string; recommendedBreads: string; images: string[]; postId: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f1f0f0] border-solid inset-0 pointer-events-none" />
      <Frame11 content={content} recommendedBreads={recommendedBreads} images={images} postId={postId} />
    </div>
  );
}

export default function PostCard({ post, onDelete }: PostCardProps) {
  const user = getUser();
  const isOwnPost = user?.nickname === post.username;

  return (
    <div className="bg-[#f1f0f0] relative rounded-[14px] w-full">
      <div className="box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[inherit] w-full">
        <Frame7 username={post.username} isOwnPost={isOwnPost} onDelete={() => onDelete && onDelete(post.id)} />
        <Frame3 content={post.content} recommendedBreads={post.recommendedBreads} images={post.images} postId={post.id} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}