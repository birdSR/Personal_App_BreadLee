import { useState } from 'react';
import svgPaths from "./svg-sckhf0xc8e";

function LucideVote() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/vote">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/vote">
          <path d={svgPaths.p26371e00} id="Vector" stroke="var(--stroke-0, #00BB9B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[210px]">
      <LucideVote />
      <p className="font-['YES_Gothic:Bold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#242121] text-[14px] text-nowrap tracking-[-0.154px] whitespace-pre">이번주 핫-빵 투표를 해봅시다.</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[332px]" data-name="title">
      <Frame5 />
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#00bb3d] text-[10px] text-nowrap tracking-[-0.11px] whitespace-pre">투표 10p</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-0 relative shrink-0">
      <Title />
    </div>
  );
}

interface VoteItemProps {
  selected: boolean;
  onSelect: () => void;
  name: string;
  shop: string;
  percentage?: number;
  showResult: boolean;
}

function VoteItem({ selected, onSelect, name, shop, percentage, showResult }: VoteItemProps) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      {!showResult ? (
        <div 
          onClick={onSelect}
          className={`${selected ? 'bg-[#5269ff]' : 'bg-[#f1f0f0]'} rounded-[8px] shrink-0 size-[24px] cursor-pointer flex items-center justify-center transition-colors`}
        >
          {selected && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 4L6 11L3 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ) : (
        <div className="bg-[#f1f0f0] rounded-[8px] shrink-0 size-[24px] flex items-center justify-center">
          <p className="font-['YES_Gothic:Bold',sans-serif] text-[10px] text-[#5269ff]">{percentage}%</p>
        </div>
      )}
      <div className="content-stretch flex gap-[5px] items-center not-italic relative shrink-0 text-nowrap flex-1">
        <p className="font-['YES_Gothic:Regular',sans-serif] leading-[1.7] relative shrink-0 text-[12px] text-black tracking-[-0.132px] whitespace-pre">{name}</p>
        <div className="flex flex-col font-['YES_Gothic:Medium',sans-serif] justify-end leading-[0] relative shrink-0 text-[#f47f30] text-[10px] tracking-[-0.11px]">
          <p className="leading-[1.7] text-nowrap whitespace-pre">{shop}</p>
        </div>
      </div>
      {showResult && percentage !== undefined && (
        <div className="w-full absolute left-0 top-0 h-full -z-10 rounded-[8px] overflow-hidden">
          <div 
            className="h-full bg-[#e8ecff] transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      )}
    </div>
  );
}

export default function Component() {
  const [selectedVotes, setSelectedVotes] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [voteCounts, setVoteCounts] = useState<number[]>([0, 0, 0, 0]);

  const voteItems = [
    { id: 0, name: '요거트 크림 소금빵', shop: '올리브 아파트먼트' },
    { id: 1, name: '앙버터 소금빵', shop: '죠스' },
    { id: 2, name: '무화과 얼그레이 케이크', shop: '온드리 케익마켓' },
    { id: 3, name: '흑임자 카스테라', shop: '옹글당' },
  ];

  const handleVoteToggle = (id: number) => {
    if (showResults) return;
    
    setSelectedVotes(prev => 
      prev.includes(id) 
        ? prev.filter(v => v !== id)
        : [...prev, id]
    );
  };

  const handleVoteComplete = () => {
    if (selectedVotes.length === 0) return;

    // 기존 투표수에 선택된 항목들에 1씩 추가
    const newVoteCounts = [...voteCounts];
    selectedVotes.forEach(id => {
      newVoteCounts[id] += 1;
    });
    setVoteCounts(newVoteCounts);
    setShowResults(true);
  };

  const totalVotes = voteCounts.reduce((a, b) => a + b, 0);
  const percentages = voteCounts.map(count => 
    totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0
  );

  return (
    <div className="bg-[#f1f0f0] box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-0 pt-[14px] px-0 relative rounded-[14px] size-full" data-name="1">
      <Frame4 />
      <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-full">
        <div className="bg-white relative rounded-bl-[14px] rounded-br-[14px] shrink-0 w-full" data-name="txt">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col gap-[14px] items-start pb-[14px] pt-[10px] px-[14px] relative w-full">
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                {voteItems.map((item) => (
                  <div key={item.id} className="relative w-full">
                    <VoteItem
                      selected={selectedVotes.includes(item.id)}
                      onSelect={() => handleVoteToggle(item.id)}
                      name={item.name}
                      shop={item.shop}
                      percentage={percentages[item.id]}
                      showResult={showResults}
                    />
                  </div>
                ))}
              </div>
              
              <div className="content-stretch flex items-center justify-between overflow-clip relative rounded-[8px] shrink-0 w-full">
                <button
                  onClick={handleVoteComplete}
                  disabled={selectedVotes.length === 0 || showResults}
                  className={`${
                    showResults 
                      ? 'bg-[#a0a0a0]' 
                      : selectedVotes.length > 0 
                        ? 'bg-[#5269ff] cursor-pointer' 
                        : 'bg-[#d0d0d0]'
                  } content-stretch flex gap-[10px] h-[28px] items-center justify-center relative rounded-[8px] shrink-0 w-[177px] transition-colors`}
                >
                  <div className="flex flex-col font-['YES_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[-0.132px]">
                    <p className="leading-[1.7] whitespace-pre">
                      {showResults ? '투표 완료됨' : '투표 완료'}
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#f1f0f0] border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
        </div>
      </div>
    </div>
  );
}
