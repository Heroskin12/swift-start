import { useParams } from "react-router";
import data from "../dummyGridData";
import Header from "../components/Reusables/Headers/AltHeader/Header";
import UserIconSmall from "../assets/UserIconSmall";
import GridButton from "../components/Reusables/Buttons/GridButton";

export default function Post() {
  const { id } = useParams();
  const post = data.find((item) => item.id === Number(id));

  const getYoutubeId = (url) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  const videoId = post ? getYoutubeId(post.url) : null;
  return (
    <>
      <div className="bg-light-primary">
        <Header />
        {videoId && (
          <div className="flex justify-center">
            <div className="w-full max-w-5xl aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube Video"
              ></iframe>
            </div>
          </div>
        )}
        <div className="pt-4 pe-4 pb-12 pl-6">
          <h1 className="text-[24px] font-sans font-bold p-2 pb-0">
            {post.title}
          </h1>
          <div className="flex items-center space-x-1 pl-2">
            <UserIconSmall className="align-bottom" />
            <p className="text-secondary">{post.creator}</p>
          </div>
          <div className="space-x-[8px] mt-1 pl-2">
            {post.level && <GridButton color="green">{post.level}</GridButton>}
            {post.accent && <GridButton color="red">{post.accent}</GridButton>}
            {post.topic && <GridButton color="yellow">{post.topic}</GridButton>}
          </div>
          <div className="mt-4 bg-white p-2 rounded-sm">
            <h1 className="font-sans text-[18px] font-bold">Description</h1>
            <p className="text-secondary">{post.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
