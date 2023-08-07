import React, { useEffect, useRef, useState } from 'react'
import { GoFileMedia } from 'react-icons/go'
import { IoMdClose } from 'react-icons/io'
import { GrEmoji } from 'react-icons/gr'
import { TfiGallery } from 'react-icons/tfi'
import { HiOutlineGif } from 'react-icons/hi2'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import account from '../Photos/account.jpg'
import { IoCloseCircleSharp } from 'react-icons/io5';
import gallery from '../Photos/gallery.png'
import gificon from '../Photos/gifIcon.png'
import location from '../Photos/location.png'
import smily from '../Photos/smily.png'
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { BiArrowBack } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import { GrLocation } from 'react-icons/gr'

const CreatePost = ({close_createPost}) => {
  
  const [image, setImage] = useState(null);
  const [input, setInput] = useState('')
  const [showEmoji, setShowEmoji] = useState(false);
  const [showlocation, setShowLocation] = useState(false)
  const [showgif, setShowgif] = useState(false)

  const emojiButtonRef = useRef(null);
  const pickerRef = useRef(null);

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setInput(input + emoji);

  };

  const GifImage = [
    { id: 1, image: 'climberEverest.Webp' },
    { id: 2, image: 'climberEverest.Webp' },
    { id: 3, image: 'climberEverest.Webp' },
    { id: 4, image: 'climberEverest.Webp' },
    { id: 5, image: 'climberEverest.Webp' },
    { id: 6, image: 'climberEverest.Webp' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (emojiButtonRef.current && emojiButtonRef.current.contains(event.target)) ||
        (pickerRef.current && pickerRef.current.contains(event.target))
      ) {
        return;
      }

      setShowEmoji(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handlePickerFocus = () => {
    setShowEmoji(true);
  }

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const hiddenChooseImage = useRef(null);

  const hideImage = () => {
    setImage(false);
  };

  const uploadImage = () => {
    hiddenChooseImage.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const toggleLocation = () => {
    setShowLocation(!showlocation)
  }

  const toggleGif = () => {
    setShowgif(!showgif)
  }
  return (
    <>
      <div
        className='fixed inset-0 flex items-center lg:p-0 p-2 justify-center bg-black bg-opacity-50  z-50'
      >

        <div className='bg-white p-2  lg:w-[500px] relative  rounded-[30px] '>
          <div className='flex  items-center '>
            {!image && (<div></div>)}
            {image && (<div className='text-center w-full font-semibold text-lg'>
              Create new post
            </div>)}


            <div onClick={close_createPost} className='cursor-pointer absolute left-[88%] md:left-[95%] top-3 '>
              <IoMdClose />
            </div>
          </div>


          {image && (
            <div className='relative mx-8 mt-4 lg:p-6 p-2 rounded-2xl overflow-hidden'>
              <img src={image} alt='Uploaded' className='h-full w-full rounded-[30px]' />
              <button className='absolute rounded-full bg-black bg-opacity-40 top-6 right-6 ' onClick={hideImage}>
                <IoCloseCircleSharp color='white' size={24} />
              </button>
            </div>
          )}

          <input
            type='file'
            accept='image/*'
            ref={hiddenChooseImage}
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />

          <div className='w-full pt-7 px-5  rounded-full overflow-hidden flex gap-2 '>
            <img src={account} alt='none' className='w-[10%] rounded-full' />

            <div className='flex items-center justify-between w-full'>
              <input value={input} onChange={handleInput} placeholder='Write here...' className='w-full outline-none lg:text-[20px] text-[14px]' />
              <GrEmoji color='#C4C4C4' className='hover:bg-gray-300 hover:rounded-full cursor-pointer' size={20} onClick={() => setShowEmoji(!showEmoji)} />
              {showEmoji && (
                <div className="absolute  lg:left-full lg:top-1 right-1 top-36" ref={pickerRef}>
                  <Picker
                    data={data}
                    emojiSize={26}
                    emojiButtonSize={34}
                    onEmojiSelect={addEmoji}
                    maxFrequentRows={0}
                    theme='light'
                    category='apple'
                    autoFocus={true}
                    onFocus={handlePickerFocus}
                    icons='solid'
                  />
                </div>
              )}
            </div>

          </div>

          <div className=' pt-6 px-5'>
            <hr />
          </div>

          <div className='flex justify-between items-center py-2 px-5'>
            <div className='flex flex-row gap-5 items-center' >
              <img src={gallery} className='w-5 cursor-pointer' alt='none' onClick={uploadImage} />
              <img src={gificon} className='w-5' alt='none' onClick={toggleGif} />
              <img src={location} className='w-5 cursor-pointer' alt='none' onClick={toggleLocation} />

              {showgif && (
                <div className='fixed inset-0 flex items-center justify-center lg:p-0 p-4 bg-opacity-50 z-20 bg-inherit '>
                  <div className='w-[500px] h-[500px] bg-[#FFFFFF] flex flex-col  rounded-[30px] relative'>
                    <div className='flex items-center justify-center relative py-7 '>
                      <h1 className='text-[18px] font-semibold'>Choose a GIF</h1>
                      <div className='absolute right-6 top-9 '>
                        <IoMdClose onClick={toggleGif} />
                      </div>

                    </div>

                    <div className=" relative p-4">

                      <CiSearch size={20} className="absolute top-6 left-6 " />

                      <input
                        placeholder="Search GIF"
                        className=" w-full h-9 outline-none rounded-[15px] px-10 placeholder:text-[12px] placeholder:font-semibold   bg-[#FEF8FD]  "
                      />
                    </div>

                    <div className='flex items-center overflow-y-scroll justify-evenly  flex-wrap md:flex-wrap'>
                      {GifImage.map((item) => (
                        <div className='pt-6' key={item.id}>
                          <img className='md:h-[150px] md:w-[220px] h-[120px] w-[150px]  rounded-[30px]' src={item.image} alt='none' />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {showlocation && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                  <div className='lg:w-[500px] lg:h-[500px] w-[350px] h-[500px] bg-[#FFFFFF] flex flex-col  rounded-[30px] relative'>
                    <div className='flex flex-row items-center gap-14 lg:gap-32 justify-evenly p-5'>
                      <BiArrowBack onClick={toggleLocation} />
                      <h1 className='text-[18px] font-semibold'>Search For Location</h1>
                      <IoMdClose onClick={toggleLocation} />
                    </div>
                    <div className=" relative p-4">

                      <CiSearch size={20} className="absolute top-6 left-6 " />

                      <input
                        placeholder="Where are you ?"
                        className=" w-full h-9 outline-none rounded-[15px] px-10 placeholder:text-[12px] placeholder:font-semibold   bg-[#FEF8FD]  "
                      />
                    </div>
                    <div className='overflow-y-scroll'>
                      <div className='flex flex-row items-center gap-3 p-3'>

                        <div className='bg-[#FEF8FD] w-8 h-8 rounded-full flex items-center justify-center '>
                          <GrLocation />
                        </div>
                        <div>
                          <p className='text-[14px] font-semibold'>India</p>
                        </div>
                      </div>
                      <div className='flex flex-row items-center gap-3 p-3'>

                        <div className='bg-[#FEF8FD] w-8 h-8 rounded-full flex items-center justify-center '>
                          <GrLocation />
                        </div>
                        <div>
                          <p className='text-[14px] font-semibold'>Delhi ,India</p>
                        </div>
                      </div>
                      <div className='flex flex-row items-center gap-3 p-3'>

                        <div className='bg-[#FEF8FD] w-8 h-8 rounded-full flex items-center justify-center '>
                          <GrLocation />
                        </div>
                        <div>
                          <p className='text-[14px] font-semibold'>Mumbai</p>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              )}



              <img src={smily} className='w-5 cursor-pointer' alt='none' onClick={() => setShowEmoji(!showEmoji)} />
            </div>
            {/* <div className='bg-[#efc419d9] text-white px-4 p-2 rounded-2xl'> */}
            <div className={image ? 'bg-[#efc419d9] text-white px-4 p-2 my-2 text-center rounded-2xl' : 'bg-[#efc419d9] text-white px-4 p-2  rounded-2xl'}>
              Post
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default CreatePost