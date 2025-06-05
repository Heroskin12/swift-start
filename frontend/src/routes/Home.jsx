import BarChart from "../components/Reusables/Charts/BarChart";
import Carousel from "../components/Carousel/Carousel";
import EventCarousel from "../components/EventCarousel/Carousel";
import Popular from "../components/Popular/Popular";
export default function Home() {
  return (
    <div className="flex flex-col h-full p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to SwiftStart</h1>
      <div className="flex w-full min-h-[500px] gap-6">
        {/* Left column */}
        <div className="flex flex-col w-1/2 gap-4">
          <div className="flex flex-col min-h-[120px] bg-white rounded-sm p-4 shadow">
            <h2 className="font-semibold">Your Onboarding Progress</h2>
            <BarChart />
          </div>
          <div className="flex-col flex-1 min-h-[120px] flex space-y-2 bg-white rounded-sm p-4 shadow">
            <h2 className="font-semibold">Recommended People</h2>
            <Carousel />
          </div>
          <hr className="border" />
          <div className="flex-1 flex-col min-h-[120px] flex my-5 space-y-2 bg-white rounded-sm p-4 shadow">
            <h2 className="font-semibold">Recommended Upcoming Events</h2>
            <EventCarousel />
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col w-1/2">
          <Popular />
        </div>
      </div>
    </div>
  );
}
