import svgPaths from "./svg-ls1raomfzs";

function Group() {
  return (
    <div className="absolute bottom-[35.89%] left-[0.5%] right-[0.32%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 243 53">
        <g id="Group">
          <path d={svgPaths.p252fb100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3b8f1000} fill="var(--fill-0, white)" id="Vector_2" />
          <g id="Group_2">
            <path d={svgPaths.pbf0d980} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.pbf7e200} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p201d7d00} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p32df0120} fill="var(--fill-0, white)" id="Vector_6" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[76.25%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244 20">
        <g id="Group">
          <path d={svgPaths.p12608d80} fill="var(--fill-0, #F87B61)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p31a75680} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p2b970900} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p8880d00} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p2a2ca200} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p159b6d70} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p26326870} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p36456700} fill="var(--fill-0, white)" id="Vector_8" />
            <path d={svgPaths.p29cb3a80} fill="var(--fill-0, white)" id="Vector_9" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Logotype() {
  return (
    <div className="absolute h-[82px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[244px]" data-name="Logotype">
      <Group />
      <Group1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#5294ff] relative size-full" data-name="스플레시4">
      <Logotype />
    </div>
  );
}