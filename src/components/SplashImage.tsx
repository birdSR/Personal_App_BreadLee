import splashImage from 'figma:asset/bb65788d48b9dcff7d3547c90e9a47258eba8545.png';

export default function SplashImage() {
  return (
    <div className="relative size-full bg-[#4A9EFF] flex items-center justify-center">
      <img 
        src={splashImage} 
        alt="Splash character"
        className="w-auto h-auto max-w-full max-h-full object-contain"
      />
    </div>
  );
}
