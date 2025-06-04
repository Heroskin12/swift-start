import BarChart from "../components/Reusables/Charts/BarChart";
export default function Knowledge() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold mb-4">Knowledge</h1>
      <div className="flex justify-start items-center w-full max-w-4xl min-h-[500px]">
        <div className="flex flex-col flex-1 gap-4">
          <div className="border-1 flex-1 min-h-[120px] flex items-center justify-center">
            <BarChart />
          </div>
          <div className="bg-blue flex-1 min-h-[120px] flex items-center justify-center">
            <p className="text-white">bye bye</p>
          </div>
          <div className="bg-gray-500 flex-1 min-h-[120px] flex items-center justify-center">
            <p className="text-white">good evening</p>
          </div>
        </div>
        <div className="bg-amber-300 h-[380px] w-1/3 ml-4 flex items-center justify-center">
          <p>jjj</p>
        </div>
      </div>
    </div>
  );
}
