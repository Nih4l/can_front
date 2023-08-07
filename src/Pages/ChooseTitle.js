import React, { useEffect, useState } from 'react';
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
import vibird1 from '../Photos/vibird1.gif'
import { BsDot } from 'react-icons/bs'
import axios from 'axios';
import { baseurl } from '../Api/baseUrl';

const ChooseTitle = () => {
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [selectedImage, setSelectedImage] = useState(null);
  const [viewCategory, setViewCategory] = useState([])
  const title = [
    {

    },
  ]

  const [select, setSelect] = useState('');

  const SetChooseTitle = () => {
    const userValue = JSON.parse(localStorage.getItem('userValue')) || {};

    userValue.profile_category = select
    userValue.categoryId=categoryId
    localStorage.setItem('userValue', JSON.stringify(userValue));
    console.log(userValue);
  }

  const [categoryId,setcategoryId]=useState("")

  const getprofileCategory = async () => {
    const { data } = await axios.get(`${baseurl}/api/profile_category_create`)
    console.log(data);
    if (data.status == true) {
      setViewCategory(data.data)
    }
  }

  useEffect(() => {
    getprofileCategory()
  }, []);

  // const SetChooseTitle = async () => {

  //   // Check if both category and image are selected before proceeding
  //   if (!selectedCategory || !selectedImage) {
  //     console.log("Please select a category and image.");
  //     return;
  //   }

  //   // Step 1: Prepare the data to be sent
  //   const data = new FormData();
  //   data.set('profile_category', selectedCategory);
  //   data.set('image', selectedImage);

  //   try {

  //     // Step 2: Send the data to the API
  //     const response = await axios.post(`${baseurl}/api/profile_category_create`, data);

  //     // Handle the response as needed
  //     console.log(response.data);
  //   } catch (error) {

  //     // Handle errors if any
  //     console.error('Error posting profile_category:', error);
  //   }
  // }


  // function selectCategory(category, image) {
  //   setSelectedCategory(category);
  //   setSelectedImage(image);
  // }

  function selectedOption(value) {
    setSelect(value);
  }

  return (
    <>
      {/* <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 '
        style={{ backdropFilter: 'blur(2px)' }}>

        <div className='bg-white h-[340px] w-[450px] rounded-3xl'>
        <div className='p-6'>
          <div className='flex flex-wrap items-center justify-center '>
          <BsDot />
            <h1>Fighter:</h1>
            <p className=''>Embrace your inner superhero and join a</p>
            <p className=''>league of warriors ready to face cancer head-on</p>
            <p className=''>with strength and determination.</p>
            <p className='mb-4'>___________________________________________________</p>
          </div>
          
          <div className='flex flex-wrap items-start justify-center'>
          <BsDot className='' />
            <h1 className=''>Caregiver:</h1>
            <p className=''> Step into the role of a compassionate</p>
            <p className=''> guardian, providing unwavering love and support</p>
            <p className=''>to those battling cancer.</p>
            <p className='mb-4'>___________________________________________________</p>
          </div>
          <div className='flex flex-wrap items-start justify-center'>
          <BsDot />
            <h1>Veteran:</h1>
            <p className=''>Share your triumphs and inspire others as a</p>
            <p className=''>seasoned champion who has conquered cancer's</p>
            <p className='mr-24'>challenges.</p> 
          </div>
          </div>
        </div>

      </div> */}

      <div className="lg:ml-[80px] mt-2 lg:absolute flex items-center justify-center">
        <img src={LogoCAn} alt="not found" className="w-[80px] h-[80px]" />
        <img src={CANa} alt="not found" className="w-[42.88px] h-[16.19px]" />
      </div>
      <div>
        <div className="flex lg:flex-row lg:p-0 p-2 items-center justify-center">
          <div className="hidden lg:block w-[55%] mt-20  flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src={MeetPeople} className="h-[340px] w-[390px]" alt="none" />
              </div>

              <div className="flex flex-col items-center justify-center mt-3">
                <h1 className="text-center text-[36px] font-poppins font-bold">You are not alone</h1>
                <p className="text-center text-[18px] font-poppins font-semibold mt-2">
                  Join and host meeting to share relate and listen to
                </p>
                <p className="text-center text-[18px] font-poppins font-semibold">experiences.</p>
                <p className="text-center text-[18px] font-poppins font-semibold">
                  Add people you connect with to your support group to
                </p>
                <p className="text-center text-[18px] font-poppins font-semibold">chat, call, and spend time with.</p>
              </div>

              <div className="flex flex-row items-center gap-4 mt-7">
                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                <div className="h-[12px] w-[12px] rounded-full bg-[#EFC319]"></div>
                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="h-full  flex items-center mt-4  lg:mt-10 lg:bottom-10">
            <div
              className="lg:h-[620px] lg:w-[420px] w-[330px] h-[550px] lg:mx-24 bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-md rounded-[20px]"
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

              {/* <div className="w-fit pt-2">
                <div className="flex flex-col items-center justify-center gap-4">
                  <div
                    className={`flex justify-center cursor-pointer ${select !== '' && select !== 'Fighter' ? 'opacity-50' : ''
                      }`}
                    onClick={() => selectedOption('Fighter')}
                  >
                  
                    <img src={Roles_Fighter} alt="not found" className='w-fit px-3 relative ' />
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
                    <img src={Roles_Caregiver} alt="not found" className='w-fit px-3 relative ' />
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
                    <img src={Roles_Veteran} alt="not found" className='w-fit px-3 relative' />
                    <div className="absolute lg:top-[71%] top-[63%] right-14  lg:left-60 text-white ">
                      <h3 className="font-poppins lg:text-[20px] text-[16px]">Veteran</h3>
                      <div className="">
                        <p className="font-poppins  lg:text-[14px] text-[12px]">I have defeated</p>
                        <p className="font-poppins  lg:text-[14px] text-[12px] ">cancer</p>
                      </div>
                    </div>
                  </div>

                  {select ? (
                    <Link to="/registerimage" className="w-[50%]"onClick={SetChooseTitle}>
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
              </div> */}


              <div className="w-fit pt-2">
                <div className="flex flex-col items-center justify-center gap-4">


                  {
                    viewCategory && viewCategory?.map((it) => {

                      return (
                        <div
                          className={`flex justify-center cursor-pointer ${select !== '' && select !== `${it.category_Name}` ? 'opacity-50' : ''
                            }`}
                          onClick={() =>{ selectedOption(it.category_Name)
                            setcategoryId(it._id)
                          }}
                        >

                          <img src={`${baseurl}/${it.image}`} alt="not found" className='w-fit px-3 relative ' />
                          
                          <div className="w-[40%] absolute right-10 mt-2">
                            <h3 className="   font-poppins flex flex-col  lg:text-[20px] text-white text-[16px] ">{it.category_Name}</h3>
                            <div className=" ">
                              <p className="     font-poppins text-white lg:text-[14px] text-[12px] ">{it.descritption}</p>
                              {/* <p className=" font-poppins lg:text-[14px] text-[12px] ">cancer</p> */}
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }

                  {select ? (
                    <Link to="/registerimage" className="w-[50%]" onClick={SetChooseTitle}>
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

export default ChooseTitle;
