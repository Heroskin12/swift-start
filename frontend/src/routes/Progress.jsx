import Header from "../components/Reusables/Headers/AltHeader/Header";
import Card from "../components/Pages/Progress/Card/Card";
import CameraIcon from "../assets/CameraIcon";
import DonutChart from "../components/Reusables/Charts/DonutChart";
import LineChart from "../components/Reusables/Charts/LineChart";
import MobileHeader from "../components/Reusables/Headers/MobileHeader/MobileHeader";
import { AuthContext } from "../auth/UserContext.jsx";
import ErrorIcon from "../assets/ErrorIcon.jsx";

export default function Progress() {
  return (
    <div className="overflow-x-hidden box-border">
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <MobileHeader />
      </div>
      <>
        <div className="flex items-center justify-between sm:px-4 px-2">
          <h1 className="font-sans font-bold text-[48px]">Your Progress</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 py-4 sm:px-4 px-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between gap-2 sm:px-4 px-2">
          <div className="flex flex-col bg-white p-4 rounded-sm w-full xl:w-[50%] border border-gray-200 xl:h-[400px]">
            <h3 className="font-sans text-[18px] font-semibold">
              Watch time by category
            </h3>
            <hr className="flex-grow border-[#A5A5A5]" />
            <DonutChart />
          </div>

          <div className="flex flex-col bg-white p-4 rounded-sm w-full xl:w-[50%] border border-gray-200 xl:h-[400px]">
            <h3 className="font-sans text-[18px] font-semibold">
              Daily watch time
            </h3>
            <hr className="flex-grow border-[#A5A5A5]" />
            <LineChart />
          </div>
        </div>
        <div className="p-4 rounded-sm bg-white mt-6 border border-gray-200 sm:mx-4 mx-2">
          <div className="flex flex-col gap-2 p-4 w-full z-50">
            <h3 className="font-sans text-[18px] font-semibold">
              Recent Activity
            </h3>
            <div>
              <div className="bg-[#E5E7EB] w-[48px] h-[48px] items-center justify-center flex">
                <CameraIcon />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
