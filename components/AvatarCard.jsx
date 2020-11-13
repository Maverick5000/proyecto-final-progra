import avatarData from "../components/data/avatarData";
const AvatarCard = ({ data }) => {
  return (
    <div className="m-4 mt-0 pt-0 border-2 p-16">
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
        src={`/images/pants/${avatarData.pants[data.hat].img}.png`}
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
