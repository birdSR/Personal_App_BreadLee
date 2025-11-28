import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setOnboardingData } from '../utils/localStorage';
import svgPaths from "../imports/svg-0p2uqjmtp3";

const questions = [
  {
    id: 'breadFrequency',
    title: '일주일에 빵을 얼마나 먹나요?',
    options: ['1번', '2번', '3번', '4번 이상'],
    multiple: false,
  },
  {
    id: 'preferredTypes',
    title: '어느 빵 종류를 선호하시나요?',
    options: ['식빵류', '바게트류', '소프트류', '하드류', '패스츄리류', '기타'],
    multiple: true,
  },
  {
    id: 'activityRange',
    title: '평소 활동 반경은 어떻게 되나요?',
    options: ['5km 이내', '5~20km', '20~50km', '50~100km', '100km 이상'],
    multiple: false,
  },
  {
    id: 'favoriteBrands',
    title: '좋아하는 빵 브랜드를 골라주세요',
    options: ['뚜레쥬르', '파리바게뜨', '성심당', '던킨', '로쏘', '기타'],
    multiple: true,
  },
];

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({
    breadFrequency: '',
    preferredTypes: [],
    activityRange: '',
    favoriteBrands: [],
  });

  const question = questions[currentQuestion];
  const isMultiple = question.multiple;
  const currentAnswer = answers[question.id];

  const handleSelect = (option: string) => {
    if (isMultiple) {
      const current = currentAnswer as string[];
      if (current.includes(option)) {
        setAnswers({
          ...answers,
          [question.id]: current.filter((item) => item !== option),
        });
      } else {
        setAnswers({
          ...answers,
          [question.id]: [...current, option],
        });
      }
    } else {
      setAnswers({
        ...answers,
        [question.id]: option,
      });
    }
  };

  const isSelected = (option: string): boolean => {
    if (isMultiple) {
      return (currentAnswer as string[]).includes(option);
    }
    return currentAnswer === option;
  };

  const canProceed = (): boolean => {
    if (isMultiple) {
      return (currentAnswer as string[]).length > 0;
    }
    return !!currentAnswer;
  };

  const handleNext = () => {
    if (!canProceed()) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 온보딩 완료
      setOnboardingData({
        breadFrequency: answers.breadFrequency as string,
        preferredTypes: answers.preferredTypes as string[],
        activityRange: answers.activityRange as string,
        favoriteBrands: answers.favoriteBrands as string[],
      });
      navigate('/home');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getNumberCircle = (num: number, isActive: boolean) => {
    return (
      <div
        className={`w-[32px] h-[32px] rounded-full flex items-center justify-center font-['YES_Gothic:Bold',sans-serif] text-[14px] ${
          isActive ? 'bg-[#5277ff] text-white' : 'bg-[#f1f0f0] text-[#7f7777]'
        }`}
      >
        {num}
      </div>
    );
  };

  return (
    <div className="bg-white relative size-full px-[20px]" data-name="온보딩_사용자리서치">
      {/* Header */}
      <div className="absolute h-[44px] left-[20px] right-[20px] top-0 flex items-center justify-center">
        <p className="font-['YES_Gothic:Bold',sans-serif] text-[16px] text-black">브레드리</p>
      </div>

      {/* Progress Numbers */}
      <div className="absolute top-[80px] left-[20px] right-[20px] flex justify-center gap-[12px] px-[30px]">
        {questions.map((_, index) => (
          <div key={index} className="flex items-center">
            {getNumberCircle(index + 1, index <= currentQuestion)}
            {index < questions.length - 1 && (
              <div className={`w-[20px] h-[2px] ${index < currentQuestion ? 'bg-[#5277ff]' : 'bg-[#f1f0f0]'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Question Title */}
      <div className="absolute top-[160px] left-[40px] right-[40px]">
        <h2 className="font-['YES_Gothic:Bold',sans-serif] text-[20px] text-[#4c4747] text-center">
          {question.title}
        </h2>
        {isMultiple && (
          <p className="mt-[8px] font-['YES_Gothic:Regular',sans-serif] text-[12px] text-[#7f7777] text-center">
            (복수 선택 가능)
          </p>
        )}
      </div>

      {/* Options */}
      <div className="absolute top-[250px] left-[40px] right-[40px] flex flex-col gap-[12px]">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className={`w-full py-[16px] rounded-[14px] font-['YES_Gothic:Regular',sans-serif] text-[16px] transition-all ${
              isSelected(option)
                ? 'bg-[#5277ff] text-white'
                : 'bg-[#f1f0f0] text-[#6b6464]'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-[60px] left-[40px] right-[40px] flex gap-[12px]">
        {currentQuestion > 0 && (
          <button
            onClick={handleBack}
            className="flex-1 py-[16px] rounded-[14px] bg-[#f1f0f0] text-[#6b6464] font-['YES_Gothic:Regular',sans-serif] text-[16px]"
          >
            이전
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={!canProceed()}
          className={`flex-1 py-[16px] rounded-[14px] font-['YES_Gothic:Bold',sans-serif] text-[16px] transition-all ${
            canProceed()
              ? 'bg-[#5277ff] text-white hover:bg-[#4166ee]'
              : 'bg-[#e0e0e0] text-[#9e9e9e] cursor-not-allowed'
          }`}
        >
          {currentQuestion === questions.length - 1 ? '완료' : '다음'}
        </button>
      </div>
    </div>
  );
}
