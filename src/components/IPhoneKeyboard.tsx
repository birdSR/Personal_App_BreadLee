import { Delete } from 'lucide-react';

interface IPhoneKeyboardProps {
  onKeyPress: (key: string) => void;
  onDelete: () => void;
}

export function IPhoneKeyboard({ onKeyPress, onDelete }: IPhoneKeyboardProps) {
  const rows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ];

  const KeyButton = ({ char, width = 'w-[36px]' }: { char: string; width?: string }) => (
    <button
      onClick={() => onKeyPress(char)}
      className={`${width} h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] active:bg-gray-200 flex items-center justify-center transition-colors`}
    >
      <span className="text-[22px] font-light">{char}</span>
    </button>
  );

  return (
    <div className="absolute bottom-0 left-0 w-full bg-[#d1d5db] pb-[8px] pt-[5px] px-[3px]">
      {/* 첫 번째 줄 */}
      <div className="flex justify-center gap-[6px] mb-[12px]">
        {rows[0].map((char) => (
          <KeyButton key={char} char={char} />
        ))}
      </div>

      {/* 두 번째 줄 */}
      <div className="flex justify-center gap-[6px] mb-[12px]">
        <div className="w-[18px]" /> {/* 왼쪽 여백 */}
        {rows[1].map((char) => (
          <KeyButton key={char} char={char} />
        ))}
        <div className="w-[18px]" /> {/* 오른쪽 여백 */}
      </div>

      {/* 세 번째 줄 */}
      <div className="flex justify-center gap-[6px] mb-[12px]">
        {/* Shift 키 */}
        <button className="w-[42px] h-[42px] bg-[#adb1b8] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] active:bg-gray-400 flex items-center justify-center transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4L16 12H4L10 4Z" fill="black" />
          </svg>
        </button>

        {rows[2].map((char) => (
          <KeyButton key={char} char={char} />
        ))}

        {/* Delete 키 */}
        <button
          onClick={onDelete}
          className="w-[42px] h-[42px] bg-[#adb1b8] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] active:bg-gray-400 flex items-center justify-center transition-colors"
        >
          <Delete size={18} color="black" />
        </button>
      </div>

      {/* 네 번째 줄 */}
      <div className="flex justify-center gap-[6px]">
        {/* 123 키 */}
        <button className="w-[42px] h-[42px] bg-[#adb1b8] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] active:bg-gray-400 flex items-center justify-center transition-colors">
          <span className="text-[16px]">123</span>
        </button>

        {/* 이모지 키 */}
        <button className="w-[42px] h-[42px] bg-[#adb1b8] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] active:bg-gray-400 flex items-center justify-center transition-colors">
          <span className="text-[20px]">😊</span>
        </button>

        {/* Space bar */}
        <button
          onClick={() => onKeyPress(' ')}
          className="flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] active:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <span className="text-[16px]">space</span>
        </button>

        {/* Return 키 */}
        <button
          onClick={() => onKeyPress('\n')}
          className="w-[84px] h-[42px] bg-[#1c7bf3] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] active:bg-blue-600 flex items-center justify-center transition-colors"
        >
          <span className="text-[16px] text-white">return</span>
        </button>
      </div>
    </div>
  );
}
