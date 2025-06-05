import { useParams, useLocation } from "react-router";
import gridData from "../dummyGridData";
import eventData from "../dummyEventData";
import Header from "../components/Reusables/Headers/AltHeader/Header";
import UserIconSmall from "../assets/UserIconSmall";
import GridButton from "../components/Reusables/Buttons/GridButton";
import stockImage from "../assets/Thumbnail.png";

export default function EventPost() {
  const { id } = useParams();
  const location = useLocation();

  // Determine if this is an event or a video/knowledge post
  const isEvent = location.pathname.includes("event"); // Adjust as needed

  const data = isEvent ? eventData : gridData;
  const post = data.find((item) => item.id === Number(id));

  if (!post) return <div className="p-8 text-center">Not found.</div>;

  return (
    <div className="bg-light-primary min-h-screen">
      <Header />
      <div className="flex flex-col items-center pt-8">
        <img
          src={stockImage}
          alt="Thumbnail"
          className="rounded-lg shadow-md w-full max-w-2xl object-cover mb-6"
          style={{ maxHeight: 320 }}
        />
        <div className="w-full max-w-2xl bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
          <div className="flex items-center space-x-2 mb-2">
            <UserIconSmall className="align-bottom" />
            <span className="text-secondary">
              {isEvent ? post.organizer : post.creator}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {/* For videos */}
            {!isEvent && post.level && (
              <GridButton color="green">{post.level}</GridButton>
            )}
            {!isEvent && post.accent && (
              <GridButton color="red">{post.accent}</GridButton>
            )}
            {!isEvent && post.topic && (
              <GridButton color="yellow">{post.topic}</GridButton>
            )}
            {/* For events */}
            {isEvent && (
              <>
                <GridButton color="blue">{post.category}</GridButton>
                <GridButton color="gray">{post.date}</GridButton>
                <GridButton color="gray">{post.time}</GridButton>
                <GridButton color="gray">{post.location}</GridButton>
              </>
            )}
          </div>
          {/* Description */}
          <div className="mb-4">
            <h2 className="font-semibold text-lg mb-1">Description</h2>
            <p className="text-secondary">{post.description}</p>
          </div>
          {/* Extra info for events */}
          {isEvent && (
            <div className="text-sm text-gray-700 space-y-1">
              <div>
                <strong>Speakers:</strong> {post.speakers.join(", ")}
              </div>
              <div>
                <strong>Capacity:</strong> {post.registered}/{post.capacity}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
