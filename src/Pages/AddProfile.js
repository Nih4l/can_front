import React, { useState } from 'react'
import LogoCAn from '../Photos/LogoCAn.png'
import CANa from '../Photos/CANa.png'
import Video from '../Photos/Video.png'
import account from '../Photos/account.jpg'
import account2 from '../Photos/account2.jpg'
import CarouselMain from '../Components/CarouselMain'
import { IoAddCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import OldLoginImage from '../Photos/OldLoginImage.png'
import OldProfileImage from '../Photos/PofielPageImage.png'
import illus1 from '../Photos/illus1.png'
import b4 from '../Photos/b4.png'
import { RxCross1, RxCross2 } from 'react-icons/rx'
import lock from '../Photos/lock.png'
import PinInput from 'react-pin-input'

const AddProfile = () => {
    const [creatPin_open, setCreatPin_open] = useState(false)
    const [login_open, setLogin_open] = useState(false)
    const [pin, setPin] = useState('');
    const [repin, setRepin] = useState('');
    const [error, setError] = useState('');
    const [loginPin, setLoginPin] = useState('');


    // const handleInputChange = (event) => {
    //     const inputValue = event.target.value;
    //     if (/^\d*$/.test(inputValue)) {
    //         setValue(inputValue);
    //     }
    // };

    const handlePinChange = (value) => {
        setPin(value);
        console.log('Pin value:', value);
    };


    const handlePinChange1 = (value) => {
        setLoginPin(value);
        console.log('Pin value:', value);
    };
    // const handleInputChange2 = (event) => {
    //     const inputValue2 = event.target.value;
    //     if (/^\d*$/.test(inputValue2)) {
    //         setValue2(inputValue2);
    //     }
    // };


    // const handleInputChange1 = (event) => {
    //     const inputValue1 = event.target.value;
    //     if (/^\d*$/.test(inputValue1)) {
    //         setValue1(inputValue1);
    //     }
    // };

    const handleRepinChange = (value) => {
        setRepin(value);
        console.log('Repin value:', value);

        if (pin === value) {
            setError('Pins are equal');
        } else {
            setError('Pins do not match, Please re-enter the pin correctly!');
        }
    };


    const creatPin = () => {
        setCreatPin_open(!creatPin_open)
    }
    const openLogin = () => {
        setLogin_open(!login_open)
    }
    return (
        <>
            {creatPin_open && (
                <div className='fixed inset-0 flex items-center justify-center lg:p-0 p-2 bg-black bg-opacity-50 z-50 '
                    style={{ backdropFilter: 'blur(2px)' }}>

                    <div className='bg-white h-max  rounded-3xl'>
                        <div className='relative flex lg:py-6  py-4 lg:px-4 items-center flex-col'>
                            <div className='absolute top-3 right-4 '>
                                <RxCross2 size={15} onClick={creatPin} />
                            </div>
                            <div className='text-xl font-poppins font-semibold'>Create a Pin</div>
                            <p className='font-poppins text-[14px]  text-center px-3 pt-2'>Its your space, so add a profile lock to keep
                                your account information with you</p>
                            <div className=' text-2xl py-1 flex flex-row items-center justify-center w-full gap-4 '>

                                <p className='text-xs  font-semibold flex justify-center w-[14%] pt-8 '>PIN</p>
                                {/* 
                                <input
                                    type="text"
                                    value={value}
                                    onChange={handleInputChange}
                                    maxlength="4"
                                    placeholder='__  __  __  __'
                                    className='w-[40%] placeholder:text-3xl placeholder:tracking-[0em] bg-transparent tracking-[1em]  mb-4 outline-none  '

                                /> */}
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
                            <div className=' text-2xl py-1 flex flex-row items-center justify-center gap-4 w-full  '>

                                <p className='text-xs  font-semibold flex justify-center w-[14%] pt-8'>Re Enter</p>

                                {/* <input
                                    type="text"
                                    value={value1}
                                    onChange={handleInputChange1}
                                    maxlength="4"
                                    placeholder='__  __  __  __'
                                    className='w-[40%] placeholder:text-3xl placeholder:tracking-[0em] bg-transparent tracking-[1em]  mb-4 outline-none  '

                                /> */}
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
                            <div className='w-[40%] pt-5 flex flex-col items-center  '>
                                {/* {(value.length === 4 && value === value1) ?
                                    (<Link to={(value.length === 4 && value === value1) ? '/loginchoosetitle' : ''}>
                                        <div className='bg-[#EFC319] text-center p-3 rounded-xl text-white'>Continue</div>
                                    </Link>)
                                    :
                                    (
                                        <div className='bg-[#EFC319] text-center p-3 rounded-xl text-white opacity-50 '>Continue</div>


                                    )} */}
                                {error && <p className='text-red-500 text-center'>{error}</p>}
                                <div className='flex flex-col justify-center pt-7'>
                                    <button
                                        className={`w-48 h-12 bg-[#efc31a33] font-bold rounded-[20px] text-white items-center mx-auto ${error && error === 'Pins are equal' ? 'bg-[#efc31a]' : 'pointer-events-none'
                                            }`}
                                        disabled={error && error !== 'Pins are equal'}
                                    >
                                        <Link to='/loginchoosetitle'>Continue</Link>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}

            {login_open && (
                <div className='fixed inset-0 flex items-center justify-center lg:p-0 p-2 bg-black bg-opacity-50 z-50  '
                    style={{ backdropFilter: 'blur(2px)' }}>

                    <div className='bg-white h-max lg:w-[30%] w-[340px] rounded-3xl'>
                        <div className='relative flex py-6  items-center flex-col'>
                            <div className='absolute top-3 right-4 '>
                                <RxCross2 size={15} onClick={openLogin} />
                            </div>
                            <div className='text-xl font-poppins'>Enter Ananya Pin</div>
                            <div className=' text-2xl py-6 flex flex-row items-center justify-center w-full  '>

                                <p className='text-xs font-poppins font-semibold flex justify-center w-[14%] pt-8 '>PIN</p>

                                {/* <input
                                    type="text"
                                    value={value3}
                                    onChange={handleInputChange2}
                                    maxlength="4"
                                    placeholder='__  __  __  __'
                                    className='w-[40%] placeholder:text-3xl placeholder:tracking-[0em] bg-transparent tracking-[1em]  mb-4 outline-none  '

                                /> */}
                                <PinInput
                                    length={4}
                                    id='pin'
                                    value={loginPin}
                                    onComplete={handlePinChange1}
                                    inputStyle={{
                                        border: 'none',
                                        borderBottom: '1px solid black',
                                        width: '30px',
                                        textAlign: 'center',
                                        marginRight: '30px',
                                    }}
                                ></PinInput>
                            </div>
                            <div className='flex justify-end w-[80%] pt-4'>
                                {(loginPin.length === 4) ?
                                    (<Link to={(loginPin.length === 4) ? '/home' : ''}>
                                        <div className='bg-[#EFC319] text-center px-6 py-2 rounded-xl text-white'>Continue</div>
                                    </Link>)
                                    :
                                    (
                                        <div className='bg-[#EFC319] text-center px-6 py-2 rounded-xl text-white opacity-50 '>Continue</div>


                                    )}
                            </div>
                        </div>
                    </div>
                </div>)}

            <div className='lg:ml-[80px] mt-2 lg:absolute flex items-center justify-center '>
                <img src={LogoCAn} alt='not found' className='w-[80px] h-[80px]' />
                <img src={CANa} alt='not found' className='w-[42.88px] h-[16.19px]  ' />
            </div>
            <div>



                <div className='flex lg:flex-row lg:p-0 p-2 items-center justify-center'>
                    <div className='hidden lg:block w-[55%] mt-20  flex flex-col items-center justify-center'>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            {/* <img src={WelcomeScreen} className='' /> */}
                            <div className='w-[60%] mt-8'>
                                {/* <CarouselMain /> */}
                                <img src={illus1} alt='none' />
                            </div>

                            <div className='mt-2 flex flex-col items-center justify-center gap-1 '>
                                <h1 className='text-center text-[36px] font-bold'>Hospital visits, easier.</h1>
                                <p className='text-center text-[18px] font-semibold w-[60%]'>Upload and manage your medical records and reports,
                                    all in one place.</p>
                            </div>

                            <div className="flex flex-row items-center gap-4 mt-3">
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#EFC319]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                            </div>
                        </div>
                    </div>



                    {/* right side */}
                    <div className='h-full  flex items-center mt-4  lg:mt-10 lg:bottom-10'>
                        <div className='lg:h-[600px] lg:w-[420px] w-[330px] h-[550px] lg:mx-24 bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-md rounded-[20px]' style={{
                            boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)'
                        }}>

                            <div>
                                <img src={b4} alt='none' />
                            </div>

                            <div className='p-4 mx-4 lg:text-[14px] font-poppins text-[14px] font-semibold text-center'>
                                <h1>You can add the profile of your Caregiver by clicking on the Add profile button.</h1>
                            </div>

                            <div className='h-[60%] w-[100%] px-[10%] mt-10  flex justify-between  flex-wrap relative'>

                                <div onClick={openLogin} className='w-[45%] h-[40%] bg-[#FEE5EA] rounded-3xl flex flex-col justify-center items-center cursor-pointer ' style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)' }}>
                                    <h1 className='font-semibold text-lg'>Sierra</h1>
                                    <p className='text-sm'>Fighter</p>
                                    <img src={lock} alt='none' className='h-5 w-5 mt-1' />
                                    <div className='absolute -top-5 rounded-full overflow-hidden bg-white w-[15%] h-[] '>
                                        <img src={account} alt='none' className='p-1 rounded-full' />
                                    </div>
                                </div>

                                <div className='w-[45%] h-[40%] bg-[#FEE5EA] rounded-3xl flex flex-col justify-center items-center cursor-pointer ' style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)' }} >
                                    <div onClick={creatPin} className='w-[45%] h-[100%]'>
                                        <div className='h-full  rounded-3xl flex flex-col justify-center items-center ' >
                                            <h1 className='font-semibold text-lg'><IoAddCircleOutline /></h1>
                                            <p className='text-sm text-center'>Add Profile</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-[50%] ml-[25%] cursor-pointer '>
                                    <div className='bg-[#EFC319] text-center p-3 rounded-lg text-white'>Continue</div>
                                </div>


                            </div>



                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default AddProfile