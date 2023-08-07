import React, { useRef, useState } from 'react'
import LogoCAn from '../Photos/LogoCAn.png'
import CANa from '../Photos/CANa.png'
import vibird1 from '../Photos/vibird1.gif'
import { AiOutlineMail } from 'react-icons/ai'
import { BsGenderAmbiguous } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { SlCalender } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import CarouselMain from '../Components/CarouselMain'
import c4 from '../Photos/c4.png'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { Signup } from '../Api/HandleApi'
import axios from 'axios'
import { baseurl } from '../Api/baseUrl'
import LoginOTP from './LoginOTP'


const Register = () => {

    const handleRegistration = async () => {
        // Create an object with the user data
        const userData = {
            username: Username,
            email_phone: email,
            gender: gender,
            date_of_birth: startDate,
        };
        localStorage
            .setItem('userValue', JSON.stringify({ ...userData }));

        try {
            const response = await axios.post(`${baseurl}/api/otpsend`, {
                email_phone: email
            });
            console.log(response.data)
            sessionStorage.setItem('email_phone', JSON.stringify({ email_phone: email }))
            sessionStorage.setItem('user_otp', JSON.stringify({ user_otp: response.data.otp }))
        }
        catch (error) {
            console.error(error)
        }
    };

    //Email input box
    const [email, setEmail] = useState('')
    const [error, setError] = useState('');



    const handleChange = (e) => {
        // Handle the selected value here
        setgender(e.target.value);
    };

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

    //before continue
    const [Username, setUsername] = useState('')
    const [gender, setgender] = useState('')
    const [startDate, setStartDate] = useState('');
    const [check, setcheck] = useState(false)

    function changeUsername(e) {
        setUsername(e.target.value)
    }

    // function handleGenderChange(e) {
    //     setgender(e.target.value)
    // }

    const handledobChange = (e) => {
        setStartDate(e.target.value)
        
    }

    const currentDate = new Date().toISOString().slice(0, 10);

    function handleCheckChange(e) {
        setcheck(!check)
    }

    return (

        <>

            <div className='lg:ml-[80px] mt-2 lg:absolute flex items-center justify-center '>
                <img src={LogoCAn} alt='not found' className='w-[80px] h-[80px]' />
                <img src={CANa} alt='not found' className='w-[42.88px] h-[16.19px]  ' />
            </div>



            <div className=' '>

                <div className='flex lg:flex-row lg:p-0 p-2 items-center justify-center'>

                    <div className='hidden lg:block w-[55%] mt-20  flex flex-col items-center justify-center   '>
                        <div className='flex flex-col items-center justify-center gap-4 '>
                            {/* <img src={WelcomeScreen} className='' /> */}
                            <div className=''>
                                {/* <CarouselMain /> */}
                                <img src={c4} className='h-[350px] w-[450px]' alt='none' />
                            </div>

                            <div className='  flex flex-col items-center justify-center mt-4  '>
                                <h1 className='text-center text-[36px] font-bold font-poppins'>WELCOME TO CAN!</h1>
                                <p className='text-center font-semibold text-[18px] mt-2 font-poppins'>CAN is a safe place to share strength hope and ask for help.</p>
                                <p className='font-semibold'></p>
                                <p className='text-center text-[18px] font-semibold font-poppins'>Lets fight against cancer , together</p>
                            </div>
                            <div className='flex flex-row items-center gap-4 mt-5 '>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#EFC319]'></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>


                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className='h-full  flex items-center mt-4  lg:mt-8 lg:bottom-10'>
                        <form className='lg:h-[640px] lg:w-[420px] w-[330px] lg:mx-24 bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-md rounded-[20px] ' style={{
                            boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)'
                        }}>

                            <div>
                                <img src={vibird1} className='w-fit' alt='none' />
                            </div>

                            <div className='text-center lg:text-[30px] text-[24px] font-poppins font-semibold p-2 text-[#EFC319]'>
                                <h1>Register</h1>
                            </div>

                            <div className=' text-center flex justify-center gap-1'>
                                <p className='lg:text-[18px] font-poppins text-[14px]'>Have an account?</p>
                                <p className='text-[#3C37FF] font-poppins lg:text-[18px] font-semibold text-[14px]'>
                                    <Link to={`/LoginForm`}>
                                        Login here</Link></p>
                            </div>

                            {/* <div className='border-2 h-14 mx-8 m-2 px-2 rounded-xl flex items-center gap-4'>
                                <h1 className='font-bold flex items-center w-max h-full px-2'><AiOutlineUser /></h1>
                                <h1 className='font-bold'>|</h1>
                                <input placeholder='Enter name' className='border-none w-full bg-transparent placeholder:p-2' />
                            </div> */}


                            <div className='p-4'>
                                <div className='border-2 lg:h-12 h-12  mt-1   px-2 rounded-[20px] flex items-center justify-center '>
                                    <h1 className='font-bold flex items-center w-max h-full px-3 '><VscAccount /></h1>
                                    <div className='font-bold bg-[#000] h-[35px] w-[1px] inline-block text-[20px]'></div>
                                    <input placeholder='Enter full name' className='border-none w-full bg-transparent placeholder: outline-none px-2'
                                        value={Username} onChange={changeUsername} />
                                </div>

                                <div className='border-2 lg:h-12 h-12  mt-3   px-2 rounded-[20px] flex items-center '>
                                    <h1 className='font-bold flex items-center w-max h-full px-3 '><AiOutlineMail /></h1>
                                    <div className='font-bold bg-[#000] h-[35px] w-[2px] inline-block text-[20px]'></div>
                                    <input placeholder='Email/phone no.' className='border-none w-full bg-transparent placeholder: outline-none px-2'
                                        value={email}
                                        onChange={handleEmailChange} />
                                    <div className='text-red-400 lg:text-xs text-[10px]  lg:w-[50%] '>{error && <p>{error}</p>}</div>
                                </div>

                                <div className='border-2 lg:h-12 h-12  mt-3  px-2 rounded-[20px] flex items-center '>
                                    <h1 className='font-bold flex items-center w-max h-full px-3 '><BsGenderAmbiguous /></h1>
                                    <div className='font-bold bg-[#000] h-[35px] w-[1px] inline-block text-[20px] '></div>
                                    {/* <label htmlFor="gender" className="mr-2">
                                        Gender:
                                    </label> */}
                                    <select
                                        value={gender}
                                        id="gender"
                                        name="gender"
                                        onChange={handleChange}
                                        className=" py-2 w-full  rounded-md focus:outline-none focus:none bg-transparent px-2 "
                                    >
                                        <option value="default">Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {/* <Select options={options} className='w-full bg-transparent placeholder:p-2 outline-none bg-slate-200 ' defaultInputValue='Gender' /> */}
                                </div>

                                <div className='border-2 lg:h-12 h-12   mt-3  px-2 rounded-[20px] flex items-center '>
                                    <h1 className='font-bold flex items-center w-max h-full px-3 ' ><SlCalender id='dateOfBirth' type='date' /></h1>
                                    <div className='font-bold bg-[#000] h-[35px] w-[1px] inline-block text-[20px] '></div>
                                    {/* <input placeholder='Date of Birth' className='border-none w-full bg-transparent placeholder:p-2 outline-none'
                                        value={dob}
                                        onChange={handledobChange} /> */}
                                    <label htmlFor="dateOfBirth"></label>
                                    <input
                                        type="date"
                                        id="dateOfBirth"
                                        value={startDate}
                                        max={currentDate}
                                        onChange={handledobChange}
                                        className='w-full pl-2 focus:outline-none focus:none bg-transparent '

                                    />
                                    {/* <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        isClearable
                                        placeholderText="Date of Birth"
                                        className='outline-none bg-transparent'
                                    /> */}
                                </div>

                            </div>

                            <div className='lg:mx-6 flex mx-2 mt-3 text-center lg:mb-4 lg:mt-1' >
                                <h1 className='text-[14px]'><input type='checkbox' className=' mr-1' value={check} onChange={handleCheckChange} />By Continuing, you would agree our <Link className='underline font-semibold text-[14px]'>Terms of Service</Link> and <Link className='underline font-semibold text-[14px]'>Privacy Policy.</Link></h1>
                            </div>

                            <div className='flex justify-center lg:py-2 py-4'
                            >
                                {Username && email && gender && startDate && check ?
                                    (<Link to='/loginotp' className='lg:w-[50%]' onClick={handleRegistration}>
                                        <h2 className='bg-[#EFC319]  text-center lg:p-3 py-2 px-8  rounded-xl text-white'>Continue</h2>
                                    </Link>)
                                    :
                                    (<div className='lg:w-[50%]'>
                                        <h2 className='bg-[#EFC319] opacity-50 text-center lg:p-3 py-2 px-8 rounded-xl text-white'>Continue</h2>
                                    </div>)
                                }

                            </div>

                        </form>

                    </div>

                </div>
                
            </div>
        </>
    )
}

export default Register