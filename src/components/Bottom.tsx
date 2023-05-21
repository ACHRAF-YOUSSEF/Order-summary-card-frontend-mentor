import Music from "./Music";

const Bottom = () => {
  return (
    <div
      className="
        bg-white
        rounded-b-xl
        w-96
        px-3
        py-2
      "
    >
      <div className="table w-full">
        <div className="table-row">
          <div
            className="
              table-cell 
              text-center 
              text-Dark-blue 
              font-extrabold 
              text-2xl
              py-4
          "
          >
            Order Summary
          </div>
        </div>
        <div className="table-row">
          <div
            className="
              table-cell 
              text-center 
              py-4
          "
          >
            <p
              className="
                flex
                justify-center
                items-center
                text-center
                text-Desaturated-blue
              "
            >
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>
        </div>
        <div className="table-row">
          <div
            className="
              table-cell 
              text-center 
              py-2
          "
          >
            <Music />
          </div>
        </div>
        <div className="table-row">
          <div
            className="
              table-cell 
              text-center 
              py-4
          "
          >
            <button
              className="
                py-2
                w-full
                rounded-lg
                text-white
                bg-Bright-blue
                hover:bg-Purple
              "
            >
              Proceed to Payment
            </button>
          </div>
        </div>
        <div className="table-row">
          <div
            className="
              table-cell 
              text-center 
              py-4
          "
          >
            <button
              className="
                text-Pale-blue 
                hover:text-Dark-blue
              "
            >
              Cancel Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;