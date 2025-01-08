import React from "react";
import { assets } from "../Assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-20">
      <h1 className="text-center text-2xl bg-gradient-to-r from-gray-900 to-gray-300 bg-clip-text text-transparent md:text-3xl lg:text-4xl mt-4 font-semibold">
        Steps to remove background <br /> Image in seconds
      </h1>
      <div className="flex  items-start  flex-wrap gap-4 mt-16 xl:mt-24 justify-center">
        <div className="flex  items-start gap-4 bg-white border drop-shadow-md p-7 rounded-full hover:scale-105 transition-all duration-500">
          <img className="max-w-9 " src={assets.upload_icon} alt="" />
          <div>
            <p className="text-xl font-medium ">Upload Image</p>
            <p className="text-sm text-neutral-500 mt-1 justify-center">
              Select an image from your device to start the process.<br/> Ensure the
              file is in a supported format like JPEG or PNG.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 rounded-full hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.remove_bg_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Remove Background</p>
            <p className="text-sm text-neutral-500 mt-1">
              Our tool will automatically detect and remove the background from<br/>
              your image in seconds using advanced AI technology.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 rounded-full hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.download_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Download Image</p>
            <p className="text-sm text-neutral-500 mt-1">
              Once the background is removed, download your new image with a<br/>
              clean, transparent background
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
