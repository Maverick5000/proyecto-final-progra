import Router from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatarData from "../components/data/avatarData";
import { loadOutfit, saveOutfit } from "../store";

const AvatarCreator = () => {
  const [currentAvatar, setCurrentAvatar] = useState(0);
  const [currentHat, setCurrentHat] = useState(0);
  const [currentPant, setCurrentPant] = useState(0);
  const [currentPet, setCurrentPet] = useState(0);
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);
  const premade = useSelector((state) => state.loadedOutfit);

  useEffect(() => {
    if (!session.user) {
      Router.push("/login");
    }

    if (premade.avatar != null) {
      setCurrentAvatar(premade.avatar);
      setCurrentHat(premade.hat);
      setCurrentPant(premade.pants);
      setCurrentPet(premade.pet);
    }
  }, []);

  const handleChange = (bool, valueHandler, currentVal, resourceArray) => {
    if (bool) {
      if (currentVal < resourceArray.length - 1) {
        valueHandler(currentVal + 1);
      } else {
        valueHandler(0);
      }
    } else {
      if (currentVal > 0) {
        valueHandler(currentVal - 1);
      } else {
        valueHandler(resourceArray.length);
      }
    }
  };

  if (!session.user) return <>Please Login</>;

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-teal-700 text-2xl">
      <button
        style={{ top: "85%" }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4 absolute"
        onClick={() => {
          dispatch(
            saveOutfit({
              hat: currentHat,
              pants: currentPant,
              pet: currentPet,
              avatar: currentAvatar,
              username: session.user.username,
            })
          );
          dispatch(loadOutfit({}));
          Router.push("/");
        }}>
        Guardar
      </button>
      <div className="flex justify-evenly w-full">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
          onClick={() =>
            handleChange(false, setCurrentHat, currentHat, avatarData.hats)
          }>
          &#9194;
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
          onClick={() =>
            handleChange(true, setCurrentHat, currentHat, avatarData.hats)
          }>
          &#9193;
        </button>
      </div>
      <div className="flex justify-evenly w-full absolute">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
          onClick={() =>
            handleChange(false, setCurrentPant, currentPant, avatarData.pants)
          }>
          &#9194;
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
          onClick={() =>
            handleChange(true, setCurrentPant, currentPant, avatarData.pants)
          }>
          &#9193;
        </button>
      </div>
      <div>
        <img
          style={{ top: avatarData.hats[currentHat].position }}
          className="w-64 absolute h-48"
          src={`/images/hats/${avatarData.hats[currentHat].img}.png`}
          alt=""
        />
        <img
          style={{ top: avatarData.pants[currentPant].position }}
          className="w-48 ml-12 absolute h-48"
          src={`/images/pants/${avatarData.pants[currentPant].img}.png`}
          alt=""
        />
        <img
          className="w-64 z-10"
          src={`/images/avatars/${avatarData.avatars[currentAvatar]}.png`}
          alt=""
        />
        <img
          style={{ left: avatarData.pets[currentPet].position }}
          className="w-24 h-20 ml-12 relative"
          src={`/images/Pets/${avatarData.pets[currentPet].img}`}
          alt=""
        />
      </div>

      <div className="flex justify-center w-full">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
          onClick={() =>
            handleChange(false, setCurrentPet, currentPet, avatarData.pets)
          }>
          &#9194;
        </button>
        <span className="text-white text-4xl">Mascota</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
          onClick={() =>
            handleChange(true, setCurrentPet, currentPet, avatarData.pets)
          }>
          &#9193;
        </button>
      </div>
      <div
        style={{ top: "5%" }}
        className="flex justify-center w-full h-auto absolute items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
          onClick={() =>
            handleChange(
              false,
              setCurrentAvatar,
              currentAvatar,
              avatarData.avatars
            )
          }>
          &#9194;
        </button>
        <span className="text-white text-4xl">Color</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
          onClick={() =>
            handleChange(
              true,
              setCurrentAvatar,
              currentAvatar,
              avatarData.avatars
            )
          }>
          &#9193;
        </button>
      </div>
    </div>
  );
};

export default AvatarCreator;
