import desktop_image from '../assets/illustration-hero.svg';

const Top = () => {
  return (
    <div
      className="
				rounded-t-xl 
				w-full
			"
    >
      <div>
        <img
          className="
					rounded-t-xl 
					w-full
			"
          src={desktop_image}
          alt="bg"
        />
      </div>
    </div>
  );
}

export default Top;