import React, { useRef, useState } from 'react'
import LogoCAn from '../Photos/LogoCAn.png'
import CANa from '../Photos/CANa.png'
import WelcomeScreen from '../Photos/WelcomeScreen.png'
import Video from '../Photos/Video.png'
import { Link, useNavigate } from 'react-router-dom'
import CarouselMain from '../Components/CarouselMain'
import c7 from '../Photos/c7.png'
import vibird1 from '../Photos/vibird1.gif'
import PinInput from 'react-pin-input'
import { baseurl } from '../Api/baseUrl'
import axios from 'axios'

const LoginOTP = () => {

    const [otpResent, setOtpResent] = useState(false);
    const [pin, setPin] = useState('');
    const [otpErr, setOtpErr] = useState("");
    const navigate = useNavigate()
    const pinInputRef = useRef(null);
    const Useremail = JSON.parse(sessionStorage.getItem("email_phone"));

    // resend OTP
    const resendOtp = async () => {
        try {
            const { data } = await axios.post(`${baseurl}/api/otpsend`, {
                email_phone: Useremail.email_phone
            });
            setPin('');
            if (data.status === true) {

                setOtpResent(true);
                sessionStorage.setItem("newOTP", JSON.stringify({ user_otp: data.otp }))
                pinInputRef.current.clear();
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    //Verify otp
    const verifyOTP = async (e) => {
        e.preventDefault();
        try {
            console.log(JSON.parse(sessionStorage.getItem("email_phone")))
            const { data } = await axios.post(`${baseurl}/api/otpverify`, {

                email_phone: Useremail.email_phone,
                otpnumber: pin,
            });
            console.log('Response:', data);
            sessionStorage.getItem(JSON.stringify({ user_otp: data.otp }))

            if (data.status === true) {
                navigate('/password');
            }else{
                setOtpErr("OTP is incorrect");
                pinInputRef.current.clear();
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handlePinChange = (value) => {
        setPin(value);
        console.log('Pin value:', value);
    };


    return (
        <>

            <div className='lg:ml-[80px] mt-2 lg:absolute flex items-center justify-center  '>
                <img src={LogoCAn} alt='not found' className='w-[80px] h-[80px]' />
                <img src={CANa} alt='not found' className='w-[42.88px] h-[16.19px]  ' />
            </div>
            <div>


                <div className='flex lg:flex-row lg:p-0 p-2 items-center justify-center'>

                    <div className=' hidden lg:block w-[55%] mt-20  flex flex-col items-center justify-center '>
                        <div className=' flex flex-col items-center justify-center gap-4'>
                            {/* <img src={WelcomeScreen} className='' /> */}
                            <div className='ml-[10%]'>
                                {/* <CarouselMain /> */}
                                <img src={c7} className='h-[350px] w-[450px]' alt='none' />
                            </div>

                            <div className=' mt-5 flex flex-col items-center justify-center gap-1 '>
                                <h1 className='text-center text-[36px] font-bold font-poppins'>Hospital visits, easier.</h1>
                                <p className='text-center text-[18px] font-semibold font-poppins'>Upload and manage your medical records and reports,</p>
                                <p className='text-center text-[18px] font-semibold font-poppins'> all in one place.</p>
                            </div>

                            <div className='flex flex-row items-center gap-4 mt-8 '>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#EFC319]'></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
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
                                <img className='object-contain' src={vibird1} alt='none' />
                            </div>
                            <div className='text-center lg:text-3xl text-[24px] font-semibold font-poppins p-1 text-[#EFC319]'>
                                <h1>OTP Verification</h1>
                            </div>
                            <div className='text-center py-4'>Enter the OTP sent to you</div>

                            <div className='flex pl-4  justify-center relative items-center   '>

                                <PinInput

                                    ref={pinInputRef}
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
                            {otpErr && <p className='text-center text-red-500'>{otpErr}</p>}

                            <div className='text-center py-4 flex gap-1 justify-center'>
                                <p>Didn't recieved the OTP?</p>
                                <p className='text-center text-[#C31A7F] cursor-pointer' onClick={resendOtp}>Resend OTP</p>
                            </div>
                            {otpResent && <p className='text-center text-[#C31A7F]'>New OTP is Sent</p>}

                            <div className='flex justify-center py-2'>


                                {/* {pin.length === 4 ?
                                    (<Link to={(pin.length === 4) ? '/password' : ''} className='w-[40%]'>
                                        <h2 className='bg-[#EFC319]  text-center p-3 rounded-lg text-white'>Verify</h2>
                                    </Link>)
                                    :
                                    (<div className='w-[40%]'>
                                        <h2 className='bg-[#EFC319] opacity-50  text-center p-3 rounded-lg text-white'>Verify OTP</h2>
                                    </div>)
                                } */}
                                

                                <div className='w-[40%]' onClick={verifyOTP}>
                                    <h2 className='bg-[#EFC319] cursor-pointer   text-center p-3 rounded-lg text-white'>Verify OTP</h2>
                                </div>

                            </div>



                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}


export default LoginOTP