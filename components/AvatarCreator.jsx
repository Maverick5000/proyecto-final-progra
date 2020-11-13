import { useState } from "react";
import { useDispatch } from "react-redux";
import avatarData from "../components/data/avatarData";
import { saveOutfit } from "../store";

const AvatarCreator = () => {
  const [currentAvatar, setCurrentAvatar] = useState(0);
  const [currentHat, setCurrentHat] = useState(0);
  const [currentPant, setCurrentPant] = useState(0);
  const [currentPet, setCurrentPet] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (bool) => {
    if (bool) {
      if (currentAvatar < avatarData.avatars.length - 1) {
        setCurrentAvatar(currentAvatar + 1);
      }
    } else {
      if (currentAvatar > 0) {
        setCurrentAvatar(currentAvatar - 1);
      }
    }
  };

  const handleChangeHat = (bool) => {
    if (bool) {
      if (currentHat < avatarData.hats.length - 1) {
        setCurrentHat(currentHat + 1);
      }
    } else {
      if (currentHat > 0) {
        setCurrentHat(currentHat - 1);
      }
    }
  };

  const handleChangePant = (bool) => {
    if (bool) {
      if (currentPant < avatarData.pants.length - 1) {
        setCurrentPant(currentPant + 1);
      }
    } else {
      if (currentPant > 0) {
        setCurrentPant(currentPant - 1);
      }
    }
  };

  const handleChangePet = (bool) => {
    if (bool) {
      if (currentPet < avatarData.pets.length - 1) {
        setCurrentPet(currentPet + 1);
      }
    } else {
      if (currentPet > 0) {
        setCurrentPet(currentPet - 1);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-teal-700">
      <button
        style={{ top: "85%" }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4 absolute"
        onClick={() =>
          dispatch(
            saveOutfit({
              hat: currentHat,
              pants: currentPant,
              pet: currentPet,
              avatar: currentAvatar,
            })
          )
        }>
        SAVE
      </button>
      <div className="flex justify-evenly w-full">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
          onClick={() => handleChangeHat(false)}>
          Atras
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
          onClick={() => handleChangeHat(true)}>
          Adelante
        </button>
      </div>
      <div className="flex justify-evenly w-full absolute">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
          onClick={() => handleChangePant(false)}>
          Atras
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
          onClick={() => handleChangePant(true)}>
          Adelante
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

      <div className="flex justify-evenly w-full">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
          onClick={() => handleChangePet(false)}>
          Atras
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
          onClick={() => handleChangePet(true)}>
          Adelante
        </button>
      </div>
      <div className="flex justify-evenly w-full absolute top-0">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
          onClick={() => handleChange(false)}>
          Atras
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
          onClick={() => handleChange(true)}>
          Adelante
        </button>
      </div>
    </div>
  );
};

export default AvatarCreator;
