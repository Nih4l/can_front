import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoCAn from '../Photos/LogoCAn.png'
import CANa from '../Photos/CANa.png'
import PinInput from 'react-pin-input'

const OtpVerify = () => {

  const [pin, setPin] = useState('');

  const handlePinChange = (value) => {
    setPin(value);
    console.log('Pin value:', value);
  };
  return (
    <>
      <div className='lg:ml-[80px] mt-2 lg:absolute flex items-center justify-center '>
        <img src={LogoCAn} alt='not found' className='w-[80px] h-[80px]' />
        <img src={CANa} alt='not found' className='w-[42.88px] h-[16.19px]  ' />
      </div>

      <div className='lg:h-screen h-fit flex lg:p-0 px-4 pt-4 items-center  justify-center'>
        <div className='shadow-xl pt-10 pb-44 lg:px-14 px-8  bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-lg rounded-[20px]' style={{
          boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)'
        }}>

          <div className=' flex flex-col items-center justify-center gap-5'>
            <div>
              <h1 className='lg:text-[28px] font-poppins text-[24px] font-semibold text-[#EFC319]'>OTP Verfication</h1>
            </div>

            <div className='text-center'>
              <p className='lg:text-[16px] text-[12px] font-poppins  text-[#555555] font-semibold'>OTP has been sent to +91 9191919191</p>

            </div>

            <div className='flex relative flex-row items-center justify-center lg:ml-5 ml-4  gap-5 mt-6'>
              {/* <input maxLength={4} className='absolute mb-3 outline-none bg-transparent h-12 w-44  p-1  ' style={{ letterSpacing: 32 }}
                value={otp}
                onChange={inputvalue}
              />
              <span>___</span>
              <span>___</span>
              <span>___</span>
              <span>___</span> */}
              <PinInput
                length={4}
                id='pin'
                value={pin}
                onComplete={handlePinChange}
                inputStyle={{
                  border: 'none',
                  borderBottom: '1px solid black',
                  width: '30px',
                  textAlign: 'center',
                  marginRight: '30px',
                }}
              ></PinInput>
            </div>
            <div className='mt-2'>
              <div className='flex flex-row gap-1'><p className='text-[#7E7E7E] lg:text-[16] text-[14px] font-poppins '>Don't receive the OTP?</p><p className='text-[#C31A7F] lg:text-[16px] text-[14px] font-poppins font-semibold'>Resend OTP</p></div>
            </div>

            <div className='mt-2'>
              {pin.length === 4 ?
                <Link to='/ResetPassword'>
                  <div className='w-52 h-12 cursor-pointer'>
                    <h2 className='bg-[#EFC319]  text-center p-3 rounded-xl text-white font-semibold'>Verify</h2>
                  </div>
                </Link>
                : <div className='w-52 h-12 cursor-pointer opacity-50'>
                  <h2 className='bg-[#EFC319]  text-center p-3 rounded-xl text-white font-semibold'>Verify</h2>
                </div>
              }


            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default OtpVerify
