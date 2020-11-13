import { useState } from "react";

const AvatarCreator = () => {
  const [currentAvatar, setCurrentAvatar] = useState(0);
  const [currentHat, setCurrentHat] = useState(0);
  const [currentPant, setCurrentPant] = useState(0);
  const [currentPet, setCurrentPet] = useState(0);
  const avatars = ["Red", "Black", "Blue", "Purple", "White"];
  const hats = [
    { img: "Hats0004", position: "21%" },
    { img: "Hats0017", position: "24%" },
    { img: "Hats0019", position: "18%" },
    { img: "Hats0020", position: "21%" },
    { img: "HatsHoliday20180003", position: "20%" },
  ];
  const pants = [
    { img: "Capt-main", position: "50%" },
    { img: "Hats0020", position: "50%" },
    { img: "Mech_main", position: "50%" },
    { img: "Military_stand", position: "50%" },
    { img: "Pol_Main", position: "50%" },
  ];
  const pets = [
    { img: "Bedcrab.png", position: "52%" },
    { img: "Crewpet-idle.gif", position: "52%" },
    { img: "Dog.png", position: "52%" },
  ];

  const handleChange = (bool) => {
    if (bool) {
      if (currentAvatar < avatars.length - 1) {
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
      if (currentHat < hats.length - 1) {
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
      if (currentPant < pants.length - 1) {
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
      if (currentPet < pets.length - 1) {
        setCurrentPet(currentPet + 1);
      }
    } else {
      if (currentPet > 0) {
        setCurrentPet(currentPet - 1);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-teal-700 space-y-4">
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
          style={{ top: hats[currentHat].position }}
          className="w-64 absolute h-48"
          src={`/images/hats/${hats[currentHat].img}.png`}
          alt=""
        />
        <img
          style={{ top: pants[currentPant].position }}
          className="w-48 ml-12 absolute h-48"
          src={`/images/pants/${pants[currentPant].img}.png`}
          alt=""
        />
        <img
          className="w-64 z-10"
          src={`/images/avatars/${avatars[currentAvatar]}.png`}
          alt=""
        />
        <img
          style={{ left: pets[currentPet].position }}
          className="w-24 h-20 ml-12 absolute "
          src={`/images/Pets/${pets[currentPet].img}`}
          alt=""
        />
      </div>

      <div className="flex justify-evenly w-full">
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
      <div className="flex justify-evenly w-full absolute top-0">
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
    </div>
  );
};

export default AvatarCreator;
