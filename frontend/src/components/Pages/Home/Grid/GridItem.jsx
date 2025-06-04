import UserIconSmall from "../../../../assets/UserIconSmall";
import GridButton from "../../../Reusables/Buttons/GridButton";
import { memo } from "react";
import { useNavigate } from "react-router";
const GridItem = memo(({ item }) => {
  const { id, thumbnail, title, creator, level, accent, topic } = item;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      role="button"
    >
      <div className="video-thumbnail">
        <img
          className="w-full h-full object-cover"
          src={thumbnail}
          alt={`Thumbnail for the video called ${title}`}
        />
      </div>
      <h1 className="video-title">{title}</h1>
      <div className="flex items-center space-x-1">
        <UserIconSmall className="align-bottom" />
        <p className="text-secondary">{creator || "Unknown Creator"}</p>
      </div>
      <div className="space-x-[8px] mt-1">
        {level && <GridButton color="green">{level}</GridButton>}
        {accent && <GridButton color="red">{accent}</GridButton>}
        {topic && <GridButton color="yellow">{topic}</GridButton>}
      </div>
    </div>
  );
});

export default GridItem;
