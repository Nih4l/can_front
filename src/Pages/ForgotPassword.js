import React, { useState } from 'react'
import LogoCAn from '../Photos/LogoCAn.png'
import CANa from '../Photos/CANa.png'
import Frame from '../Photos/Frame.png'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {


  const [email, setEmail] = useState('')
  const [error, setError] = useState('');


  const handleEmailChange = (event) => {
    const enteredValue = event.target.value;
    setEmail(enteredValue);

    // Regular expression patterns to check if entered text is in email or mobile number format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^\d{10}$/; // Assuming a 10-digit mobile number format

    if (!emailPattern.test(enteredValue) && !mobilePattern.test(enteredValue)) {
      setError('(Invalid Email or Mobile Number)');
    } else {
      setError('');
    }
  };

  const isResetDisabled = error === '';

  return (
    <>
      <div className='lg:ml-[80px] mt-2 lg:absolute flex items-center justify-center'>
        <img src={LogoCAn} alt='not found' className='w-[80px] h-[80px]' />
        <img src={CANa} alt='not found' className='w-[42.88px] h-[16.19px]  ' />
      </div>

      <div className='lg:h-screen h-fit flex lg:p-0 px-4 pt-4 items-center  justify-center'>
        <div className='  shadow-xl   pb-8 lg:px-6 px-2   bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-lg rounded-[20px]' style={{
          boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)'
        }}>

          <div className='mt-14 flex flex-col items-center gap-4'>
            <div>
              <h1 className='lg:text-[28px] font-poppins text-[24px] font-semibold text-[#EFC319]'>Forgot Password</h1>
            </div>
            <div className='text-center'>
              <p className='lg:text-[14px] font-poppins text-[#555555] text-[12px] font-semibold'>Please, enter your registered email. You'll receive </p>
              <p className='lg:text-[14px] font-poppins text-[#555555] text-[12px] font-semibold'>a link to reset password.</p>
            </div>
            <div>
              <img className='w-28 h-28' src={Frame} alt='none' />
            </div>
            <div>
              <div className='border-2 lg:h-12 h-12  mt-3 lg:w-[350px] w-[300px]  rounded-[20px] flex items-center gap-4'>
                
                <input placeholder='Email/phone no.' className='border-none w-full bg-transparent placeholder: outline-none p-4'
                  value={email}
                  onChange={handleEmailChange} />
                <div className='text-red-400 lg:text-xs text-[10px]  lg:w-[50%] '>{error && <p>{error}</p>}</div>
              </div>
            </div>
            <div>


              {email && isResetDisabled ? <Link to='/OtpVerify'>
                <div className='w-52 h-12 cursor-pointer pt-2'>
                  <h2 className='bg-[#EFC319] text-center p-3 rounded-xl text-white font-semibold ' >Reset password</h2>
                </div>
              </Link> : <div className='w-52 h-12 cursor-pointer pt-2'>
                <h2 className='bg-[#EFC319] text-center p-3 rounded-xl text-white font-semibold opacity-50'>Reset password</h2>
              </div>}



            </div>
            <div className='mt-3'>
              <Link to='/LoginForm'>
                <h1 className='text-[#C31A7F] text-[18px] font-semibold cursor-pointer underline decoration-1'>Login again</h1>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
