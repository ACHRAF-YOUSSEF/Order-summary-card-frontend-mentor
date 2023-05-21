import bg_image from '../assets/pattern-background-desktop.svg';

import Bottom from "./Bottom";
import Footer from './Footer';
import Top from "./Top";

const Card = () => {
  return (
    <>
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          h-fit
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            h-full
            w-full
        "
        >
          <img className="w-full md:visible lg:visible invisible" src={bg_image} alt="bg" />
          <div className='absolute top-1/4'>
            <div
              className="
              rounded-xl
              flex
              flex-col
              justify-center
              items-center
              bg-white
              w-fit
              my-2
           "
            >
              <Top />
              <Bottom />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;