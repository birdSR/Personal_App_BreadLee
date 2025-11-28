import { useRef, useEffect } from 'react';

interface SplashVideoProps {
  onVideoEnd?: () => void;
}

export default function SplashVideo({ onVideoEnd }: SplashVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log('SplashVideo mounted');
    
    // 비디오가 로드되지 않을 경우를 대비해 2초 후 자동으로 다음 화면으로
    const fallbackTimer = setTimeout(() => {
      console.log('Video fallback triggered');
      if (onVideoEnd) onVideoEnd();
    }, 2000);

    const video = videoRef.current;
    
    // cleanup 함수로 비디오 중지
    return () => {
      clearTimeout(fallbackTimer);
      if (video) {
        video.pause();
        video.src = '';
        video.load();
      }
    };
  }, [onVideoEnd]);

  return (
    <div className="relative size-full bg-[#5294ff]" data-name="스플레시1">
      <video 
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute max-w-none object-cover size-full" 
        controlsList="nodownload"
        onEnded={onVideoEnd}
        onError={() => {
          console.log('Video error, moving to next screen');
          if (onVideoEnd) onVideoEnd();
        }}
      >
        <source src="/_videos/v1/675fdc8b02cce42e07815828fbc84177a0857b4b" />
      </video>
    </div>
  );
}
