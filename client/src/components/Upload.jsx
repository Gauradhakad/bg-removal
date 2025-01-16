import React, { useContext } from "react";
import { assets } from "../Assets/assets";
import { AppContext } from "../context/AppContext";

const Upload = () => {
  const {removeBg} = useContext(AppContext);


  return (
    <div className="pb-16">
      <h1 className="text-center text-2xl bg-gradient-to-r py-6 md:py-16 from-gray-900 to-gray-300 bg-clip-text text-transparent md:text-3xl lg:text-4xl mt-4 font-semibold">
        See the magic. try now
      </h1>
      <div className="text-center mb-24">
        <input
          onChange={(e) => removeBg(e.target.files[0])}
          type="file"
          accpet="image/*"
          id="upload2"
          hidden
        />
        <label
          className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
          htmlFor="upload2"
        >
          <img width={20} src={assets.upload_btn_icon} alt="" />
          <p className="text-white text-sm">Upload Your Image</p>
        </label>
      </div>
    </div>
  );
};

export default Upload;
