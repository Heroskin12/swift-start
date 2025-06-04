import UserIconSmall from "../../../../assets/UserIconSmall";
export default function Card({ bgColor, title, data }) {
  return (
    <div className="w-full max-w-xs md:max-w-sm lg:max-w-md h-[180px] p-6 mx-0 bg-yellow-accent rounded-[10px]">
      <div className="flex flex-col gap-[10px] h-full">
        <div className="flex items-center justify-between">
          <h3 className="font-sans text-[18px] font-semibold text-dark-primary">
            {title || "Current Level"}
          </h3>
          <UserIconSmall />
        </div>
        <div>
          <h2 className="text-[30px] font-bold font-sans">
            {data || "Level 8"}
          </h2>
        </div>
        <div>
          <p className="font-sans font-normal text-[14px]">
            Next level in 2.5 hours
          </p>
        </div>
      </div>
    </div>
  );
}
