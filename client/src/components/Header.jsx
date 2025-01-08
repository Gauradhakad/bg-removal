import React from 'react'
import { assets } from '../Assets/assets';

const Header = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* -- Left side -- */}
      <div>
        <h1 className="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            Background
          </span>{" "}
          from <br className="max-md:hidden" />
          images for free
        </h1>
    
        <p className="my-6 text-[15px] text-gray-700 font-bold ">
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
          <input type="file" name="" id="upload1" hidden />
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
      <div className="w-full max-w-md sm:mr-0 mr-4">
        <img
          className="w-full h-auto sm:mt-0 mt-4"
          src={assets.header_img}
          alt="Header"
        />
      </div>
    </div>
  );
}

export default Header
