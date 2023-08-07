import React, { useState } from 'react'
import LogoCAn from '../Photos/LogoCAn.png'
import CANa from '../Photos/CANa.png'
import Video from '../Photos/Video.png'
import { Link, json } from 'react-router-dom'
import CarouselMain from '../Components/CarouselMain'
import { IoKeyOutline } from 'react-icons/io5'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import Feed from '../Photos/Feed.png'
import vibird1 from '../Photos/vibird1.gif'
import axios from 'axios'
import { baseurl } from '../Api/baseUrl'


const LoginOTP = () => {


    const SetPassword = async () => {
        const userValue = JSON.parse(localStorage.getItem('userValue')) || {};

        userValue.password = firstpass;
        userValue.confirmPassword = firstpass1;

        localStorage.setItem('userValue', JSON.stringify(userValue));
        console.log(userValue)

    }

    const [eye, setEye] = useState()
    const [eye1, setEye1] = useState()


    //see pass
    function seePass() {
        setEye(!eye)
    }
    function seePass1() {
        setEye1(!eye1)
    }

    //final
    const [firstpass, setFirstpass] = useState('')

    function passwordChange(e) {
        setFirstpass(e.target.value)
    }

    const [firstpass1, setFirstpass1] = useState(null)

    function passwordChange1(e) {
        setFirstpass1(e.target.value)
    }

    return (
        <>
            <div className='lg:ml-[80px] mt-2 lg:absolute flex items-center justify-center  '>
                <img src={LogoCAn} alt='not found' className='w-[80px] h-[80px]' />
                <img src={CANa} alt='not found' className='w-[42.88px] h-[16.19px] ' />
            </div>
            <div>


                <div className='flex lg:flex-row lg:p-0 p-2 items-center justify-center'>

                    <div className='hidden lg:block w-[55%] mt-20  flex flex-col items-center justify-center  '>
                        <div className='flex flex-col gap-7 items-center justify-center '>
                            {/* <img src={WelcomeScreen} className='' /> */}
                                {/* <CarouselMain /> */}
                            {/* <div className='mt-12'>
                                <img src={Feed} className='h-[350px] w-[350px]' alt='none' />
                            </div> */}
                            <div className=''>
                                {/* <CarouselMain /> */}
                                <img src={Feed} className='h-[350px] w-[350px]' alt='none' />
                            </div>

                            <div className='mt-5 flex flex-col items-center justify-center  '>
                                <h1 className='text-center text-[36px] font-bold font-poppins '>Stay up to date, and inspired</h1>
                                <p className=' font-semibold text-[18px] font-poppins mt-2'>Read curated articles on the latest research, and success</p>
                                <p className='font-semibold text-[18px] font-poppins'>stories from our community</p>
                            </div>

                            <div className='flex flex-row items-center gap-4 mt-3 '>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#EFC319]'></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                            </div>
                        </div>
                    </div>


                    {/* right side */}
                    <div className='h-full  flex items-center mt-4  lg:mt-10 lg:bottom-10'>
                        <div className='lg:h-[620px] lg:w-[420px] w-[330px] h-[550px] lg:mx-24 bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-md rounded-[20px]' style={{
                            boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)'
                        }}>
                            <div>
                                <img src={vibird1} alt='none' />
                            </div>
                            <div className='text-center lg:text-3xl text-[24px] font-semibold font-poppins p-1 text-[#EFC319]'>
                                <h1>Create your password</h1>
                            </div>

                            <div className='mt-6 flex flex-col gap-3'>
                                <div className='border-2 lg:h-14 h-12 mx-4 mt-3 lg:mx-8 lg:m-2 px-2 rounded-[20px] flex items-center justify-center gap-4'>
                                    <IoKeyOutline />
                                    <div className='font-bold bg-[#000] h-[35px] w-[1px] inline-block text-[20px]'></div>
                                    <input placeholder='Enter password'
                                        className='bg-transparent w-full outline-none'
                                        type={eye ? 'text' : 'password'}
                                        onChange={passwordChange}
                                        minLength={3}
                                        value={firstpass}
                                    />
                                    <div onClick={seePass}>
                                        {eye ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                    </div>
                                </div>
                                <div className='border-2 lg:h-14 h-12 mx-4  lg:mx-8 lg:m-2 px-2 rounded-[20px] flex items-center justify-center gap-4'>
                                    <IoKeyOutline />
                                    <div className='font-bold bg-[#000] h-[35px] w-[1px] inline-block text-[20px]'></div>
                                    <input placeholder='Re-enter password'
                                        className='bg-transparent w-full outline-none'
                                        type={eye1 ? 'text' : 'password'}
                                        onChange={passwordChange1}
                                        minLength={3}
                                        value={firstpass1}
                                    />
                                    <div onClick={seePass1}>
                                        {eye1 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                    </div>
                                </div>

                                {firstpass.length < 8 && (
                                    <div className='text-red-500 text-sm text-center'>
                                        Your password should be greater than 8 digits.
                                    </div>
                                )}

                            </div>

                            <div className='flex justify-center py-6'>

                                


                                {firstpass.length >= 8 && (firstpass) === (firstpass1) ?
                                    (<Link to='/choosetitle' className='w-[40%]' onClick={SetPassword}>
                                        <h2 className='bg-[#EFC319] cursor-pointer  text-center p-3 rounded-lg text-white'>Verify</h2>
                                    </Link>)
                                    :
                                    (<div className='w-[40%]'>
                                        <h2 className='bg-[#EFC319] opacity-50  text-center p-3 rounded-lg text-white'>Verify OTP</h2>
                                    </div>)
                                }
                            </div>



                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}


export default LoginOTP