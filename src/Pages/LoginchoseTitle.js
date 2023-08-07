import React, { useState } from 'react';
import LogoCAn from '../Photos/LogoCAn.png';
import CANa from '../Photos/CANa.png';
import Roles_Fighter from '../Photos/Roles_Fighter.png';
import Roles_Caregiver from '../Photos/Roles_Caregiver.png';
import Roles_Veteran from '../Photos/Roles_Veteran.png';
import Video from '../Photos/Video.png';
import CarouselMain from '../Components/CarouselMain';
import { Link } from 'react-router-dom';
import MeetPeople from '../Photos/MeetPeople.png';
import { CiCircleInfo } from 'react-icons/ci';
import PageImg from '../Photos/illus2.png'
import vibird1 from '../Photos/vibird1.gif'

const LoginChooseTitle = () => {
  const [select, setSelect] = useState('');

  function selectedOption(value) {
    setSelect(value);
  }

  return (
    <>
      <div className="lg:ml-[80px] mt-2 lg:absolute flex items-center justify-center">
        <img src={LogoCAn} alt="not found" className="w-[80px] h-[80px]" />
        <img src={CANa} alt="not found" className="w-[42.88px] h-[16.19px]" />
      </div>
      <div>
        <div className="flex lg:flex-row lg:p-0 p-2 items-center justify-center">

          <div className='hidden lg:block w-[55%] mt-20  flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-2'>
              {/* <img src={WelcomeScreen} className='' /> */}
              <div className='w-[60%] -mt-20'>
                {/* <CarouselMain /> */}
                <img src={PageImg} alt='none' />
              </div>

              <div className=' flex flex-col items-center justify-center gap-1 -mt-10'>
                <h1 className='text-center text-[36px] font-bold'>Stay up to date, and inspired.</h1>
                <p className='text-center text-[18px] font-semibold w-[60%]'>Read curated articles on the latest research, and success stories from our community.</p>
              </div>

              <div className="flex flex-row items-center gap-4 mt-3">
                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                <div className="h-[12px] w-[12px] rounded-full bg-[#EFC319]"></div>
                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="h-full  flex items-center mt-4  lg:mt-10 lg:bottom-10">
            <div
              className="lg:h-[600px] lg:w-[420px] w-[330px] h-[550px] lg:mx-24 bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-md rounded-[20px]"
              style={{
                boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div>
                <img src={vibird1} alt="video" />
              </div>
              <div className=" font-semibold text-lg flex items-center justify-between pr-3 pl-28 lg:pr-4 lg:pl-36  ">
                Create a Profile
                <div className="">
                  <CiCircleInfo color="#7E7E7E" className="cursor-pointer" />
                </div>
              </div>

              <div className="w-fit pt-2">
                <div className="flex flex-col items-center justify-center gap-4">
                  <div
                    className={`flex justify-center cursor-pointer ${select !== '' && select !== 'Fighter' ? 'opacity-50' : ''
                      }`}
                    onClick={() => selectedOption('Fighter')}
                  >
                    <img
                      src={Roles_Fighter}
                      alt="not found"
                      className={`w-[90%] relative `}
                    />
                    <div className="absolute lg:top-[33%] top-[30%] right-20 lg:left-60 text-white ">
                      <h3 className=" font-poppins lg:text-[20px] text-[16px]">Fighter</h3>
                      <div className=" ">
                        <p className=" font-poppins  lg:text-[14px] text-[12px]">I will defeat</p>
                        <p className=" font-poppins lg:text-[14px] text-[12px] ">cancer</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex justify-center cursor-pointer ${select !== '' && select !== 'Caregiver' ? 'opacity-50' : ''
                      }`}
                    onClick={() => selectedOption('Caregiver')}
                  >
                    <img
                      src={Roles_Caregiver}
                      alt="not found"
                      className={`w-[90%] relative `}
                    />
                    <div className="absolute lg:top-[52%] top-[46%] right-14  lg:left-60 text-white ">
                      <h3 className="font-poppins lg:text-[20px] text-[16px]">Caregiver</h3>
                      <div className=" ">
                        <p className="font-poppins  lg:text-[14px] text-[12px]">I will help fighter</p>
                        <p className="font-poppins lg:text-[14px] text-[12px] ">defeat cancer</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex justify-center cursor-pointer ${select !== '' && select !== 'Veteran' ? 'opacity-50' : ''
                      }`}
                    onClick={() => selectedOption('Veteran')}
                  >
                    <img
                      src={Roles_Veteran}
                      alt="not found"
                      className={`w-[90%] relative `}
                    />
                    <div className="absolute lg:top-[71%] top-[63%] right-14  lg:left-60 text-white ">
                      <h3 className="font-poppins lg:text-[20px] text-[16px]">Veteran</h3>
                      <div className="">
                        <p className="font-poppins  lg:text-[14px] text-[12px]">I have defeated</p>
                        <p className="font-poppins  lg:text-[14px] text-[12px] ">cancer</p>
                      </div>
                    </div>
                  </div>

                  {select ? (
                    <Link to="/logindetails" className="w-[50%]">
                      <h2 className="bg-[#EFC319] text-center p-3 rounded-lg text-white">
                        Continue
                      </h2>
                    </Link>
                  ) : (
                    <div className="w-[50%]">
                      <h2 className="bg-[#efc41975] text-center p-3 rounded-lg text-white">
                        Continue
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginChooseTitle;
