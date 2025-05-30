import React, { useContext } from 'react'
import { assets } from '../Assets/assets';
import { AppContext } from '../context/AppContext';

const Header = () => {
  const { removeBg } = useContext(AppContext);
  // from-violet-600 to-fuchsia-500
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* -- Left side -- */}
      <div>
        <h1 className="text-4xl sm:text-6xl md:text-6xl font-bold text-neutral-300 leading-tight">
          Remove the <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            Background
          </span>{" "}
          from <br className="max-md:hidden" />
          images for free
        </h1>

        <p className="my-6 text-[15px] sm:text-[19px] text-gray-300 ">
          Remove Backgrounds from Images Instantly – For Free!
          <br className="max-sm:hidden" /> Easily remove backgrounds from your
          photos with our free online{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            BgZap
          </span>{" "}
          tool! No design skills or expensive software required. Upload your
          image, and in seconds, get a clean, transparent background perfect for
          social media, e-commerce, or any creative project. Start now and
          transform your visuals effortlessly!
        </p>
        <div>
          <input
            onChange={(e) => removeBg(e.target.files[0])}
            type="file"
            accept="image/*"
            id="upload1"
            hidden
          />
          <label
            className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
            htmlFor="upload1"
          >
            <img width={20} src={assets.upload_btn_icon} alt="" />
            <p className="text-white text-sm">Upload Your Image</p>
          </label>
        </div>
      </div>

      {/* -- right side -- */}
      <div className=" max-w-md sm:mr-0 mr-4">
        <img
          className=" sm:mt-0 mt-4 rounded-3xl"
          src="/background-remover.jpg"
          alt="Header"
        />
      </div>
    </div>
  );
}

export default Header
