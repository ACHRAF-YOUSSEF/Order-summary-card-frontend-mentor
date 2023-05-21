import music_image from "../assets/icon-music.svg";

const Music = () => {
  return (
    <div
      className="
      bg-Very-pale-blue
        rounded-lg
        w-full 
        flex
        flex-row
        justify-between
        items-center
        py-2
        px-2
    "
    >
      <div
        className="
          flex 
          flex-row 
          p-2 
          justify-center
          items-center
      "
      >
        <div className="mr-4">
          <img src={music_image} alt="music" />
        </div>
        <div className="flex flex-col">
          <div
            className="
            text-Dark-blue 
              text-md 
              font-extrabold
            "
          >
            Annual Plan
          </div>
          <div
            className="
            text-Desaturated-blue
              text-md
            "
          >
            $59.99/year
          </div>
        </div>
      </div>
      <div
        className="
          text-Bright-blue
          hover:text-Purple
        "
      >
        <button
          className="
            underline
            hover:no-underline
          "
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default Music;
