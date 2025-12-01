import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getUser } from '../utils/localStorage';

interface Comment {
  id: string;
  text: string;
  author: string;
  timestamp: string;
}

interface CommentSectionProps {
  reviewId: string;
}

export default function CommentSection({ reviewId }: CommentSectionProps) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [currentUser, setCurrentUser] = useState('사용자');

  // Load current user nickname from localStorage
  useEffect(() => {
    const user = getUser();
    if (user && user.nickname) {
      setCurrentUser(user.nickname);
    }
  }, []);

  // Load comments from localStorage
  useEffect(() => {
    const storedComments = localStorage.getItem(`review_comments_${reviewId}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [reviewId]);

  // Save comments to localStorage
  const saveComments = (updatedComments: Comment[]) => {
    localStorage.setItem(`review_comments_${reviewId}`, JSON.stringify(updatedComments));
    setComments(updatedComments);
  };

  const handleAddComment = () => {
    if (newComment.trim() === '') return;

    const comment: Comment = {
      id: Date.now().toString(),
      text: newComment,
      author: currentUser,
      timestamp: new Date().toLocaleString('ko-KR', { 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };

    const updatedComments = [...comments, comment];
    saveComments(updatedComments);
    setNewComment('');
  };

  const handleDeleteComment = (commentId: string) => {
    const updatedComments = comments.filter(c => c.id !== commentId);
    saveComments(updatedComments);
  };

  return (
    <div className="bg-white w-full">
      <div className="px-[14px] pb-[14px]">
        {/* Toggle Comments Button */}
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-[6px] py-[8px] w-full"
        >
          <MessageCircle className="size-[14px] text-[#7f7777]" />
          <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#7f7777]">
            댓글 {comments.length}개
          </p>
        </button>

        {/* Comments List */}
        {showComments && (
          <div className="flex flex-col gap-[10px] mt-[8px]">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-[#f9f9f9] rounded-[8px] p-[10px]">
                <div className="flex items-center justify-between mb-[6px]">
                  <div className="flex items-center gap-[6px]">
                    <p className="font-['YES_Gothic:Bold',sans-serif] text-[11px] text-[#383434]">
                      {comment.author}
                    </p>
                    <p className="font-['YES_Gothic:Regular',sans-serif] text-[10px] text-[#a0a0a0]">
                      {comment.timestamp}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteComment(comment.id)}
                    className="font-['YES_Gothic:Regular',sans-serif] text-[10px] text-[#f47f30]"
                  >
                    삭제
                  </button>
                </div>
                <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#383434] leading-[1.4]">
                  {comment.text}
                </p>
              </div>
            ))}

            {/* Add Comment Input */}
            <div className="flex gap-[8px] mt-[6px]">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                placeholder="댓글을 입력하세요..."
                className="flex-1 bg-[#f9f9f9] border border-[#dedcdc] rounded-[8px] px-[12px] py-[8px] font-['YES_Gothic:Regular',sans-serif] text-[12px] outline-none focus:border-[#f47f30]"
              />
              <button
                onClick={handleAddComment}
                disabled={newComment.trim() === ''}
                className={`${
                  newComment.trim() === '' ? 'bg-[#d0d0d0]' : 'bg-[#f47f30]'
                } text-white rounded-[8px] px-[16px] font-['YES_Gothic:Bold',sans-serif] text-[12px] transition-colors`}
              >
                등록
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}