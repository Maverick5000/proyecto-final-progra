import Router from "next/router";
import { useDispatch } from "react-redux";
import avatarData from "../components/data/avatarData";
import { loadOutfit } from "../store";
const AvatarCard = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="m-4 pt-2 border-2 p-16">
      <button
        className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        onClick={() => {
          dispatch(loadOutfit(data));
          Router.push("/create");
        }}>
        Usar como base
      </button>
      <h2
        className="relative text-center text-2xl text-orange-200"
        style={{ top: "20vh" }}>
        Creado por : {data.username}
      </h2>
      <img
        style={{ top: "29vh" }}
        className="w-64 relative h-48"
        src={`/images/hats/${avatarData.hats[data.hat].img}.png`}
      />
      <img
        style={{ top: "35vh" }}
        className="w-48 ml-12 relative h-48"
        src={`/images/pants/${avatarData.pants[data.pants].img}.png`}
      />
      <img
        className="w-64 z-10"
        src={`/images/avatars/${avatarData.avatars[data.avatar]}.png`}
      />
      <img
        style={{ left: avatarData.pets[data.pet].position }}
        className="w-24 h-20 ml-12 relative"
        src={`/images/Pets/${avatarData.pets[data.pet].img}`}
      />
    </div>
  );
};

export default AvatarCard;
