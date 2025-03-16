import React, { useContext } from 'react'
import { assets, plans } from '../Assets/assets'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const BuyCredit = () => {
  const {backendUrl , loadCreditsData } = useContext(AppContext)

  const navigate = useNavigate();

  const {getToken} = useAuth();

  const initPay = async (order) =>{
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount:order.amount,
      currency:order.currency,
      name: "Credits Payment",
      description : "Credits Payment",
      order_id: order.id,
      receipt:order.receipt,
      handler: async(res)=>{
        console.log(res);

        const token = await getToken()
        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verify-razor",
            res,
            { headers: { token } }
          );
          if(data.success){
            loadCreditsData()
            navigate('/')
            toast.success("Credit Added")
          }
        } catch (error) {
          console.log(error)
          toast.error("error.message")
        }
      }
    }
    if (!window.Razorpay) {
      console.error("Razorpay SDK not loaded");
      toast.error("Payment gateway is not loaded");
      return;
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const paymentRazorPay = async (planId) =>{
    try {
      const token = await getToken();
      const {data} = await axios.post(backendUrl + '/api/user/pay-razor',{planId},{headers:{token}})
      if(data.success){
        initPay(data.order)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-200 bg-white px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>
      <h1 className="text-center text-2xl bg-gradient-to-r from-gray-500 to-gray-200 bg-clip-text text-transparent md:text-3xl lg:text-4xl mt-4 font-semibold mb-6 sm:mb-10">

        Choose the plan that's right for you
      </h1>
      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => {
          return (
            <div
              className="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500"
              key={index}
            >
              <img
                width={70}
                className="rounded-md"
                src={assets.bg_logo}
                alt=""
              />
              <p className="mt-3 font-semibold">{item.id}</p>
              <p className="text-sm">{item.desc}</p>
              <p className="mt-6">
                <span className="text-3xl font-medium ">₹{item.price}</span>/
                {item.credits} credits
              </p>
              <button
                onClick={() => paymentRazorPay(item.id)}
                className="w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52"
              >
                Purchase
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BuyCredit
