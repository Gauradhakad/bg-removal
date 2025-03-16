import React, { useContext, useEffect } from 'react';
import { assets } from '../Assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  
  const {openSignIn} = useClerk();
  const {isSignedIn,user} = useUser();
  const {credit,loadCreditsData} = useContext(AppContext);
  const navigate = useNavigate()

  useEffect(()=>{
    if(isSignedIn){
      loadCreditsData()
    }
  },[isSignedIn])

  return (
    <div className="flex items-center justify-between mx-4 py-3 md:mx-32 ">
      <Link to="/">
        {" "}
        <img
          className="w-19 h-8 sm:w-24 sm:h-12 md:w-[160px] md:h-[60px] bg-contain rounded-full"
          src={assets.bg_logo}
          alt=""
        />
      </Link>
      {isSignedIn ? (
        <div className='flex items-center gap-2 sm:gap-3 '>
          <button onClick={()=>navigate('/buy')} className='flex items-center gap-2 bg-blue-200 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full  hover:scale-105 transition-all duration-700 '><img className="w-5" src={assets.credit_icon} alt="" /><p className='text-xs sm:text-sm font-medium text-black '>credits : {credit}</p></button>
          <p className='text-gray-200 max-sm:hidden'>Hi {user.fullName}</p>
          <UserButton/></div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:py-3 text-sm rounded-full"
        >
          Get Started{" "}
          <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="" />
        </button>
      )}
    </div>
  );
}

export default Navbar
