import React, { useRef, useState } from 'react';
import LogoCAn from '../Photos/LogoCAn.png';
import CANa from '../Photos/CANa.png';
import Video from '../Photos/Video.png';
import CarouselMain from '../Components/CarouselMain';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SelfCare from '../Photos/SelfCare.png'
import vibird1 from '../Photos/vibird1.gif'
import PinInput from 'react-pin-input'
import axios from 'axios';
import { baseurl } from '../Api/baseUrl';
import { Cookies } from 'react-cookie'

const MultiPIN = () => {

    const [pin, setPin] = useState('');
    const [repin, setRepin] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const cookie = new Cookies()
    const location=useLocation()
    console.log("location.state",location.state);

    

    // const SetLoginPin = () => {
        
       
    // }

    const registerUserAccount = async () => {
        let profile=location.state
        const userValue = JSON.parse(localStorage.getItem('userValue')) || {};
        userValue.profile_pin = pin
        userValue.profile_pin = repin
        localStorage.setItem('userValue', JSON.stringify(userValue));
        console.log(userValue)
        console.log(localStorage.getItem("photo"))
       const formdata=new FormData()
       formdata.set("username", userValue.username)
       formdata.set("email_phone", userValue.email_phone)
       formdata.set("gender", userValue.gender)
       formdata.set("date_of_birth", userValue.date_of_birth)
       formdata.set("password", userValue.password)
       formdata.set("profile_category", userValue.categoryId)
       formdata.set("profile_pin", userValue.profile_pin)
       formdata.set("confirmPassword", userValue.confirmPassword)
       formdata.set("profile_photo", profile)

        try {
            const userValue = JSON.parse(localStorage.getItem('userValue')) || {};
            const {data} = await axios.post(`${baseurl}/api/userAccountregister`, formdata)
            console.log(data)
            

            if (data.status === true) {
                // Registration success
                console.log('User account registered successfully!');
                cookie.set('token', data.token)
                navigate('/ShowProfile')
                
                
            } else {
                // Registration failed
                console.log('Failed to register user account.');
                // Handle error as required
            }
        } catch (error) {
            console.error('Error occurred during registration:', error);
            // Handle error as required
        }
    };


    const handlePinChange = (value) => {
        setPin(value);
        console.log('Pin value:', value);
    };


    const handleRepinChange = (value) => {
        setRepin(value);
        console.log('Repin value:', value);

        if (pin === value) {
            setError('Pins are equal');
        } else {
            setError('Pins do not match, Please re-enter the pin correctly!');
        }
    };

   

    return (
        <>

            <div className='lg:ml-[80px] mt-2 lg:absolute flex items-center justify-center  '>
                <img src={LogoCAn} alt='not found' className='w-[80px] h-[80px]' />
                <img src={CANa} alt='not found' className='w-[42.88px] h-[16.19px]  ' />
            </div>
            <div>


                <div className='flex lg:flex-row lg:p-0 p-2 items-center justify-center'>
                    <div className='hidden lg:block w-[55%] mt-20  flex flex-col items-center justify-center '>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            {/* <img src={WelcomeScreen} className='' /> */}
                            <div className=''>
                                {/* <CarouselMain /> */}
                                <img src={SelfCare} alt='none' className='h-[390px] w-[390px]' />
                            </div>

                            <div className='mt-2 flex flex-col items-center justify-center gap-1 '>
                                <h1 className='text-center text-[36px] font-poppins font-bold'>A companion to your relaxation.</h1>
                                <p className='text-center text-[18px] font-semibold font-poppins'>Listen to our evergreen radio, do guided meditations, and</p>
                                <p className='text-center text-[18px] font-semibold font-poppins'>record your memories to relax and unwind.</p>
                            </div>

                            <div className="flex flex-row items-center gap-4 mt-3">
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#EFC319]'></div>
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className='h-full  flex items-center mt-4  lg:mt-10 lg:bottom-10'>
                        <div className='lg:h-[620px] lg:w-[420px] w-[330px] h-[550px] lg:mx-24 bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-md rounded-[20px]' style={{
                            boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)'
                        }}>
                            <div>
                                <img src={vibird1} alt='Video' />
                            </div>

                            <div className='text-center lg:text-[30px] text-[24px] font-poppins font-semibold p-1 text-[#EFC319]'>
                                <h1>Create a PIN</h1>
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center '>
                                <p className='lg:text-[18px] text-[14px] font-poppins font-semibold'>Its your space, so add a profile lock to keep
                                </p>
                                <p className='lg:text-[18px] text-[14px] font-poppins font-semibold'>your account information with you</p>
                            </div>

                            <div className=' text-xl py-6 flex flex-row items-end justify-between w-full lg:gap-6 gap-6  lg:pl-3 pl-3 '>

                                {/* <p className='text-sm  font-semibold flex justify-center w-[14%] '>PIN</p> */}

                                {/* <input
                                    type="text"
                                    value={value}
                                    onChange={handleInputChange}
                                    maxlength="4"
                                    placeholder='__  __  __  __'
                                    className='w-[64%] placeholder:text-4xl placeholder:tracking-[0em] bg-transparent tracking-[.50em]  mb-4 outline-none  '
                                    
                                /> */}

                                <label className='font-poppins lg:text-[18px] text-[14px] align-bottom '> PIN </label>
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

                            <div className=' text-xl lg:py-3 lg:gap-6 gap-4  flex items-end justify-between  w-full lg:pl-3 pl-2  '>

                                
                                <label className='font-poppins lg:text-[18px] text-[14px] align-bottom lg:mr-8 '>Re Enter</label>
                                <PinInput
                                    length={4}
                                    id='repin'
                                    value={repin}
                                    onComplete={handleRepinChange}
                                    inputStyle={{
                                        border: 'none',
                                        borderBottom: '1px solid black',
                                        width: '30px',
                                        textAlign: 'center',
                                        marginRight: '30px',
                                    }}
                                ></PinInput>

                            </div>
                            


                            {error && <p className='text-red-500 text-center'>{error}</p>}
                            
                            <div className='flex flex-col justify-center pt-7'>
                                <button
                                    className={`w-48 h-12 bg-[#efc31a33] font-bold rounded-[20px] text-white items-center mx-auto ${error && error === 'Pins are equal' ? 'bg-[#efc31a]' : 'pointer-events-none'
                                        }`}
                                    disabled={error && error !== 'Pins are equal'}
                                >
                                    <h1    to='/ShowProfile' onClick={registerUserAccount}>Continue</h1>
                                </button>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MultiPIN