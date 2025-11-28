import imgLogotype from "figma:asset/6d9d6037bf9b4a7151d9bfcaf0a6044e51e2347c.png";

function Logotype() {
  return (
    <div className="absolute h-[82px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[244px]" data-name="Logotype">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogotype} />
    </div>
  );
}

export default function Splash4() {
  // URL이 준비되면 아래 주석을 해제하고 위 코드를 삭제하세요
  // return (
  //   <div className="relative size-full" data-name="스플레시4">
  //     <iframe 
  //       src="YOUR_URL_HERE" 
  //       className="w-full h-full border-0"
  //       title="Main Content"
  //     />
  //   </div>
  // );

  return (
    <div className="bg-[#5294ff] relative size-full" data-name="스플레시4">
      <Logotype />
    </div>
  );
}
