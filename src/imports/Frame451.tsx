import imgFrame334 from "figma:asset/55292a243c147c2beae549eb98fa149d313dd5d3.png";

function Frame() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[150px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame334} />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-0 pr-[14px] py-0 relative size-full">
          {[...Array(4).keys()].map((_, i) => (
            <Frame key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}