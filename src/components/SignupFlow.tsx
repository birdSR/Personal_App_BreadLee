import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { setSignupProgress, getSignupProgress, completeSignup } from '../utils/localStorage';
import svgPaths from "../imports/svg-pc1mh63hx3";

const steps = ['id', 'password', 'name', 'age', 'gender'] as const;
type Step = typeof steps[number];

function Battery() {
  return (
    <div className="absolute inset-[39.39%_11.82%_34.85%_81.69%]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 12">
        <g id="Battery">
          <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="22.584" x="0.5" y="0.5" />
          <path d={svgPaths.pbbec300} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
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
    <div className="absolute h-[44px] left-0 top-0 w-[402px]" data-name="top-icon">
      <Battery />
      <div className="absolute inset-[39.39%_19.64%_35.61%_76.27%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
          <path d={svgPaths.p297d2880} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_25.07%_35.61%_70.4%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 11">
          <path d={svgPaths.p2191df00} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

export default function SignupFlow() {
  const navigate = useNavigate();
  const { step } = useParams<{ step: Step }>();
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // 현재 단계의 기존 값 불러오기
    const progress = getSignupProgress();
    if (step && progress[step as keyof typeof progress]) {
      setValue(String(progress[step as keyof typeof progress]));
    } else {
      setValue('');
    }
  }, [step]);

  const getEmoji = () => {
    switch (step) {
      case 'id': return '🆔';
      case 'password': return '🔒';
      case 'name': return '💬';
      case 'age': return '🎂';
      case 'gender': return '👤';
      default: return '💬';
    }
  };

  const getDescription = () => {
    switch (step) {
      case 'id': return '아이디를 등록해주세요.';
      case 'password': return '비밀번호를 등록해주세요.';
      case 'name': return '이름을 등록해주세요.';
      case 'age': return '나이를 등록해주세요.';
      case 'gender': return '성별을 선택해주세요.';
      default: return '';
    }
  };

  const getLabel = () => {
    switch (step) {
      case 'id': return '아이디';
      case 'password': return '비밀번호';
      case 'name': return '이름';
      case 'age': return '나이';
      case 'gender': return '성별';
      default: return '';
    }
  };

  const validateInput = (): boolean => {
    if (!value && step !== 'gender') {
      setError('필수 입력 항목입니다.');
      return false;
    }

    if (step === 'id' && value.length < 4) {
      setError('아이디는 4자 이상이어야 합니다.');
      return false;
    }

    if (step === 'password' && value.length < 6) {
      setError('비밀번호는 6자 이상이어야 합니다.');
      return false;
    }

    if (step === 'age') {
      const age = parseInt(value);
      if (isNaN(age) || age < 1 || age > 120) {
        setError('올바른 나이를 입력해주세요.');
        return false;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (!validateInput()) return;

    // 현재 값 저장
    const data: any = {};
    if (step === 'age') {
      data[step] = parseInt(value);
    } else {
      data[step as string] = value;
    }
    setSignupProgress(data);

    // 다음 단계로 이동
    const currentIndex = steps.indexOf(step as Step);
    if (currentIndex < steps.length - 1) {
      navigate(`/signup/${steps[currentIndex + 1]}`);
    } else {
      // 마지막 단계 - 회원가입 완료
      completeSignup();
      navigate('/onboarding');
    }
  };

  const handleBack = () => {
    const currentIndex = steps.indexOf(step as Step);
    if (currentIndex > 0) {
      navigate(`/signup/${steps[currentIndex - 1]}`);
    } else {
      navigate('/login');
    }
  };

  const handleGenderSelect = (gender: string) => {
    setValue(gender);
    setError('');
  };

  return (
    <div className="bg-white relative size-full px-[20px]" data-name="회원가입">
      <TopIcon />
      
      {/* Title and Description Section */}
      <div className="absolute box-border content-stretch flex flex-col gap-[60px] items-start left-[20px] right-[20px] py-0 top-[121px]">
        <div className="content-stretch flex flex-col gap-[20px] items-start leading-[20px] not-italic relative shrink-0 tracking-[-0.24px] w-[164px]">
          <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0 text-[30px] text-black w-full">{getEmoji()}</p>
          <p className="font-['YES_Gothic:Medium',sans-serif] relative shrink-0 text-[#383434] text-[18px] w-full">{getDescription()}</p>
        </div>

        {/* Input Section */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          {/* Label */}
          <div className="content-stretch flex gap-[10px] h-[21px] items-center justify-center relative shrink-0 w-full">
            <p className="basis-0 font-['YES_Gothic:Bold',sans-serif] grow h-[23px] leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#383434] text-[28px] tracking-[-0.24px]">{getLabel()}</p>
          </div>

          {/* Input Field */}
          <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-0 py-[10px] relative shrink-0 w-full">
            {step === 'gender' ? (
              <div className="w-full flex flex-col gap-[12px]">
                <button
                  onClick={() => handleGenderSelect('남성')}
                  className={`bg-[#f1f0f0] box-border content-stretch flex gap-[10px] h-[58px] items-center justify-center px-[14px] py-0 relative rounded-[14px] shrink-0 w-full font-['YES_Gothic:Regular',sans-serif] text-[18px] transition-all ${
                    value === '남성' ? 'bg-[#5277ff] text-white' : 'text-[#615a5a]'
                  }`}
                >
                  남성
                </button>
                <button
                  onClick={() => handleGenderSelect('여성')}
                  className={`bg-[#f1f0f0] box-border content-stretch flex gap-[10px] h-[58px] items-center justify-center px-[14px] py-0 relative rounded-[14px] shrink-0 w-full font-['YES_Gothic:Regular',sans-serif] text-[18px] transition-all ${
                    value === '여성' ? 'bg-[#5277ff] text-white' : 'text-[#615a5a]'
                  }`}
                >
                  여성
                </button>
                <button
                  onClick={() => handleGenderSelect('기타')}
                  className={`bg-[#f1f0f0] box-border content-stretch flex gap-[10px] h-[58px] items-center justify-center px-[14px] py-0 relative rounded-[14px] shrink-0 w-full font-['YES_Gothic:Regular',sans-serif] text-[18px] transition-all ${
                    value === '기타' ? 'bg-[#5277ff] text-white' : 'text-[#615a5a]'
                  }`}
                >
                  선택 안함
                </button>
              </div>
            ) : (
              <input
                type={step === 'password' ? 'password' : step === 'age' ? 'number' : 'text'}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  setError('');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleNext();
                  }
                }}
                className="bg-[#f1f0f0] box-border content-stretch flex gap-[10px] h-[58px] items-center px-[14px] py-0 relative rounded-[14px] shrink-0 w-full font-['YES_Gothic:Regular',sans-serif] text-[18px] text-[#615a5a] outline-none focus:ring-2 focus:ring-[#5277ff]"
                autoFocus
              />
            )}
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p className="absolute left-[20px] right-[20px] top-[420px] font-['YES_Gothic:Regular',sans-serif] text-[14px] text-red-500">
          {error}
        </p>
      )}

      {/* Next Button */}
      <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[20px] right-[20px] overflow-clip py-[10px] top-[743px]">
        <button 
          onClick={handleNext}
          className="bg-[#5277ff] h-[54px] overflow-clip relative rounded-[14px] shrink-0 w-full hover:bg-[#4166ee] transition-colors"
        >
          <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[20px] left-[calc(50%-25px)] not-italic text-[18px] text-nowrap text-white top-[calc(50%-10px)] tracking-[1px] whitespace-pre">NEXT</p>
        </button>
      </div>
    </div>
  );
}
