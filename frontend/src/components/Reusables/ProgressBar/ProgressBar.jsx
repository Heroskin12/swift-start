export default function ProgressBar({ progress }) {
  return (
    <div className="flex space-x-4 items-center mb-4">
      <div className="flex items-center">
        <p className="font-sans text-[14px] font-normal whitespace-nowrap">
          Today's Score:
        </p>
        <p className="font-sans text-[14px] font-normal ml-2 whitespace-nowrap">
          40/60 mins
        </p>
      </div>
      <div
        className="w-full h-[7px] bg-[#D9D9D9] rounded-full relative"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="bg-orange-accent h-full w-full rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
