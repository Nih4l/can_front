import React from 'react'
import LogoCAn from '../Photos/LogoCAn.png'
import CANa from '../Photos/CANa.png'
import { Link } from 'react-router-dom'

const ResetPasswordSuccessfully = () => {
    return (
        <>
            <div className='lg:ml-[80px] mt-2 lg:absolute flex items-center justify-center '>
                <img src={LogoCAn} alt='not found' className='w-[80px] h-[80px]' />
                <img src={CANa} alt='not found' className='w-[42.88px] h-[16.19px]  ' />
            </div>

            <div className='lg:h-screen h-fit flex lg:p-0 px-4 pt-4 items-center  justify-center'>
                <div className='shadow-xl  pb-48  lg:px-16 px-7  bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-lg rounded-[20px]' style={{
                    boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)'
                }}>
                    <div className='mt-14 flex flex-col items-center gap-4'>
                        <div>
                            <h1 className='lg:text-[28px] font-poppins text-[24px] font-semibold text-[#EFC319]'>Reset Password</h1>
                        </div>
                        <div className='text-center'>
                            <p className='text-[16px] text-[#555555] font-semibold'>Password reset is successfully done.</p>
                        </div>

                        <div className='mt-24'>
                            <Link to='/LoginForm'>
                                <div className='w-52 h-12 cursor-pointer'>
                                    <h2 className='bg-[#EFC319]  text-center p-3 rounded-xl text-white font-semibold'>Go Back To Login</h2>
                                </div>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>

            
        </>
    )
}

export default ResetPasswordSuccessfully
