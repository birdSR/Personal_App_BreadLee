import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, getUser } from '../utils/localStorage';
import svgPaths from "../imports/svg-bzpj1f09i9";
import imgImage42 from "figma:asset/ce696693be970961a925a316bdd20ea35eed2fa6.png";
import imgImage43 from "figma:asset/624a97f5c48b8f1618dd10eceb9a42943eb8deda.png";
import imgInstagramIcon from "figma:asset/c188e1abf03f5ab0bd025444d5950a80971bd7a6.png";
import imgLogotype from "figma:asset/0f7a3b5cf8743adcc898a6ac9ef81941e3d3f993.png";

function Battery() {
  return (
    <div className="absolute inset-[39.39%_11.82%_34.85%_81.69%]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 12">
        <g id="Battery">
          <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="22.584" x="0.5" y="0.5" />
          <path d={svgPaths.p11aebf00} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
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
          <path d={svgPaths.p2958b580} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_25.07%_35.61%_70.4%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 11">
          <path d={svgPaths.p21a1df00} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

function SocialLoginButtons() {
  const handleSocialLogin = (provider: string) => {
    alert(`${provider} 로그인은 추후 연동 예정입니다.`);
  };

  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <button onClick={() => handleSocialLogin('카카오')} className="relative shrink-0 size-[64px]" data-name="image 42">
        <img alt="카카오 로그인" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage42} />
      </button>
      <button onClick={() => handleSocialLogin('네이버')} className="relative shrink-0 size-[64px]" data-name="image 43">
        <img alt="네이버 로그인" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage43} />
      </button>
      <button onClick={() => handleSocialLogin('구글')} className="pointer-events-auto relative rounded-[50px] shrink-0 size-[64px]" data-name="instagram icon">
        <img alt="구글 로그인" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[50px] size-full" src={imgInstagramIcon} />
        <div aria-hidden="true" className="absolute border border-[#dedede] border-solid inset-0 rounded-[50px] pointer-events-none" />
      </button>
    </div>
  );
}

function SocialLoginSection() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full">
      <p className="font-['YES_Gothic:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#7f7777] text-[12px] text-center tracking-[-0.24px] w-full">SNS 계정으로 간편로그인하기</p>
      <SocialLoginButtons />
    </div>
  );
}

function Logotype() {
  return (
    <div className="aspect-[889.95/300.61] relative shrink-0 w-full" data-name="Logotype">
      <img alt="Breadly Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogotype} />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-[248px]">
      <div className="font-['YES_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#4c4747] text-[20px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
        <p className="mb-0">즐거운 빵 생활</p>
        <p>브레드리와 함께</p>
      </div>
      <Logotype />
    </div>
  );
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!id || !password) {
      setError('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    const user = getUser();
    if (!user) {
      setError('등록된 계정이 없습니다. 회원가입을 해주세요.');
      return;
    }

    const success = login(id, password);
    if (success) {
      navigate('/home');
    } else {
      setError('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  const handleSignup = () => {
    navigate('/signup/id');
  };

  const handleHelp = () => {
    alert('고객센터: help@breadly.com');
  };

  return (
    <div className="bg-white relative size-full" data-name="로그인">
      <TopIcon />
      
      {/* 하단 섹션 */}
      <div className="absolute content-stretch flex flex-col gap-[42px] items-center left-[65px] top-[572px] w-[272px]">
        <SocialLoginSection />
        
        <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[170px]">
          <button 
            onClick={handleHelp}
            className="h-[35px] relative rounded-[50px] shrink-0 w-full"
          >
            <div className="h-[35px] overflow-clip relative rounded-[inherit] w-full">
              <p className="absolute font-['YES_Gothic:Regular',sans-serif] leading-[28px] left-[calc(50%+0.5px)] not-italic text-[#7f7777] text-[12px] text-center text-nowrap top-[calc(50%-13.5px)] tracking-[-0.24px] translate-x-[-50%] whitespace-pre">가입/로그인이 안되시나요?</p>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#dedcdc] border-solid inset-0 pointer-events-none rounded-[50px]" />
          </button>
          
          <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-0 relative shrink-0">
            <button onClick={handleSignup} className="h-[24px] relative shrink-0 w-[45px]">
              <div aria-hidden="true" className="absolute border-[#928b8b] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <p className="absolute font-['YES_Gothic:Regular',sans-serif] leading-[28px] left-[22.5px] not-italic text-[#7f7777] text-[12px] text-center text-nowrap top-0 tracking-[-0.24px] translate-x-[-50%] whitespace-pre">회원가입</p>
            </button>
          </div>
        </div>
      </div>

      {/* 로그인 폼 */}
      <div className="absolute content-stretch flex flex-col gap-[29px] items-center left-0 top-[120px] w-[402px]">
        <HeaderSection />
        
        <div className="relative shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col gap-[14px] items-start px-[50px] py-[28px] relative w-full">
              {/* ID Input */}
              <div className="bg-[#f1f0f0] relative rounded-[14px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <input
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => {
                      setId(e.target.value);
                      setError('');
                    }}
                    className="box-border w-full bg-transparent outline-none px-[14px] py-[8px] font-['YES_Gothic:Regular',sans-serif] leading-[28px] not-italic text-[#6b6464] text-[14px] tracking-[-0.24px]"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="bg-[#f1f0f0] relative rounded-[14px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleLogin();
                      }
                    }}
                    className="box-border w-full bg-transparent outline-none px-[14px] py-[8px] font-['YES_Gothic:Regular',sans-serif] leading-[28px] not-italic text-[#6b6464] text-[14px] tracking-[-0.24px]"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <p className="font-['YES_Gothic:Regular',sans-serif] text-[12px] text-red-500 text-center w-full">{error}</p>
              )}

              {/* Login Button */}
              <button 
                onClick={handleLogin}
                className="bg-[#5277ff] relative rounded-[14px] shrink-0 w-full"
              >
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[13px] relative w-full">
                    <div className="flex flex-col font-['YES_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.24px]">
                      <p className="leading-[28px] whitespace-pre">로그인</p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
