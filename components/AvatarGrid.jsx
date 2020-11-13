import { useSelector } from "react-redux";
import AvatarCard from "../components/AvatarCard";

const AvatarGrid = () => {
  const outfits = useSelector((state) => state.outfits);

  const mapOutfits = (outfits) => {
    let objects = outfits.map((outfit) => {
      return <AvatarCard data={outfit} />;
    });
    return objects;
  };

  return (
    <div className="flex flex-wrap justify-center items-center bg-blue-800 w-full h-auto">
      {mapOutfits(outfits)}
    </div>
  );
};

export default AvatarGrid;
