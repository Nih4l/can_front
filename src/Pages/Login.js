import React from 'react'
import Logo from '../Photos/Logo.png'
import CAN from '../Photos/CAN.png'
import Video from '../Photos/Video.png'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import CarouselMain from '../Components/CarouselMain'

const Login = () => {
    return (
        <>
            <div>
                <div className='p-8  absolute flex  items-center '>
                    <img src={Logo} alt='not found' />
                    <img src={CAN} alt='not found' className='w-[50%] shadow-xl' />
                </div>

                <div className='flex'>

                    <div className='p-[4%] w-[55%] relative '>
                        <div className='absolute top-[15%] left-[20%]'>
                            {/* <img src={WelcomeScreen} className='' /> */}
                            <div className=''>
                                <CarouselMain />
                            </div>

                            <div className='absolute top-[100%] left-[10%] '>
                                <h1 className='text-center text-2xl font-bold'>WELCOME TO CAN!</h1>
                                <p className='text-center'>CAN is a safe place to share strength hope and ask for help.</p>
                                <p className='text-center'>Lets fight against cancer , together</p>
                            </div>
                            
                        </div>
                    </div>


                    {/* right side */}
                    <div className='flex items-center h-[100vh]'>
                        <div className='h-[90%] w-[60vh] shadow-xl mx-24 bg-[#D9D9D9] bg-opacity-10 z-10 backdrop-blur-lg rounded-md'>
                            <div>
                                <img src={Video} />
                            </div>
                            <div className='text-center text-3xl font-semibold py-6  text-[#EFC319]'>
                                <h1>Welcome</h1>
                            </div>
                            <br />
                            <div className='flex flex-col items-center gap-5 '>
                                <Link to='/chooseTitle' className='bg-white w-[80%] p-3 rounded-xl shadow-lg flex justify-center '><button className='flex justify-center items-center gap-2'><FcGoogle /> Sign in with Google</button></Link>
                                <Link to='/chooseTitle' className='bg-white w-[80%] p-3 rounded-xl shadow-lg flex justify-center '><button className='flex justify-center items-center gap-2'><BsFacebook color='blue' />Sign in with Facebook</button></Link>
                                <Link to='/chooseTitle' className='bg-white w-[80%] p-3 rounded-xl shadow-lg flex justify-center '><button className='flex justify-center items-center gap-2'><AiFillTwitterCircle color='#1da1f2' /> Sign in with Twitter</button></Link>
                                <Link to='/phonenumber' className='bg-white w-[80%] p-3 rounded-xl shadow-lg flex justify-center '><button className='flex justify-center items-center gap-2'><BsPhone /> Sign in with Number</button></Link>
                                {/* <Link to='/register' className='bg-white w-[80%] p-3 rounded-xl shadow-lg flex justify-center '><button className='flex justify-center items-center gap-2'>Register Here</button></Link> */}
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Login