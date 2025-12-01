import { useState } from 'react';
import imgMapMakerSeoulSouthKoreaStandard from "figma:asset/3e5029b6a98ee9ccb84dbac228c64f18b09c94fe.png";

interface BreadMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: (data: { placeName: string; address: string; detailAddress: string }) => void;
}

export function BreadMapModal({ isOpen, onClose, onRegister }: BreadMapModalProps) {
  const [placeName, setPlaceName] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  if (!isOpen) return null;

  const handleRegister = () => {
    if (!placeName.trim() || !address.trim()) {
      alert('장소명과 주소를 입력해주세요.');
      return;
    }
    onRegister({ placeName, address, detailAddress });
    // 초기화
    setPlaceName('');
    setAddress('');
    setDetailAddress('');
  };

  const handleClose = () => {
    // 초기화
    setPlaceName('');
    setAddress('');
    setDetailAddress('');
    onClose();
  };

  const handleAddressSearch = () => {
    // 주소 찾기 기능 (실제로는 Daum 우편번호 API 등을 사용)
    alert('주소 찾기 기능 (향후 구현)');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 오버레이 배경 */}
      <div 
        className="absolute inset-0 bg-black opacity-30"
        onClick={handleClose}
      />
      
      {/* 모달 컨텐츠 */}
      <div className="relative bg-white rounded-[14px] w-[312px] z-10">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[22px] py-[25px]">
          {/* Frame3 래퍼 */}
          <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full">
            {/* 헤더 - Frame1 */}
            <div className="content-stretch flex gap-[14px] h-[14px] items-center relative shrink-0 w-full">
              <button 
                onClick={handleClose}
                className="block cursor-pointer relative shrink-0 size-[12px]"
              >
                <div className="absolute inset-[-8.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <g id="Frame 367">
                      <path d="M13 1L1 13M1 1L13 13" id="Vector" stroke="var(--stroke-0, #242121)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
              </button>
              <p className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[20px] left-1/2 not-italic text-[16px] text-black text-center text-nowrap top-[-3px] tracking-[-0.24px] translate-x-[-50%] whitespace-pre">빵맵 장소 등록</p>
            </div>

            {/* Frame11 - 입력 폼 + 지도 */}
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              {/* Frame13 - 입력 필드들 */}
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                {/* Frame9 - 3개 입력 필드 */}
                <div className="basis-0 content-stretch flex flex-col gap-[9px] grow h-[102px] items-start min-h-px min-w-px relative shrink-0">
                  {/* Frame5 - 장소명 */}
                  <div className="bg-[#fff8ed] h-[28px] relative rounded-[8px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="box-border content-stretch flex h-[28px] items-center p-[10px] relative w-full">
                        <input
                          type="text"
                          value={placeName}
                          onChange={(e) => setPlaceName(e.target.value)}
                          placeholder="장소명"
                          className="w-full bg-transparent border-none outline-none font-['YES_Gothic:Medium',sans-serif] text-[12px] text-black tracking-[-0.24px] placeholder:text-[#6b6464]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Frame7 - 주소 + 주소찾기 버튼 */}
                  <div className="content-stretch flex gap-[8px] h-[28px] items-start relative shrink-0 w-full">
                    {/* Frame12 - 주소 입력 */}
                    <div className="bg-[#f1f0f0] h-[28px] rounded-[8px] shrink-0 w-[192px]">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="box-border content-stretch flex h-[28px] items-center p-[10px] relative w-full">
                          <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="주소"
                            className="w-full bg-transparent border-none outline-none font-['YES_Gothic:Medium',sans-serif] text-[12px] text-black tracking-[-0.24px] placeholder:text-[#6b6464]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Frame6 - 주소찾기 버튼 */}
                    <button 
                      onClick={handleAddressSearch}
                      className="bg-[#dedcdc] box-border content-stretch flex gap-[10px] h-[28px] items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0 w-[68px]"
                    >
                      <div className="flex flex-col font-['YES_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.24px]">
                        <p className="leading-[20px] whitespace-pre">주소찾기</p>
                      </div>
                    </button>
                  </div>

                  {/* Frame8 - 상세주소 */}
                  <div className="bg-[#f1f0f0] h-[28px] relative rounded-[8px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="box-border content-stretch flex h-[28px] items-center p-[10px] relative w-full">
                        <input
                          type="text"
                          value={detailAddress}
                          onChange={(e) => setDetailAddress(e.target.value)}
                          placeholder="상세주소 입력"
                          className="w-full bg-transparent border-none outline-none font-['YES_Gothic:Medium',sans-serif] text-[12px] text-black tracking-[-0.24px] placeholder:text-[#6b6464]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Group - 지도 */}
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="[grid-area:1_/_1] h-[91px] ml-0 mt-0 overflow-clip relative w-[268px] rounded-[8px]">
                  <div className="absolute left-[-36px] size-[352px] top-[-130px]">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMapMakerSeoulSouthKoreaStandard} />
                  </div>
                </div>
              </div>
            </div>

            {/* Frame - 등록하기 버튼 */}
            <button 
              onClick={handleRegister}
              className="bg-[#f47f30] h-[32px] overflow-clip relative rounded-[30px] shrink-0 w-full"
            >
              <p className="absolute font-['YES_Gothic:Bold',sans-serif] leading-[20px] left-[calc(50%+0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-10px)] tracking-[-0.24px] translate-x-[-50%] whitespace-pre">등록하기</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}